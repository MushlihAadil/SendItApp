const { Expedition, Package } = require("../models")

class Controller {
    static async getPackages(req, res, next) {
        try {
            res.send("Read on Controller")
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = Controller