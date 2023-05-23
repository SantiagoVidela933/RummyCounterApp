import { useNavigate } from "react-router-dom";

import './ScorePage.css';

export const ScorePage = () => {

  const navigate = useNavigate();

  const onHandleButtonClick = () => {
    navigate('/')
  }

  return (
    <div className="main">
      <div className="main_container">
        <h1>Esta es la cuarta pantalla</h1>
        <button 
          className="main_container-button"
          onClick={onHandleButtonClick}
        >
          Reiniciar
        </button>
      </div>
    </div>
  )
}

