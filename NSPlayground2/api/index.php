<?php
 
require 'vendor/autoload.php';
require 'config.php';
require 'PassHash.php';
require 'myFunctions.php';


 

$app = new Slim\App();


$app->any('/checkCodeschool','checkCodeschool'); 
$app->any('/login','login'); /* User login  */
$app->any('/tests','tests'); /*  list test  */
$app->any('/quetions','quetions'); /*list quetion  */


$app->run();



/************************FUNCTIONS******************************/

function quetions($request, $response){
	
	$json = '[{ "test_id": "2" }]';
	//$data_request= json_decode($request->getBody());	
	$data_request= json_decode($json);
	
	//echo $data_request[0]->test_id;
	
	
    try {
		
		/*$sql = "select * from question q inner join test_questions tq on tq.question_id =  q.id where tq.test_id = ".$data_request[0]->test_id;
		
		$db = getDB();
		$stmt = $db->prepare($sql);
        $stmt->execute();
		
        $mainCount=$stmt->rowCount();
        $test_questionsData = $stmt->fetchAll(PDO::FETCH_OBJ);
		
		$js= json_encode($test_questionsData);
		
		echo $js."azerty";*/
		
		$sql ="select id , fichier_id, ennonce , rep1 , rep2 , rep3 , rep4 , rep5 , rep6 , just1 , just2 , just3 , just4 , just5 , just6  from question q inner join test_questions tq on tq.question_id =  q.id where tq.test_id =".$data_request[0]->test_id;
		
		
		$db = getDB();

		$stmt2 = $db->prepare($sql);

		$stmt2->execute();

		$inscriptionData = $stmt2->fetchAll(PDO::FETCH_ASSOC);
		
		$result = $db->query($sql);
		
		$array1= array();


     
		while($row = $result->fetch(PDO::FETCH_ASSOC)) { 
			$r = array_map("utf8_encode", $row);
			
			
			/*echo $r['id'];			
			echo $r['fichier_id'];
			echo $r['ennonce']."<br>";

			
			$arrayRep= array();
			$arrayjust= array();		
			
			for ($i = 1; $i <= 6; $i++) {
				if($r['rep'.$i] != null ) {
					echo $r['rep'.$i]."<br>";
					echo $r['just'.$i]."<br>";

					array_push($arrayRep, $r['rep'.$i]);
					array_push($arrayjust, $r['just'.$i]);
					
					echo json_encode($arrayRep)."<br>";


				}
			}
			
			//echo '{"id":"'.$r['id'].'","fichier_id":"'.$r['fichier_id'].'","arrayrep":'.$arrayRep.'}'*/
			
			array_push($array1,$row);
			//array_push($array1,$row);
			
			
			
		}
		
		echo json_encode($array1, JSON_UNESCAPED_UNICODE);

			
		/*$AffectationControlData = $stmt->fetchAll(PDO::FETCH_ASSOC);
		
		echo json_encode($AffectationControlData);*/
		
    }
    catch(PDOException $e) {
        //echo '{"error":{"text":'. $e->getMessage() .'}}';
		echo '{"checkpass": "false2"}';
    }

	$db = null;
	
	
	
}

function login($request, $response) {
	
	
		$json = '[{
					"email": "elevetest",
					"password": "123456"
				}]';
	
		$data_request= json_decode($request->getBody());
		//$data_request= json_decode($json);
	
		//print_r( $data_request);
	
	  	$sql = "SELECT username, password  FROM utilisateurs WHERE (username=:username or email=:username) and typeUser in ('eleve') and  enabled=1";
	
		$sql2 = "SELECT idTable, email, username FROM `utilisateurs` ";
	

    try {
		$db = getDB();
		$stmt = $db->prepare($sql);
        $stmt->bindParam(":username", $data_request[0]->email, PDO::PARAM_STR);

        $stmt->execute();
	
		//echo 'samrane ';*/
		
        $mainCount=$stmt->rowCount();
        $userData = $stmt->fetch(PDO::FETCH_OBJ);
        
        $passHach = new PassHash();
        $checkPass = $passHach->check_password($userData->password,$data_request[0]->password);

        
	
		if($checkPass)
        {
           /*if(!empty($userData))
            {
                $username=$userData->username;
                //$userData->token = apiToken($user_id);
                $userData->p = '';
                unset($userData->p);
            }*/
            if($userData)
            {
				$sql = "(SELECT id as inscription_id  FROM `inscription`
						 where annee_scolaire_id in (select id from parametres
													WHERE libelle =:libelle)
						 AND etudiants_id in (SELECT idTable FROM utilisateurs u
												WHERE (username='elevetest' or email='elevetest')
												and typeUser in ('eleve')
												and  enabled=1))";
				
				$stmt2 = $db->prepare($sql);
        		$stmt2->bindParam(":libelle", annee_scolaire_id(), PDO::PARAM_STR);

        		$stmt2->execute();
				
				$inscriptionData = $stmt2->fetch(PDO::FETCH_ASSOC);
			
				
                echo '{"checkpass": true,
						"inscription_id": '.$inscriptionData['inscription_id'].' }';
            } 

        }
        else {
            echo '{"checkpass": false}';
        }
		
		
    }
    catch(PDOException $e) {
        //echo '{"error":{"text":'. $e->getMessage() .'}}';
		echo '{"checkpass": "false2"}';
    }

	$db = null;
	//echo 'db = null';

}

function checkCodeschool($request, $response) {
	
	try{
		
		$json = '[{
					"codeSchool": "x46"
				}]';
	
		$data_request= json_decode($request->getBody());
		//$data_request= json_decode($json);
		
		
		$data3 = '{ 
  "ecoles":[
			{
			"code":"x45kjop43g67",
			"ip": "195.110.34.158",
			"api":"manar/apiManar",
			"nom":"Groupe Scolaire Manar",
			"notifications":"http://www.emanar.ma/demo/web/Notifications/",
			"photos":"http://www.emanar.ma/demo/web/photos/ecoles/",
			"logo":"http://195.110.34.158/manar/configuration/ecoles/logos/gsmanar.png",
			"database":"manar",
			"user":"adminmanar",
			"password":"manar$123"

			},
			{
			"code":"x46",
			"ip": "192.168.1.13:8080",
			"api":"/projects/slimTest/",
			"nom":"Groupe Scolaire Manar",
			"notifications":"http://www.emanar.ma/demo/web/Notifications/",
			"photos":"http://www.emanar.ma/demo/web/photos/ecoles/",
			"logo":"http://195.110.34.158/manar/configuration/ecoles/logos/manar4.png",
			"database":"manar2",
			"user":"root",
			"password":""
			  
		   	}
		]}
		';
		
		$json2 = file_get_contents('./ecole.json');
		
		$codeSchool = $data_request[0]->codeSchool;
		
		
		$array = json_decode($data3,true);
		
		foreach ($array['ecoles'] as $emp) {
			if($emp['code'] == $codeSchool){

				return '{"ecole":['.json_encode($emp).'],"verifierEcole": true}';
			}
		}
		
		echo '{"verifierEcole": false ,"code":"'.$codeSchool.'"}';
		
		
	}catch(Exception $e){
		echo "{errorSamrane : 'error'}";
	}
	
}

function tests($request, $response) {
	
	
		$json = '[{
					"inscription_id": 212
				}]';
	
		//$data_request= json_decode($request->getBody());
		$data_request= json_decode($json);
	
		//print_r( $data_request);
	
	  	
	
    try {
		
		$sql = "SELECT test.titre as test_titre, test.duree as test_duree, affectationcontrol.test_id  , unite.NomUnite as matiere , CONCAT(personnel.Nom ,' ', personnel.Prenom) as professeur , realisation.daterealisation , realisation.datedebut, realisation.datefin , 			affectationcontrol.termine ,affectationcontrol.score , etudiants.NomEtu , etudiants.PrenomEtu ,etudiants.nometuarabe as NomEtuArb,etudiants.prenometuarabe as PrenomEtuArb
				FROM affectationcontrol
				INNER join test on test.id = affectationcontrol.test_id
				INNER join realisation on realisation.id = affectationcontrol.seance_id
				INNER join seance on seance.id = realisation.seance_id
				INNER join unitematiere on unitematiere.id = seance.unite_id
				INNER join unite on unite.id = unitematiere.unite_id
				INNER join personnel on realisation.professeur_id = personnel.id
                inner join inscription on inscription.id = affectationcontrol.inscription_id
                INNER join etudiants on etudiants.id = inscription.etudiants_id
				WHERE inscription_id=".$data_request[0]->inscription_id;
		
		$db = getDB();
		$stmt = $db->prepare($sql);
        $stmt->execute();
	
		/*$AffectationControlData = $stmt->fetchAll(PDO::FETCH_ASSOC);
		
		echo json_encode($AffectationControlData);*/
		
		$array1= array();

		while($row = $stmt->fetch(PDO::FETCH_ASSOC)) { 
			$r = array_map("utf8_encode", $row);
			
			array_push($array1,$row);
			
		}
		
		echo json_encode($array1, JSON_UNESCAPED_UNICODE);
		
    }
    catch(PDOException $e) {
        //echo '{"error":{"text":'. $e->getMessage() .'}}';
		echo '{"checkpass": "false2"}';
    }

	$db = null;
	//echo 'db = null';

}


/*
$app->any('/test1', function ($request, $response) {
	
	try{
		$json = '[{"id": "1"}]';
		$data_request= json_decode($request->getBody());
		


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

		$id = $data_request[0]->id;
		//print_r( $data_request );
		//echo "samrane".$data_request[0]->id;

		foreach ($characters as $emp) {
			if($emp['id'] == $id){
				return json_encode($emp);
				//$response->getBody()->write(json_encode($emp));
			}

		}
	}catch(Exception $e){
		return "{errorSamrane : 'error'}";
		
	}
	
	
  	//return $data3 ;
	
	
});

$app->get('/players', function ($request, $response) {
	
	
	$data3 = '[
	  {"id":"1","name": "samrane",
	   "role":"Goalkeeper"
	   },

	  {"id":"2","name": "zaher",
	   "role":"Midfielder"
	   },

	  {"id":"3","name": "CEO",
	   "role":"Forward"
	   }
	]';

	$response->getBody()->write($data3);
	
  	//return $data3 ;
	
	
});

$app->get('/players/{id}', function ($request, $response) {
	
	
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
	
	//Decode JSON
	$characters = json_decode($data3, true);
	
	$id = $request->getAttribute('id');
	//$response->getBody()->whrite($characters[$id]);
	
	//$res= $characters[$id];
	
	foreach ($characters as $emp) {
		if($emp['id'] == $id){
			return json_encode($emp);
		}
  		
	}

	
	
	//foreach ($characters as $emp) {
 // echo $emp['name']."<br/>";
//}
	//echo $characters[0]->id;
});
	

$app->get('/samrane',function(){
	
	require_once('dbconnect.php');
	
	$query  ='select * from players order by id ';
	$result = $mysqli->query($query);
	
	while($row = $result->fetch_assoc()){
		$data[] = $row;
	}
	
	if(!empty($data))
		echo json_encode($data);
	
	
});
*/

/*
*/
?>































