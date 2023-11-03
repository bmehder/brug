export const observer = (node, callbacks) => {
  const options = { threshold: 0.9 }

  const callback = x => (x.isIntersecting ? callbacks.in() : callbacks.out())

  const observer = new IntersectionObserver(xs => xs.forEach(callback), options)

  observer.observe(node)

  return {
    destroy() {
      observer.unobserve(node)
    },
  }
}
