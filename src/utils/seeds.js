// import express from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import dotenv from 'dotenv';


// import MongoConnection from './configs/db.config';
// import Banco from '../models/Banco';
const MongoConnection = require( '../configs/db.config');
const Banco = require('../models/Banco');

const mongoConnection = new MongoConnection(process.env.MONGODB_URI);

// mongoose
// 	.connect('mongodb://localhost:27017/dbpix', { useNewUrlParser: true })
// 	.then((x) => {
// 		console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
// 	})
// 	.catch((err) => {
// 		console.error('Error connecting to mongo', err);
// 	});

mongoConnection.startDbConnection();

const bancoSeed = [
	{
		nome: 'Bradesco',
		codigo: '237',
		imgBanco: 'https://logodownload.org/wp-content/uploads/2018/09/bradesco-logo-1.png',
	},
];

Banco.create(bancoSeed)
	.then((result) => {
		console.log(`Criou ${result.length} produtos.`);
	})
	.catch((error) => console.log(error));


