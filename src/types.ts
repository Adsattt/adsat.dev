/* SITE */
export type Url = `http://${string}` | `https://${string}`
type Path = `/${string}`

export interface SiteConfig {
    website: Url
    base: Path
    title: string
    description: string
    author: string
    lang: string
    ogLocale: string
    imageDomains?: string[]
}
