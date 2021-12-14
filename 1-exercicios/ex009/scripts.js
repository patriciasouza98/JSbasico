 let contador = 0

 let res = document.querySelector('section#result')

 function contar(){
     contador ++ 
     res.innerHTML = `<p>o contador esta com ${contador} cliques.</p>`
 }

function zerar(){
    contador = 0
    res.innerHTML = null
}

