debugger
var obj = { a: 1 };
function Namea (obj) {
//   consoe.log(obj)

  obj.a = 2;
//   console.log(obj)
  obj = { a: 3 };
//   console.log(obj)
  return obj;

}
obj=Namea(obj);
console.log(obj);
