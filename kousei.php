<?php
/** YahooKousei.php
 * 「Yahoo!JAPAN 校正支援Webサービス」を利用して、
 *  日本語テキストを校正する
 *
 * @copyright	(c)studio pahoo
 * @author		パパぱふぅ
 * @動作環境	PHP 4/5/7
 * @参考URL		http://www.pahoo.org/e-soul/webtech/php06/php06-13-01.shtm
 *
 * [コマンドラインで直接呼び出す場合]
 * sentence = 解析するテキスト（UTF-8をURL-encodeしたもの）
 * （例）YahooKousei.php?sentence=%e9%81%99%e3%81%8b%e5%bd%bc%e6%96%b9%e3%81%ab%e5%b0%8f%e5%bd%a2%e9%a3%9b%e8%a1%8c%e6%a9%9f%e3%81%8c%e8%a6%8b%e3%81%88%e3%82%8b
*/
// 初期化処理 ================================================================
define('INTERNAL_ENCODING', 'UTF-8');
mb_internal_encoding(INTERNAL_ENCODING);
mb_regex_encoding(INTERNAL_ENCODING);
define('MYSELF', basename($_SERVER['SCRIPT_NAME']));
define('REFERENCE', 'http://www.pahoo.org/e-soul/webtech/php06/php06-12-01.shtm');
define('TITLE', 'Yahoo!JAPAN 校正支援Webサービス');
define('REQUEST_PROOFREADING_URL', 'http://jlp.yahooapis.jp/KouseiService/V1/kousei');

//リリース・フラグ（公開時にはTRUEにすること）
define('FLAG_RELEASE', FALSE);

//Yahoo! JAPAN Webサービス アプリケーションID
//http://help.yahoo.co.jp/help/jp/developer/developer-06.html にて登録のこと．
define('APPLICATION_ID', 'dj00aiZpPWdrVVRaTU14U3M1NiZzPWNvbnN1bWVyc2VjcmV0Jng9ODg-');

/**
 * 共通HTMLヘッダ
 * @global string $HtmlHeader
*/
$encode = INTERNAL_ENCODING;
$title = TITLE;
$HtmlHeader =<<< EOT
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="{$encode}">
<title>{$title}</title>
<meta name="author" content="studio pahoo" />
<meta name="copyright" content="studio pahoo" />
<meta name="ROBOTS" content="NOINDEX,NOFOLLOW" />
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<style>
table, th, td {
	border: solid 1px #000000;
	border-collapse: collapse;
	padding: 4px;
}
</style>

</head>

EOT;

/**
 * 共通HTMLフッタ
 * @global string $HtmlFooter
*/
$HtmlFooter =<<< EOT
</html>

EOT;

// サブルーチン ==============================================================
/**
 * エラー処理ハンドラ
*/
function myErrorHandler ($errno, $errmsg, $filename, $linenum, $vars) {
	echo 'Sory, system error occured !';
	exit(1);
}
error_reporting(E_ALL);
if (FLAG_RELEASE)	$old_error_handler = set_error_handler('myErrorHandler');

/**
 * PHP5以上かどうか検査する
 * @return	bool TRUE：PHP5以上／FALSE:PHP5未満
*/
function isphp5over() {
	$version = explode('.', phpversion());

	return $version[0] >= 5 ? TRUE : FALSE;
}

/**
 * 指定したパラメータを取り出す
 * @param	string $key  パラメータ名（省略不可）
 * @param	bool   $auto TRUE＝自動コード変換あり／FALSE＝なし（省略時：TRUE）
 * @param	mixed  $def  初期値（省略時：空文字）
 * @return	string パラメータ／NULL＝パラメータ無し
*/
function getParam($key, $auto=TRUE, $def='') {
	if (isset($_GET[$key]))			$param = $_GET[$key];
	else if (isset($_POST[$key]))	$param = $_POST[$key];
	else							$param = $def;
	if ($auto)	$param = mb_convert_encoding($param, INTERNAL_ENCODING, 'auto');
	return $param;
}

/**
 * HTTP通信を行う
 * @param	string $url "http://" から始まるURL
 * @param	string $method GET,POST,HEAD (省略時はGET)
 * @param	string $headers その他の任意のヘッダ (省略時は"")
 * @param	array  $post POST変数を格納した連想配列("変数名"=>"値") (省略時はNULL)
 * @param	string $cookie Cookie(利用するときは常に$method="POST") (省略時は"")
 * @return	string 取得したコンテンツ／FALSE 取得エラー
*/
function http($url, $method='GET', $headers='', $post=NULL, $cookie='') {
	if ($cookie != '')	$method = 'POST';
	$URL = parse_url($url);

	$URL['query'] = isset($URL['query']) ? $URL['query'] : '';		//クエリ
	$URL['port']  = isset($URL['port'])  ? $URL['port']  : 80;		//ポート番号

	//リクエストライン
	$request  = $method . ' ' . $URL['path'] . $URL['query'] . " HTTP/1.1\r\n";

	//リクエストヘッダ
	$request .= 'Host: ' . $URL['host'] . "\r\n";
	$request .= 'User-Agent: PHP/' . phpversion() . "\r\n";

	//Basic認証用のヘッダ
	if (isset($URL['user']) && isset($URL['pass'])) {
		$request .= 'Authorization: Basic ' . base64_encode($URL['user'] . ':'. $URL['pass']) . "\r\n";
	}

	//追加ヘッダ
	$request .= $headers;

	//POSTの時
	if (strtoupper($method) == 'POST') {
		foreach ($post as $name=>$value) {
			$POST[] = $name . '=' . $value;
		}
		$postdata = implode('&', $POST);
		$request .= "Content-Type: application/x-www-form-urlencoded\r\n";
		$request .= 'Content-Length: ' . strlen($postdata) . "\r\n";
		if ($cookie != '')	$request .= "Cookie: $cookie\r\n";
		$request .= "\r\n";
		$request .= $postdata;
	} else {
		$request .= "\r\n";
	}

	//接続
	$fp = fsockopen($URL['host'], $URL['port']);
	//エラー処理
	if (!$fp)	return FALSE;

	//リクエスト送信
	fputs($fp, $request);

	//応答データ受信
	$flag = FALSE;
	while (! feof($fp)) {
		$s = trim(fgets($fp));
		if (preg_match('/^\<\?xml/', $s, $arr) != 0) {
			$response = $s;
			$flag = TRUE;
		} else if ($flag && preg_match('/^[0-9|a-f]+$/iu', $s) == 0) {
			$response .= $s;
		}
	}
    fclose($fp);

	return $response;
}

/**
 * 指定XMLファイルを読み込んでDOMを返す
 * @param	string $xml XMLファイル名
 * @return	object DOMオブジェクト／NULL 失敗
*/
function read_xml($xml) {
	if (isphp5over())	return NULL;
	if (($fp = fopen($xml, 'r')) == FALSE)	return NULL;

	//いったん変数に読み込む
	$str = fgets($fp);
	$str = preg_replace('/UTF-8/', 'utf-8', $str);

	while (! feof($fp)) {
		$str = $str . fgets($fp);
	}
	fclose($fp);

	//DOMを返す
	$dom = domxml_open_mem($str);
	if ($dom == NULL) {
		echo "\n>Error while parsing the document - " . $xml . "\n";
		exit(1);
	}

	return $dom;
}

/**
 * 「Yahoo!JAPAN 校正支援Webサービス」を用いてテキストを校正する
 * @param	string $sentence 校正するテキスト
 * @param	array  $items    校正結果を格納する配列
 * @return	
*/
function getKousei($sentence, &$items) {
//WebAPIにパラメータをPOST渡しする
	$url = REQUEST_PROOFREADING_URL;
	$sentence = urlencode($sentence);
	$post = array(
		'appid'        => APPLICATION_ID,
//		'filter_group' => '1,2,3',
		'sentence'     => $sentence
	);

	$res = http($url, 'POST', '', $post);

	$i = 0;
//PHP4用; DOM XML利用
	if (isphp5over() == FALSE) {
		$dom = domxml_open_mem($res);
		//校正結果
		if (($Result = $dom->get_elements_by_tagname('Result')) == NULL)	return FALSE;
		foreach ($Result as $val) {
			$node = $val->get_elements_by_tagname('StartPos');
			$items[$i]['startpos'] = (int)$node[0]->get_content();
			$node = $val->get_elements_by_tagname('Length');
			$items[$i]['length'] = $node[0]->get_content();
			$node = $val->get_elements_by_tagname('ShitekiWord');
			$items[$i]['shitekiword'] = (string)$node[0]->get_content();
			$node = $val->get_elements_by_tagname('ShitekiInfo');
			$items[$i]['shitekiinfo'] = (string)$node[0]->get_content();
			$i++;
		}

//PHP5用; SimpleXML利用
	} else {
		$ResultSet = simplexml_load_string($res);
		//校正結果
		foreach ($ResultSet->Result as $val) {
			$items[$i]['startpos']    = (int)$val->StartPos;
			$items[$i]['length']      = (int)$val->Length;
			$items[$i]['shitekiword'] = (string)$val->ShitekiWord;
			$items[$i]['shitekiinfo'] = (string)$val->ShitekiInfo;
			$i++;
		}
	}

	return TRUE;
}


/**
 * 校正結果をテキストに反映する
 * @param	string $sentence 校正するテキスト
 * @param	array  $items    校正結果を格納した配列
 * @return	string 校正結果
*/
function setKousei($sentence, $items) {
	$outstr = "<h2>【校正結果】</h2>\n";
	$pos = 0;

	foreach ($items as $val) {
		if ($pos <= $val['startpos']) {
			$s = mb_substr($sentence, $pos, $val['startpos'] - $pos);
			$outstr .= $s;
			$s = mb_substr($sentence, $val['startpos'], $val['length']);
			$outstr .= "<span style=\"color:red;\">{$s}</span>";
			$s = "&nbsp;<span style=\"font-size:70%; color:blue;\">▼{$val['shitekiinfo']}";
			if ($val['shitekiword'] != '') {
				$s .= "⇒{$val['shitekiword']}";
			}
			$s .= "▼</span>&nbsp;";
			$outstr .= $s;
			$pos = $val['startpos'] + $val['length'];
		}
	}

	if (mb_strlen($sentence) > $pos) {
		$s = mb_substr($sentence, $pos, mb_strlen($sentence) - $pos);
		$outstr .= $s;
	}

	return nl2br($outstr);
}

/**
 * HTML BODYを作成する
 * @param	array  $outstr   校正結果
 * @param	string $sentence 校正原文
 * @param	string $url      WebAPI URL
 * @return	string HTML BODY
*/
function makeCommonBody($outstr, $sentence, $url) {
	$myself = MYSELF;
	$refere = REFERENCE;
	$flag_release = FLAG_RELEASE;

	$p_title = TITLE;
	$version = '<span style="font-size:small;">' . date('Y/m/d版', filemtime(__FILE__)) . '</span>';

	if (! $flag_release) {
		$phpver = phpversion();
		if (! isphp5over()) {
			$enable = 'DOM XML : ';
			$enable .= function_exists('domxml_open_mem') ? 'enabled' : 'disable';
		} else {
			$enable = 'SimpleXML : ';
			$enable .= function_exists('simplexml_load_file') ? 'enabled' : 'disable';
		}
		$msg =<<< EOT
PHPver : {$phpver}<br />
{$enable}<br />
WebAPI : <a href="{$url}">{$url}</a><br />
<dl>

EOT;
	} else {
		$msg = '';
	}

	$body =<<< EOT
<body>
<h2>{$p_title} {$version}</h2>
<form name="myform" method="POST" action="{$myself}" enctype="multipart/form-data">
テキスト<br />
<textarea name="sentence" id="sentence" rows="10" cols="60">{$sentence}</textarea>
<br />
<input type="submit" name="execute" value="校正" />
</form>

{$outstr}
</body>

EOT;
	return $body;
}

// メイン・プログラム =======================================================
$sentence = getParam('sentence', TRUE, '');
$outstr = '';
$items = array();

if ($sentence != '') {
	$response = getKousei($sentence, $items);
	$outstr = setKousei($sentence, $items);
}

$HtmlBody = makeCommonBody($outstr, $sentence, REQUEST_PROOFREADING_URL);

// 表示処理
echo $HtmlHeader;
echo $HtmlBody;
echo $HtmlFooter;

/*
** バージョンアップ履歴 ===================================================
 *
 * @version  2.2  2020/07/11  http(): each()関数をforeachで代替：PHP7.2対応, ini_set('display_errors', 1) 追加
 * @version  2.1  2017/04/30  PHP7 対応
 * @version  2.0  2014/07/27  大幅改訂
 * @version  1.0  2008/06/08
*/
?>
