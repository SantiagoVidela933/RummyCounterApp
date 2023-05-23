import { useNavigate } from 'react-router-dom';
import './HomePage.css';

export const HomePage = () => {

  const navigate = useNavigate();

  const onHandleButtonClick = () => {
    navigate('/playerspage')
  }

  return (
    <div className="main">
        <div className="main_container">
          <h1 className="main_container-h1">RummyCounterApp</h1>
          <button 
            className="main_container-button"
            onClick={onHandleButtonClick}
          >
            Iniciar
          </button>
        </div>
    </div>
  )
}


