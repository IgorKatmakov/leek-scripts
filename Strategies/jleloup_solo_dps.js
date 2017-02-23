/* -- main.jjs

Base script for Jozay OS - Leek IA
*/

// Includes
include('Helpers/weapons.js');
include('Helpers/movement.js');
include('Helpers/chips.js');
include('Helpers/talk.js');

// Constants
var WEAPON = WEAPON_DOUBLE_GUN;
var HEAL_CHIP = CHIP_CURE;
var SHIELD_CHIP = CHIP_SHIELD;
var HEAL_THRESHOLD = 75;

// Leeks
var myself = getLeek();
var target = getNearestEnemy();
var enemyLife = getLife(target);

// Manage weapons
var tp_cost = getWeaponCost(WEAPON);
var weaponMinRange = getWeaponMinRange(WEAPON);
var weaponEffects = getWeaponEffects(WEAPON);
var minDamages = WPN_getMinDamage(myself, weaponEffects);

WPN_pickWeapon(WEAPON);

// Manage movement
var myCell = getCell();
var targetCell = getCell(target);
var distanteToTarget = getDistance(myCell, targetCell);

var atRange = MVT_moveToShoot(target, weaponMinRange);

// Manage chips - except if we have a chance to kill the enemy in the current turn

if (not (atRange and minDamages >= enemyLife)) {
	CHP_useShieldSolo(SHIELD_CHIP, distanteToTarget, myself);
	CHP_useHealSolo(HEAL_CHIP, HEAL_THRESHOLD, myself);
}

// Shoot with everything left
WPN_alphaStrike(target, tp_cost);

debug("TP left :" + getTP());

// If any TP left, taunt enemy !
TLK_tauntEnemy(target);
