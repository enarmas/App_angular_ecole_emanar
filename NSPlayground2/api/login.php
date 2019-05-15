<?php
require 'config.php';
include 'myFunctions.php';
require 'Slim/Slim.php';
require 'PassHash.php';

//----
header("Access-Control-Allow-Origin: *");

\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();


   $request = \Slim\Slim::getInstance()->request();
    $data = json_decode($request->getBody());


    try {
  
        $db = getDB($data->dbHost,$data->dbUser,$data->dbPass,$data->dbName);
        $userData ='';
        $sql = "SELECT id as user_id, idTable, email, username, password as p, typeUser FROM utilisateurs WHERE (username=:username or email=:username) and typeUser in ('tuteur','eleve','Prospect') and  enabled=1";
        $stmt = $db->prepare($sql);
        $stmt->bindParam("username", $data->username, PDO::PARAM_STR);

        $stmt->execute();
        $mainCount=$stmt->rowCount();
        $userData = $stmt->fetch(PDO::FETCH_OBJ);
        
        $passHach = new PassHash();
        $checkPass = $passHach->check_password($userData->p,$data->password);

        $db = null;
        if($checkPass)
        {
            if(!empty($userData))
            {
                $user_id=$userData->user_id;
                $userData->token = apiToken($user_id);
                $userData->p = '';
                unset($userData->p);
            }
            if($userData)
            {
               $userData = json_encode($userData);
                echo '{"userData": ' .$userData . '}';
            } 

        }
        else {
           echo '{"error":{"text":"Bad request wrong username and password"}}';
        }

    }
    catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }

?>
