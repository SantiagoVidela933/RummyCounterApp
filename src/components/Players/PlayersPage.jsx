import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { PlayersContext } from '../../PlayersContext';

import './PlayersPage.css';

export const PlayersPage = () => {

  // Hook para la navegación
  const navigate = useNavigate(); 

  // Navega a la ruta '/gamepage' al hacer clic en el botón
  const onHandleButtonClick = () => navigate('/gamepage');
  
  // Obtén los valores del contexto
  const { player1Name, setPlayer1Name, player2Name, setPlayer2Name } = useContext(PlayersContext);

  return (
    <div className="PlayersPage">
      <div className="PlayersPage_container">
        <header>
          <h2 className='PlayersPage_container-h2'>Agrega los nombres de los jugadores</h2>
        </header>
        <main>
          <form>
            <label htmlFor="player1">Jugador 1: </label>
            <input
              type="text"
              value={player1Name}
              onChange={(e) => setPlayer1Name(e.target.value)} // Actualiza el nombre del jugador 1
            />

            <label htmlFor="player2">Jugador 2: </label>
            <input
              type="text"
              value={player2Name}
              onChange={(e) => setPlayer2Name(e.target.value)} // Actualiza el nombre del jugador 2
            />
          
          </form>
        </main>
        <div className="Players_container-box">
          <button 
            className='Players_container-box-button'
            onClick={onHandleButtonClick}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  )
}

