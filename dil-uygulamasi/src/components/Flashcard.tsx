import { useState } from 'react'
import type { Word } from '../types'

interface FlashcardProps {
  word: Word
}

export function Flashcard({ word }: FlashcardProps) {
  const [revealed, setRevealed] = useState(false)

  return (
    <button className="flashcard" onClick={() => setRevealed((r) => !r)}>
      <span className="term">{word.term}</span>
      {revealed && (
        <>
          <span className="translation">{word.translation}</span>
          {word.example && <span className="example">{word.example}</span>}
        </>
      )}
    </button>
  )
}
