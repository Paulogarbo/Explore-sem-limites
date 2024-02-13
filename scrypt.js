document.addEventListener('DOMContentLoaded', function() {
  const scrollButton = document.getElementById('button-scroll')
  const pageFooter = document.getElementById('page-footer')

  // Adiciona um evento de clique ao botão
  scrollButton.addEventListener('click', function() {
    // Obtém a posição do elemento <main>
    const mainSection = document.querySelector('main')
    const mainSectionPosition = mainSection.offsetTop

    // Rola a página até a posição do elemento <main>
    window.scrollTo({
      top: mainSectionPosition,
      behavior: 'smooth' // Adiciona um comportamento de rolagem suave
    })
  })

  // event footer
  window.addEventListener('scroll', function() {
    const footerPosition = pageFooter.getBoundingClientRect().top

    const windowHeight = window.innerHeight

    if (footerPosition < windowHeight) {
      pageFooter.classList.add('footer-animation')
    }
  })
})
