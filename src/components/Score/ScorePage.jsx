import { PlayersContext } from '../../PlayersContext';
import { useContext } from "react";


import './ScorePage.css';

export const ScorePage = () => {

  // Obtén los nombres y puntajes de los jugadores desde el contexto
  const { player1Name, player1Score, player2Name, player2Score } = useContext(PlayersContext); 
  
  // Determina el jugador con el puntaje más alto
  let winner = '';
  if (player1Score > player2Score) {
    winner = player1Name;
  } else if (player2Score > player1Score) {
    winner = player2Name;
  } else {
    winner = 'Empate';
  }

  return (
    <div className="ScorePage">
      <div className="ScorePage_popup">
        <h2>¡Partida Finalizada!</h2>
        <p>Jugador 1: {player1Name} - Puntaje: {player1Score}</p>
        <p>Jugador 2: {player2Name} - Puntaje: {player2Score}</p>
        <p>¡El ganador es: {winner}!</p>
      </div>
    </div>
  )
}

