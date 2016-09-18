console.log('FTP Upload Files');

var Client = require('ftp');
var fs = require('fs');

var c = new Client();
c.on('ready', function() {
    console.log('FTP 连接成功');

    // c.list(function(err, list) {
    //     if (err) throw err;
    //     console.dir(list);
    //     c.end();
    // });

    // c.get('foo.txt', function(err, stream) {
    //     if (err) throw err;
    //     stream.once('close', function() { c.end(); });
    //     stream.pipe(fs.createWriteStream('foo.local-copy.txt'));
    // });
   
    c.put('123.png', '456.png', function(err) {
        if (err) throw err;
        c.end();
    });
});

// connect to localhost:21 as anonymous
c.connect({
    host: '10.0.0.133',
    port: 21,
    user: 'zjruan',
    password: '123'
});
