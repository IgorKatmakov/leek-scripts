if(getWeapon() === null) {
	setWeapon(WEAPON_DOUBLE_GUN);   // setWeapon s'utilise avec une constante (cf: Armes)
}

//Level 16
var all_enemy = getEnemies();
say("Your are "+count(all_enemy)+" motherfuckers");

var enemy = getNearestEnemy();
var cell_enemy = getCell(enemy);
var cell = getCell();
var distance = getCellDistance(cell_enemy, cell);

var x_cell = getCellX(cell);
var y_cell = getCellY(cell);
var x_enemy = getCellX(cell_enemy);
var y_enemy = getCellY(cell_enemy);

var shoot = false;
var current_gun = getWeapon();
var gun = WEAPON_DOUBLE_GUN;

if (distance < 8 and distance > 1) {
	shoot = true; // Pour récupérer le résultat du tir (succès ou échec)
	gun = WEAPON_DOUBLE_GUN;
} else {
	if (distance <= 1) {
		shoot = true;
		gun = WEAPON_SHOTGUN;
	} else {
		moveToward(enemy);
	}
}

if (current_gun != gun) {
	say("I want change my gun : "+gun);
	setWeapon(gun);
}

var result_shoot;
do {
	result_shoot = useWeapon(enemy);
} while (result_shoot === USE_SUCCESS || result_shoot === USE_FAILED);
