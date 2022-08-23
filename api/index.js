import express from 'express';
const port = 8000;
import cors from 'cors';
import { Users } from "./users.js";

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    const {q} = req.query;
    const keys = ['first_name', 'last_name', 'email'];

    const data = Users.filter((user) => {
        return keys.some((key) => user[key].toLowerCase().includes(q));
    })
    return res.json({
        data
    })
})


app.listen(port, function(error){
    if(error) {console.log('Error in running backend server'); return}
    console.log('Server is up and running on port : ',port);
})