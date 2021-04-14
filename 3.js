function deleteDuplicate(array) {
    let x = [];
    array.forEach(function(i) {
      if(!x[i]) {
        x[i] = true
      }
    })
    return Object.keys(x)
}


let arr = [1,1,2,2,3,4,5,1,2,7,8,9,8];
console.log(deleteDuplicate(arr));
