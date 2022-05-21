const playerController = require('../controllers/player.controller')

module.exports = (app) => {
    app.post("/api/player", playerController.createPlayer);
    app.get("/api/player", playerController.findAllPlayers);
    app.put("/api/player/:id", playerController.updatePlayer);
    app.delete("/api/player/:id", playerController.deletePlayer);
}