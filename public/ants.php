<?php
require_once(dirname(dirname(__FILE__)) . '/private/inc/class/Page.php');
require_once(dirname(dirname(__FILE__)) . '/private/conf/config.php');
$page = new Page;
$page->setTitle('Ants');
$page->startBody();
?>
    <video controls preload="none" poster="images/AntPoster.png">
        <param name="allowFullScreen" value="true"/>
        <source src='videos/Ant.mp4' type='video/mp4'>
        Your browser does not support the video tag.
    </video>
<?php
$page->endBody();
echo $page->render(dirname(dirname(__FILE__)) . '/private/inc/template_portfolio.php');