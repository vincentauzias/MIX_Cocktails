import mongoose from 'mongoose';
const { Schema } = mongoose;

const commentSchema = new Schema({
    commentaire:{
    type: String, 
    // required:true
    },
    idCocktail:{
    type: String,
    }
});

export default mongoose.model('Comment', commentSchema)