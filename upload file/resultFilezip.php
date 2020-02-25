
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
// echo "<pre>";
// print_r($_FILES)."<br>";
// echo "</pre>";

if(isset($_POST['zip_btn'])){


    $info = explode('.',$_FILES['user_file']['name']);//to get type
    $file_name =$_FILES['user_file']['name'];
    $extenstion = "zip";
    $Size =  $_FILES['user_file']['size']/1024/1024;


    $path = 'Galleery/';  
    $location = $path . $file_name;  
    if($extenstion ==  'zip' && $Size<2 ) 
    {
        if(move_uploaded_file($_FILES['user_file']['tmp_name'],$location))
        {
            $zip = new ZipArchive;
          
            if($zip->open($location))  
            {  
                 $zip->extractTo($path ."/".$info[0]);  
                 $zip->close();  
                 unlink(  $location);
            }  
         
            // $files = scandir($path . $name);  
        }

    
    }
    else
    {
        echo "<h4 style='color:red '>This type is not allowded</h4>";

    }

    if ($Size>2)
    {
        
            echo "<h4 style='color:red '>Size more than 1MB </h4>";
    }

}

else
{
echo "error";
}

?>

  <h2>Select Gallery</h2>
  <div class="dropdown">
    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
        Select Gallery
    </button>
    <div class="dropdown-menu">

<?php
$dirs = glob('Galleery/*' , GLOB_ONLYDIR);
foreach($dirs as $dir)
{
    echo ' <a class="dropdown-item" href="Galleery.php?path='.$dir.'">'.$dir.'</a>';
}


?>

    </div>
  </div>


</div>
</body>
</html>


