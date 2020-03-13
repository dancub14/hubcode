# Word Guess / Hangman Game

### Overview

This is the second module assesment for the Genesis 10 prework assesment course.

We were tasked with creating a Word Guess game using a specific theme, the one in this case of the 4th of July. 

This code will run on browser, and feature dynamically updated HTML and CSS and javascript code.

### Requirements that needed to be met

* App must suit these basic specs:
  * A unique theme for the game. For this game I choose the 4th of july using related words, American flag backdrop, and flag colors. 
  * Use key events to listen for the letters that players will type. This is done through keybaord button presses.
  * The following are displayed on the page:
    * Press any key to get started!
    * Wins: (# of times user guessed the word correctly).
    * The word needed to be guessed starts as series of empty lines. If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.
    * As correct letters are guessed, they are revealed in the spaces. For example: `m a d o _  _ a`.
    * Number of Guesses Remaining: (# of guesses remaining for the user).
    * Letters Already Guessed. Letters the user has guessed, displayed on screen after the buton press. For example - `K Y A`.
    * After the user wins/loses, the game automatically chooses another word and makes the user play it.

### Additional Features

* None of the words needed to be guessed will be repeated during the game.
* The number of guesses stays the same, and will not go down if a user presses a letter that has already been used.
* When all words are used, a prompt wil appear informing the user that the game will reset, then the game will return to its beginning state.

### Assets/Links/Technology Used
- [JavaScript](https://www.javascript.com/)
- [Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
- [Genesis 10 Course] (https://coding-bootcamp-java-fs-prework.readthedocs-hosted.com/en/latest/modules/javascript/module-2-assessment/)

### Included Files
1. Index Page (Main page to open in order to play game)
2. Assets Folder Containing all Code and files used aside from main Index Page
3. Javascript File (In Javascript Folder)
4. CSS and Reset Files (In CSS Folder)
5. Images Folder
