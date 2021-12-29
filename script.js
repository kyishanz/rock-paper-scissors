let computer = () => Math.floor(Math.random() * 3);

let human = () => prompt("enter 0 for rock, 1 for paper, 2 for scissors");

let scoreHuman = 0;
let scoreComputer = 0;

function game() {
    let player = human();
    console.log("human"+player);
    let machine = computer();
    console.log("computer"+machine);

    if ((player + 1) % 3 == machine) {
        console.log("machine won");
        scoreComputer++;
    } else if (player == machine) {
        console.log("tie");
    } else {
        console.log("human won");
        scoreHuman++;
    }

}

//playing game
for (let i = 0; i < 5; i++) {
    game();
}

if (scoreHuman > scoreComputer) {
    alert("you win!");
} else alert("computer wins :(");

// 1 < 2; 1>3; 2<3