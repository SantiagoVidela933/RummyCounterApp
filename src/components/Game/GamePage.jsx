import { useNavigate } from "react-router-dom";

import './GamePage.css';

export const GamePage = () => {

  const navigate = useNavigate();

  const onHandleButtonClick = () => {
    navigate('/scorepage')
  }

  return (
    <div className="main">
      <div className="main_container">
        <h1 className="main_container-h1">Esta es la tercera pantalla</h1>
        <button
          className="main_container-button"
          onClick={onHandleButtonClick}
        >
          Siguiente
        </button>
      </div>
    </div>
  )
}

