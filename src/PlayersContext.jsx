import React, { createContext, useState } from 'react';

export const PlayersContext = createContext();

export const PlayersProvider = ({ children }) => {
  const [player1Name, setPlayer1Name] = useState('');
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Name, setPlayer2Name] = useState('');
  const [player2Score, setPlayer2Score] = useState(0);

  const resetScores = () => {
    setPlayer1Name('');
    setPlayer1Score(0);
    setPlayer2Name('');
    setPlayer2Score(0);
  };

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
        resetScores, // Incluye la función resetScores en el valor proporcionado al contexto
      }}
    >
      {children}
    </PlayersContext.Provider>
  );
};