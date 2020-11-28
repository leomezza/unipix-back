// require('dotenv').config();
import {} from 'dotenv/config'

import MongoConnection from '../configs/db.config';
import Bank from '../models/Bank';

console.log(MongoConnection);
//console.log(process.env.MONGODB_URI);
const mongoConnection = new MongoConnection(process.env.MONGODB_URI);

mongoConnection.startDbConnection();

const bankSeed = [
	{
		name: 'Bradesco',
		code: '237',
		imgBank: 'https://logodownload.org/wp-content/uploads/2018/09/bradesco-logo-1.png',
	},
	{
		name: 'Itaú Unibanco',
		code: '341',
		imgBank: 'https://logodownload.org/wp-content/uploads/2018/09/bradesco-logo-1.png',
	},
	{
		name: 'Banco do Brasil',
		code: '001',
		imgBank: 'https://logodownload.org/wp-content/uploads/2018/09/bradesco-logo-1.png',
	},
	{
		name: 'Caixa Econômica Federal',
		code: '104',
		imgBank: 'https://logodownload.org/wp-content/uploads/2018/09/bradesco-logo-1.png',
	},
	{
		name: 'Santander',
		code: '033',
		imgBank: 'https://logodownload.org/wp-content/uploads/2018/09/bradesco-logo-1.png',
	},
	{
		name: 'Nu Pagamentos',
		code: '260',
		imgBank: 'https://logodownload.org/wp-content/uploads/2018/09/bradesco-logo-1.png',
	},
	{
		name: 'Easynvest',
		code: '140',
		imgBank: 'https://logodownload.org/wp-content/uploads/2018/09/bradesco-logo-1.png',
	},
	{
		name: 'Banco Original',
		code: '212',
		imgBank: 'https://logodownload.org/wp-content/uploads/2018/09/bradesco-logo-1.png',
	},
	{
		name: 'Banco Neon',
		code: '735',
		imgBank: 'https://logodownload.org/wp-content/uploads/2018/09/bradesco-logo-1.png',
	},
	{
		name: 'Banco Inter',
		code: '077',
		imgBank: 'https://logodownload.org/wp-content/uploads/2018/09/bradesco-logo-1.png',
	},
];

Bank.create(bankSeed)
	.then((result) => {
		console.log(`Criou ${result.length} bancos.`);
	})
	.catch((error) => console.log(error));
