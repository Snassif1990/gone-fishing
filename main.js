const prompt = require('prompt-sync')({sigint: true});

let caughtFish = [];
let time = 6;

// random generators
// let randomFish = randomFishGen();
// let fishWeight = randomFishWeight();
// let fishValue = randomFishValue();
let totalWeight = totalCaughtWeight();
let totalValue = totalFishValue();
let fishCaught = fish();


console.log("\n=========================================\n")
console.log("\nYou've gone fishing! \n\nTry to maximize the value of your caught fish. \nYou can fish for six hours (till 12:00pm) and can catch at most 10lbs of fish.\n");
console.log("=========================================\n");


while (time < 12){
    console.log(`The time is: ${time}:00am. So far you've caught: ${caughtFish.length} fish, ${caughtFish.totalWeight} lbs, ${caughtFish.totalValue}`);
    console.log("\n=========================================\n")
    console.log("");
    console.log("Nice! You caught a fish! A " + fishCaught.named + ", weighing " + fishCaught.weighing + ", valued at " + fishCaught.valuing);
    console.log("");
    console.log("=========================================\n")

    let action = prompt("Would you like to [c]atch or [r]elease? ");

    if (action === "c") {

        caughtFish.push(fish());

        console.log("\n\nYou chose to keep the fish.\n\n");
        console.log("=========================================\n")

    } else if (action === "r") {

        console.log("You chose to release the fish.");
        console.log("=========================================\n")
    }
    time++
} if (time === 12) {
    console.log("\n\nThe time is 12:00pm. Time is up!");
    console.log("");
    console.log(`You caught ${caughtFish.length} fish: `);
    console.log("");
    console.log(caughtFish);
    console.log("");
    console.log("Total weight: " + totalWeight);
    console.log("Total value: " + totalValue);
    console.log("\n\n")
} else if (totalWeight >= 10){
    console.log("\n\nWoah that's a lot of fish. You can't carry anymore!");
    console.log("");
    console.log(`You caught ${caughtFish.length} fish: `);
    console.log("");
    console.log(caughtFish);
    console.log("");
    console.log("Total weight: " + totalWeight);
    console.log("Total value: " + totalValue);
}

function fish(){
    let named = randomFishGen();
    let weighing = randomFishWeight() + 'lbs';
    let valuing = '$' + randomFishValue();
    return {
        named,
        weighing,
        valuing
    }
}
function randomFishGen(){
    let fishAdj = ['slippery', 'scaly', 'luminescent', 'shiny', 'delicious', 'crispy', 'golden', 'juicy', 'battered', 'smelly', 'salty', 'slimy', 'foul-smelling', 'wet', 'water-dwelling', 'iridescent', 'white-bellied', 'gullible', 'fickle', 'curious', 'finned', 'bony']
    let fishAdj2 = ['small', 'fresh', 'big', 'large', 'little', 'dead', 'shell', 'freshwater', 'young', 'white', 'larger', 'raw', 'water', 'fried', 'tropical', 'marine', 'jelly', 'smaller', 'salted', 'cuttle', 'fine', 'live', 'bony', 'cold', 'bigger', 'star', 'flat', 'excellent', 'sea', 'tiny', 'gold', 'largest', 'huge', 'pelagic', 'beautiful', 'frozen', 'wild', 'dry', 'predatory', 'electric', 'flying', 'blue', 'biggest', 'male', 'grilled', 'enough', 'broiled', 'strange', 'sized', 'fossilized', 'edible', 'delicious', 'oily', 'coarse', 'female', 'dried', 'queer', 'fat', 'anadromous', 'rotten', 'cooked', 'golden', 'migratory', 'salt', 'juvenile', 'adult', 'infected', 'odd', 'valuable']
    let fishType = ['shrimp', 'tuna', 'salmon', 'tilapia', 'pullock', 'catfish', 'crab', 'cod', 'pangasius', 'clam']
    
    let fishGen = fishAdj[Math.floor(Math.random() * fishAdj.length)] + " " + fishAdj2[Math.floor(Math.random() * fishAdj2.length)] + " " + fishType[Math.floor(Math.random() * fishType.length)];
    return fishGen;
}
function randomFishWeight(){
    caughtWeight = Math.random() * 3;
    return Number(caughtWeight.toFixed(2));
}
function randomFishValue(){
    caughtValue = Math.random() * 10;
    return Number(caughtValue.toFixed(2));
}
function totalCaughtWeight(){
    //caughtFish.weighing 
}
function totalFishValue(){
    //caughtFish.valuing
}