// Game States
// "WIN" - player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each robot
// "LOSE" - player robot's health is zero or les

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// you can log multiplue values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Rob Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


// // this shows different arguements in the console
// console.log(enemyNames);
// // arrays start at 0 and go from there.  We have 3 items but the array goes to 2 because 0, 1, 2 (3 numbers)
// console.log(enemyNames[0]);
// console.log(enemyNames[1]);
// console.log(enemyNames[2]);
// console.log(enemyNames.length);
// for(var i = 0; i < enemyNames.length; i++) {
//   //this shows a variable for enemyNames in this case a "string"
//   console.log(enemyNames[i]);
//   // this shows a "number"
//   console.log(i);
//   // this displays both the string and the number in string format
//   console.log(enemyNames[i] + " is at " + i + " index");
// }


var fight = function(enemyName) {
  window.alert("Welcome to Robot Gladiators!");

  // if player wants to fight, then fight!
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?  Enter 'FIGHT' or 'SKIP' to choose.");
  if (promptFight === "FIGHT" || promptFight === "fight") {

    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining." 
    );

    // check enemyHealth
    if (enemyHealth <=0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check playHealth
    if (playerHealth <=0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  } else if (promptFight === "SKIP" || promptFight === "skip")  {
      // ask player if they want to skip
      var confirmSkip = window.confirm("Are you sure you want to quit?");

      // if true(yes), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        //subtract money for leaving fight
        playerMoney = playerMoney - 2;
      }
      // if false(no), ask question again by running fight() again
      else {
        fight();
      }

  } else {
    window.alert("You need to choose a valid option. Try again!");
  }

};

for(var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}

// this displays enemyHealth before the fight function
// console.log(enemyHealth);

// fight(enemyNames);

// this displays enemyHealth after the fight function
// console.log(enemyHealth);

// fight();

// //this displays enemyHealth after the fight function has happened twice becasue we have called it twice
// console.log(enemyHealth);

// fight();