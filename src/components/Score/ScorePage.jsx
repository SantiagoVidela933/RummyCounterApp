import { PlayersContext } from '../../PlayersContext';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import './ScorePage.css';

export const ScorePage = () => {
  const navigate = useNavigate();

  // Obtén los nombres y puntajes de los jugadores desde el contexto
  const { player1Name, player1Score, player2Name, player2Score, resetScores } = useContext(PlayersContext);

  // Determina el jugador con el puntaje más alto
  let winner = '';
  if (player1Score > player2Score) {
    winner = player1Name;
  } else if (player2Score > player1Score) {
    winner = player2Name;
  } else {
    winner = 'Empate';
  }

  const handleRestart = () => {
    // Reiniciar los puntajes de los jugadores
    resetScores();

    // Redirigir al usuario al homepage después de reiniciar el juego
    navigate('/');
    
  };

  return (
    <div className="ScorePage">
      <div className="ScorePage_title">
        <h1 className="ScorePage_title-h1">RummyCounterApp</h1>
      </div>
      <div className="ScorePage_popup">
        <div className="ScorePage_popUp_title">
          <h2 className='ScorePage_popUp_title-h2' >¡Partida Finalizada!</h2>
        </div>
        <p><b>{player1Name} - Puntaje: {player1Score}</b></p>
        <p><b>{player2Name} - Puntaje: {player2Score}</b></p>
        <div className='ScorePage_popUp_title'>
          <h2 className='ScorePage_popUp_title-h2' >El/La ganador es: <span>{winner}</span></h2>
        </div>
      </div>
      <button className="ScorePage_restart-button" onClick={handleRestart}>
        Reiniciar Juego
      </button>
    </div>
  );
};