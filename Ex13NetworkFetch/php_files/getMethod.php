<?php
    header('Content-Type:text/plain; charset=utf-8');

    $name=$_GET['name'];
    $msg=$_GET['msg'];

    echo "Name: $name \n";
    echo "Message : $msg";
?>