<?php

// API access key from Google API's Console
define( 'API_ACCESS_KEY', 'AAAAXbZQeck:APA91bF4Jo1LYJXa-sDjgff16LgKTkFaZoOL-17iyMG0fDSyBWD8WlVOF5GDB3OPKJljNHgCJDWwMQEWn-RlgHRZckM4VSg4QQNI6x1V_W6YCtQP5LwDArl_NTFSkCneobvsMSLefBgH' );
$registrationIds =
array('cRU23aKSltQ:APA91bFw6sfRWCHZSEwTD1Zo1Elow_4P8BUXWbQuhb35j91fJJe82TbF9CJ15-IAa1OvIsEBLwm4koHIKRopetzXC0230rax8v7yGU7Q00IT472ddc6SEW3wTqEiu4C5rsP1I8UkzRkA');
// prep the bundle
$msg = array
(
	'message' 	=> 'Hi.. Welcome',
	'title'		=> 'New Message',
	'subtitle'	=> 'This is a subtitle. subtitle',
	'tickerText'	=> 'Ticker text here...Ticker text here...Ticker text here',
	'vibrate'	=> 1,
	'sound'		=> 1,
	'largeIcon'	=> 'large_icon',
	'smallIcon'	=> 'small_icon'
);
$fields = array
(
	'to' 	=> '/topics/notification',
	'data'			=> $msg
);
 
$headers = array
(
	'Authorization: key=' . API_ACCESS_KEY,
	'Content-Type: application/json'
);
 
$ch = curl_init();
curl_setopt( $ch,CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send' );
curl_setopt( $ch,CURLOPT_POST, true );
curl_setopt( $ch,CURLOPT_HTTPHEADER, $headers );
curl_setopt( $ch,CURLOPT_RETURNTRANSFER, true );
curl_setopt( $ch,CURLOPT_SSL_VERIFYPEER, false );
curl_setopt( $ch,CURLOPT_POSTFIELDS, json_encode( $fields ) );
$result = curl_exec($ch );
curl_close( $ch );
echo $result;
?>