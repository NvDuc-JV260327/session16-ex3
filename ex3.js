function sum(a, b) {
    if(isNaN(Number(a)) || isNaN(Number(b))) {
        return "Nhập vào số";
    }
    return a + b;
}
let a = +prompt("Nhập số thứ nhất");
let b = +prompt("Nhập số thứ 2");
alert("Tổng của 2 số là : " +sum(a, b));