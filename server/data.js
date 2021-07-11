const stateStorage = {

}

const clientRooms = {

}

function genGameState(data) {
  let state = {
    ball: {
      speed: {
        x: 0,
        y: 0
      },
      position: {
        x: 0,
        y: 0
      },
      isStuck: true
    },
    players: JSON.parse(data).playersData,
    court: JSON.parse(data).courtData,
  }
  return state;
}



function getGameStatus(state) {
  let end, winner;
  return {
    end: end,
    winner: winner
  }
}


module.exports = {
  stateStorage,
  clientRooms,
  getGameStatus,
  genGameState
}