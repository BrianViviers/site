<?php
require_once(dirname(dirname(__FILE__)) . '/private/inc/class/Page.php');
require_once(dirname(dirname(__FILE__)) . '/private/conf/config.php');
$page = new Page;
$page->setTitle('Compass');
$page->startBody();
?>
    <div class="slider compass">
        <?php for ($i = 1; $i <= 4; $i++) {
            $checked = "checked='checked'";
            $zIndex = 1000;
            if ($i != 1 && $checked == "checked='checked'") {
                $checked = "";
                $zIndex = 10;
            }
            ?>
            <input type="radio" name="slide_switch" id="lets<?= $i ?>" <?= $checked ?> />
            <label for="lets<?= $i ?>">
                <img class='compass-img' src='images/Compass<?= $i ?>.png' width="50"/>
            </label>
            <img class='slider-image compass-img' src='images/Compass<?= $i ?>.png'/>
            <?php
        }
        ?>
    </div>
<?php
$page->endBody();
echo $page->render(dirname(dirname(__FILE__)) . '/private/inc/template_portfolio.php');