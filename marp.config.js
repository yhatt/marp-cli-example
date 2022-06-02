const url =
  process.env.URL ||
  (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
  undefined

module.exports = {
  allowLocalFiles: true,
  ogImage: url && `${url}/og-image.jpg`,
  themeSet: 'themes',
  url,
}
