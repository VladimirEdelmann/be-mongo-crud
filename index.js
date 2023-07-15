import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';

const PORT = 5000;

const DB_URL = `mongodb+srv://vladimiredelmann:gotanN123J@cluster0.4qwp54x.mongodb.net/?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());

app.use('/api', router);

async function startApp() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log('Server is running on port ' + PORT));
    } catch (e) {
        console.log(e)
    }
}

startApp();