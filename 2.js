function sortArray (a, b , c){
    let combine = a.concat(b , c) ;
    return combine.sort() ;
}

arr1 = [1, 2 ,3];
arr2 = [6, 5 ,4];
arr3 = [8, 7 ,9];

console.log(sortArray(arr1 , arr2 , arr3));
