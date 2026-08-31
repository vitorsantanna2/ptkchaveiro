document.addEventListener('DOMContentLoaded', () => {
  const phone = '5521992312852'
  const whatsapp = '5521992312852'

  const phoneLink = document.getElementById('phone-link')
  const whatsappLink = document.getElementById('whatsapp-link')
  const mobileCallBtn = document.getElementById('mobile-call-btn')
  const heroImage = document.getElementById('hero-image')
  const form = document.getElementById('contact-form')

  if (heroImage) {
    heroImage.addEventListener('error', () => {
      heroImage.style.display = 'none'
      heroImage.parentElement.classList.add('image-fallback')
    })
  }

  const cleanNumber = (value) => (value || '').replace(/\D/g, '')
  const formatPhone = (value) => {
    const digits = cleanNumber(value)
    const displayDigits = digits.startsWith('55') && digits.length > 11 ? digits.slice(2) : digits

    if (displayDigits.length === 11) {
      return `(${displayDigits.slice(0, 2)}) ${displayDigits.slice(2, 7)}-${displayDigits.slice(7)}`
    }
    if (displayDigits.length === 10) {
      return `(${displayDigits.slice(0, 2)}) ${displayDigits.slice(2, 6)}-${displayDigits.slice(6)}`
    }
    return displayDigits || '(00) 00000-0000'
  }

  const updatePhoneLinks = () => {
    const phoneDigits = cleanNumber(phone)
    const whatsappDigits = cleanNumber(whatsapp)

    if (phoneDigits) {
      phoneLink.href = `tel:${phoneDigits}`
      phoneLink.textContent = formatPhone(phone)
      mobileCallBtn.href = `tel:${phoneDigits}`
      mobileCallBtn.textContent = 'Ligar agora'
    } else {
      phoneLink.href = '#'
      phoneLink.textContent = '(00) 00000-0000'
      phoneLink.addEventListener('click', (event) => {
        event.preventDefault()
        alert('Número de telefone não configurado. Ajuste a variável phone no script.js.')
      })
    }

    if (whatsappDigits) {
      whatsappLink.href = `https://wa.me/${whatsappDigits}`
      whatsappLink.textContent = 'Mensagem direta'
    } else {
      whatsappLink.href = '#'
      whatsappLink.addEventListener('click', (event) => {
        event.preventDefault()
        alert('WhatsApp não configurado. Ajuste a variável whatsapp no script.js.')
      })
    }
  }

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault()

      const formData = new FormData(form)
      const name = formData.get('name')?.toString().trim() || 'Cliente'
      const service = formData.get('service')?.toString().trim() || 'Atendimento'
      const messageText = formData.get('message')?.toString().trim() || 'Gostaria de mais informações.'
      const whatsappDigits = cleanNumber(whatsapp)

      if (!whatsappDigits) {
        alert('WhatsApp não configurado. Ajuste a variável whatsapp no script.js.')
        return
      }

      const text = `Olá, PTK Chaveiro!%0A%0A*Nome:* ${encodeURIComponent(name)}%0A*Serviço:* ${encodeURIComponent(service)}%0A*Mensagem:* ${encodeURIComponent(messageText)}`
      window.open(`https://wa.me/${whatsappDigits}?text=${text}`, '_blank')
    })
  }

  updatePhoneLinks()
})
