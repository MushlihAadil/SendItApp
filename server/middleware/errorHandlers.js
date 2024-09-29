const errorHandler = (err, req, res, next) => {
    if (err.name === 'SequelizeValidationError') {
        res.status(400).json({ message: err.errors.map((err) => err.message) });
    } else if (err.name === 'SequelizeUniqueConstraintError') {
        res.status(400).json({ message: err.errors.map((err) => err.message) });
    } else if (err.name === 'ExpeditionNotFound') {
        res.status(404).json({message: `There is no expidition yet!`});
    } else {
        res.status(500).json({ message: `Internal Server Error` });
        console.log(err);
    }
}

module.exports = errorHandler