const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const userRouter = require('./src/routes/users')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
	origin: '*',
}));

app.get('/', (req, res) => {
	res.send('API çalışıyor!');
});

app.use('/api/users', userRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => {
	console.log(`API çalışıyor! http://localhost:${port}`);
});


