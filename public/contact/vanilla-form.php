<?php
/*
 * Vanilla Form v. 2.0.0
 * Author: Michal Szepielak
 *
 * Product info and license terms:
 * http://codecanyon.net/item/vanilla-form-modern-responsive-contact-form/10447733
 */

/*
 * Vanilla Form v. 2.0.0
 * Author: Michal Szepielak
 *
 * Product info and license terms:
 * http://codecanyon.net/item/vanilla-form-modern-responsive-contact-form/10447733
 */

use VanillaForm\MailSender;
use VanillaForm\Utils;

require_once('inc/Utils.php');
require_once('inc/MailSender.php');

header('Access-Control-Allow-Origin: *');

/*
 * Check if call is a POST request (data was sent by form).
 * While it's not a POST request it returns OK, which can be handy with checking that the script is alive.
 */
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    if (function_exists('mail')) {
        die('OK');
    } else {
        die('PHP parser works, but <b>mail()</b> function seems to doesn\'t exist');
    }
}

/*
 *
 * Vanilla Configuration starts HERE
 *
 */
$vf_config = array(
    /*** Code Snippet - quick-start ***/
    /**
     * Recipient's e-mail. To this e-mail email will be sent.
     * E.g. Single recipient
     * 'emailRecipients' => 'john@domain.com',
     *
     * E.g. Multiple recipients
     * 'emailRecipients' => 'john@domain.com, andy@domain.com',
     */
    'emailRecipients' => 'pashaysuz@gmail.com',

    /**
     * If is not empty it sets a header From in e-mail message (sets sender e-mail).
     * Note: some hosting servers can block sending e-mails with custom From field in header.
     * If so, leave this field as empty.
     * E.g. Single recipient
     * 'emailSender' => 'john@domain.com',
     */
    'emailSender' => 'john@domain.com'
    /*** /Code Snippet - quick-start ***/
);
$vfSender = new MailSender($vf_config);

/*
 * Some variable may need translation for better readability.
 * You can access and modify variables by:
 * $vfSender->data['variable-name']
 */
switch ($vfSender->data['gender']) {
    case "F":
        $vfSender->data['gender'] = "Female";
        break;
    case "M":
        $vfSender->data['gender'] = "Male";
        break;
    default:
        $vfSender->data['gender'] = "Not selected";
        break;
}

// Define here subject of the e-mail message
$subject = 'Vanilla Contact Form - New Message from '.$vfSender->data['name'];

// Define here content of the e-mail message
$content = "Hey,
You've received new message from your website. Check the details below:

Sender's IP address: ".Utils::getIp()."
Name: {NAME}
E-mail: {EMAIL}
Phone number: {TEL}
Subject: {SUBJECT}
Message:
{MESSAGE}
";

// Set subject and message content
$vfSender->setMessage($subject, $content);

/*
 * Vanilla Configuration ends HERE
 */

die($vfSender->sendMessage());