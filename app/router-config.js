import { ExamplesController } from "./controllers/ExamplesController.js";
import { GameController } from "./controllers/GameController.js";
import { HomeController } from "./controllers/HomeController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [GameController],
    view: ''
 
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])