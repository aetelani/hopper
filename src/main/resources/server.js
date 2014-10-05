var vertx = require('vertx');
var Container = require('vertx/container');
var Buffer = require('vertx/buffer');

var logger = Container.logger;
var server = vertx.createHttpServer();
var route = new vertx.RouteMatcher();

function Hop() {

}

function Workflow() {
	
}

function Contex(desc) {
	var content = new Buffer();
	var workflow = [];
	logger.info(desc);
}

var ctx = null;

function Task(desc) {
	logger.info(desc);
}

function Activity(desc) {
	eval("logger.info(\"this is eval \")");
	new Task("Open mouth");
	new Task("Take food in the fork");
	logger.info(desc);
}

route.get('/init', function(req) {
	ctx = new Contex();
	//vertx.setTimer(1, new Activity("Chow time"));
    req.response.end('Where is my chow?');
});

route.get('/exec', function(req) {	
    req.response.end('gluglgug');
});

server.requestHandler(route).listen(8080, 'localhost');
