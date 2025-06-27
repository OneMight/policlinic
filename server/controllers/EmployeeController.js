const {Employee} = require('../models/model');
const bcrypt = require('bcrypt');
const userService = require('../services/userService');
const UserDto = require('../dto/userdto');
const tokenService = require('../services/tokenService');
const cookieParser = require('cookie-parser');

class EmployeeController{
    async getEmployees(req,res){
        const { sortBy = 'idEmployee', order = 'ASC'} = req.query;
        const where = {}
        const employees = await Employee.findAndCountAll({
            where,
            order: [[sortBy,order]]
        });
        return res.json({
            total: employees.count,
            data: employees.rows
        })
    }
    async createEmployee(req,res){
        const {password,FIO_Employee,Category,Speciality, isAdmin} = req.body;
        try{
            const hashPassword = await bcrypt.hash(password,3);
            const employee = await Employee.create({
                isAdmin,
                password: hashPassword,
                FIO_Employee,
                Category,
                Speciality,
            })
            return res.status(200).json(employee);
        } catch (e){
            return res.status(500).json({ message: `Internal server error: ${error}` });
        }
    }
    async loginEmployee(req,res){
        try{
            const {FIO_Employee, password} = req.body;
            const userData = await userService.login(FIO_Employee,password);
            res.cookie('refreshToken', userData.refreshToken,{maxAge:24*60*60*1000, httpOnly:true,})
            return res.status(200).json(userData.refreshToken)

        } catch (error){
            return res.status(500).json({message: `Internal server error ${error}`})
        }
    }
    async logout(req,res){
        try{
            const {refreshToken} = req.body;
            await userService.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.status(200).json({ message: 'Successfully logged out' });
        } catch (error){
            return res.status(500).json({message: `Internal server error ${error}`})
        }
    }
    async getUserByToken(req,res){
        try{
            const cookies = req.cookies
            const refreshToken = cookieParser.signedCookie(cookies.refreshToken, process.env.SECRET_KEY)
            const user = await tokenService.getDataByToken(refreshToken)
            return res.status(200).json(user.userDto)
        } catch (error){
            return res.status(500).json({message: `${error}`});
        }
    }

}
module.exports = new EmployeeController();