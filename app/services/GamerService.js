class GamerService {
    increaseScore() {
        console.log('Increasing the score, but from the service file.')
    }
}

export const gamerService = new GamerService()