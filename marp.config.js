const canonicalUrl = process.env.URL || undefined
const ogImage = (() => {
  if (canonicalUrl) return `${canonicalUrl}/og-image.jpg`
  if (process.env.VERCEL_URL)
    return `https://${process.env.VERCEL_URL}/og-image.jpg`

  return undefined
})()

module.exports = {
  allowLocalFiles: true,
  ogImage,
  themeSet: 'themes',
  url: canonicalUrl,
}
