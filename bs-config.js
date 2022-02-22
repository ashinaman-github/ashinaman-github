const { extname } = require('path');
const { get, run } = require('node-cmd');


/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
module.exports = {
  "ui": {
    "port": 3001
  },
  "files": [
    `${process.env.npm_package_config_out}/**/*`,
    {
      match: `${process.env.npm_package_config_entry}/**/*`,
      fn: (event, file) => {
        // console.log(`[${event.toUpperCase()}] ${file}`);
        let isInc = (file.indexOf('/'+process.env.npm_package_config_inc+'/') != -1 ? true : false);
        let kakucyoushi = file.split('.')[1];
        let cmd = '';
        switch(extname(file)) {
          case '.ejs':
            if(isInc) {
              cmd = 'cross-conf-env npm run html -- /**/*.ejs';
            }else{
              cmd = `cross-conf-env npm run html -- ${file.split(process.env.npm_package_config_entry)[1]}`;
            }
          break;
          case '.scss':
            cmd = "cross-conf-env npm-run-all -p \"css -- -o "+process.env.npm_package_config_out+"\" \"autoprefixer\"";
          break;
        }
        if(cmd != '') {
          return get(
            cmd,
            function(err, data, stderr){
              if (!err) {
                 console.log(`\n\u001b[32m=> Running:\u001b[0m ${cmd}`,data)
              } else {
                 console.log(`\n\u001b[31m=> Error:\u001b[0m ${cmd}`,err)
              }
            }
          );
        }
      }
    }
  ],
  "watchEvents": [
      "change"
  ],
  "watch": true,
  "ignore": [],
  "single": false,
  "watchOptions": {
      "ignoreInitial": true
  },
  "server": {
      "baseDir": "dist",
      "index": "index.html",
      "serveStaticOptions": {
        "extensions": ["html"]
      }
  },
  "proxy": false,
  "port": 3000,
  "middleware": false,
  "serveStatic": [],
  "ghostMode": {
      "clicks": true,
      "scroll": true,
      "location": true,
      "forms": {
          "submit": true,
          "inputs": true,
          "toggles": true
      }
  },
  "logLevel": "info",
  "logPrefix": "Browsersync",
  "logConnections": false,
  "logFileChanges": true,
  "logSnippet": true,
  "rewriteRules": [],
  "open": false,
  "online": true,
  "browser": "default",
  "cors": false,
  "xip": false,
  "hostnameSuffix": false,
  "reloadOnRestart": false,
  "notify": true,
  "scrollProportionally": true,
  "scrollThrottle": 0,
  "scrollRestoreTechnique": "window.name",
  "scrollElements": [],
  "scrollElementMapping": [],
  "reloadDelay": 0,
  "reloadDebounce": 500,
  "reloadThrottle": 0,
  "plugins": [],
  "injectChanges": true,
  "startPath": null,
  "minify": true,
  "host": null,
  "localOnly": false,
  "codeSync": true,
  "timestamps": true,
  "clientEvents": [
      "scroll",
      "scroll:element",
      "input:text",
      "input:toggles",
      "form:submit",
      "form:reset",
      "click"
  ],
  "socket": {
      "socketIoOptions": {
          "log": false
      },
      "socketIoClientConfig": {
          "reconnectionAttempts": 50
      },
      "path": "/browser-sync/socket.io",
      "clientPath": "/browser-sync",
      "namespace": "/browser-sync",
      "clients": {
          "heartbeatTimeout": 5000
      }
  },
  "tagNames": {
      "less": "link",
      "scss": "link",
      "css": "link",
      "jpg": "img",
      "jpeg": "img",
      "png": "img",
      "svg": "img",
      "gif": "img",
      "js": "script"
  },
  "injectNotification": false
};
