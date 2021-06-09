export default {
  inserted: el => {
    const imageElement = Array.from(el.children).find(
      el => el.nodeName === 'IMG'
    )
    const sourceElement = Array.from(el.children).find(
      el => el.nodeName === 'SOURCE'
    )

    function loadImage () {
      if (imageElement) {
        imageElement.addEventListener('load', () => {
          setTimeout(() => el.classList.add('loaded'), 100)
        })
        imageElement.src = imageElement.dataset.src
      }
      if (sourceElement) {
        sourceElement.srcset = sourceElement.dataset.srcset
      }
    }

    function handleIntersect (entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadImage()
          observer.unobserve(el)
        }
      })
    }

    function createObserver () {
      const options = {
        root: null,
        threshold: 0
      }
      const observer = new IntersectionObserver(handleIntersect, options)
      observer.observe(el)
    }

    function handleMutation (mutations) {
      mutations.forEach(mutation => {
        if (mutation.attributeName === 'data-src' && mutation.attributeName === 'data-srcset') {
          loadImage()
        }
      })
    }

    function createMutationsObserver () {
      const options = {
        subtree: true,
        attributes: true,
        attributeFilter: ['data-src', 'data-srcset']
      }
      const observer = new MutationObserver(handleMutation)

      observer.observe(el, options)
    }

    if (window['MutationObserver']) {
      createMutationsObserver()
    }

    if (window['IntersectionObserver']) {
      createObserver()
    } else {
      loadImage()
    }
  }
}
