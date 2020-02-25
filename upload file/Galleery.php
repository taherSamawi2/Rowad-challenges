
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
<body>

<div class="container mt-5">

<div class="row m-5">
<?php

$imgpath= $_GET['path'];
$b = scandir($imgpath,1);

foreach($b  as $img)
{
  echo  '<div class="col-md-4 mb-2">
    <div class="card text-center ">
    <div class="card-body">
 <img class="card-img-top mx-auto" src="' .$imgpath.'/'.$img .'" style="width:60%">

    </div>
    </div>
    </div>';

}
?>
</div>

</div>
</body>
</html>


