import type { FlipCard } from './helpers';

type GameCardProps = {
  card: FlipCard;
  displayNumber?: boolean;
  handleClick: (cardId: number) => void;
};

const GameCard = ({
  card,
  handleClick,
  displayNumber = false
}: GameCardProps) => {
  const { cardId, image, flipped = false, solved = false } = card;

  return (
    <div
      className={`h-[100px] w-[80px] perspective-1000 ${
        !solved ? 'cursor-pointer' : ''
      } bg-transparent`}
      onClick={() => !solved && handleClick(cardId)}
    >
      <div
        className={`relative size-full transition-transform duration-700 transform-style-preserve-3d ${
          flipped ? 'rotate-y-180' : ''
        } ${solved ? 'hidden' : ''}`}
      >
        {/* Front of the card */}
        <div
          className="absolute flex size-full items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-5xl text-white backface-hidden"
          style={{ transform: 'rotateY(0deg)' }}
        >
          {displayNumber ? (
            cardId
          ) : (
            <img
              src={'/images/card.jpg'}
              alt="card-back"
              className="size-4/5 rounded"
            />
          )}
        </div>

        {/* Back of the card */}
        <div
          className="absolute flex size-full items-center justify-center overflow-hidden rounded-xl bg-white backface-hidden"
          style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
        >
          <img src={image} alt="card-back" className="size-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default GameCard;
