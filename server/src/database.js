import mongoose from 'mongoose';


const HOST =process.env.MONGODB_HOST || 'localhost';
console.log("process.env.MONGODB_HOST -", HOST);

export const uri = `mongodb://${HOST}:27017/personal-management`;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
export const connectWithDb = ()=>{
    mongoose.connect(uri, options,(err, db)=>{
        if (err) {
            console.log(err);
        } else {
            console.log("database connection established");
        }
    })
}