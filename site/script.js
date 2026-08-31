// script.js — comportamento mínimo para os botões
document.addEventListener('DOMContentLoaded', function(){
  const callBtn = document.getElementById('call-btn')
  const waBtn = document.getElementById('whatsapp-btn')

  // Substitua estes valores pelos números reais, se desejar.
  const phone = ''
  const whatsapp = ''

  if(phone){
    callBtn.href = `tel:${phone}`
    callBtn.textContent = 'Ligar: ' + phone
  } else {
    callBtn.href = '#'
    callBtn.addEventListener('click', ()=> alert('Número de telefone não configurado.'))
  }

  if(whatsapp){
    waBtn.href = `https://wa.me/${whatsapp.replace(/\D/g,'')}`
    waBtn.textContent = 'WhatsApp'
  } else {
    waBtn.href = '#'
    waBtn.addEventListener('click', ()=> alert('WhatsApp não configurado.'))
  }
})
