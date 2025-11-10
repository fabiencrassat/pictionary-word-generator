import { Difficulty, getRandomWord } from './words.js';

class PictionaryGenerator {
  private currentDifficulty: Difficulty = 'easy';
  private currentWord: string | null = null;

  constructor() {
    this.initializeEventListeners();
  }

  private initializeEventListeners(): void {
    // Level selection buttons
    const easyBtn = document.getElementById('easy-btn') as HTMLButtonElement;
    const mediumBtn = document.getElementById('medium-btn') as HTMLButtonElement;
    const hardBtn = document.getElementById('hard-btn') as HTMLButtonElement;
    const generateBtn = document.getElementById('generate-btn') as HTMLButtonElement;

    easyBtn?.addEventListener('click', () => this.selectDifficulty('easy'));
    mediumBtn?.addEventListener('click', () => this.selectDifficulty('medium'));
    hardBtn?.addEventListener('click', () => this.selectDifficulty('hard'));
    generateBtn?.addEventListener('click', () => this.generateWord());
  }

  private selectDifficulty(difficulty: Difficulty): void {
    this.currentDifficulty = difficulty;
    this.updateDifficultyButtons();
    this.clearWord();
  }

  private updateDifficultyButtons(): void {
    const buttons = {
      easy: document.getElementById('easy-btn') as HTMLButtonElement,
      medium: document.getElementById('medium-btn') as HTMLButtonElement,
      hard: document.getElementById('hard-btn') as HTMLButtonElement,
    };

    Object.entries(buttons).forEach(([level, btn]) => {
      if (btn) {
        if (level === this.currentDifficulty) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      }
    });
  }

  private generateWord(): void {
    const word = getRandomWord(this.currentDifficulty);
    this.currentWord = word.word;
    this.displayWord();
  }

  private displayWord(): void {
    const wordDisplay = document.getElementById('word-display') as HTMLElement;
    if (wordDisplay && this.currentWord) {
      wordDisplay.textContent = this.currentWord;
      wordDisplay.classList.add('revealed');
    }
  }

  private clearWord(): void {
    const wordDisplay = document.getElementById('word-display') as HTMLElement;
    if (wordDisplay) {
      wordDisplay.textContent = '';
      wordDisplay.classList.remove('revealed');
    }
    this.currentWord = null;
  }
}

// Service Worker Registration
function registerServiceWorker(): void {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('sw.js')
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration.scope);
          
          // Check for updates periodically
          setInterval(() => {
            registration.update();
          }, 60000); // Check every minute
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
    });
  }
}

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new PictionaryGenerator();
  registerServiceWorker();
});
