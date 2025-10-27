const { Op } = require('sequelize');
const {Appoitment, Diagnosis, Employee, Ticket, Patience} = require('../models/model');

class AppoitmentController{
     
    async getAppoitment(req,res){
        const { sortBy = 'idAppoitment', order = 'ASC'} = req.query;
        const where = {}
        const appoitment = await Appoitment.findAndCountAll({
            where,
            order: [[sortBy,order]]
        });
        return res.json({
            total: appoitment.count,
            data: appoitment.rows
        })
    }
    async createAppoitment(req,res){
        const {diagnose, idTicket,FIO_Employee} = req.body;
        try{
            const employee = await Employee.findOne({
                where:{
                    FIO_Employee: FIO_Employee,
                }
            })
            const diagnosis = await Diagnosis.findOne({
                where:{
                    name: diagnose,
                }
            })
            const appoitment = await Appoitment.create({
                idTicket,
                diagnose,
                idDiagnose: diagnosis.idDiagnose,
                idEmployee: employee.idEmployee,

            })
            return res.status(200).json(appoitment);
        } catch(e){
            return res.status(500).json('Internal server error '+e);
        }
    }
    async getAppoitmentByEmployee(req,res){
        const {idEmployee} = req.body;
        const currentDate = new Date(); 
        const startOfDay = new Date(currentDate.setHours(0,0,0,0));
        const endOfDay = new Date(currentDate.setHours(23,59,59,999));
        try{
            const employee = await Employee.findByPk(idEmployee);
            if(!employee){
                return res.status(404).json({message: "Employee not found"})
            }
            const appoitments = await Appoitment.findAll({
                where:{
                    idEmployee: idEmployee,
                    diagnose: 'none'
                    
                }, include:[{
                    model:Ticket,
                        where: {
                            date: {
                                [Op.between]: [startOfDay, endOfDay]
                            }
                        },
                        include:[{
                            model:Patience
                        }]
                }]
            })
            if(!appoitments){
                return res.status(404).json({message: "Today you don't have appointments"})
            }
            return res.status(200).json(appoitments)
        } catch (error){
            return res.status(500).json({message: error.message})
        } 
    }
    async updAppointment(req,res){
        const {idAppoitment, idDiagnose, diagnosis} = req.body;
        try{
            const appointment = await Appoitment.findByPk(idAppoitment)
            if(!appointment){
                return res.status(404).json({message: "appointment not found"})
            }
            const updAppointment = await appointment.update({
                diagnose: diagnosis,
                idDiagnose: idDiagnose
            })
            return res.status(200).json(updAppointment)
        } catch (error){
            return res.status(500).json(error)
        }
       
    }
  

}
module.exports = new AppoitmentController();