
var likes;
var timer;
function startCount() {
  timer = setInterval(count,1000);
  likes = setInterval(count2,1000);
}
function count() {
  var t = document.getElementById('time');
  var currentNum = parseFloat(t.innerHTML);
  t.innerHTML = currentNum+46000;
}
function count2() {
  var s = document.getElementById('liketext');
  var d = parseFloat(s.innerHTML);
  s.innerHTML = d+52000;
}