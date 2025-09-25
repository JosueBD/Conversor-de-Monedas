document.addEventListener('DOMContentLoaded',()=>{
  const tasas={USD:{USD:1,EUR:0.92,CUP:24},EUR:{USD:1.09,EUR:1,CUP:26},CUP:{USD:0.042,EUR:0.038,CUP:1}};
  document.getElementById('convertir').onclick=()=>{
    const cant=parseFloat(document.getElementById('cantidad').value)||0;
    const o=document.getElementById('origen').value;
    const d=document.getElementById('destino').value;
    const res=cant*tasas[o][d];
    document.getElementById('resultado').textContent=`Resultado: ${res.toFixed(2)} ${d}`;
  };
});
