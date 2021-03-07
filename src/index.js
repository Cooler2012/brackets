module.exports = function check(str, bracketsConfig) {
    let arr = str.split('');
    let array = [];
   
    for ( let i = 0; i < arr.length; i++) {
        for ( let j = 0; j < bracketsConfig.length; j++) {
          let item = bracketsConfig[j];
          if (arr[i] == item[1] && array[array.length-1] == item[0]) {
            array.pop()
          } else if (arr[i] == item[0]) {
            array.push(arr[i])
          }
        }
        //console.log(array)
      }

    if (str.length % 2 !==0){
        return false
    } else if(array.length == 0) {
            return true
    } else {
            return false
    }
}
    
    