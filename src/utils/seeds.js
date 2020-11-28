require('dotenv').config();

const MongoConnection = require('../configs/db.config');
const Banco = require('../models/Banco');

console.log(process.env.MONGODB_URI);
const mongoConnection = new MongoConnection(process.env.MONGODB_URI);

mongoConnection.startDbConnection();

const bancoSeed = [
	{
		nome: 'Bradesco',
		codigo: '237',
		imgBanco: 'https://logodownload.org/wp-content/uploads/2018/09/bradesco-logo-1.png',
	},
	{
		nome: 'Itaú Unibanco',
		codigo: '341',
		imgBanco: 'https://logodownload.org/wp-content/uploads/2018/09/bradesco-logo-1.png',
	},
	{
		nome: 'Banco do Brasil',
		codigo: '001',
		imgBanco: 'https://logodownload.org/wp-content/uploads/2018/09/bradesco-logo-1.png',
	},
	{
		nome: 'Caixa Econômica Federal',
		codigo: '104',
		imgBanco: 'https://logodownload.org/wp-content/uploads/2018/09/bradesco-logo-1.png',
	},
	{
		nome: 'Santander',
		codigo: '033',
		imgBanco: 'https://logodownload.org/wp-content/uploads/2018/09/bradesco-logo-1.png',
	},
	{
		nome: 'Nu Pagamentos',
		codigo: '260',
		imgBanco: 'https://logodownload.org/wp-content/uploads/2018/09/bradesco-logo-1.png',
	},
	{
		nome: 'Easynvest',
		codigo: '140',
		imgBanco: 'https://logodownload.org/wp-content/uploads/2018/09/bradesco-logo-1.png',
	},
	{
		nome: 'Banco Original',
		codigo: '212',
		imgBanco: 'https://logodownload.org/wp-content/uploads/2018/09/bradesco-logo-1.png',
	},
	{
		nome: 'Banco Neon',
		codigo: '735',
		imgBanco: 'https://logodownload.org/wp-content/uploads/2018/09/bradesco-logo-1.png',
	},
	{
		nome: 'Banco Inter',
		codigo: '077',
		imgBanco: 'https://logodownload.org/wp-content/uploads/2018/09/bradesco-logo-1.png',
	},
];

Banco.create(bancoSeed)
	.then((result) => {
		console.log(`Criou ${result.length} bancos.`);
	})
	.catch((error) => console.log(error));
