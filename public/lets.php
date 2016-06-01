<?php
require_once(dirname(dirname(__FILE__)) . '/private/inc/class/Page.php');
require_once(dirname(dirname(__FILE__)) . '/private/conf/config.php');
$page = new Page;
$page->setTitle('Local Exchange Trading Scheme');
$page->startBody();
?>
<div class='section'>
    <div class="slider lets">
        <?php for ($i = 1; $i <= 9; $i++) {
            $checked = "checked='checked'";
            $zIndex = 1000;
            if ($i != 1 && $checked == "checked='checked'") {
                $checked = "";
                $zIndex = 10;
            }
            ?>
            <input type="radio" name="slide_switch" id="lets<?= $i ?>" <?= $checked ?> />
            <label for="lets<?= $i ?>">
                <img src="images/lets/Part<?= $i ?>.png" width="50"/>
            </label>
            <video controls class="slider-image lets<?= $i ?>" preload="none" poster="images/lets/Part<?= $i ?>.png"
                   style="z-index: <?= $zIndex ?>;">
                <source src="videos/lets/Part<?= $i ?>.mp4" type='video/mp4'>
                Your browser does not support the video tag.
            </video>
            <?php
        }
        ?>
    </div>
</div>
<?php
$page->endBody();
echo $page->render(dirname(dirname(__FILE__)) . '/private/inc/template_portfolio.php');