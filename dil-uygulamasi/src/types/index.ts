export type LanguageCode = 'tr' | 'en' | 'de' | 'es' | 'fr'

export interface Word {
  id: string
  term: string
  translation: string
  example?: string
}

export interface Lesson {
  id: string
  title: string
  from: LanguageCode
  to: LanguageCode
  words: Word[]
}
