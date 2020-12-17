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
		imgBank: 'https://cdn.worldvectorlogo.com/logos/itau-2.svg',
	},
	{
		name: 'Banco do Brasil',
		code: '001',
		imgBank: 'https://wedologos.bladecdn.net/wp-content/uploads/2011/12/banco-do-brasil-logo.jpg',
	},
	{
		name: 'Caixa Econômica Federal',
		code: '104',
		imgBank: 'https://kontaazul.com.br/wp-content/uploads/2020/04/como-consultar-saldo-na-caixa-economica.png',
	},
	{
		name: 'Santander',
		code: '033',
		imgBank: 'https://i.pinimg.com/originals/51/f2/4d/51f24d5b82b99033f301a14913ec95e4.png',
	},
	{
		name: 'Nu Pagamentos',
		code: '260',
		imgBank: 'https://meutudo.com.br/blog/wp-content/uploads/elementor/thumbs/pasted-image-0-30-ouvzn2e2prcj42nxh14ty98m0999gll4oow1gp73q8.png',
	},
	{
		name: 'Easynvest',
		code: '140',
		imgBank: 'https://logodownload.org/wp-content/uploads/2018/09/bradesco-logo-1.png',
	},
	{
		name: 'Banco Original',
		code: '212',
		imgBank: 'https://comotrabalhar.org/wp-content/uploads/2016/10/empregos-banco-original.png',
	},
	{
		name: 'Banco Neon',
		code: '735',
		imgBank: 'https://credproduzir.com/wp-content/uploads/2020/04/codigo-do-neon-para-transferencia-ted.png',
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
