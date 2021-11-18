

let capturandoBarra=document.getElementById('barra')

document.getElementById('25').addEventListener('click', function(){
    capturandoBarra.style.width='25%'
  });

document.getElementById('50').addEventListener('click',function(){
    capturandoBarra.style.width='50%'
})

document.getElementById('75').addEventListener('click',function(){
    capturandoBarra.style.width='75%'
})

document.getElementById('100').addEventListener('click',function(){
    capturandoBarra.style.width='100%'
})