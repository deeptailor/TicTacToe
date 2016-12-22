const $ = require('jquery');
const View = require('./ttt-view.js');
const Game = require('./logic/game.js');

$( () => {
  const rootEl = $('.ttt');
  const game = new Game();
  new View(game, rootEl);
  console.log(game);
});
