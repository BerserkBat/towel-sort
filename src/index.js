module.exports = function towelSort (matrix) {
    let result = [];
    if(arguments.length===0){
        return result;
    }
    let length = matrix.length;
    for (let i = 0; i<matrix.length; i++){
        if(i%2===1){
            matrix[i] = matrix[i].reverse();
        }
        for (let b=0; b<matrix[i].length; b++){
            result.push(matrix[i][b]);
        }
    }
  return result;
}
