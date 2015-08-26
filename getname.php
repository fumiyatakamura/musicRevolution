<?php
    $methodType = $_SERVER['REQUEST_METHOD'];
    $data = array("msg" => "$methodType");

    //This could be database
    $DB = array(
                "elvis" => "Elvis Presley",
                "john" => "John Lennon",
                "jimi" => "Jimi Hendrix",
                "bono" => "Bono",
                "daverohl" => "Dave Grohl",
                "chadkroeger" => "Chad Kroeger",
                "mj" => "Michael Jackson",
                "madonna" => "Madonna",
                "britney" => "Britney Spears",
                "katy" => "Katy Perry",
                "gaga" => "Lady Gaga",
                "rihanna" => "Rihanna",
                "diddy" => "Diddy",
                "tupac" => "Tupac",
                "snoop" => "Snoop Dog",
                "big" => "The Notorious B.I.G.",
                "eminem" => "Eminem",
                "kany" => "Kanye West",
                );

    if ($methodType === 'GET') {
        if(isset($_GET["name"]) && !empty($_GET["name"])){
            $name = $_GET["name"];
            $data = array("msg" => "$DB[$name]", "key" => "$name");

        } else {
            $data = array("msg" => "form error");
        }

    } else {
        $data = array("msg" => "Error: only GET allowed");
    }

    echo json_encode($data, JSON_FORCE_OBJECT);

?>
