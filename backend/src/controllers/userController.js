const pool = require('../config/db');
const bcrypt = require('bcrypt');
const generateToken = require('../config/generateToken');

const getALLUsers = async (req, res) => {
	try {
		const { rows } = await pool.query('SELECT * FROM users');
		res.send(rows);
	} catch (error) {
		console.error(error);
		res.status(500).send('Internal Server Error');
	}
};

const createUser = async (req, res) => {
	const { first_name, last_name, email, password, occupation, birthdate } = req.body;

	try {
		const hashed_password = await bcrypt.hash(password, 10);
		const hire_date = new Date().toISOString().slice(0, 10);
		const role = 'personel';
		const task_list = null;

		const query = `
		INSERT INTO users (first_name, last_name, email, password, birthdate, role, occupation, task_list, hire_date)
		VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
		RETURNING *
	  `;
		const values = [first_name, last_name, email, hashed_password, birthdate, role, occupation, task_list, hire_date];

		const { rows } = await pool.query(query, values);
		res.status(201).json(rows[0]);
	} catch (err) {
		console.error(err);
		res.status(500).send('Internal Server Error');
	}
};

const loginUser = async (req, res) => {
	const { email, password } = req.body;
	const token = generateToken(email);
	try {
		const query = `
		SELECT *
		FROM users
		WHERE email = $1
	  `;
		const values = [email];

		const { rows } = await pool.query(query, values);

		if (rows.length === 0) {
			res.status(401).send('Invalid Email or Password');
			return;
		}

		const user = rows[0];
		const match = await bcrypt.compare(password, user.password);

		if (!match) {
			res.status(401).send('Invalid Email or Password');
			return;
		}

		const token = generateToken(email);
		res.cookie('token', token, { httpOnly: true });
		res.status(200).send('Logged In Successfully');
	} catch (err) {
		console.error(err);
		res.status(500).send('Internal Server Error');
	}
};

module.exports = {
	getALLUsers,
	createUser,
	loginUser
};