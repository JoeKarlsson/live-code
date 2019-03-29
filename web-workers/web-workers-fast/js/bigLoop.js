console.log('hit');

for (var i = 0; i <= 10000001; i += 1) {
   var j = i;
}
console.log('j', j);

postMessage(j);