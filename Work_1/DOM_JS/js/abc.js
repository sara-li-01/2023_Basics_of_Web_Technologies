function verify() {
    console.log("a, h, r, m")
    let a = parseInt(elementA.innerText);
    let h = parseInt(elementH.innerText);
    let r = parseInt(elementR.innerText);
    let m = parseInt(elementM.innerText);
    console.log(a, h, r, m)

    let cube=Math.pow(a,3);
    let cylinder=h*Math.PI*Math.pow(r,2);

    if (cube<=m) {
        result_1 = "Да"
    } else {
        result_1 = "Нет"
    }

    if (cylinder<=m) {
        result_2 = "Да"
    } else {
        result_2 = "Нет"
    }

   if ((cylinder+cube)<=m) {
        result_3 = "Да"
    } else {
        result_3 = "Нет"
    }

     document.getElementById("result_1").innerText =  result_1;
     document.getElementById("result_2").innerText =  result_2;
     document.getElementById("result_3").innerText =  result_3;
}

const elementA = document.getElementById("a");
const elementH = document.getElementById("h");
const elementR = document.getElementById("r");
const elementM = document.getElementById("m");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);
