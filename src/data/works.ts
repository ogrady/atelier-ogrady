import data from './raw.json'

export type Artwork = typeof data.artwork[number]
export const artworks: Artwork[] = data.artwork

export const categories = Array.from(new Set(artworks.map(a => a.type))).map(type => ({
  id: type,
  title: type,
  works: artworks.filter(a => a.type === type),
}))

export function getCategoryById(id: string) {
  return categories.find((c) => c.id === id)
}