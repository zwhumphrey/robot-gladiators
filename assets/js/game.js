
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// you can log multiplue values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function() {
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

// this displays enemyHealth before the fight function
// console.log(enemyHealth);

 fight();

// this displays enemyHealth after the fight function
// console.log(enemyHealth);

// fight();

// //this displays enemyHealth after the fight function has happened twice becasue we have called it twice
// console.log(enemyHealth);