


  // Write your code here
module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
	o) 最大值 = ${sequence.maximum()}
	o) 元素数量 = ${sequence.count()}
	o) 平均值 = ${sequence.average()}
// Write your code here
`);
};

class Sequence {
	
  constructor(input) {
    // Write your code here
	 this.array=input;
  }

  minimum() {
    // Write your code here
	var min = this.array[0];
	var len = this.array.length;
	for (var i = 1; i < len; i++){ 
	if (this.array[i] < min){ 
	min = this.array[i]; 
	}
	}
	return min;
  }
  maximum() {
    // Write your code here
	var max = this.array[0];
	var len = this.array.length; 
	for (var i = 1; i < len; i++){ 
	if (this.array[i] > max) { 
	max = this.array[i]; 
	} 
	} 
	return max;
  }
	count() {
    // Write your code here
	return this.array.length;
  }
  average() {
  
  var len = this.array.length;
  var sum=0;
    // Write your code here
	for (var i = 0; i < len; i++){ 
	sum+this.array[i];
	} 
	return (sum/len*100)/100;
  }
}
