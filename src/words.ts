export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Word {
  word: string;
  difficulty: Difficulty;
}

export const words: Word[] = [
  // Easy words (10)
  { word: 'chat', difficulty: 'easy' },
  { word: 'soleil', difficulty: 'easy' },
  { word: 'maison', difficulty: 'easy' },
  { word: 'voiture', difficulty: 'easy' },
  { word: 'arbre', difficulty: 'easy' },
  { word: 'chien', difficulty: 'easy' },
  { word: 'livre', difficulty: 'easy' },
  { word: 'cœur', difficulty: 'easy' },
  { word: 'étoile', difficulty: 'easy' },
  { word: 'fleur', difficulty: 'easy' },

  // Medium words (10)
  { word: 'avion', difficulty: 'medium' },
  { word: 'téléphone', difficulty: 'medium' },
  { word: 'guitare', difficulty: 'medium' },
  { word: 'château', difficulty: 'medium' },
  { word: 'montagne', difficulty: 'medium' },
  { word: 'vélo', difficulty: 'medium' },
  { word: 'café', difficulty: 'medium' },
  { word: 'parapluie', difficulty: 'medium' },
  { word: 'horloge', difficulty: 'medium' },
  { word: 'crayon', difficulty: 'medium' },

  // Hard words (10)
  { word: 'architecture', difficulty: 'hard' },
  { word: 'télévision', difficulty: 'hard' },
  { word: 'ordinateur', difficulty: 'hard' },
  { word: 'bibliothèque', difficulty: 'hard' },
  { word: 'pharmacie', difficulty: 'hard' },
  { word: 'ascenseur', difficulty: 'hard' },
  { word: 'hélicoptère', difficulty: 'hard' },
  { word: 'microscope', difficulty: 'hard' },
  { word: 'télescope', difficulty: 'hard' },
  { word: 'laboratoire', difficulty: 'hard' },
];

export function getWordsByDifficulty(difficulty: Difficulty): Word[] {
  return words.filter(word => word.difficulty === difficulty);
}

export function getRandomWord(difficulty: Difficulty): Word {
  const filteredWords = getWordsByDifficulty(difficulty);
  const randomIndex = Math.floor(Math.random() * filteredWords.length);
  return filteredWords[randomIndex];
}
