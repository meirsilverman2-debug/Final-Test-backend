import express from "express";
import dotenv from "dotenv/config";
import cors from "cors";
import helmet from "helmet";


const PORT = Number(process.env.PORT) || 3000;
const app = express();


app.use(express.json());
app.use(cors({}));
app.use(helmet());


app.listen(PORT, (e)=> {
    if (e) return console.log(e);
    console.log(`Server is running on http://localhost:${PORT}`);  
});
