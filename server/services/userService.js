const bcrypt = require('bcrypt')
const UserDto = require('../dto/userdto');
const {Employee} = require('../models/model');
const TokenService = require('./tokenService');

class UserService{
    //функция для проверки существования в бд и записи токена
    async login(FIO_Employee,password){
        const user = await Employee.findOne({
            where:{
                FIO_Employee
            }
        })
        
        if(!user){
            throw new Error({message: 'Name is incorrect'})
        }
        const isPassword = await bcrypt.compare(password, user.password)
        if(!isPassword){
            throw new Error({message: 'Incorrect password'})
        }
        const userDto = new UserDto(user);
        const tokens = TokenService.generateToken({userDto})
        await TokenService.saveToken(userDto.id, tokens.refreshToken);
        return{
            ...tokens,
            user:userDto
        }
    }
    async logout(refreshToken){
        const token = await TokenService.removeToken(refreshToken);
        return token;
    }
}

module.exports = new UserService();