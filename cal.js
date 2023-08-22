function add(){
    let a = Number(document.getElementById('n1').value);
    let b = Number(document.getElementById('n2').value);
    let ans = a+b;
    document.getElementById('ans').value=ans;
}
function sub(){
    let c = Number(document.getElementById('n1').value);
    let d = Number(document.getElementById('n2').value);
    let ans = c-d;
    document.getElementById('ans').value=ans;
}
function mul(){
    let e = Number(document.getElementById('n1').value);
    let f = Number(document.getElementById('n2').value);
    let ans = e*f;
    document.getElementById('ans').value=ans;
}
function div(){
    let g = Number(document.getElementById('n1').value);
    let h = Number(document.getElementById('n2').value);
    let ans = g/h;
    document.getElementById('ans').value=ans;
}