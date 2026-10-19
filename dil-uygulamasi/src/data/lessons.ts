import type { Lesson } from '../types'

export const lessons: Lesson[] = [
  {
    id: 'en-basics-1',
    title: 'Temel Kelimeler',
    from: 'en',
    to: 'tr',
    words: [
      { id: 'hello', term: 'Hello', translation: 'Merhaba', example: 'Hello, how are you?' },
      { id: 'thanks', term: 'Thank you', translation: 'Teşekkür ederim' },
      { id: 'water', term: 'Water', translation: 'Su', example: 'Can I have some water?' },
      { id: 'book', term: 'Book', translation: 'Kitap' },
      { id: 'friend', term: 'Friend', translation: 'Arkadaş', example: 'She is my best friend.' },
    ],
  },
]
