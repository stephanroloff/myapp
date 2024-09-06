<?php
if ( is_user_logged_in() ) {
    $requested_url = $_SERVER['REQUEST_URI'];
    wp_safe_redirect(home_url("/#$requested_url"));
    exit;
}