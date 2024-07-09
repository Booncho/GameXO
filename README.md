##XO Game Tic-Tac-Toe By Chanakit 

## Features
- Customizable grid size
- Stores game history in MongoDB
- Ability to replay past games

## Prerequisites
  **Client Side**
- HTML : Create Font end and any Button
- CSS : Decorate interface of Website
- JavaScript : Manage game action such as clicking on gird 
  **Server Side**
- Node.js : Manage API for connect to MongoDB 
- MongoDB : Database for save history for the winner

## How to install 
1. Clone the repository:
    ```
    git clone https://github.com/Booncho/GameXO.git
    cd GameXO
    ```
  2. Install dependencies:

    ```
    npm install
    ```
  3. Set up MongoDB:
     
    - Ensure and check MongoDB is running.
    - Update the MongoDB connection string in `server.js` if necessary.

5. Run the server:

    ```
    nodemon server.js
    ```

6. Open the game in a browser:

    Navigate to `http://localhost:5000` in your web browser.
## How to use 
1. Set the grid size:

    - Grid size start at 3 or more than 3 
    - Enter the desired grid size in the input field and click "Create Grid."
    
2. Play the game:

    - Click on the cells to play as either 'X' or 'O'.
    - The game will automatically check for a win or draw and will save the game history.

3. **View game history:**

    - Click on the "Show History" button to view past games.
    - You can replay a past game by clicking the "Replay" button next to each game entry.

