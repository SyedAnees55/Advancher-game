import inquirer from "inquirer";

//create a advancher game object

class Player{
    name:string;

    fuel:number=100; 

    constructor(name:string){

        this.name=name;
    }
    fueldecrease(){

        let fuel=this.fuel -25

        this.fuel=fuel

    }
    fuelincrease(){

        this.fuel=100
    }
}
class Opponent{
    name:string;

    fuel:number=100;

    constructor(name:string){

        this.name=name;
    }
        fueldecrease(){

        let fuel=this.fuel -25

        this.fuel=fuel
        
    }
};

let player=await inquirer.prompt(
    [
        {
            name:"name",

            message:"Enter your name:",

            type:"input"

        }
    ]
);

let opponent=await inquirer.prompt(
    [
        {
            name:"select",

            message:"select your opponent:",

            type:"list",

            choices:["Ironman","Halk","Badman","Zombie","Seketon","Vampir"]

        }
    ]
);
let p1 =new Player(player.name); 

let p2=new Opponent(opponent.select);

do{
    //Ironman

if(opponent.select == "Ironman"){
    let ask=await inquirer.prompt(
        [
            {
                name:"ironman",

                message:"What do you want to do?",

                type:"list",

                choices:["Attack","Drink Portion","Run For Your Life..."]
            }
        ]
    );
    if(ask.ironman == "Attack"){

        let num =Math.floor(Math.random()*2);
        if(num > 0){

            p1.fueldecrease();

            console.log(`${p1.name} fuel is ${p1.fuel}`);

             console.log(`${p2.name} fuel is ${p2.fuel}`);

             if (p1.fuel <=0) {
                
                console.log('You Loose The This Game');

                process.exit();

             }
    
    }
    if (num <= 0) {

         p2.fueldecrease();

            console.log(`${p1.name} fuel is ${p1.fuel}`);

             console.log(`${p2.name} fuel is ${p2.fuel}`);
                       
             if (p2.fuel <= 0) {
                          
                console.log("You Win This Game");

                          process.exit();

                }
        
            }
    }    
    
    if (ask.ironman == "Drink Portion") {

        p1.fuelincrease();

        console.log(`You Drink Health portion Your fuel is ${p1.fuel}`);

    }
    if (ask.ironman == "Run For Your Life...") {

        console.log(`You Loose , Better Luck Next time!`);
        
        process.exit();
   }
  }

  //Halk

  if (opponent.select == "Halk") {
    let ask = await inquirer.prompt([
      {
        name: "ironman",

        message: "What do you want to do?",

        type: "list",

        choices: ["Attack", "Drink Portion", "Run For Your Life..."],
      },
    ]);
    if (ask.ironman == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fueldecrease();

        console.log(`${p1.name} fuel is ${p1.fuel}`);

        console.log(`${p2.name} fuel is ${p2.fuel}`);

        if (p1.fuel <= 0) {
          console.log("You Loose The This Game");

          process.exit();
        }
      }
      if (num <= 0) {
        p2.fueldecrease();

        console.log(`${p1.name} fuel is ${p1.fuel}`);

        console.log(`${p2.name} fuel is ${p2.fuel}`);

        if (p2.fuel <= 0) {
          console.log("You Win This Game");

          process.exit();
        }
      }
    }

    if (ask.ironman == "Drink Portion") {
      p1.fuelincrease();

      console.log(`You Drink Health portion Your fuel is ${p1.fuel}`);
    }
    if (ask.ironman == "Run For Your Life...") {
      console.log(`You Loose , Better Luck Next time!`);

      process.exit();
    }
  }

  //Badman

  if (opponent.select == "Badman") {
    let ask = await inquirer.prompt([
      {
        name: "ironman",

        message: "What do you want to do?",

        type: "list",

        choices: ["Attack", "Drink Portion", "Run For Your Life..."],
      },
    ]);
    if (ask.ironman == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fueldecrease();

        console.log(`${p1.name} fuel is ${p1.fuel}`);

        console.log(`${p2.name} fuel is ${p2.fuel}`);

        if (p1.fuel <= 0) {
          console.log("You Loose The This Game");

          process.exit();
        }
      }
      if (num <= 0) {
        p2.fueldecrease();

        console.log(`${p1.name} fuel is ${p1.fuel}`);

        console.log(`${p2.name} fuel is ${p2.fuel}`);

        if (p2.fuel <= 0) {
          console.log("You Win This Game");

          process.exit();
        }
      }
    }

    if (ask.ironman == "Drink Portion") {
      p1.fuelincrease();

      console.log(`You Drink Health portion Your fuel is ${p1.fuel}`);
    }
    if (ask.ironman == "Run For Your Life...") {
      console.log(`You Loose , Better Luck Next time!`);

      process.exit();
    }
  }

  //Zombie

  if (opponent.select == "Zombie") {
    let ask = await inquirer.prompt([
      {
        name: "ironman",

        message: "What do you want to do?",

        type: "list",

        choices: ["Attack", "Drink Portion", "Run For Your Life..."],
      },
    ]);
    if (ask.ironman == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fueldecrease();

        console.log(`${p1.name} fuel is ${p1.fuel}`);

        console.log(`${p2.name} fuel is ${p2.fuel}`);

        if (p1.fuel <= 0) {
          console.log("You Loose The This Game");

          process.exit();
        }
      }
      if (num <= 0) {
        p2.fueldecrease();

        console.log(`${p1.name} fuel is ${p1.fuel}`);

        console.log(`${p2.name} fuel is ${p2.fuel}`);

        if (p2.fuel <= 0) {
          console.log("You Win This Game");

          process.exit();
        }
      }
    }

    if (ask.ironman == "Drink Portion") {
      p1.fuelincrease();

      console.log(`You Drink Health portion Your fuel is ${p1.fuel}`);
    }
    if (ask.ironman == "Run For Your Life...") {
      console.log(`You Loose , Better Luck Next time!`);

      process.exit();
    }
  }

  //Skeleton

  if (opponent.select == "Skeleton") {
    let ask = await inquirer.prompt([
      {
        name: "ironman",

        message: "What do you want to do?",

        type: "list",

        choices: ["Attack", "Drink Portion", "Run For Your Life..."],
      },
    ]);
    if (ask.ironman == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fueldecrease();

        console.log(`${p1.name} fuel is ${p1.fuel}`);

        console.log(`${p2.name} fuel is ${p2.fuel}`);

        if (p1.fuel <= 0) {
          console.log("You Loose The This Game");

          process.exit();
        }
      }
      if (num <= 0) {
        p2.fueldecrease();

        console.log(`${p1.name} fuel is ${p1.fuel}`);

        console.log(`${p2.name} fuel is ${p2.fuel}`);

        if (p2.fuel <= 0) {
          console.log("You Win This Game");

          process.exit();
        }
      }
    }

    if (ask.ironman == "Drink Portion") {
      p1.fuelincrease();

      console.log(`You Drink Health portion Your fuel is ${p1.fuel}`);
    }
    if (ask.ironman == "Run For Your Life...") {
      console.log(`You Loose , Better Luck Next time!`);

      process.exit();
    }
  }

  //Vampir

  if (opponent.select == "Vampir") {
    let ask = await inquirer.prompt([
      {
        name: "ironman",

        message: "What do you want to do?",

        type: "list",

        choices: ["Attack", "Drink Portion", "Run For Your Life..."],
      },
    ]);
    if (ask.ironman == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fueldecrease();

        console.log(`${p1.name} fuel is ${p1.fuel}`);

        console.log(`${p2.name} fuel is ${p2.fuel}`);

        if (p1.fuel <= 0) {
          console.log("You Loose The This Game");

          process.exit();
        }
      }
      if (num <= 0) {
        p2.fueldecrease();

        console.log(`${p1.name} fuel is ${p1.fuel}`);

        console.log(`${p2.name} fuel is ${p2.fuel}`);

        if (p2.fuel <= 0) {
          console.log("You Win This Game");

          process.exit();
        }
      }
    }

    if (ask.ironman == "Drink Portion") {
      p1.fuelincrease();

      console.log(`You Drink Health portion Your fuel is ${p1.fuel}`);
    }
    if (ask.ironman == "Run For Your Life...") {
      console.log(`You Loose , Better Luck Next time!`);

      process.exit();
    }
  }
}while(true)