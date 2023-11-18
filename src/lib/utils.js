export const observer = (node, params) => {

  const callback = x =>
		x.isIntersecting ? params.callbacks.in(x) : params.callbacks.out(x)

  const observer = new IntersectionObserver(xs => xs.forEach(callback), params.options)

  observer.observe(node)

  return {
    destroy() {
      observer.unobserve(node)
    },
  }
}
