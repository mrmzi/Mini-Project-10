let BT=document.getElementById('bt');
let p=document.getElementById('p1');
let inp=document.getElementById('inp');
BT.addEventListener('click',()=>{

     p.innerHTML+=new persianDate(new Date(inp.value)).toLocale('en').format("YYYY/MM/DD")+'<br>'
   
})
