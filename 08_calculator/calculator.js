const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  
  return arr.reduce((sum,value)=>{return sum+value},0);
};

const multiply = function(arr) {
  return arr.reduce((product,value)=>{return product*value},1);
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(input) {
  let product=1;
	for(let i=0;i<=input;i++){
    if(i===0) continue;
    product*=i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
