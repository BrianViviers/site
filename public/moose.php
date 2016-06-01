<?php
require_once(dirname(dirname(__FILE__)) . '/private/inc/class/Page.php');
require_once(dirname(dirname(__FILE__)) . '/private/conf/config.php');
$page = new Page;
$page->setTitle('Moose');
$page->addCSS('css/moose.css');
$page->startBody();
?>
    <div class="moose">
        <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="100%" height="100%" id="moose"
                align="middle">
            <param name="movie" value="moose.swf"/>
            <param name="quality" value="high"/>
            <param name="bgcolor" value="#0099ff"/>
            <param name="play" value="true"/>
            <param name="loop" value="true"/>
            <param name="wmode" value="window"/>
            <param name="scale" value="showall"/>
            <param name="menu" value="true"/>
            <param name="devicefont" value="false"/>
            <param name="allowScriptAccess" value="sameDomain"/>
            <!--[if !IE]>-->
            <object type="application/x-shockwave-flash" data="moose.swf" width="100%" height="100%">
                <param name="movie" value="portfolio_files/moose.swf"/>
                <param name="quality" value="high"/>
                <param name="bgcolor" value="#0099ff"/>
                <param name="play" value="true"/>
                <param name="loop" value="true"/>
                <param name="wmode" value="window"/>
                <param name="scale" value="showall"/>
                <param name="menu" value="true"/>
                <param name="devicefont" value="false"/>
                <param name="allowScriptAccess" value="sameDomain"/>
                <!--<![endif]-->
                <a href="http://www.adobe.com/go/getflash">
                    <img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif"
                         alt="Get Adobe Flash player"/>
                </a>
                <!--[if !IE]>-->
            </object>
            <!--<![endif]-->
        </object>
    </div>
<?php
$page->endBody();
echo $page->render(dirname(dirname(__FILE__)) . '/private/inc/template_portfolio.php');