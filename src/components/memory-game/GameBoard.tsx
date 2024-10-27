import GameCard from './GameCard';
import type { Board } from './helpers';

type GameBoardProps = {
  board: Board;
  handleClick: (cardId: number) => void;
  displayNumbers?: boolean;
  removeSolved?: boolean;
};

function GameBoard({
  board,
  handleClick,
  displayNumbers = false,
  removeSolved = false
}: GameBoardProps) {
  const cardCount = Object.keys(board).length;

  const columns = Math.ceil(Math.sqrt(cardCount));
  const rows = Math.ceil(cardCount / columns);

  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`
      }}
      className="grid size-fit gap-2 rounded-lg bg-purple-400 p-2"
    >
      {Object.entries(board).map(([cardId, card]) => (
        <GameCard
          displayNumber={displayNumbers}
          card={card}
          handleClick={handleClick}
          key={cardId}
          removeSolved={removeSolved}
        />
      ))}
    </div>
  );
}

export default GameBoard;
