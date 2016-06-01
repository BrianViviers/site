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
</body>
</html>