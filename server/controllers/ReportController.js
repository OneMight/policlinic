const { Op, Sequelize  } = require('sequelize');
const {Report, Employee, Appoitment, Ticket, Patience} = require('../models/model');
class ReportController{
   
    async getReports(req,res){
        const { sortBy = 'idReport', order = 'ASC'} = req.query;
        const where = {}
        const reports = await Report.findAndCountAll({
            where,
            order: [[sortBy,order]]
        });
        return res.json({
            total: reports.count,
            data: reports.rows
        })
    }
    async getReportByDate(req,res){
        const {date} = req.body
        const arrDate = date.split('-')
        const startDate = new Date(arrDate[0])
        const [day, month, year] = arrDate[1].split('.');
        const endDate = new Date(`${year}-${month}-${day}`)

        try{
                const report = await Appoitment.findAll({
                    where:{
                        diagnose:{
                            [Op.ne]:'none',
                        },
                        
                    },
                     include:[
                        {
                                model:Employee,
                                attributes:[]
                        },
                        {
                        model:Ticket,
                            where:{
                                date:{
                                [Op.between]: [startDate, endDate],
                            },
                        },
                        attributes:[],
                        include:[
                            {
                                model:Patience,
                                attributes:[]
                            }
                        ]

                    }],
                        attributes: [
                        'idAppoitment',
                        'diagnose',
                        [Sequelize.col('Employee.FIO_Employee'), 'Employee'],
                        [Sequelize.col('Ticket.cost'), 'cost'],
                        [Sequelize.col('Ticket.Patience.FIO_Patience'), 'patientFIO'],
                        [Sequelize.col('Ticket.Patience.discount'), 'discount'],
                        ],
                raw: true,        
                })
                if(!report){
                    return res.status(404).json({message: 'No found resoures by this date'})
                }
                return res.status(200).json(report)
        } catch(error){
            return res.status(500).json({message: error.message})
        }
        
    }
    
}
module.exports = new ReportController();