
  import LinkSchema from "../models/link.js";
import UserSchema from "../models/user.js"

const LinkController = {
    getList: async (req, res) => {
        console.log(req.query.status);
        // Implement logic to retrieve a list of links from the database using LinkSchema
        try {
            const links = await LinkSchema.find();
            res.json(links);
        } catch (e) {
            res.status(500).json({ message: e.message });
        }
    },
    getById: async (req, res) => {
        // Implement logic to retrieve a specific link by id from the database using LinkSchema
        const linkId = req.params.id;
        try {
            const link = await LinkSchema.findById(linkId);
            if (!link) {
                return res.status(404).json({ message: "Link not found" });
            }
            res.json(link);
        } catch (e) {
            res.status(500).json({ message: e.message });
        }
    },
    post: async (req, res) => {
        // Implement logic to add a new link to the database using LinkSchema
        const { originalUrl,userId } = req.body;
        
        try {
            const newLink = await LinkSchema.create({ originalUrl });
            const user = await UserSchema.findById(userId);
            if(!user)
              {throw new Error("user not found")
          }
          user.links.push(newLink._id);
          await user.save();
            res.json(newLink);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },
    update: async (req, res) => {
        // Implement logic to update a link in the database using LinkSchema
        const linkId = req.params.id;
        const { originalUrl } = req.body;
        try {
            const updatedLink = await LinkSchema.findByIdAndUpdate(linkId, { originalUrl }, { new: true });
            if (!updatedLink) {
                return res.status(404).json({ message: "Link not found" });
            }
            res.json(updatedLink);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },
    delete: async (req, res) => {
        // Implement logic to delete a link from the database using LinkSchema
        const linkId = req.params.id;
        try {
            const deletedLink = await LinkSchema.findByIdAndDelete(linkId);
            if (!deletedLink) {
                return res.status(404).json({ message: "Link not found" });
            }
            res.json({ message: "Link deleted successfully" });
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    }

};

export default LinkController;