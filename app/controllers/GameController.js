import { gamerService } from "../services/GamerService.js"






export class GameController {
    constructor() {
        console.log('This loaded from the GameController')
    }

    increaseScore() {
        console.log('This is where the score will increase')
        gamerService.increaseScore()
    }
}