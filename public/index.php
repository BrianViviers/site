<?php
require_once(dirname(dirname(__FILE__)) . '/private/inc/class/Page.php');
require_once(dirname(dirname(__FILE__)) . '/private/conf/config.php');

$page = new Page;
$page->setTitle('Home');
$page->startBody();
?>
    <div id="home-image" class="section">
        <div id="logo-wrapper">
            <a id="logo" href="#home-image">Brian Viviers</a>
            <hr/>
            <div id="navbar" class="navbar">
                <ul>
                    <li><a href="#experience" class="button">Experience</a></li>
                    <li><a href="#portfolio" class="button">Portfolio</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div id="experience" class="section">
        <h2><span class="line"></span>Here's what I've done so far<span class="line"></span></h2>
        <div class="experience-container">
            <?php
            $results = $page->dal->get_experience_details();

            // check if there were any results
            if ($results) {
                // cycle through results
                foreach ($results as $exp) { ?>
                    <div class="experience-item">
                        <span class="experience-item-img">
                            <img src="../images/<?= $exp->image_url; ?>.png" alt="<?= $exp->image_url; ?>"/>
                        </span>
                        <div class="experience-item-description">
                            <h2><?= $exp->place; ?></h2>
                            <span class="experience-position"><?= $exp->position; ?></span> -
                            <span class="experience-date"><?= $exp->period; ?></span>
                            <div class="italic"><?= $exp->summary; ?></div>
                            <div><?= $exp->description; ?></div>
                        </div>
                    </div>
                    <?php
                }
            }
            ?>
        </div>
    </div>
    <div id="portfolio" class="section">
        <h2><span class="line"></span>Some projects I have done<span class="line"></span></h2>
        <div class="flexbox-container">
            <?php
            $results = $page->dal->get_portfolio_details();

            // check if there were any results
            if ($results) {
                // cycle through results
                foreach ($results as $exp) : ?>

                    <a id="<?= $exp->title ?>.php" href="<?= $exp->title ?>.php" class="portfolio-link" data-toggle="modal">
                        <div class="portfolio-top">
                            <h2 class="portfolio-item-text-heading"><?= $exp->heading ?></h2>
                            <h3 class="portfolio-item-text"><?= $exp->description ?></h3>
                        </div>
                        <div class="portfolio-bottom">
                            <img src='images/<?= $exp->image_url ?>.png' class="img-responsive"/>
                        </div>
                        <i class="fa fa-search-plus fa-3x disappear"></i>
                    </a>
                    <?php
                endforeach;
            }
            ?>
        </div>
    </div>
<?php
$page->endBody();
echo $page->render(dirname(dirname(__FILE__)) . '/private/inc/template.php');