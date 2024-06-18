import { AppState } from "../AppState.js"


class GamerService {
    increaseScore() {
        console.log('Increasing the score, but from the service file.')
        const gamers = AppState.gamers
        gamers[0].score++
        console.log('Increased Player Score:', gamers[0].score);
    }
}

export const gamerService = new GamerService()