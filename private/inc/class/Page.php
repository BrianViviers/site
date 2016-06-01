<?php

class Page
{
    private $title, $stylesheets = array(), $javascripts = array(), $body;
    public $dal;

    function Page()
    {
        $this->dal = new DAL();
    }

    function setTitle($title)
    {
        $this->title = $title;
    }

    function addCSS($path)
    {
        $this->stylesheets[] = $path;
    }

    function addJavascript($path)
    {
        $this->javascripts[] = $path;
    }

    function startBody()
    {
        ob_start();
    }

    function endBody()
    {
        $this->body = ob_get_clean();
    }

    function render($path)
    {
        ob_start();
        include($path);
        return ob_get_clean();
    }
}