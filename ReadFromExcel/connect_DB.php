<?php
require 'vendor/autoload.php';


$reader = new \PhpOffice\PhpSpreadsheet\Reader\Xlsx();
$reader->setReadDataOnly(true);
$spreadsheet =$reader->load('كشف.xlsx');
$xls_data = $spreadsheet->getActiveSheet()->toArray(null, true, true, true);
$numberRow = count($xls_data);


$dsn = "mysql:host=localhost;dbname=Rowad;charset=utf8";
$db_user = "root";
$db_pass = "";

$conn = new PDO($dsn,$db_user,$db_pass );
$conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE,PDO::FETCH_ASSOC);
$statement =$conn->prepare("INSERT INTO
                       gas(
                       name,
                       number_of_member,
                       phone_number,
                       job,
                       type_living)
                        VALUES
                       (?,?,?,?,?)");
$statement->execute(array("1","2","3","4","4"));

for($row=2 ;$row<=$numberRow;$row++)
{

    $name =$xls_data[$row]['B'] ;
    $number =$xls_data[$row]['C'] ;
    $phone =$xls_data[$row]['D'] ;
    $job =$xls_data[$row]['E'] ;
    $type =$xls_data[$row]['F'] ;
    $statement->execute(array($name,$number,$phone,$job,$type));



}









?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
</head>
<body style="direction: rtl">

<?php
if(isset($_GET['do']) =="show")
{
  print_r($_POST['upload_btn']) ;

    ?>
    <div class="container mt-5"  style="text-align: center">
        <h2 class="mb-5">اسماء بكشوفات الغاز</h2>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>الاســـم</th>
                <th>عدد أفراد الاسرة</th>
                <th>رقم الهاتف</th>
                <th> العمل</th>
                <th> نوع السكن</th>
            </tr>
            </thead>
            <tbody>
            <?php
            $DataDB= $conn->query("select *from gas");
            foreach ($DataDB as $row)
            {
                echo "<tr>";
                echo "<td>" .$row['name']."</td>";
                echo "<td>" .$row['number_of_member']."</td>";
                echo "<td>" .$row['phone_number']."</td>";
                echo "<td>" .$row['job']."</td>";
                echo "<td>" .$row['type_living']."</td>";
                echo "</tr>";
            }

            ?>
            </tbody>
        </table>

<?php
}
else {
    echo "<form method=\"post\" action=\"?do=show\" enctype=\"multipart/form-data\">";
    echo "<input name='upload_btn'  type=\"file\">";
    echo " <button  type=\"submit\" class=\"btn btn-primary btn-lg btn-block\">  تحميل ملف اكسل</button>";
    echo "</form>";
}

?>



    </div>
</body>
</html>

