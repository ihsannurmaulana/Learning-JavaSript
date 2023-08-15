function bouncing_balls(height) {
  var bounces = 0;
  var heights = [];
  while (height > 0.5) {
    height = height / 2;
    heights.push(height);
    bounces += 1;
  }
  return [heights, bounces];
}

var result = bouncing_balls(7);
console.log("Deret ketinggian: ", result[0]);
console.log("Jumlah pantulan: ", result[1]);
