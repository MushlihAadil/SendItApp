const { Expedition, Package } = require("../models")

class Controller {

    static async postPackage(req, res, next) {
        try {
            let { senderName, senderAddress, receiverName, receiverAddress, expeditionId } = req.body;

            let expeditions = await Expedition.findAll()
            if (expeditionId > expeditions.length) throw { name : 'ExpeditionNotFound' }

            let newPackage = await Package.create({
                senderName,
                senderAddress,
                receiverName,
                receiverAddress,
                expeditionId,
            })

            res.status(200).json(newPackage)
        } catch (err) {
            next(err);
        }
    }

    static async getPackages(req, res, next) {
        try {
            let packages = await Package.findAll({
                order: [['id', 'ASC']]
            })

            res.status(200).json(packages)
        } catch (err) {
            next(err);
        }
    }

    static async getOnePackage(req, res, next) {
        try {
            res.send("Read on Controller Get Package by Id")
        } catch (error) {
            console.log(error);
        }
    }

    static async updatePackages(req, res, next) {
        try {
            res.send("Read on Controller Update Package by Id")
        } catch (error) {
            console.log(error);
        }
    }

    static async deletePackages(req, res, next) {
        try {
            res.send("Read on Controller Delete Package by Id")
        } catch (error) {
            console.log(error);
        }
    }

    static async getReports(req, res, next) {
        try {
            res.send("Read on Controller Get All Reports")
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = Controller