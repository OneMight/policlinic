const {Diagnosis} = require('../models/model');
class DiagnosisController{
    async getDiagnosis(req,res){
        const { sortBy = 'idDiagnose', order = 'ASC'} = req.query;
        const where = {}
        const diagnose = await Diagnosis.findAndCountAll({
            where,
            order: [[sortBy,order]]
        });
        return res.json({
            total: diagnose.count,
            data: diagnose.rows
        })
    }
    async createDiagnose(req,res){
        const {code, name} = req.body;
        try{
            const diagnose = await Diagnosis.create({
                code, name
            })
            return res.status(200).json(diagnose);
        } catch(e){
            return res.status(500).json('Internal server error '+error);
        }
    }
    async getByName(req,res){
        const code = req.params.code
        try{
            const diagnose = await Diagnosis.findOne({
                where:{
                    code: code
                }
            })
            if(!diagnose){
                return res.status(404).json({message: 'diagnose not found'})
            }
            return res.status(200).json(diagnose.idDiagnose)
        } catch(error){
            return res.status(500).json({message: error.message})
        }
    }
}
module.exports = new DiagnosisController();