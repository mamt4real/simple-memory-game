import { HIGH_SCORE_CAHCE_KEY } from './helpers';

type ScoreBoardProps = {
  score: {
    moves: number;
    misses: number;
  };
};

function ScoreBoard({ score }: ScoreBoardProps) {
  return (
    <div className="flex w-full flex-col justify-between gap-1 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 p-2 text-center font-bold text-white shadow-lg">
      <div className="font-500 flex justify-center gap-5 text-lg">
        <span>Moves: {score.moves}</span>
        <span>Misses: {score.misses}</span>
      </div>

      <div className="mx-auto">
        <h2 className="mb-1 text-xl">🎉 High Score!</h2>
        <p className="text-3xl">{localStorage.getItem(HIGH_SCORE_CAHCE_KEY)}</p>
      </div>
    </div>
  );
}

export default ScoreBoard;
