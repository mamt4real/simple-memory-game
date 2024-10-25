export type FlipCard = {
  cardId: number;
  image: string;
  flipped?: boolean;
  solved?: boolean;
};

export type Board = { [key: number]: FlipCard };

export async function getRandomImages(no_of_pairs: number) {
  const baseUrl = 'https://picsum.photos/80/100';
  const imageArray = [];

  // Fetch unique images and create pairs
  for (let i = 0; i < no_of_pairs; i++) {
    const response = await fetch(`${baseUrl}?random=${i}`);
    const imageUrl = response.url;

    imageArray.push(imageUrl, imageUrl);
  }

  // Shuffle the array using Fisher-Yates (Durstenfeld) shuffle algorithm
  for (let i = imageArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [imageArray[i], imageArray[j]] = [imageArray[j], imageArray[i]];
  }

  return imageArray;
}

export const getInitialBoard = async (no_of_pairs: number): Promise<Board> => {
  const images = await getRandomImages(no_of_pairs);
  return Object.fromEntries(
    Array(no_of_pairs * 2)
      .fill(null)
      .map((_, i) => ({
        cardId: i + 1,
        image: images[i],
        flipped: false,
        solved: false
      }))
      .map((c) => [c.cardId, c])
  );
};

export const HIGH_SCORE_CAHCE_KEY = 'memory_game_high_score';
