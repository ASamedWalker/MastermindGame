# Mastermind-Game

## Table of Contents

    1. History of MasterMind Game
    2. Goals
    3. Gameplay
    4. Track Scores

## History

Mastermind is a difficult puzzle game, in which one player tries to guess the code their opponent comes up with. Originally a board game, though with roots in earlier pen-and-paper games, the modern game with pegs was invented in 1970 by Mordecai Meirowitz[[1]]an Israeli postmaster and telecommunications expert.

## Goals

The goal of this project is to create a computerized base form of the mastermind game utilizing a programming language called javascript. I implemented javascript’s ES6 classes, ES6 modules, and parcel to bundle modules together. I also implemented Modul, View, and Controller (MVC) design patterns to give structure to my code.

## Gameplay

Mastermind is a two-sided code-solving game played by a computer(**codemaker**) and a user/player(**codebreaker**). Using a series of randomly generated numbers ranging from (0 - 7), the **codemaker** chooses a pattern code and conceals it in their gameplay area. The **codebreaker** then begins trying to break the code by inserting various number combinations for each turn, hoping to break it within 10 chances. In turn, the **codemaker** responds with feedback telling the **codebreaker** how close they are to winning. There are three levels of difficulties in this game and they from:

| Difficulty | Length of code | Random Numbers/ Colors |
| :--------: | :------------: | :--------------------: |
|    Easy    |       3        |           5            |
|   Normal   |       4        |           7            |
|    Hard    |       5        |           9            |

At the start of the game, the player chooses the level of difficulty he/she prefers. Then the player clicks the new game button. Once the game pops up, the player now has the opportunity to interact with the game by attempting to input a code to break the code set by the codemaker. The codemaker then gives feedback at the end of each attempt made by the codebreaker. The feedback provided by the codemaker would be responses like

- The player had to guess a correct number
- The player had guessed a correct number and its correct location
- The player’s guess was incorrect.

This response would be substituted with three flags which represent the color red and white flags in the game. Each red peg would correspond to the feedback the player had guess a correct number and it’s correct location. Each white peg corresponds to the feedback the player had guessed a correct number. Each black flags would correspond to feedback that the player’s guess was incorrect.

**_NOTE:_** **Order of the white and red pegs does not matter.**

The codebreaker can undo any attempts before submitting a code break attempt. The player can undo the wrong attempt.

For more imformation about mastermind [read here][2].

## Track Scores

When there is finally a code break. A form popup for username inputs from the player in order to display the scores, attempts, and time intervals taken to break the code. These scores are made possible with the help of the localStorage API.

[1]: https://en.wikipedia.org/wiki/Mordecai_Meirowitz
[2]: https://www.wikihow.com/Play-Mastermind
