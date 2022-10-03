<?php
/*
 * Vanilla Form v. 2.0.0
 * Author: Michal Szepielak
 *
 * Product info and license terms:
 * http://codecanyon.net/item/vanilla-form-modern-responsive-contact-form/10447733
 */

namespace VanillaForm;


class Utils {
	/**
	 * Function for getting visitor's IP address
	 * @return string
	 */
	public static function getIp() {
		if (getenv('HTTP_CLIENT_IP')) {
			$ip = getenv('HTTP_CLIENT_IP');
		} else if(getenv('HTTP_X_FORWARDED_FOR')) {
			$ip = getenv('HTTP_X_FORWARDED_FOR');
		} else if(getenv('HTTP_X_FORWARDED')) {
			$ip = getenv('HTTP_X_FORWARDED');
		} else if(getenv('HTTP_FORWARDED_FOR')) {
			$ip = getenv('HTTP_FORWARDED_FOR');
		} else if(getenv('HTTP_FORWARDED')) {
			$ip = getenv('HTTP_FORWARDED');
		} else if(getenv('REMOTE_ADDR')) {
			$ip = getenv('REMOTE_ADDR');
		} else {
			$ip = 'N/A';
		}

		return $ip;
	}
}