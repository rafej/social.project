var loader = document.getElementById('loader')
  , border = document.getElementById('border')
  , α = 0
  , π = Math.PI
  , i = 1;

(function draw() {
  α++;
  α %= 360;
  var r = ( α * π / 180 )
    , x = Math.sin( r ) * 125
    , y = Math.cos( r ) * - 125
    , mid = ( α > 180 ) ? 1 : 0
    , anim = 'M 0 0 v -125 A 125 125 1 ' 
           + mid + ' 1 ' 
           +  x  + ' ' 
           +  y  + ' z';
  //[x,y].forEach(function( d ){
  //  d = Math.round( d * 1e3 ) / 1e3;
  //});
 
  loader.setAttribute( 'd', anim );
  border.setAttribute( 'd', anim );
   // Redraw
   setTimeout(draw,i) 
}) ();

var timer;
function startCount() {
  timer = setInterval(count,1000);
}
function count() {
  var t = document.getElementById('time');
  var currentNum = parseFloat(t.innerHTML);
  t.innerHTML = currentNum+ 46000;
}
