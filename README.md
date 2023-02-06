### That's Pretty Clever
That's Pretty Clever is a game where players will roll 6 dice each with it's own color (Orange, Blue, Purple, Green, Yellow, and White). Players will have to pick and choose which dice they want to use to fill in spots on their game board. Each colored dice has a respected section on the game board to fill in tiles with the exception of the white dice which acts as a wildcard and can be used for any colored section. Each section has different strategies for chaining up points with their own scoring system. On a players turn, they perform a roll of all 6 dice. They will then have to choose a dice from the options. All dice that are below the rolled number of the selected dice will have to be discarded. The player will repeat this process 2 more times until they have used 3 dice. Once the active players turn is done, if there is a 2nd passive player, the passive player can choose any of the dice discarded to use on their board. If the passive player cannot use any of the dice in the discard pile, they can use any of the dice that the active player has chosen. If playing solo, after the players turn the dice will be rolled and the lowest 3 dice come into play for the player to use. The player can choose one of the dice to fill in on their board. Each tiled section has different bonuses if certain chains are met. The player will want to get these chains to get these bonuses in order to score high points. At the end of 6 rounds, the points from each section on each players board will be tallied up along with any bonus they obtained. The highest score wins or if playing solo, you can reference a chart that tells you how good your score was.

I decided to make this game because I enjoy playing it with friends and wanted to see if I could challenge myself in making a solo version of the game to play online. 

### Wireframes
![Wireframe1](https://github.com/kjcompton/thats-pretty-clever/assets/wireframe1.png)
![Wireframe2](https://github.com/kjcompton/thats-pretty-clever/assets/wireframe2.png)
![Wireframe3](https://github.com/kjcompton/thats-pretty-clever/assets/wireframe3.png)
![Wireframe4](https://github.com/kjcompton/thats-pretty-clever/assets/wireframe4.jpeg)

### MVP Goals
As a player I want a rules section for the game that I can pull up at any time so that I can reference rules when I am confused about anything
As a player I want to be able to choose between playing solo or 2 players.
As a player I want the functionality for handling dice rolling to be handled for me
As a player I want the program to detect whose turn it is and give me the option to start the turn by rolling all of the dice so that I do not have to figure out whose turn it is
As a player I want to be able to choose a dice from the rolled pile and have the program discard the appropriate dice based off of my selection so that I do not have to figure out which dice to discard
As a player I want to be able for the program to keep track of the dice that I selected so that I do not have to
As a player I want to be able to reroll the remaining dice so I do not have to figure out which ones to reroll
As a player I want the program to figure out when the current turn is over so I do not have to keep track
As a player once the turn is over, I want an option to reset all of the dice so that it is prepared for the next turn
As a player I want the program to give me the option to start the next turn and tell me whose turn it is so I do not have to keep track
As a player I want to be able to fill out whatever card selections I want whenever I want so that their are no restrictions (This will make it so that users could make logic errors and fill out spaces that they are not logically supposed to fill out. I believe that adding the logic to prevent the user from filling out selections based on the dice rolled as well as at strict times will be too complicated and might be too big in scope which is why I am adding it as a stretch goal)
As a player I want the game to end after 6 rounds have played so that I do not have to keep track
As a player I want their to be a show results button after 6 rounds have ended so that I can decide when I want the results to display
As a player I want the program to calculate each section on the players cards based on what is filled out so that I do not have to make the calculations
As a player I want the bonuses to be calculated so that I do not have to make the calculations
As a player I want the program to calculate the total for me so that I do not have to make the calculations
As a player I want the program to announce the winner if playing with 2, or compare my points to a reference chart if I am playing solo

### Stretch GoalsStretch Goals
As a player I want the program to prevent me from filling out spaces on my board that I am not supposed to so that it would making it imposible for me to fill in spaces that they are not logicaly supposed to be filled out

As a player I would like to have passive bonuses be collected and the program to keep track of what passive bonuses I have so I do not have to

As a player I want to be able to use my passive bonuses and I want the program to let me use these bonuses at the appropriate times so I do not have to keep track of when I can and cannot use them

As a player I want to be able to choose one of my reroll bonuses and have the program reroll the appropriate dice when I use it so that I do not have to figure out what dice I can and cannot reroll

As a player I want to be able to use any of my +1 bonuses and have the program prevent me from using it at an inncorect time or in an incorrect way so that I do not make a mistake when using the bonus

As a player I want the program to give out passive bonuses to each player each round based on the round started on so that I do not have to keep track of what bonuses I have to give myself

As a player I want to be able to save the game in my cookies so if I refresh the page the game can still be resumed

### Stretch GoalsStretch Goals
HTML - Create HTML elements to display and hold data for the game dice and score board
CSS - Handling the various colors of the game as well as the layout
Javascript - Handle the game dice and board and the methods for rolling dice and calculating game board sections at the end of the game. Also to handle the games rounds and turns/phases for each round.

### Unsolved Problems
- Implementing a 2 player mode
- 

### Forthcoming Features
- Refactor code. I feel like a lot of my code especially when it comes to the sequence handling could be refactored and more efficient.
- Would like to handle the sequencing for mark downs. Right now It lets the player create any mark downs they want. I would like for instance if a player chooses a yellow 3 die, all of the avaialable yellow 3's if any are highlighted and selectable while all others are not.
- Better user experience especially for the sequencing. Right now there is one button and it does not dynamically change.
- Add passive bonuses to the game where the player can choose to use them at any point.
- Better Layout and design
- Options mode to maybe turn certain features off to make for a more challenging experience
- Animations for the game board such as highlighting selection when hovering and animations for the dice rolls.
- Timer/speedrun mode
- Sound that can be toggled off for things like rolling the dice and marking the board
- Be able to save the game state using cookies
- Be able to randomize the bonuses on the board
- Cleaner looking game board and dice
- Themes
- Include the other versions of the game