<html>
<head>
<title>MVC Error</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<style type="text/css">
*{
	font-family:		Consolas, Courier New, Courier, monospace;
	font-size:			14px;
}
body {
	background-color:	#fff;
	margin:				40px;
	color:				#000;
}

#content  {
border:				#999 1px solid;
background-color:	#fff;
padding:			20px 20px 12px 20px;
line-height:160%;
}

h1 {
font-weight:		normal;
font-size:			14px;
color:				#990000;
margin: 			0 0 4px 0;
}
</style>
</head>
<body>
	<div id="content">
		<h1>MVC Error</h1>
		<p>Controller <b>static</b>[/data/webroot/swoole.com/apps/controllers/Static.php] not exist!</p><pre>----------------------------------------------------------------------------------------------------
#0 line:394 call:Swoole\Error::info	file:/data/webroot/framework/libs/Swoole/Swoole.php
#1 line:310 call:Swoole->runMVC	file:/data/webroot/framework/libs/Swoole/Swoole.php
#2 line:44 call:Swoole->handlerServer	file:/data/webroot/framework/libs/Swoole/Protocol/AppServer.php
#3 line:249 call:Swoole\Protocol\AppServer->onRequest	file:/data/webroot/framework/libs/Swoole/Protocol/HttpServer.php
#4 line:0 call:Swoole\Protocol\HttpServer->onReceive	file:unknow
#5 line:115 call:swoole_server->start	file:/data/webroot/framework/libs/Swoole/Network/Server.php
#6 line:17 call:Swoole\Network\Server->run	file:/data/webroot/swoole.com/server.php
----------------------------------------------------------------------------------------------------
</pre></div></body></html>