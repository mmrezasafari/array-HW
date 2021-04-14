function deleteByIndex (array,n){
    array.splice(n , n) ;
    return array ;
}

arr = ["css" , "HTML" , "JS" , "Bootstrap"] ;

console.log(deleteByIndex(arr , 1));