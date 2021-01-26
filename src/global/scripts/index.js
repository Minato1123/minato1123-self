function onClickTop () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

function bindGoTopBtn () {
  const btn = document.querySelector('#go-top')
  btn.addEventListener('click', onClickTop)
}

function scrollToElementById (id) {
  const nav = document.querySelector('#nav')
  const el = document.querySelector(`#${id}`)
  if (!el || !nav) return
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY - nav.getBoundingClientRect().height,
    behavior: 'smooth'
  })
}

function bindHashAnchors () {
  const currentHrefWithoutHash = window.location.href.replace(/#.*/, '')
  Array.from(document.querySelectorAll('a'))
    .filter((a) => a.href.startsWith(currentHrefWithoutHash) && a.href.includes('#'))
    .forEach((a) => {
      const id = a.href.split('#')[1]
      a.onclick = (e) => {
        e.preventDefault()
        console.log(id)
        scrollToElementById(id)
      }
    })
}

(() => {
  bindGoTopBtn()
  bindHashAnchors()
})()