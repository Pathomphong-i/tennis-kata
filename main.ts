//
// Your implementations
//
interface Game {
    player1: Player;
    player2: Player;
}

interface Player {
    name: String;
    score: number;
}
function updateGameScore(point1: number, point2: number) {
    return{
        player1:{
            name: 'Player 1',
            score: point1
        },
        player2: {
            name: 'Player2',
            score: point2
        }
    }
}

function decideGameWinner(game): string {
    if (game.player1.score < 4 && game.player2.score < 4) {
        return '??'
    }

    if (game.player1.score - game.player2.score >=2) {
        return game.player1.name;
    } else if (game.player2.score - game.player1.score >=2){
        return game.player2.name;
    }

}

function printScore(scores: number[]): string {
    const textScore = ['love', 'fifteen', 'thity', 'forty']
    const convertScoresToText: string[] = scores.map((score, index) => {
        if (index !== scores.length -1) {
            return textScore[score] + ' - '
        } else {
            return textScore[score]
        }
    });
    return ''.concat(...convertScoresToText);
}

function main() {
    const player1Point = 2;
    const player2Point = 2;
    const game = updateGameScore(player1Point, player2Point);
    const winner = decideGameWinner(game);
    console.log(winner)
}
