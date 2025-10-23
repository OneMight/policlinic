const {Patience, Employee, Ticket} = require('../models/model')
class TicketController{
    async getTickets(req,res){
        const { sortBy = 'idTicket', order = 'ASC'} = req.query;
        const where = {}
        const tickets = await Ticket.findAndCountAll({
            where,
            order: [[sortBy,order]]
        });
        return res.json({
            total: tickets.count,
            data: tickets.rows
        })
    }
    async createTicket(req,res){
        const {cost, goal, date, FIO_Patience, FIO_Employee, time} = req.body;
        try{
            const employeeEntity = await Employee.findOne({
                where:{
                    FIO_Employee: FIO_Employee
                }
            })
            const patience = await Patience.findOne({
                where:{
                    FIO_Patience: FIO_Patience,
                }
            })
            console.error(patience);
            const ticket = await Ticket.create({
                cost,
                goal,
                time,
                date,
                idPatience: patience.idPatience,
                idEmployee: employeeEntity.idEmployee
            })
            return res.status(200).json(ticket);
        } catch(e){
            return res.status(500).json('Internal server error '+e);
        }
    }
}
module.exports = new TicketController();