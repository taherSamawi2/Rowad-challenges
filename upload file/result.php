
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


<?php
echo "<pre>";
print_r($_FILES)."<br>";
echo "</pre>";
// echo $_FILES['user_img']['name'] . "<br>";

if(isset($_POST['img_btn'])){


    $info = explode('.',$_FILES['user_img']['name']);//to get type
    $extenstion = array("png","jpg","jpeg");
    $Size =  $_FILES['user_img']['size']/1024/1024;

    list($width, $height, $type, $attr) = getimagesize($_FILES["user_img"]["tmp_name"]);
    // echo "Image width " . $width;
    // echo "Image height " . $height;


    // all for some file to upload
    if(in_array(end($info), $extenstion ) && $Size<1 && ( $width< 200 && $height<150)) 
    {
        move_uploaded_file($_FILES['user_img']['tmp_name'],"images/".time().".".end($info)); 
        echo "size is" .$Size;
    
    }
    else
    {
        echo "<h4 style='color:red '>This type is not allowded</h4>";

    }

    if ($Size>1)
    {
        
            echo "<h4 style='color:red '>Size more than 1MB </h4>";
    }
    if ($width> 200 && $height >150)
    {
        
            echo "<h4 style='color:red '>Image must be 200*150 </h4>";
    }
    
}

else
{
echo "error";
}
?>


</div>

</body>
</html>