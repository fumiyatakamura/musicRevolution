<?php
    $methodType = $_SERVER['REQUEST_METHOD'];
    $data = array("msg" => "$methodType");

    if ($methodType === 'POST') {
        if(isset($_POST["email"]) && !empty($_POST["email"])){

            $email = $_POST["email"];
            $data = array(
                "msg" => "Thank you!<br>$email has been added to our mailing list!",
                "email" => "$email");
        } else {
            $data = array("msg" => "");
        }

    } else {
        $data = array("msg" => "Error: only POST allowed.");
    }

    echo json_encode($data, JSON_FORCE_OBJECT);
?>
