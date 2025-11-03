// server/api/variations.ts
import { defineSitemapEventHandler } from '#imports'

const fixedLastMod = new Date('2025-10-28').toISOString()

type Changefreq =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never'

interface Variation {
  id: string
  varos: string
  kerulet: string
  marka: string
  modell: string
  szerviz_tipus: string
  extra_igeny: string
  szerviz_nev: string
  ev: number
  title: string
  meta_description: string
  h1: string
  body?: string
  image_url?: string
  video_url?: string
}

import variaciok from '../data/betonozas_seo.json'

export default defineSitemapEventHandler(async () => {
  try {
    const variations: Variation[] = variaciok as Variation[]
    const baseUrl = process.env.BASE_URL || 'https://aszfaltozas24.hu'

    return variations.map((variation: Variation) => {
      const slugUrl = `/betonozas/${variation.id}`
      
      // Fix kép URL
      const imageUrl = `${baseUrl}img/default.jpg`

      return {
        loc: slugUrl,
        lastmod: fixedLastMod,
        changefreq: 'monthly' as Changefreq,
        priority: 0.9,
        // A _images mező a nuxt-sitemap modulban használatos a képekhez
        _images: [
          {
            url: imageUrl,
            title: variation.title || `${variation.marka} ${variation.modell} ${variation.szerviz_tipus}`,
            caption: variation.meta_description || `${variation.marka} ${variation.modell} ${variation.szerviz_tipus} ${variation.kerulet}`,
            // Opcionális mezők
            license: 'https://aszfaltozas24.hu/license',
            geoLocation: 'Budapest, Hungary',
          }
        ],
        // Alternatív módszer, ha a fenti nem működik
        images: [
          {
            loc: imageUrl,
            title: variation.title || `${variation.marka} ${variation.modell} ${variation.szerviz_tipus}`,
            caption: variation.meta_description || `${variation.marka} ${variation.modell} ${variation.szerviz_tipus} ${variation.kerulet}`,
          }
        ]
      }
    })
  } catch (error) {
    console.error('Error generating sitemap for mobile service variations:', error)
    return []
  }
})