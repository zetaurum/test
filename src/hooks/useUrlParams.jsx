export default function useUrlParams(keys) {
  if (!Array.isArray(keys)) {
    throw new Error('keys must me an array')
  }

  const returnParams = {}
  if (process.browser) {
    const search = window.location.search
    const params = new URLSearchParams(search)

    keys.forEach(key => {
      returnParams[key] = params.get(key) || ''
    })
  }

  return returnParams
}
