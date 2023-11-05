<?php
$url = 'https://zerda.twenkey.ru/WorkType';

try {
    $data = file_get_contents($url);
    $json = json_decode($data);

    foreach ($json as $item) {
        echo $item->id . ': ' . $item->name . "\n";
    }
} catch (Exception $e) {
    echo 'Произошла ошибка: ' . $e->getMessage();
}
?>