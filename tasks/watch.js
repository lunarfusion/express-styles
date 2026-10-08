const chokidar = require('chokidar');
const shell = require('shelljs');

let timer = null;

function build() {
  shell.exec('gulp css', { async: true });
}

chokidar.watch(['src/**'], { ignoreInitial: true }).on('change', (path) => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    console.log(`Changed: ${path}`);
    build();
  }, 200);
});