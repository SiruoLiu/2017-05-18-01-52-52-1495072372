
class Sequence {
	
  constructor(input) {
    // Write your code here
	 this.array=input;
  }

  minimum() {
    // Write your code here
	var min = array[0];
	var len = array.length;
	for (var i = 1; i < len; i++){ 
	if (array[i] < min){ 
	min = array[i]; 
	}
	}
	return min;
  }
  maximum() {
    // Write your code here
	var max = array[0];
	var len = array.length; 
	for (var i = 1; i < len; i++){ 
	if (array[i] > max) { 
	max = array[i]; 
	} 
	} 
	return max;
  }
	count() {
    // Write your code here
	return array.length;
  }
  average() {
  
  var len = array.length;
  var sum=0;
    // Write your code here
	for (var i = 0; i < len; i++){ 
	sum+=array[i];
	} 
	return sum/len;
  }

  // Write your code here
}module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
	console.log(o) 最大值 = ${sequence.maximum()}
	console.log(o) 元素数量 = ${sequence.count()}
	console.log(o) 平均值 = ${sequence.average()}
// Write your code here
`);
};



