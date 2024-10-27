import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Board,
  FlipCard,
  getInitialBoard,
  HIGH_SCORE_CAHCE_KEY
} from './helpers';

function useMemoryGame() {
  // State Variables
  const [board, setBoard] = useState<Board>({});
  const [flippedCards, setFlippedCards] = useState<FlipCard[]>([]);
  const [moves, setMoves] = useState<number>(0);
  const [misses, setMisses] = useState<number>(0);
  const [speed, setSpeed] = useState<number>(2);
  const [loading, setLoading] = useState<boolean>(false);
  const [isHighScore, setIsHighScore] = useState(false);
  const [displayNumbers, setDisplayNumbers] = useState(false);
  const [noOfPairs, setNoOfPairs] = useState<number>(8);
  const [removeSolved, setRemoveSolved] = useState<boolean>(false);

  const completed = useMemo(
    () => Object.values(board).every((c) => c.solved),
    [board]
  );

  const resetGame = useCallback(async () => {
    setLoading(true);
    try {
      setBoard(await getInitialBoard(noOfPairs));
      setFlippedCards([]);
      setMoves(0);
      setMisses(0);
    } catch (error) {
      console.error((error as unknown as Error).message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [noOfPairs]);

  const handleClick = (cardId: number) => {
    if (flippedCards.length === 2) return;
    if (flippedCards.find((c) => c.cardId === cardId)) return;
    setBoard({ ...board, [cardId]: { ...board[cardId], flipped: true } });
    setFlippedCards([...flippedCards, board[cardId]]);
    setMoves(moves + 1);
  };

  // Initialize Game on first render
  useEffect(() => {
    resetGame();
  }, [resetGame]);

  useEffect(() => {
    let timeoutId = undefined;
    if (flippedCards.length === 2) {
      // check if its a match
      const [card1, card2] = flippedCards;
      const solved = card1.image === card2.image;

      timeoutId = setTimeout(() => {
        setBoard((board) => ({
          ...board,
          [card1.cardId]: { ...card1, flipped: solved, solved },
          [card2.cardId]: { ...card2, flipped: solved, solved }
        }));
        if (!solved) {
          setMisses((misses) => misses + 1);
        }
        setFlippedCards([]);
      }, speed * 1000);
    }

    return () => clearTimeout(timeoutId);
  }, [flippedCards, speed]);

  // Handle high score logic when the game is completed
  useEffect(() => {
    if (completed) {
      const prevScore = parseInt(
        localStorage.getItem(HIGH_SCORE_CAHCE_KEY) || '0'
      );
      const newHighScore =
        (moves !== 0 && moves < prevScore) || prevScore === 0;

      if (newHighScore && prevScore !== moves) {
        localStorage.setItem(HIGH_SCORE_CAHCE_KEY, moves.toString());
      }

      setIsHighScore(newHighScore);
    }
  }, [completed, moves]);

  return {
    board,
    moves,
    misses,
    speed,
    loading,
    completed,
    isHighScore,
    displayNumbers,
    noOfPairs,
    removeSolved,
    setRemoveSolved,
    setNoOfPairs,
    setDisplayNumbers,
    handleClick,
    resetGame,
    setSpeed
  };
}

export default useMemoryGame;
