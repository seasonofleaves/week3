import { AppState } from "../AppState.js";
import { Player } from "../models/Player.js";

export class PlayersController {
  
  
  constructor() {
    console.log('Players Controller is loaded', AppState.players);
    this.drawPlayers()
  }


  drawPlayers() {
    const players = AppState.players
    let playerHTML = ''
    players.forEach(player => playerHTML += player.PlayerTemplateCard)
    const playerCardsElm = document.getElementById('player-cards')
    playerCardsElm.innerHTML = playerHTML
  }

  scorePoint(){
    console.log('clicked');
  }
}