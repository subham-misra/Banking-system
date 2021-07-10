var amount = 0;
var act=0;
function show() {
    var x = parseInt(prompt('enter the money amount'));
    var y=document.getElementById('ac').innerText;
    act=y;
    /* console.log(val);*/
    var sum = 0;
    let amt = parseInt(document.getElementById('amt').innerText);
    console.log(typeof (amt))

    sum = amt + x;

    document.getElementById('amt').innerText = sum;
    amount = x;


}function show2() {
    var x = parseInt(prompt('enter the money amount'));
    var y=document.getElementById('ac2').innerText;
    act = y;
    /* console.log(val);*/
    var sum = 0;
    let amt = parseInt(document.getElementById('amt2').innerText);
    console.log(typeof (amt))

    sum = amt + x;

    document.getElementById('amt2').innerText = sum;
    amount = x;


}

function show3() {
    var x = parseInt(prompt('enter the money amount'));
    var y=document.getElementById('ac3').innerText;
    act=y;
    /* console.log(val);*/
    var sum = 0;
    let amt = parseInt(document.getElementById('amt3').innerText);
    console.log(typeof (amt))

    sum = amt + x;

    document.getElementById('amt3').innerText = sum;
    amount = x;


}function show4() {
    var x = parseInt(prompt('enter the money amount'));
    var y=document.getElementById('ac4').innerText;
    act = y;
    /* console.log(val);*/
    var sum = 0;
    let amt = parseInt(document.getElementById('amt4').innerText);
    console.log(typeof (amt))

    sum = amt + x;

    document.getElementById('amt4').innerText = sum;
    amount = x;


}function show5() {
    var x = parseInt(prompt('enter the money amount'));
    var y=document.getElementById('ac5').innerText;
    act = y;
    /* console.log(val);*/
    var sum = 0;
    let amt = parseInt(document.getElementById('amt5').innerText);
    console.log(typeof (amt))

    sum = amt + x;

    document.getElementById('amt5').innerText = sum;
    amount = x;


}function show6() {
    var x = parseInt(prompt('enter the money amount'));
    var y=document.getElementById('ac6').innerText;
    act = y;
    /* console.log(val);*/
    var sum = 0;
    let amt = parseInt(document.getElementById('amt6').innerText);
    console.log(typeof (amt))

    sum = amt + x;

    document.getElementById('amt6').innerText = sum;
    amount = x;


}function show7() {
    var x = parseInt(prompt('enter the money amount'));
    var y=document.getElementById('ac7').innerText;
    act = y;
    /* console.log(val);*/
    var sum = 0;
    let amt = parseInt(document.getElementById('amt7').innerText);
    console.log(typeof (amt))

    sum = amt + x;

    document.getElementById('amt7').innerText = sum;
    amount = x;


}function show8() {
    var x = parseInt(prompt('enter the money amount'));
    var y=document.getElementById('ac8').innerText;
    act = y;
    /* console.log(val);*/
    var sum = 0;
    let amt = parseInt(document.getElementById('amt8').innerText);
    console.log(typeof (amt))

    sum = amt + x;

    document.getElementById('amt8').innerText = sum;
    amount = x;


}function show9() {
    var x = parseInt(prompt('enter the money amount'));
    var y=document.getElementById('ac9').innerText;
    act = y;
    /* console.log(val);*/
    var sum = 0;
    let amt = parseInt(document.getElementById('amt9').innerText);
    console.log(typeof (amt))

    sum = amt + x;

    document.getElementById('amt9').innerText = sum;
    amount = x;


}function show10() {
    var x = parseInt(prompt('enter the money amount'));
    var y=document.getElementById('ac10').innerText;
    act = y;
    /* console.log(val);*/
    var sum = 0;
    let amt = parseInt(document.getElementById('amt10').innerText);
    console.log(typeof (amt))

    sum = amt + x;

    document.getElementById('amt10').innerText = sum;
    amount = x;


}
function edit() {
    let total = parseFloat(document.getElementById('total').innerText);
    let sum = total + amount;
    console.log(sum);
    document.getElementById('total').innerText = sum;
    alert(`Current Balance:INR ${sum}`)
    sum=0;
}
function hist(){
    alert(`Account Number : ${act} & Money amount : ${amount}`)
}


//............forms....................
// return message........................
function myfunc() {
    var name = document.getElementById('exampleInputName1').value;
    var email = document.getElementById('exampleInputEmail1').value;
    var subject = document.getElementById('subject').value;
    var Name = name;
    my_window = window.open("", "mywindow1", "status=1,width=350,height=150");
    var divDisplay = '<div><h1> Thank you ' + Name + '</h1><p>' + email + '</p> <br><p>' + subject + '</p><div>';
    //my_window = window.open("file:///C:/Users/Subham/Desktop/Desktop%20Files/mystory.html");
    my_window.document.write(divDisplay);
    //my_window.document.write('<h1>'+fullName+'</h1>');
}