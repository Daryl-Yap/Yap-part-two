/* the gameplan:
1. Prompt for golfer's name
2. Prompt if they would like to play 3 or 6 games
3. prompt (3 or 6 times) their number of putts for that hole
4. keep track of the cumulative score, then at the end, compare the golfers total par to the course's
5. log to the console one of three messages depending on if they were under, over, or on par.
    - if over -- console.log("Nice try, (golferName)... You total par was: +(par).");
    - if under-- console.log("Great job, (golferName)! Your total par was: -(par).");
    - if on par -- console.log("Good game, " + golferName + ". Your total par was: 0.");
*/

let golferName = prompt("Welcome to GC mini-golf! What is your name?");
console.log("The golfer's name is " + golferName);

let holeCount = Number(prompt("Hi, " + golferName + "! Would you like to play 3 or 6 holes?"));
console.log(golferName + " will play " + holeCount + " holes");

let total = 0;

for (let i = 1; i < holeCount+1; i++) {
    let putts = 0
    putts = Number(prompt("How many putts for hole " + i + "? (par:3)"));
    total += putts;
}

let coursePar = holeCount * 3;
let totalPar1 = total - coursePar; //to find the difference between golfers score and course's par total is bigger than the course par
let totalPar2 = coursePar - total; //only if course par is bigger than the total


if (total === coursePar) {
    console.log("Good game, " + golferName + ". Your total par was: 0.");
} else if (total >= coursePar) {
    console.log("Nice try, " + golferName + "... Your total par was: +" + totalPar1);
} else {
    console.log("Great job, " + golferName + "! Your total par was: -" + totalPar2);
}