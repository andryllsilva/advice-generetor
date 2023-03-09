let buttonDice = document.querySelector('.dice');
let msgAdvice = document.querySelector('.msg');


async function gerarConselho(){
    const url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url)
    return await resposta.json()
}


 async function trocarConselho(){
    let conselho =  await gerarConselho();
    msgAdvice.innerHTML =  conselho.slip.advice;
}


buttonDice.addEventListener('click', (e)=>{
    trocarConselho()
})

