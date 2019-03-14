let hands = ['rock','paper','scissors']

let playerOne = {
    name: 'William',
    hand: getHand(),
    wins: 0
}

let playerTwo = {
    name: 'Kendrick',
    hand: getHand(),
    wins: 0
}

function getHand(){
    let move = hands[parseInt(Math.random()*10)%3]
    return move
}

function playRound(p1, p2){
    let hand1 = getHand();
    let hand2 = getHand();

    if(hand1===hand2){
        return 'Issa tie!'
    }
    if(hand1==='rock'){
        if(hand2==='scissors'){
            p1.wins += 1;
            return p1;
        }
        else{
            p2.wins += 1;
            return p2;
        }
    }
    if(hand1==='paper'){
        if(hand2==='rock'){
            p1.wins += 1;
            return p1;
        }
        else{
            p2.wins += 1;
            return p2;
        }
    }
    if(hand1==='scissors'){
        if(hand2==='rock'){
            p1.wins += 1;
            return p1;
        }
        else{
            p2.wins += 1;
            return p2;
        }
    }
}

function playGame(p1,p2,playUntil){
    while (p1.wins !== playUntil || p2.wins !== playUntil){
        playRound(p1,p2);
        if (p1.wins === playUntil ){
            return p1
        }
        if (p2.wins === playUntil){
            return p2
        }
    }
}

playGame(playerOne, playerTwo, 5);

console.log(playerOne);
console.log(playerTwo)