import LinkSchema from "../models/link.js";

const SegmenationController = {
    getById: async (req, res) => {

            const link = await LinkSchema.findById(req.params.id);
           if(!link){

            throw new Error("link not find");}
           else{
            res.json(link.targetValues);
        }
}}
export default SegmenationController;
