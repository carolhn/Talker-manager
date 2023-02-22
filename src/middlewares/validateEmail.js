module.exports = (req, res, next) => {
    const { email } = req.body;
    const isFormEmail = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;
    
    if (!email) {
        return res.status(400).json({ message: 'O campo "email" é obrigatório' });
    }
    if (!isFormEmail.test(email)) {
        return res.status(400)
        .json({ message: 'O "email" deve ter o formato "email@email.com"' });
    }
    next();
};
