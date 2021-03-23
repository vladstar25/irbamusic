<?php
function getMenu ($menu) {
	foreach ($menu as $key=>$href) {
		echo "<a href='$href' class='buttonS'> $key </a>";
	}
}
function getListDir ($dir) {
	$arr = scandir($dir);
	echo "<br />";
	foreach ($arr as $f){
		if (!is_dir($f)) {
			$f=iconv("windows-1251", "UTF-8", $f);
			$link = $dir.'/'.rawurlencode($f);
			echo "&nbsp&nbsp&nbsp&nbsp<a href='$link'> $f </a><br />";
		} else {
			continue;
		}
	}
}
function clearData ($data, $type="s") {
	switch ($type) {
		case "s" : $data=trim(strip_tags($data)); break;
		case "i" : $data=abs((int) $data); break;
	}
	return $data;
}
function sendMail ($email, $subj, $msg) {
	$to = "Irbadmsh@mail.ru";
	$subj = clearData($subj);
	$email = clearData($email);
	$msg = nl2br(clearData($msg))." Мой электронный ящик: ".$email;
	if (!empty($subj) AND !empty($email)) {	
		$headers = array();
		$headers[] = "MIME-Version: 1.0";
		$headers[] = "Content-type: text/html; charset='utf-8'";
		$headers[] = "Content-Transfer-Encoding: 7bit";
		$headers[] = "From: {$email}";
		$headers[] = "X-Mailer: PHP v".phpversion();
		if (mail("$to","$subj","$msg",implode("\r\n",$headers)))
			return 1;
	else
		return 0;
	}
}
function getContact ($cont) {
	foreach ($cont as $key=>$data) {
		echo "$key &nbsp";
		if (is_array($data)) {
			foreach ($data as $key1=>$data1) {
				echo "$data1 &nbsp";
			}
		}
		echo "<br>";
	}
}
function getFoto ($dir) {
	echo "<br>";
	$dh = opendir($dir) or die ("Не удалось открыть каталог $dir");
    while ($f = readdir($dh)) {
   	if (!is_dir($f)) {
	$fcode=rawurlencode($f);
	echo "&nbsp&nbsp<img src='$dir/$fcode' class='fotoalb'>";
	}
	}	
}
function getDoc($docArray,$dirDoc) {
	foreach ($docArray as $key=>$href) {
		$dirfull="http://www.irbamusic.ru/$dirDoc$href";
		$dirfull=rawurlencode($dirfull);
		echo "<br>&nbsp&nbsp<a href='$dirDoc$href'>$key</a>&nbsp&nbsp&nbsp<a href='http://docs.google.com/viewer?url=$dirfull'>Просмотреть онлайн...</a>";
	}
}
?>