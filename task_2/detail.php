<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="style.css" rel="stylesheet">
    <title>Details</title>
</head>

<body style="background-color:gray ">
    <h1 style="display: flex; justify-content: center; align-items: center;">STRUK BELANJAAN</h1>
    <?php
    if (isset($_GET['barang'])) {
        $barang = $_GET['barang'];
        $banyak = $_GET['banyak'];
        echo "<br>";
        echo "<p style='color:lightgreen;'>Anda Membeli</p>";
        echo "<table border='1' >";
        for ($i = 0; $i < count($barang); $i++) {
            echo "<tr> \n";
            echo "<td> $barang[$i]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;$banyak[$i]</td>";
            echo "</tr>";
        }
        echo "</table>";
    } else {
        echo "<p style='color:red;'>Anda Tidak Membeli apapun</p> <br>";
    }
    ?>
    <br>
    <a href="index.html">Back</a>
</body>

</html>