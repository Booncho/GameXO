const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://chanakit:Ausry11043123@cluster0.ex9po.mongodb.net/history', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const gameSchema = new mongoose.Schema({
    gridSize: Number,
    moves: Array,
    winner: String,
    date: { type: Date, default: Date.now }
});

const Game = mongoose.model('Game', gameSchema);

app.post('/api/games', async (req, res) => {
    const { gridSize, moves, winner } = req.body;
    const newGame = new Game({ gridSize, moves, winner });
    try {
        const savedGame = await newGame.save();
        res.status(201).json(savedGame);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get('/api/games', async (req, res) => {
    try {
        const games = await Game.find();
        res.status(200).json(games);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

//For Call Public 
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'XO.html'));
});

app.listen(port, () => console.log(`Server running on port http://localhost:${port}`));
