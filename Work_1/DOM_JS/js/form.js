function verify() {
    console.log("a, h, r, m")
    let a = parseInt(elementA.value);
    let h = parseInt(elementH.value);
    let r = parseInt(elementR.value);
    let m = parseInt(elementM.value);
    console.log(a, h, r, m)

    let cube=Math.pow(a,3);
    let cylinder=h*Math.PI*Math.pow(r,2);

    if (cube<=m) {
        result_1 = "Да"
        document.getElementById("result_1").innerText = messageText + result_1;
        document.getElementsByName('result_1')[0].value = result_1;
    } else {
        result_1 = "Нет"
        document.getElementById("result_1").innerText = messageText + result_1;
        document.getElementsByName('result_1')[0].value = result_1;
    }
    if (cylinder<=m) {
        result_2 = "Да"
        document.getElementById("result_2").innerText = messageText_2 + result_2;
        document.getElementsByName('result_2')[0].value = result_2;
    } else {
        result_2 = "Нет"
        document.getElementById("result_2").innerText = messageText_2 + result_2;
        document.getElementsByName('result_2')[0].value = result_2;
    }
    if ((cylinder+cube)<=m) {
        result_3 = "Да"
        document.getElementById("result_3").innerText = messageText_3 + result_3;
        document.getElementsByName('result_3')[0].value = result_3;
    } else {
        result_3 = "Нет"
        document.getElementById("result_3").innerText = messageText_3 + result_3;
        document.getElementsByName('result_3')[0].value = result_3;
    }
}

function send() {
    let textCondition = document.getElementsByTagName('p')[0].innerText
    document.getElementsByName('formulation')[0].value = textCondition;
    document.getElementsByName('result_1')[0].value = result_1;
    document.getElementsByName('result_2')[0].value = result_2;
    document.getElementsByName('result_3')[0].value = result_3;
    document.getElementById("UserEnter").submit();
}

function verify_send() {
    verify();
    send();
}

let result_1, result_2, result_3;

let messageText = document.getElementById("result_1").innerText
console.log(messageText)

let messageText_2 = document.getElementById("result_2").innerText
console.log(messageText_2)

let messageText_3 = document.getElementById("result_3").innerText
console.log(messageText_3)

const elementA = document.getElementById("a");
elementA.addEventListener('input', verify);

const elementH = document.getElementById("h");
elementH.addEventListener('keyup', verify);

const elementR = document.getElementById("r");
elementR.addEventListener('keyup', verify);

const elementM = document.getElementById("m");
elementM.addEventListener('keyup', verify);

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)
