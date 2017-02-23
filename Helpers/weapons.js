/* -- weapons.js

Helpers function for weapon management
*/

/*
Equip a weapon only if you don't have it already (save 1 TP).

Args :
    * weapon: weapon to equip.
*/
function WPN_pickWeapon(weapon) {

    if( getWeapon() != weapon ) {
        setWeapon(weapon);
    }
}

/*
Compute minimum damage dealt with a given weapon for a given leek.

Args:
    * leek: leek wielding the weapon
	* weapon: weapon used
*/
function WPN_getMinDamage(leek, weapon_effects) {

	var minDamage = null;
	var strength = getStrength(leek);

	for (var effect in weapon_effects) {

		if (effect[0] == EFFECT_DAMAGE) {
			minDamage += effect[1] + (1 + strength / 100);
		}
	}

	return minDamage;
}

/*
Shoot with all TP left.

Args :
    * target: enemy leek you want to transform into a punch card.
*/
function WPN_alphaStrike(target, cost) {
	for (var tp = getTP(); tp > cost; tp--) {
		useWeapon(target);
	}
}


/*
Equip a leek with the first weapon it can use

Args :
	* arr_order_weapon : list of weapon by preference
	* enemy : leek enemy

Return :
	* arr_selected_weapon : tab contains weapon selected, cost of the weapon and number of tp used
*/
function WPN_selectWeapon(arrOrderWeapon,enemy){
	//Count the number of element
	var nbWeapon = count(arrOrderWeapon);
	var arrSelectedWeapon = [];
	var tpUsed = 0;
	
	
	while(nbWeapon != 0){
		var currentWeapon = arrOrderWeapon[0];
		
		//If we can use the current weapon
		if(canUseWeapon(currentWeapon,enemy) == true){
			//if you don't have it already
			if(getWeapon() != currentWeapon){// 1 TP
				setWeapon(currentWeapon);
				tpUsed = 1;
			}		
			
			arrSelectedWeapon = [currentWeapon,getWeaponCost(currentWeapon),tpUsed];
			 
			return arrSelectedWeapon;
		}
		
		nbWeapon --;
	}
	
	return arrSelectedWeapon;
}