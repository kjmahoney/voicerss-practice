var http = require("http");
var tts = require('./voice-rss-tts/index.js');

http.createServer(function (request, response) {
  console.log('server running');
    tts.speech({
        key: API_KEY,
        hl: 'zh-cn',
        src: '你好，世界!',
        r: 0,
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false,
        b64: false,
        callback: function (error, content) {
            response.end(error || content);
        }
    });
}).listen(8081);


// tts.speech({
//       key: '59994372677347c5afdc33cba65ce706',
//       hl: 'zh-cn',
//       src: '你好，世界!',
//       r: 0,
//       c: 'mp3',
//       f: '44khz_16bit_stereo',
//       ssml: false,
//       b64: false,
//       callback: function (error, content) {
//           console.log(this);
//           response.end(error || content);
//       }
//   });


  // 'http://api.voicerss.org/?key=59994372677347c5afdc33cba65ce706&hl=zh-cn&src=你好,世界'
