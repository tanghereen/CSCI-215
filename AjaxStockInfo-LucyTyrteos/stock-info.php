<?php
// added to allow AJAX calls from different host names
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
header('Content-Type: application/json');

// array of product information
$stockInfo = [
    [
        "id" => "BTC",
        "name" => "Bitcoin",
        "lastPrice" => "$19,205.08",
        "dollarChange" => "$47.26",
        "percentChange" => "0.25%"
    ],
    [
        "id" => "ETH",
        "name" => "Etherium",
        "lastPrice" => "$1,312.67",
        "dollarChange" => "$13.88",
        "percentChange" => "1.07%"
    ],
    [
        "id" => "NKE",
        "name" => "NIKE, Inc.",
        "lastPrice" => "$88.50",
        "dollarChange" => "$1.67",
        "percentChange" => "1.92%"
    ],
    [
        "id" => "TGT",
        "name" => "Target",
        "lastPrice" => "$159.19",
        "dollarChange" => "$4.79",
        "percentChange" => "3.10%"
    ],
    [
       "id" => "HD",
        "name" => "The Home Depot, Inc.",
        "lastPrice" => "$275.53",
        "dollarChange" => "$6.07",
        "percentChange" => "2.25%"
    ]
];

// build the result depending on whether or not an id to a product is provided
$response = ' ';

if ($_GET['id']) {
    $id = $_GET['id'];
    foreach ($stockInfo as $item) {
        if ($id === $item['id']) {
            if ($_GET['name']) {
                $response = $item['name'];
            } else if  ($_GET['lastPrice']) {
                $response = $item['lastPrice'];
            } else if ($_GET['dollarChange']) {
                $response = $item['dollarChange'];
            } else if ($_GET['percentChange']) {
                $response = $item['percentChange'];
                break;
            }
        }
    }
} else {
    $response = 'Please provide an id.';
}
echo $response;
?>