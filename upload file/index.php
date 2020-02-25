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
<div class="row">
<div class="col-6">
<form method="post" action="result.php" enctype="multipart/form-data">

  <div class="form-group">
  <h5>Please Select img File</h5>  
    <input type="file" name="user_img">
  </div>
  <button type="submit" class="btn btn-primary" name="img_btn">upload</button>
</form>
</div>


<div class="col-6">
<form method="post" action="resultFilezip.php" enctype="multipart/form-data">


  <div class="form-group">
  <h5>Please Select Zip File</h5>  
  <input type="file" name="user_file"  >
</div>

<button type="submit" class="btn btn-primary" name="zip_btn">upload</button>
</form>
  </div>

</div>



<br>




</div>

</body>
</html>