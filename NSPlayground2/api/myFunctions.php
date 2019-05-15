<?php

annee_scolaire_id ();

function annee_scolaire_id () {
	$todayh = getdate();

	$m = $todayh['mon'];
	$y = $todayh['year'];
	
	$libelle = '';
	
	if($m < 7){
		$libelle = ($y-1)."/".$y;
	}else if($m >=9){
		$libelle = $y."/".($y+1);
	}
	
	return $libelle;
	
}


?>