<?php

error_reporting(0);
session_start();

define("BASE_URL", "http://195.110.34.158/apiManar/api/");
define("SITE_KEY", 'yourSecretKey');

$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "manar2";


function getDB() 
{
    $dbConnection = new PDO("mysql:host =$dbhost ;dbname=manar2;", "root", "", array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8")); 
    //$dbConnection->exec("set names utf8");
    $dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $dbConnection;
	
}
/*
function getDB($dbhost,$dbuser,$dbpass,$dbname) 
{
    $dbConnection = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass); 
    $dbConnection->exec("set names utf8");
    $dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $dbConnection;
}
*/

/* API key encryption */
function apiToken($session_uid)
{
$key=md5(SITE_KEY.$session_uid);
return hash('sha256', $key);
}

/* types of fetch PDO  https://phpdelusions.net/pdo/fetch_modes#classic  */

/*add 

 $sql = "INSERT INTO users(name, age, email) VALUES(:name, :age, :email)";
        $query = $dbConnection->prepare($sql);
                
        $query->bindparam(':name', $name);
        $query->bindparam(':age', $age);
        $query->bindparam(':email', $email);
        $query->execute();
        
		
		*/


/* select 

$result = $dbConn->query("SELECT * FROM users ORDER BY id DESC");
     
    while($row = $result->fetch(PDO::FETCH_ASSOC)) {         
        echo $row['name'];
        echo $row['age'];
        echo $row['email'];    
    }
	
	*/

/*// JSON string
  $someJSON = '[{"name":"Jonathan Suh","gender":"male"},{"name":"William Philbin","gender":"male"},{"name":"Allison McKinnery","gender":"female"}]';

  // Convert JSON string to Array
  $someArray = json_decode($someJSON, true);
  print_r($someArray);        // Dump all data of the Array
  echo $someArray[0]["name"]; // Access Array data

  // Convert JSON string to Object
  $someObject = json_decode($someJSON);
  print_r($someObject);      // Dump all data of the Object
  echo $someObject[0]->name; // Access Object data*/

?>