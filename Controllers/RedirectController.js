import LinkSchema from "../models/link.js";

const RedirectController = {
    getById: async (req, res) => {
        const linkId = req.params.id;
        try {

            const link = await LinkSchema.findById(linkId);
            if (!link) {
                return res.status(404).json({ message: "Redirect not found" });
            }
        
            link.click.push({insertedAt:Date.now(),ipAddress:req.ip,targetParamValue:req.query.t});
            console.log(req.query.t);
            const targetIndex=link.targetValues.findIndex(param=> param.name == req.query.t);
            console.log(targetIndex);
            if(targetIndex!=-1){
                link.targetValues[targetIndex].value+=1;
            }else{link.targetValues.push({name:req.query.t,value:1})}
            await link.save();
            res.redirect(link.originalUrl);

        } catch (e) {
            res.status(500).json({ message: e.message });
        }
    }}
export default RedirectController;
