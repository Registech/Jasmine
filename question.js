var convertToCelsius = function(temperature) 
{  


/*/////////////////   CONSIGNE  //////////////////////////////////
Concevoir un algorithme capable de convertir une température de degrés Farenheit en degrés Celsius. 
Pour passer d'une valeur Farenheit à une valeur Celsius, il faut appliquer la règle suivante :
§         Celsius = (Farenheit - 32) * 5/9
L'algorithme doit lire la température en degrés Farenheit, et l'afficher en Farenheit et en Celsius.°F = (( 9 x °C ) / 5 ) + 32
*////////////////////////////////////////////////////////////


	reponse = Math.round((temperature - 32) * 5/9);
 
	return reponse;

}


var majeur = function(age) {
/*//////////////////   CONSIGNE  /////////////////////////////////
§	Concevoir un algorithme capable retourner la valeur majeur ou mineur selon l'âge.
§	18 ou plus majeur sinon mineur
§   var age = integer;
*/////////////////////////////////////////////////////////////
    //ici je met mon code ;)

    if (age<18){
 		reponse = "mineur";
    }
	else{
		reponse = "majeur";
	}

	return reponse;
}


var paye = function(vente) {
/*///////////////////   CONSIGNE  //////////////////////////////// 
§         L'employé reçoit 200$ par semaine comme salaire de base.
§         L'employé reçoit 6% du total des ventes hebdomadaires à prix régulier.
§         L'employé reçoit 3% du total des ventes hebdomadaires à prix rabais.
          var vente = {ventesRegulier : 0, ventesRabais : 0};				
*//////////////////////////////////////////////////////////////
 	 
    //ici je met mon code ;)
 	var paye;
 	paye = (vente.ventesRegulier*6/100)+(vente.ventesRabais*3/100)+200; 
 	reponse = Math.round(paye*100)/100;
    return reponse;
}
var cesar = function(crypto, chaine) {
/*/////////////////////   CONSIGNE  ////////////////////////////////    
§           On code avec César ;)
§           le mot a codé est dans str 
§           la clée de chiffrage est cle
§			la chaine de caractères utilisé pour codé est dans chaine	
			var crypto = {str : '', cle : 0};
			chain = "aphab"	
			crypto.str = "julien"
			crypto.cle = "3"
*////////////////////////////////////////////////////////////////
    
    //ici je met mon code ;)
    reponse = ''; //variable reponse chaine de caractere
    for (i=0; i <= crypto.str.length-1; i++){ //boucle de la longueur du mot 
    	caractere = crypto.str[i]; //prend le caractere
    	index = chaine.indexOf(caractere); //recherche index de caractere dans chaine
    	indexcrypte = index +crypto.cle; //calcule du nouvel index
    	while (indexcrypte > chaine.length-1){ //tant que mon index crypte soit superieur a la longueur des index des chaines
    		indexcrypte = indexcrypte-chaine.length; //soutraire la taille dez la chaine
    }	
    reponse += chaine[indexcrypte];	//met dans le nouveau cararctere
    }
    return reponse;
    }