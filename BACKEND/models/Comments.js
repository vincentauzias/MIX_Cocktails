import mongoose from 'mongoose';
const { Schema } = mongoose;

const commentSchema = new Schema({
    commentaire:{
        type: String, 
    },
    idCocktail:{
        type: String,
    }
});

export default mongoose.model('Comment', commentSchema)