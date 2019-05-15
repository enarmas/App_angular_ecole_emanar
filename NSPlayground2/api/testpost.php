<?php
 
require 'vendor/autoload.php';

 

$app = new Slim\App();

/*

$request = \slim\slim::getInstance()->request();
$data = json_decode($request->getBody());*/
$request = $app->request;
	
	try{
		//$data_request= json_decode($request->getBody());

		$data3 = '[
		  {"id":"1","name": "Assistant Manager",
		   "role":"Goalkeeper"
		   },

		  {"id":"2","name": "Manager",
		   "role":"Midfielder"
		   },

		  {"id":"3","name": "CEO",
		   "role":"Forward"
		   }
		]';

		$characters = json_decode($data3, true);

		//$id = $data_request['id'];

		foreach ($characters as $emp) {
			if($emp['id'] == 1){
				echo json_encode($emp);
				//$response->getBody()->write(json_encode($emp));
			}

		}
	}catch(Exception $e){
		echo "{errorSamrane : 'error'}";
		
	}
	


?>