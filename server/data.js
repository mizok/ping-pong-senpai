const stateStorage = {

}

const clientRooms = {

}

function genGameState() {
  let state = {
    ball: {
      speed: {
        x: 0,
        y: 0
      },
      position: {
        x: 0,
        y: 0
      }
    },
    players: [
      {
        location: 0
      },
      {
        location: 0
      }
    ]
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