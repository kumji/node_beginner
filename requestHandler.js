//var exec = require("child_process").exec;
var querystring = require("querystring"),
		fs = require("fs");


function start(response) {
	console.log("Request handler 'start' was called");
	var body = '<html>'+'<head>'+'<meta http-equiv="Content-Type" content="text/html; '
							+'charset=UTF-8" />'+'</head>'+'<body>'+'<form action="/upload" method="post">'
							+'<textarea name="text" rows="20" cols="60"></textarea>'
							+'<input type="submit" value="Submit text" />'+'</form>'+'</body>'+'</html>';

	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();
});

function upload(response, postData) {
	console.log("Request handler 'upload' was called");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("You've sent the text: " +	querystring.parse(postData).text);
	response.end();
};

function show(response) {
	console.log("Request handler 'show' was called.");
	response.writeHead(200, {"Content-Type": "image/png"});
	fs.createReadStream("/tmp/test.png").pipe(response);
};

exports.start = start;
exports.upload = upload;
exports.show =show;


	// exec("find /",
	// { timeout: 10000, maxBuffer: 20000*1024 }, function (error, stdout, stderr) {
 //      response.writeHead(200, {"Content-Type": "text/plain"});
 //      response.write(stdout);
 //      response.end();
	// });


	// var content = "empty";

	// exec("ls -lah", function (error, stdout, stderr) {
	// 	content = stdout;
	// });
	// return content;

	// function sleep(milliSeconds) {
	// 	var startTime = new Date().getTime();
	// 	while (new Date().getTime() < startTime + milliSeconds);
	// }

 //  	sleep(10000);
	// return "Hello Start";

