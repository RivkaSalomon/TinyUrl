import mongoose from "mongoose";

import clickSchema from './click.js'
import TargetValueSchema from './targetValue.js';

const LinkSchema =new mongoose.Schema({

    originalUrl: {type: String , default:"new link"},
     click: [clickSchema],
     targetParamName: {type: String ,default:"t"},
    targetValues: [TargetValueSchema]
});
export default mongoose.model("link",LinkSchema)
