var http = require('http');
var url = require('url');
var fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end()
        })
    } else if (req.url == '/about') {
        fs.readFile('about.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end()
        })

    } else if (req.url === '/contact') {
        fs.readFile('contact-me.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end()
        })

    } else {
        fs.readFile('404.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end()
        })

    }
});

server.listen(8080);

// http.createServer(function (req, res) {
//     var q = url.parse(req.url, true);
//     var filename = "." + q.pathname;
//     fs.readFile(filename, function(err, data) {
//         if (err) {
//             filename = 404;
//             res.writeHead(404, {'Content-Type': 'text/html'});
//             res.write(fs.readFile('./404.html', {encoding: 'utf-8' }));
//             return res.end();
//         }

//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         return res.end();
//     });
// }).listen(8080);