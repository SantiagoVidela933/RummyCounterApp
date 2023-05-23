import { useNavigate } from 'react-router-dom';
import './PlayersPage.css';

export const PlayersPage = () => {

  const navigate = useNavigate();

  const onHandleButtonClick = () => {
    navigate('/gamepage');
  }

  return (
    <div className="main">
      <div className="main_container">
        <h1 className="main_container-h1">Esta es la segunda pantalla</h1>
        <button
          className='main_container-button'
          onClick={onHandleButtonClick}
        >
          Siguiente
        </button>
      </div>
    </div>
  )
}

