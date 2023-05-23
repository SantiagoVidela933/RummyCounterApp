import { useNavigate } from 'react-router-dom';
import './HomePage.css';

export const HomePage = () => {

  const navigate = useNavigate();

  const onHandleButtonClick = () => {
    navigate('/playerspage')
  }

  return (
    <div className="HomePage">
        <div className="HomePage_container">
          <h1 className="HomePage_container-h1">RummyCounterApp</h1>
          <button 
            className="HomePage_container-button"
            onClick={onHandleButtonClick}
          >
            Iniciar
          </button>
        </div>
    </div>
  )
}


