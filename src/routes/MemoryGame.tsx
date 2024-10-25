import GameBoard from 'components/memory-game/GameBoard';
import GameCompleted from 'components/memory-game/GameCompleted';
import GameControls from 'components/memory-game/GameControls';
import Loading from 'components/memory-game/Loading';
import ScoreBoard from 'components/memory-game/ScoreBoard';
import useMemoryGame from 'components/memory-game/useMemoryGame';

function MemoryGame() {
  const {
    board,
    misses,
    moves,
    speed,
    loading,
    completed,
    isHighScore,
    displayNumbers,
    noOfPairs,
    setNoOfPairs,
    setDisplayNumbers,
    handleClick,
    resetGame,
    setSpeed
  } = useMemoryGame();

  return (
    <div className="m-auto flex w-full max-w-[1000px] flex-col items-center gap-2">
      <div className="flex size-fit min-h-[440px] min-w-[360px] items-center justify-center rounded-lg bg-purple-400">
        {loading ? (
          <Loading />
        ) : completed ? (
          <GameCompleted isHighScore={isHighScore} moves={moves} />
        ) : (
          <GameBoard
            displayNumbers={displayNumbers}
            board={board}
            handleClick={handleClick}
          />
        )}
      </div>
      <div className="flex min-w-[360px] flex-col items-center justify-center gap-2 rounded-lg">
        <ScoreBoard score={{ moves, misses }} />
        <GameControls
          loading={loading}
          speed={speed}
          displayNumbers={displayNumbers}
          noOfPairs={noOfPairs}
          setNoOfPairs={setNoOfPairs}
          setDisplayNumbers={setDisplayNumbers}
          setSpeed={setSpeed}
          reset={resetGame}
        />
      </div>
    </div>
  );
}

export default MemoryGame;
