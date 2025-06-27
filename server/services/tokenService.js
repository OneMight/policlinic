const jwt = require('jsonwebtoken');
const {Token} = require('../models/model');

class TokenService{
    generateToken(payload){
        const accesToken = jwt.sign(payload,process.env.SECRET_KEY, {expiresIn:'30m'})
        const refreshToken = jwt.sign(payload,process.env.SECRET_REFRESH_KEY, {expiresIn:'1d'})
        return{
            accesToken,
            refreshToken
        }
    }
    async saveToken(id, refreshToken){
        const datatoken = await Token.findOne({
            where:{
                idEmployee:id
            }
        })
        if(datatoken){
            datatoken.refreshToken = refreshToken;
            return datatoken.save();
        }
        const token = await Token.create({idEmployee:id,refreshToken});
        return token;
    }
    async removeToken(refreshToken){     
        const tokenData = await Token.destroy({
            where:{
                refreshToken
            }
        })
        return tokenData;
    }
    async getDataByToken(refreshToken){
        const tokenData = await Token.findOne({
            where:{
                refreshToken
            }
        })
        if(!tokenData){
            return new Error({message: `User not authorized`})
        }
        const decoded = jwt.verify(refreshToken,process.env.SECRET_REFRESH_KEY)
        return decoded;
    }
}

module.exports = new TokenService()