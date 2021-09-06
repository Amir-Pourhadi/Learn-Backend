const { Schema, model } = require("mongoose");

const ProfileSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "user" },
  company: { type: String },
  website: { type: String },
  skills :{
    type: [String],
    
  },
  experience: [
    {
      
    }
  ]
});

const Profile = model("Profile", ProfileSchema);

module.exports = Profile;
