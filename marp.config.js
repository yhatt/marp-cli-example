const url = process.env.URL || process.env.VERCEL_URL || undefined

module.exports = {
  allowLocalFiles: true,
  ogImage: url && `${process.env.URL}/og-image.jpg`,
  themeSet: 'themes',
  url,
}
