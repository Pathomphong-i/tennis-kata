//
// Your implementations
// 

export interface Game {
    player1Score: number;
    player2Score: number;
}
// update score to game
export function updateGameScore(point1: number, point2: number): Game {
    return {
        player1Score: point1,
        player2Score: point2
    }
}

//check winner
export function decideGameWinner(game: Game): string {
    if (game.player1Score < 4 && game.player2Score < 4) {
        return 'No winner'
    }

    if (game.player1Score - game.player2Score >= 2) {
        return 'Player 1';
    } else if (game.player2Score - game.player1Score >= 2) {
        return 'Player 2';
    }
}

//check score for duuce and who's winer
export function printScore(scores: number[]): string {
    const textScore = ['love', 'fifteen', 'thirty', 'forty'];
    
    if (scores.length !== 2) {
        return 'error';
    }
    // can win
    if (scores[0] >=3 && scores[1] >=3) {
        if (scores[0] === scores[1]) {
            return 'deuce'
        } else if (scores[0] - scores[1] === 1){ 
            return 'advantage player 1'
        } else if (scores[1] - scores[0] === 1){
            return 'advantage player 2'
        }
    }
    
    return `${textScore[scores[0]]} - ${textScore[scores[1]]}`;     
}


// given
const player1Points = 4;
const player2Points = 0;

// when
const game = updateGameScore(player1Points, player2Points);
const winner = decideGameWinner(game);

console.log(winner);