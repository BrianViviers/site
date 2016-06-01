<?php
require_once(dirname(dirname(__FILE__)) . '/private/inc/class/Page.php');
require_once(dirname(dirname(__FILE__)) . '/private/conf/config.php');

$page = new Page;
$page->addCSS('css/three_body.css');
$page->setTitle('3 Body Problem');
$page->startBody();
?>
    <iframe id="3_body" src="3_body_problem.html" style="width:100vw; height:100vh"></iframe>
<?php
$page->endBody();
echo $page->render(dirname(dirname(__FILE__)) . '/private/inc/template_portfolio.php');