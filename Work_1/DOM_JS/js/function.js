const node_for_click = document.getElementById("for_click")

function find_edit(){
    const last = document.getElementById("last")
    console.log(last.innerText)
    last.innerText = 'SARANA'

    const first = document.getElementById("first")
    console.log(first.innerText)
    first.innerText = 'ELIZAVETA'

/*
    const year = document.getElementsByTagName('span')[9]
    console.log(year.innerText)
    year.innerText = 'two_thousand_and_four'
*/

}

node_for_click.addEventListener("click",find_edit)
