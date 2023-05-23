import { useContext } from 'react';
import { PlayersContext } from '../../PlayersContext';
import { useState } from "react";

import './GamePage.css';

export const GamePage = () => {

  const { player1Name, player2Name } = useContext(PlayersContext);

  // Estados para almacenar los puntajes de ambos jugadores
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  // Estado para almacenar el valor del campo de entrada de ambos jugadores
  const [player1InputValue, setPlayer1InputValue] = useState('');
  const [player2InputValue, setPlayer2InputValue] = useState('');

  // Función para manejar el cambio de puntaje
  const handleScoreChange = (player) => {
    if (player === 1) {
      // Sumar el puntaje ingresado al puntaje actual del jugador 1
      setPlayer1Score(player1Score + parseInt(player1InputValue));
      setPlayer1InputValue('');
    } else if (player === 2) {
      // Sumar el puntaje ingresado al puntaje actual del jugador 2
      setPlayer2Score(player2Score + parseInt(player2InputValue));
      setPlayer2InputValue('');
    }
  };

  // Función para manejar el cambio del campo de entrada del jugador 1 y 2
  const handlePlayer1InputChange = ({target}) => setPlayer1InputValue(target.value);
  const handlePlayer2InputChange = ({target}) => setPlayer2InputValue(target.value);


  return (
    <div className="GamePage">
      <div className="GamePage_container">
        
        <header>
          <h2>Partida en juego...</h2>
        </header>
        <main>
          <h2 className='GamePage_container-h2'>{player1Name}: {player1Score}</h2>
          <div className='GamePage_container-box'>
            <input
              type="number"
              value={player1InputValue}
              onChange={handlePlayer1InputChange}
              
            />
            <button 
              onClick={() => handleScoreChange(1)}
              className='GamePage_container-box-button'
            >
              Sumar
            </button>
          </div>

          <h2 className='GamePage_container-h2'>{player2Name}: {player2Score}</h2>
          <div className='GamePage_container-box'> 
            <input
              type="number"
              value={player2InputValue}
              onChange={handlePlayer2InputChange}
              
            />
            <button 
              onClick={() => handleScoreChange(2)}
              className='GamePage_container-box-button'
            >
              Sumar
            </button>
          </div>
        </main>
        

      </div>
    </div>
  )
}

