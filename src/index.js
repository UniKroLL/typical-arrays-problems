
exports.min = function min (array) {

  if (array == undefined || array.length == 0){return 0};

  let min = 0;
  let curr = 0;

  for (let i=0; i<array.length; i++){
      curr = array[i];
      min = curr < min ? curr : min;
  }
  return min;
}

exports.max = function max (array) {
    if (array == undefined || array.length == 0){return 0};
    let max = 0;
    let curr = 0;
    console.log(array);
    for (let i=0; i<array.length; i++){
        curr = array[i];
        max = curr > max ? curr : max;
    }
    return max;
}

exports.avg = function avg (array) {
    if (array == undefined || array.length == 0){return 0};
    let avg = 0;
    let arl = array.length;
    let summ = 0;
    console.log(array);
    for (let i=0; i<arl; i++){
        summ = summ+array[i];
        avg = summ/arl;
    }
    return avg;
}
