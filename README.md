# Générateur de Mots Pictionary

Un générateur de mots en français pour jouer au Pictionary. Choisissez un niveau de difficulté (Facile, Moyen, Difficile) et générez un mot aléatoire à dessiner !

## 🚀 Installation avec Podman

Ce projet utilise Podman pour exécuter Node.js sans installation locale.

### Démarrage rapide

Lancez un conteneur interactif avec bash :

**Sur Linux/WSL :**

```bash
podman run --rm -it -p 8080:8080 -v "$(pwd):/app" -w /app node:20 bash
```

**Sur Windows (PowerShell) :**

```bash
podman run --rm -it -p 8080:8080 -v "${PWD}:/app" -w /app node:20 bash
```

Une fois dans le conteneur, exécutez les commandes suivantes :

```bash
# Installer les dépendances
npm install

# Compiler et lancer le serveur de développement
npm run dev
```

Le serveur sera accessible à l'adresse `http://localhost:8080`

### 🛠️ Commandes de développement

Dans le conteneur bash, vous pouvez utiliser :

- `npm run build` - Compiler le TypeScript
- `npm run watch` - Compiler en mode watch (recompilation automatique)
- `npm run serve` - Lancer uniquement le serveur
- `npm run dev` - Compiler puis lancer le serveur (recommandé)

### Alternative : Commandes directes Podman

Si vous préférez exécuter les commandes directement sans entrer dans le conteneur :

```bash
# Installation
podman run --rm -v "$(pwd):/app" -w /app node:20 npm install

# Build
podman run --rm -v "$(pwd):/app" -w /app node:20 npm run build

# Serveur
podman run --rm -it -p 8080:8080 -v "$(pwd):/app" -w /app node:20 npm run serve
```

## 📁 Structure du projet

```text
.
├── src/
│   ├── words.ts      # Liste des mots par niveau de difficulté
│   └── app.ts        # Logique de l'application
├── dist/             # Fichiers compilés (générés après build)
├── index.html        # Page principale
├── style.css         # Styles CSS
├── package.json      # Dépendances et scripts
└── tsconfig.json     # Configuration TypeScript
```

## 🎮 Utilisation

1. Choisissez un niveau de difficulté (Facile ⭐, Moyen ⭐⭐, Difficile ⭐⭐⭐)
2. Cliquez sur "Générer un mot"
3. Dessinez le mot affiché !

## 📝 Mots disponibles

- **Facile** : 10 mots simples à dessiner (chat, soleil, maison, etc.)
- **Moyen** : 10 mots de difficulté moyenne (avion, téléphone, guitare, etc.)
- **Difficile** : 10 mots plus complexes (architecture, ordinateur, etc.)

## ✅ Test rapide

Pour tester rapidement le projet :

```bash
# 1. Lancer le conteneur interactif
podman run --rm -it -p 8080:8080 -v "$(pwd):/app" -w /app node:20 bash

# 2. Dans le conteneur, installer et lancer
npm install
npm run dev
```

Ouvrez ensuite `http://localhost:8080` dans votre navigateur et testez :

- Sélectionner un niveau de difficulté
- Cliquer sur "Générer un mot"
- Vérifier qu'un mot s'affiche correctement
