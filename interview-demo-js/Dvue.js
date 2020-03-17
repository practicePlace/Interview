// 思路： 
// 第一版： 先实现简单的debounce函数
// 第二版： 再实现改变this指向， 改变剩余参数
// 第三版： 实现立刻执行
// 第四版： 返回值
// 第五版： 取消


var count = 1;
var container = document.getElementById('container');

function getUserAction() {
  container.innerHTML = count++;
  console.log('this', this) // 指向window
};
function debounce(func, wait) {
  var timeout
  return function () {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      func.apply(this, arguments)
    }, wait);
  }
  // 2
  // var timeout;
  // return function () {
  //   console.log('debounce', this)
  //   var context = this // 改变this指向、
  //   var args = arguments; //  改变剩余参数

  //   clearTimeout(timeout)
  //   timeout = setTimeout(function () {
  //     func.apply(context) // 改变this指向、 剩余参数
  //   }, wait);
  // }
  // 3
  // let timeout = null; // 创建一个标记用来存放定时器的返回值
  // return function () {
  //   clearTimeout(timeout); // 每当用户输入的时候把前一个 setTimeout clear 掉
  //   timeout = setTimeout(() => { // 然后又创建一个新的 setTimeout, 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
  //     fn.apply(this, arguments);
  //   }, 500);
  // };
}

container.onmousemove = debounce(getUserAction, 1000);
