// importScripts('../relative/path/lib.min.js', '../../other/lib.js');

for (var i = 0; i <= 20500001; i += 1) {
   var j = i;
   if(i%5000 === 0 ) {
      postMessage({ type: 'status', data: j });
   }
}

postMessage({ type: 'complete', data: j});