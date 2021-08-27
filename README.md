# Mod-2 FlashCards Starter Kit

This application is a flashcard game that can be played within a users terminal. Either arrow keys or number keys can be utilized in conjunction with the enter key to choose an answer from a multiple choice list. At the end of the game, a summary of what percentage of questions were answered correctly and the time to finish the flashcard deck is dislayed to the player. The application utilizes multiple classes and accompanying test files to display the benefits of test-driven development (TDD).

## Demo

![recording](https://user-images.githubusercontent.com/68795578/131052933-3961e31a-0d7b-4005-8d84-54162708653b.gif)

## Technologies Used

- Javascript
- Node.js
- Chai
- Mocha
- gifcap


## Install/Setup

1) Open your terminal and run the command: `git clone https://github.com/najinl/flashcards-starter.git` (you replace the `[...]` with the terminal command arguments):

```bash
git clone [remote-address] [what you want to name the repo]
```

Once you have cloned the repo, change into the directory and install the library dependencies. Run:

```bash
npm install
```

To verify that it is setup correctly, run `npm test` in your terminal. You should have 5 pending tests in your `Card` test file that show up.

Running `node index.js` from the root of your project should result in the following message being displayed in your terminal: 

```bash
Node server running on port 3000
```


