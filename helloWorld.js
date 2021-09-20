function foo2(){
try {

    a = 1;
    b = 2;
    c = b + a;
   // alert(c)
}
catch (err){

    alert(`problem ${err.toString()}`)
}

try {
    message = "Last load " + new Date().toLocaleString();
    eName = "d01"
    document.getElementById(eName).innerHTML = "X";
   // window.prompt("what are you?")


}
catch (err){
    alert (err)

}

}


function hello(){

    document.getElementById("blah").innerHTML = "screw you man";
    document.getElementById("d01").innerHTML = "X";
}
