const coords = {
  x: 10,
  y: 20,
};
//             { x: 10,y: 20}
function Hello({ x: x, y: y}) {
  // const x = props.x;
  // const y = props.y;
  console.log('x : ' + x);
  console.log('y : ' + y);
}

function Hello({ x = 0, y = 0 }) {
  // const x = props.x || 0;
  // const y = props.y || 0;
  console.log('x : ' + x);
  console.log('y : ' + y);
}


Hello(coords);