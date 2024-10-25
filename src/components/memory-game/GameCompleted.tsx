type GameCompletedProps = {
  isHighScore: boolean;
  moves: number;
};

function GameCompleted({ isHighScore, moves }: GameCompletedProps) {
  return (
    <div className="flex size-full flex-col items-center justify-center gap-1 text-green-900">
      <h1>Congratulations!!!</h1>
      <h4>You have Completed the Game in {moves} Moves!</h4>
      {isHighScore && <h4>New Record !!! - You have the best score now</h4>}
    </div>
  );
}

export default GameCompleted;
