import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  gamers = [
    {
      name: 'zach',
      score: 0
    },
    {
      name: 'ben',
      score: 0
    },
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())