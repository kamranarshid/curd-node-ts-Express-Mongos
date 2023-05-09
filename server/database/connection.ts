import mongoose, { connect } from 'mongoose';

const connectDB = async() => {
    try{
        const conn = await connect(process.env.mongoDB_URI!,{
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useFindAndModify: false,
            // useCreateIndex: true

        })
        console.log(`MongoDB connected : ${conn.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports= connectDB