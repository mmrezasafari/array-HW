function flatArrays(array) {
    let flatArray = [] ;
    flatArray = array.flat(array.length) ;

    return flatArray ;
}

arr = [1,2,3,[3,4],[32,4]]

console.log(flatArrays(arr))
