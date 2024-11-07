import UserSchema from "../models/user.js";

const UsersController = {
    get:(req, res) => {
        res.send('Hello World!')
      },
    getList: async(req, res) => {
        try{
          console.log("jhu============================");
  
            const Users= await UserSchema.find();
      res.json({Users});

        }catch(e){
res.status(400).json({message:e.message});
        }
   },
   getById: async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await UserSchema.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
} catch (e) {
    res.status(400).json({ message: e.message });
}
},
   
    post: async (req,res)=>{
      const {name,email,password,links}=req.body;
      try{
        const newUser=await UserSchema.create({name,email,password,links})
        res.json(newUser);
      }catch(e){
        res.status(400).json({message: e.message});
      }},
      
   
    update: async (req, res) => {
      const userId = req.params.id;
      const { name, email, password, links } = req.body;
      try {
          const updatedUser = await UserSchema.findByIdAndUpdate(userId, { name, email, password, links }, { new: true });
          if (!updatedUser) {
              return res.status(404).json({ message: "User not found" });
          }
          res.json(updatedUser);
      } catch (e) {
          res.status(400).json({ message: e.message });
      }
  },
    delete: async (req, res) => {
      const userId = req.params.id;
      try {
          const deletedUser = await UserSchema.findByIdAndDelete(userId);
          if (!deletedUser) {
              return res.status(404).json({ message: "User not found" });
          }
          res.json({ message: "User deleted successfully" });
      } catch (e) {
          res.status(400).json({ message: e.message });
      }
    }
  };
  
  export default UsersController;
 
  