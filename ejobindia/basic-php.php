<!DOCTYPE html>
<html>
<head>
	<title>sagar</title>
</head>
<body>
<center><h1>Factorial Value</h1>
<form action="" method="post">
<input type="text" name="num1">
<input type="submit" name="sub" value="Submit">
</form>
<form action="" method="post">
	<h1>Largest Number among 3</h1>
	<input type="text" name="num2">
	<input type="text" name="num3">
	<input type="text" name="num4">
	<input type="submit" name="sub1" value="Submit">
</form>
<form action="" method="post">
	<h1>Click the Submit button to check Even number among 1 to 10</h1>
	<input type="submit" name="sub2" value="Submit">
</form>
<marquee>Hi, Sagar</marquee>
</center>
</body>
</html>

<?php
	if(isset($_POST['sub'])){
		$b = 1;
		$a = $_POST['num1'];
		while($a!=0){
			$b = $a * $b;
			$a--;
		}
		echo "<br><center>$b";
	}


	if(isset($_POST["sub1"])){
		$a = $_POST['num2'];
		$b = $_POST['num3'];
		$c = $_POST['num4'];
		if($a>$b and $a>$c){
			echo "<br><center>The Largest Number is $a";
			exit;
		}

		if($b>$a and $b>$c){
			echo "<br><center>The Largest Number is $b";
			exit;
		}
		
		else{
			echo "<br><center>The Largest Number is $c";
			exit;
		}
	}

	if(isset($_POST['sub2'])){
		$a = 1;
		while($a<=10){
			if($a%2==0){
				echo "<center><br>$a";
			}
			$a++;
		}
	}
?>