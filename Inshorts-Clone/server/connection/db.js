import mongoose from 'mongoose';

const Connection = async (username, password) => {
    try {   
        const URL = `mongodb+srv://yogiwaran47:Yogesh@inshortsclone.fmrynwj.mongodb.net/?retryWrites=true&w=majority&appName=inshortsclone`
        await mongoose.connect(URL, { useNewUrlParser: true })
        
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;