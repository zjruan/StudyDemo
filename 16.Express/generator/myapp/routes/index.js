var express = require('express');
var router = express.Router();

var thrift = require('thrift');
var assert = require('assert');
var ThriftTransports = require('thrift/transport');
var ThriftProtocols = require('thrift/protocol');
var Calculator = require('../gen-nodejs/Calculator');
var ttypes = require('../gen-nodejs/tutorial_types');

var transport = ThriftTransports.TBufferedTransport();
var  protocol = ThriftProtocols.TBinaryProtocol();
try{
	var connection = thrift.createConnection('localhost', 9090, {
		transport: transport,
		protocol: protocol
	});

	connection.on('error', function (err) {
		console.error('thrift 链接出现问题');
		assert(false, err);
	});
}catch(err){
	console.error('thrift 链接出现问题');
}
// Create a Calculator client with the connection
var client = thrift.createClient(Calculator, connection);

/* GET home page. */
router.get('/', function (req, res, next) {
	client.add(10, 100)
	.then(function (response) {
		res.render('index', { title: 'Express + Thrift', desc: '：1+1=' + response });
	});
	
});

module.exports = router;
