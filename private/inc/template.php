<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!--suppress ALL -->
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name=viewport content="width=device-width, initial-scale=1">
    <meta name="description" content="Computer science student studying at the University of Plymouth">
    <meta name="keywords" content="HTML,CSS,XML,JavaScript, Java, C#, .NET, Computer Science, Software Engineer">
    <meta name="google-site-verification" content="nWv6YqrheMveMu45n5un_eipQ0IGmJQoK1tCfi7m5IY"/>
    <link rel="stylesheet" href="css/site.css" />
    <style type="text/css">
        @font-face {
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 400;
            src: local('Open Sans'), local('OpenSans'), url(cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
        }
    </style>
    <script>
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

        ga('create', 'UA-75624758-1', 'auto');
        ga('send', 'pageview');
    </script>
    <title>Brian Viviers | <?php echo $this->title; ?></title>
    <?php
    foreach ($this->stylesheets as $stylesheet) {
        echo '<link href="' . $stylesheet . '" rel="stylesheet" type="text/css" />' . "\n";
    }
    ?>
</head>
<body>
<div id='container'>
    <div id='content'>
        <?php echo $this->body; ?>
    </div>
</div>
<?php
foreach ($this->javascripts as $javascript) {
    echo '<script type="text/javascript" src="' . $javascript . '"></script>' . "\n";
}
?>

<footer class="site-footer section">
    <div class="contact">
        <p>Contact me:</p>
        <a href="mailto:brian.viviers@hotmail.co.uk">brian.viviers@hotmail.co.uk</a>
    </div>
    <div class="social-media">
        <a href="https://github.com/BrianViviers">
            <i class="fa fa-github"></i> GitHub
        </a><br />
        <a href="https://uk.linkedin.com/in/brian-viviers-5626a84a">
            <i class="fa fa-linkedin"></i> Linkedin
        </a>
    </div>
    <div class="footer-img"><img src="../images/Fizz.jpg" /></div>
    <div class="copyright">
        <p id="copyright">&copy; <span id="year"></span> Brian Viviers</p>
    </div>
</footer>
<script type='text/javascript' src="js/jquery-2.2.2.min.js"></script>
<script type='text/javascript' src="js/Site.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        var slider = document.querySelectorAll(".slider input[name='slide_switch']");
        for (var i = 0; i < slider.length; i++) {
            slider[i].addEventListener("click", makeActive, false);
        }

        function makeActive(e) {
            var elem = e.srcElement;
            console.log(elem);
            for (var i = 1; i < 10; i++) {
                document.querySelector(".slider .slider-image.lets" + i).style.zIndex = "10";
                document.querySelector(".slider #lets" + i).style.zIndex = "10";
            }
            elem.nextElementSibling.nextElementSibling.style.zIndex = "3000";
        }

    });
</script>
</body>
</html>