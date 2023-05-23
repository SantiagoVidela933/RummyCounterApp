import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const PlayersContext = createContext();

export const PlayersProvider = ({ children }) => {
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');

  return (
    <PlayersContext.Provider
      value={{ player1Name, setPlayer1Name, player2Name, setPlayer2Name }}
    >
      {children}
    </PlayersContext.Provider>
  );
};

PlayersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};