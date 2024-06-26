const admin= require('../config/firebase-config')

class Middleware {
    async decodeToken(req, res, next){
        const token = req.headers.authorization.split(' ')[1];

        try {
            const decodeValue= await admin.auth().verifyIdToken(token)
            if (decodeValue){
                return next();
            }
            return res.json({ message: 'Non autorisé'})
        } catch(error) {
            console.log(error)
            res.status(401).json({ error });
        }
    }
}
module.exports = new Middleware();