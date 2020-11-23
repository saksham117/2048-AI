# 2048-AI

*The game 2048 took the internet by storm, spawning countless rip-offs.*  Besides the addictive game play, the game also presents an  interesting opportunity to **explore mathematics and AI and thus we decided to explore the same.**

**Gameplay:** In this game, we are basically given a 4X4 grid, in which any two random locations are occupied by the numbers 2 or 4 initially. The objective of this game is to form the number 2048 by combining similar valued tiles (adjacent 2,2 tiles are merged to 4), by moving them in either of the four directions, left, right, up and down. After every move, a new tile (either of a 2 or a 4) is added at a random free location, and by making a move in either of the four directions, we need to merge the tiles to form the number 2048. The game gets over if you do not have any similar valued tiles adjacent to each other.

**Our Contribution:** So, to this popular game, we decided to add a twist of our own and learn something new in the process. To the existing 2048 game, we added the functionality of giving an option to the user to use an AI model to play the game for them. The user simply needs to click on a button, and the AI model would take over and make moves based on how it has been modelled.

The AI algorithm we have used is **iterative deepening depth first alpha-beta search** (an extensively used model for game play). While designing the **algorithm’s heuristics**, we basically kept these intuitions in mind
- We try to ensure that the values of the tiles are all either increasing or decreasing along both the left/right and up/down directions.
- We try to ensure that we have maximum possible free tiles, and if a move results in decreasing the number of free tiles, we penalize that move.

Checkout our game over here : [Play 2048](https://saksham117.github.io/2048-AI/)


### Landing Page
![](https://github.com/saksham117/2048-AI/blob/gh-pages/Screenshots/home.png)


### GamePlay
![](https://github.com/saksham117/2048-AI/blob/gh-pages/Screenshots/gameplay.jpeg)


### Game Over
![](https://github.com/saksham117/2048-AI/blob/gh-pages/Screenshots/game_over.jpeg)
