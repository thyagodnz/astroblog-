import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
        
    },
    image:[{
        url: {type: String,required: true},
        description: {type: String}
     
}],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('news', userSchema);
