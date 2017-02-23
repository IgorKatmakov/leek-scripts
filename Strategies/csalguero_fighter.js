// On prend le gun de caillera une seule fois
if(getWeapon() == null) {
    setWeapon(WEAPON_PISTOL);
	
}
var moi = getLeek(); // mon poireau
var amis = getAllies();//Mes alliés
// On récupère l'ennemi le plus proche
var enemy = getNearestEnemy();

//Changement d'arme si on est à bonne distance
 if(canUseWeapon(WEAPON_MACHINE_GUN,enemy) === true)
 {(getWeapon() !=  WEAPON_MACHINE_GUN); // 1 TP
   setWeapon(WEAPON_MACHINE_GUN) and useWeapon(enemy);
     }
	 else
	 {setWeapon(WEAPON_PISTOL) and useWeapon(enemy);}
  
// On avance vers la case où on peut toucher l'ennemi
moveTowardCells(getCellsToUseWeapon(enemy));

   //On tire.
   useWeapon(enemy); // 4 TP
  
// Et on le brule !
useChip(CHIP_SPARK, enemy);

//soin au cas ou...
if (getLife(moi)<250)
{useChip(CHIP_BANDAGE, moi);}

//Deplacement de fuite
var saCellule = getCell(enemy);
var maCellule = getCell();
moveAwayFromLine(saCellule, maCellule);


//Dialoguer
if (getLife() > 100)
{say("J'ai pas peur de dire Voldemort, Thug life!");	
}
else{
say("Ho non pitié Seigneur Voldemort, pas faire mal!");
}


