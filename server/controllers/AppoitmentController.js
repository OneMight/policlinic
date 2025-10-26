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
        try{
            const employee = await Employee.findByPk(idEmployee);
            if(!employee){
                return res.status(404).json({message: "Employee not found"})
            }
            const appoitments = await Appoitment.findAll({
                where:{
                    idEmployee: idEmployee,
               
                }, include:[{
                    model:Ticket,
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
            return res.status(500).json({message: error})
        } 

    }
}
module.exports = new AppoitmentController();