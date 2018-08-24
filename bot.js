const Discord = require('discord.js');
const WGET = require('wget-improved');
const Steem = require('steem');
const Auth = require('./auth.json');
const fs = require('fs');

const bot = new Discord.Client();

Steem.api.setOptions({url: 'https://api.steemit.com'});

bot.login(Auth.token);

bot.on('message', (message) => {
    if (message.content.startsWith('!ping')) {
        // You can customise this message to differentiate between multiple silent bots running at the same time on different servers
        message.channel.send('Pong :sleeping:');
    } else if (message.content.startsWith('!ipfs ')) {
        // Source video
        var command = message.content;
        var steemitAuthorPermlink = command.split('/').slice(-2);
        var author = steemitAuthorPermlink[0];

        if (author.startsWith('@')) {
            // Remove @ symbol if it is a steemit/busy link
            author = steemitAuthorPermlink[0].slice(1,steemitAuthorPermlink[0].length);
        }
        
        Steem.api.getContent(author, steemitAuthorPermlink[1], function(err, result) {
            
            if (err != null) {
                console.log('Error: ' + err);
                return;
            }
            
            // Get JSON metadata of post
            var jsonmeta = JSON.parse(result.json_metadata);

            // Get IPFS hash of source video file
            var ipfshash = jsonmeta.video.content.videohash;
            var ipfslink = 'https://video.dtube.top/ipfs/' + ipfshash;

            // Download file to server!
            let download = WGET.download(ipfslink,'./' + ipfshash);

            download.on('error',function(err) {
                // Download error
                console.log('Error downloading file: ' + err);
            });

            download.on('start',function(filesize) {
                // Get file size in MB
                var humanreadableFS = (filesize / 1048576).toFixed(2);
                console.log('IPFS hash obtained. Fetching video...\nAuthor: ' + author + '\nPermlink: ' + steemitAuthorPermlink[1] + '\nVideo file size: ' + humanreadableFS + 'MB\n\n');
            });

            download.on('end',function() {
                // Adds ipfs hash to queue for manual pinning
                if (fs.existsSync('dtubehashvalues.txt')) {
                    var readQueue = fs.readFileSync('dtubehashvalues.txt', 'utf8');
                    fs.writeFileSync('dtubehashvalues.txt', readQueue + ipfshash + '\n');  
                } else {
                    fs.writeFileSync('dtubehashvalues.txt', ipfshash + '\n');
                }
                  
                console.log('Video downloaded successfully, and added to IPFS manual pinning queue.');
            });
        });
    } else if (message.content.startsWith('!ipfs240 ')) {
        // 240p video
        var command = message.content;
        var steemitAuthorPermlink = command.split('/').slice(-2);
        var author = steemitAuthorPermlink[0];

        if (author.startsWith('@')) {
            // Remove @ symbol if it is a steemit/busy link
            author = steemitAuthorPermlink[0].slice(1,steemitAuthorPermlink[0].length);
        }
        
        Steem.api.getContent(author, steemitAuthorPermlink[1], function(err, result) {
            
            if (err != null) {
                console.log('Error: ' + err);
                return;
            }
            
            // Get JSON metadata of post
            var jsonmeta = JSON.parse(result.json_metadata);

            var ipfs240hash = jsonmeta.video.content.video240hash;
            var ipfslink = 'https://video.dtube.top/ipfs/' + ipfs240hash;

            // Download file to server!
            let download = WGET.download(ipfslink,'./' + ipfs240hash);

            download.on('error',function(err) {
                // Download error
                console.log('Error downloading file: ' + err);
            });

            download.on('start',function(filesize) {
                // Get file size in MB
                var humanreadableFS = (filesize / 1048576).toFixed(2);
                console.log('240p IPFS hash obtained. Fetching video...\nAuthor: ' + author + '\nPermlink: ' + steemitAuthorPermlink[1] + '\nVideo file size: ' + humanreadableFS + 'MB\n\n');
            });

            download.on('end',function() {
                // Adds ipfs hash to queue for manual pinning
                if (fs.existsSync('dtubehashvalues.txt')) {
                    var readQueue = fs.readFileSync('dtubehashvalues.txt', 'utf8');
                    fs.writeFileSync('dtubehashvalues.txt', readQueue + ipfs240hash + '\n');  
                } else {
                    fs.writeFileSync('dtubehashvalues.txt', ipfs240hash + '\n');
                }
                  
                console.log('Video downloaded successfully, and added to IPFS manual pinning queue.');
            });
            
        });
    } else if (message.content.startsWith('!ipfs480 ')) {
        // 480p video
        var command = message.content;
        var steemitAuthorPermlink = command.split('/').slice(-2);
        var author = steemitAuthorPermlink[0];

        if (author.startsWith('@')) {
            // Remove @ symbol if it is a steemit/busy link
            author = steemitAuthorPermlink[0].slice(1,steemitAuthorPermlink[0].length);
        }
        
        Steem.api.getContent(author, steemitAuthorPermlink[1], function(err, result) {
            
            if (err != null) {
                console.log('Error: ' + err);
                return;
            }
            
            // Get JSON metadata of post
            var jsonmeta = JSON.parse(result.json_metadata);

            var ipfs480hash = jsonmeta.video.content.video480hash;
            var ipfslink = 'https://video.dtube.top/ipfs/' + ipfs480hash;

            // Download file to server!
            let download = WGET.download(ipfslink,'./' + ipfs480hash);

            download.on('error',function(err) {
                // Download error
                console.log('Error downloading file: ' + err);
            });

            download.on('start',function(filesize) {
                // Get file size in MB
                var humanreadableFS = (filesize / 1048576).toFixed(2);
                console.log('480p IPFS hash obtained. Fetching video...\nAuthor: ' + author + '\nPermlink: ' + steemitAuthorPermlink[1] + '\nVideo file size: ' + humanreadableFS + 'MB\n\n');
            });

            download.on('end',function() {
                // Adds ipfs hash to queue for manual pinning
                if (fs.existsSync('dtubehashvalues.txt')) {
                    var readQueue = fs.readFileSync('dtubehashvalues.txt', 'utf8');
                    fs.writeFileSync('dtubehashvalues.txt', readQueue + ipfs480hash + '\n');  
                } else {
                    fs.writeFileSync('dtubehashvalues.txt', ipfs480hash + '\n');
                }
                
                console.log('Video downloaded successfully, and added to IPFS manual pinning queue.');
            });
        });
    } else if (message.content.startsWith('!ipfs720 ')) {
        // 720p video
        var command = message.content;
        var steemitAuthorPermlink = command.split('/').slice(-2);
        var author = steemitAuthorPermlink[0];

        if (author.startsWith('@')) {
            // Remove @ symbol if it is a steemit/busy link
            author = steemitAuthorPermlink[0].slice(1,steemitAuthorPermlink[0].length);
        }
        
        Steem.api.getContent(author, steemitAuthorPermlink[1], function(err, result) {
            
            if (err != null) {
                console.log('Error: ' + err);
                return;
            }
            
            // Get JSON metadata of post
            var jsonmeta = JSON.parse(result.json_metadata);

            var ipfs720hash = jsonmeta.video.content.video720hash;
            var ipfslink = 'https://video.dtube.top/ipfs/' + ipfs720hash;

            // Download file to server!
            let download = WGET.download(ipfslink,'./' + ipfs720hash);

            download.on('error',function(err) {
                // Download error
                console.log('Error downloading file: ' + err);
            });

            download.on('start',function(filesize) {
                // Get file size in MB
                var humanreadableFS = (filesize / 1048576).toFixed(2);
                console.log('720p IPFS hash obtained. Fetching video...\nAuthor: ' + author + '\nPermlink: ' + steemitAuthorPermlink[1] + '\nVideo file size: ' + humanreadableFS + 'MB\n\n');
            });

            download.on('end',function() {
                // Adds ipfs hash to queue for manual pinning
                if (fs.existsSync('dtubehashvalues.txt')) {
                    var readQueue = fs.readFileSync('dtubehashvalues.txt', 'utf8');
                    fs.writeFileSync('dtubehashvalues.txt', readQueue + ipfs720hash + '\n');  
                } else {
                    fs.writeFileSync('dtubehashvalues.txt', ipfs720hash + '\n');
                }
                
                console.log('Video downloaded successfully, and added to IPFS manual pinning queue.');
            });
        });
    } else if (message.content.startsWith('!ipfs1080 ')) {
        // 1080p video
        var command = message.content;
        var steemitAuthorPermlink = command.split('/').slice(-2);
        var author = steemitAuthorPermlink[0];

        if (author.startsWith('@')) {
            // Remove @ symbol if it is a steemit/busy link
            author = steemitAuthorPermlink[0].slice(1,steemitAuthorPermlink[0].length);
        }
        
        Steem.api.getContent(author, steemitAuthorPermlink[1], function(err, result) {
            
            if (err != null) {
                console.log('Error: ' + err);
                return;
            }
            
            // Get JSON metadata of post
            var jsonmeta = JSON.parse(result.json_metadata);

            var ipfs1080hash = jsonmeta.video.content.video1080hash;
            var ipfslink = 'https://video.dtube.top/ipfs/' + ipfs1080hash;

            // Download file to server!
            let download = WGET.download(ipfslink,'./' + ipfs1080hash);

            download.on('error',function(err) {
                // Download error
                console.log('Error downloading file: ' + err);
            });

            download.on('start',function(filesize) {
                // Get file size in MB
                var humanreadableFS = (filesize / 1048576).toFixed(2);
                console.log('1080p IPFS hash obtained. Fetching video...\nAuthor: ' + author + '\nPermlink: ' + steemitAuthorPermlink[1] + '\nVideo file size: ' + humanreadableFS + 'MB\n\n');
            });

            download.on('end',function() {
                // Adds ipfs hash to queue for manual pinning
                if (fs.existsSync('dtubehashvalues.txt')) {
                    var readQueue = fs.readFileSync('dtubehashvalues.txt', 'utf8');
                    fs.writeFileSync('dtubehashvalues.txt', readQueue + ipfs1080hash + '\n');  
                } else {
                    fs.writeFileSync('dtubehashvalues.txt', ipfs1080hash + '\n');
                }
                
                console.log('Video downloaded successfully, and added to IPFS manual pinning queue.');
            });
        });
    } else if (message.content.startsWith('!ipfssound ')) {
        // DSound audio
        var command = message.content;
        var steemitAuthorPermlink = command.split('/').slice(-2);
        var author = steemitAuthorPermlink[0];

        if (author.startsWith('@')) {
            // Remove @ symbol if it is a steemit/busy link
            author = steemitAuthorPermlink[0].slice(1,steemitAuthorPermlink[0].length);
        }

        Steem.api.getContent(author,steemitAuthorPermlink[1],function(err,result) {
            if (err != null) {
                console.log('Error: ' + err);
                return;
            }

            // Get JSON metadata of post
            var jsonmeta = JSON.parse(result.json_metadata);

            var dsoundhash = jsonmeta.audio.files.sound;
            var dsoundipfslink = 'https://ipfs.io/ipfs/' + dsoundhash;

            // Download video to server!
            let download = WGET.download(dsoundipfslink,'./' + dsoundhash);

            download.on('error',function(err) {
                // Download error
                console.log('Error downloading file: ' + err);
            });

            download.on('start',function(filesize) {
                // Get filesize in MB
                var humanreadableFS = (filesize / 1048576).toFixed(2);
                console.log('DSound audio IPFS hash obtained. Fetching audio...\nAuthor: ' + author + '\nPermlink: ' + steemitAuthorPermlink[1] + '\nAudio file size: ' + humanreadableFS + 'MB\n\n');
            });

            download.on('end',function() {
                // Adds ipfs hash to queue for manual pinning
                if (fs.existsSync('dsoundhashvalues.txt')) {
                    var readQueue = fs.readFileSync('dsoundhashvalues.txt', 'utf8');
                    fs.writeFileSync('dsoundhashvalues.txt', readQueue + dsoundhash + '\n');
                } else {
                    fs.writeFileSync('dsoundhashvalues.txt', dsoundhash + '\n');
                }
                
                console.log('Audio downloaded successfully, and added to IPFS manual pinning queue.');
            });
        });
    }
});