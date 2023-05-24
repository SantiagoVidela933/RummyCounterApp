import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const PlayersContext = createContext();

export const PlayersProvider = ({ children }) => {

  const [player1Name, setPlayer1Name] = useState('');
  const [player1Score, setPlayer1Score] = useState(0);
  
  const [player2Name, setPlayer2Name] = useState('');
  const [player2Score, setPlayer2Score] = useState(0);

  return (
    <PlayersContext.Provider
      value={{
        player1Name,
        setPlayer1Name,
        player1Score,
        setPlayer1Score,
        player2Name,
        setPlayer2Name,
        player2Score,
        setPlayer2Score,
      }}
    >
      {children}
    </PlayersContext.Provider>
  );
};

PlayersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};