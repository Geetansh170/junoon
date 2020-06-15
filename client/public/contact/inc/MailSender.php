<?php
/*
 * Vanilla Form v. 2.0.0
 * Author: Michal Szepielak
 *
 * Product info and license terms:
 * http://codecanyon.net/item/vanilla-form-modern-responsive-contact-form/10447733
 */

namespace VanillaForm;

class MailSender {
    // Variables init
    private $json;
    private $token = "9320087105434084715";
    private $content;
    private $subject;
    /**
     * Recipient's e-mail. To this e-mail email will be sent.
     * E.g. Single recipient
     * 'emailRecipients' => 'john@domain.com',
     *
     * E.g. Multiple recipients
     * 'emailRecipients' => 'john@domain.com, andy@domain.com',
     */
    private $emailRecipients;

    /**
     * If is not empty it sets a header From in e-mail message (sets sender e-mail).
     * Note: some hosting servers can block sending e-mails with custom From field in header.
     * If so, leave this field as empty.
     * E.g. Single recipient
     * 'emailSender' => 'john@domain.com',
     */
    private $emailSender;

    /**
     * Determines if email should be sent as HTML or plain text.
     * Default: false
     */
    private $isHTML;

    /**
     * Path to file with message template
     * $config['contentTemplateURL']
     */

    private $autoBR;

    public $data;

    private function hasValidToken() {
        $secret = strrev($this->data['contact_secret']);
        return $secret === $this->token;
    }

    private function getHeaders() {
        $headers = '';
        if (strlen($this->emailSender) > 0) {
            $headers .= 'From: '.$this->emailSender."\r\n";
        }

        if (strlen($this->data['contact']) > 0) {
            $headers .= 'Reply-To: '.filter_var($this->data['contact'], FILTER_SANITIZE_EMAIL)."\r\n";
        }

        if ($this->isHTML) {
            $headers .= 'Content-Type: text/html; charset=UTF-8'."\r\n";
        } else {
            $headers .= 'Content-Type: text/plain; charset=UTF-8'."\r\n";
        }

        return $headers;
    }

    public function getEscapedSubject() {
        return '=?utf-8?B?'.base64_encode($this->subject).'?=';
    }

    public function getEscapedContent() {
        $content = $this->content;

        foreach ($this->data as $key => $value) {
            if (is_array($value)) {
                $value = join(', ', $value);
            }

            if ($this->isHTML && $this->autoBR) {
                $value = nl2br($value);
            }

            $content = str_replace('{'.strtoupper($key).'}', $value, $content);
        }

        return $content;
    }

    public function __construct($config) {
        $this->content = '';
        $this->subject = '';
        $this->data = array();
        $this->json = array();

        $this->emailRecipients = $config['emailRecipients'];
        $this->emailSender = $config['emailSender'];
        $this->isHTML = !!$config['isHTML'];
        $this->autoBR = in_array('autoBR', $config) ? !!$config['autoBR'] : true;

        if ($this->emailRecipients === '') {
            throw new \Exception('Email Recipient is required!');
        }

        if ($config['contentTemplateURL'] && $config['contentTemplateURL'] !== '') {
            $this->content = file_get_contents($config['contentTemplateURL']);
            if ($this->content === FALSE) {
                throw new \Exception('Can not read message content from '.$config['contentTemplateURL']);
            }
        }

        $this->importPostData();
    }

    public function importPostData() {
        $this->data = array();

        foreach ($_POST as $key => $value) {
            if (is_array($value)) {
                $this->data[$key] = filter_input(INPUT_POST, $key, FILTER_DEFAULT, FILTER_REQUIRE_ARRAY);
            } else {
                $this->data[$key] = filter_input(INPUT_POST, $key, FILTER_SANITIZE_STRING, FILTER_FLAG_NO_ENCODE_QUOTES);
            }
        }
    }

    public function setSubject($subject) {
        $this->subject = $subject;
    }

    public function setMessage($subject, $content) {
        $this->subject = $subject;
        $this->content = $content;
    }

    public function sendMessage() {
        // If token is not valid, mark this message as SPAM
        if (!$this->hasValidToken()) {
            $this->json['result'] = 'NO_SPAM';
        } else {
            // Mail it!
            $result = mail(
                $this->emailRecipients,
                $this->getEscapedSubject(),
                $this->getEscapedContent(),
                $this->getHeaders(),
                $this->emailSender ? '-f '.$this->emailSender : null
            );

            $this->json['result'] = $result ? 'OK' : 'SEND_ERROR';
        }

        return json_encode($this->json);
    }

    public function getContent() {
        return $this->content;
    }

    public function getSubject() {
        return $this->subject;
    }
}