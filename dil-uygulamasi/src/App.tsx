import { useState } from 'react'
import { Flashcard } from './components/Flashcard'
import { lessons } from './data/lessons'

function App() {
  const lesson = lessons[0]
  const [index, setIndex] = useState(0)
  const word = lesson.words[index]

  return (
    <main>
      <h1>Dil Uygulaması</h1>
      <h2>{lesson.title}</h2>
      <Flashcard key={word.id} word={word} />
      <nav>
        <button disabled={index === 0} onClick={() => setIndex(index - 1)}>
          Önceki
        </button>
        <span>
          {index + 1} / {lesson.words.length}
        </span>
        <button
          disabled={index === lesson.words.length - 1}
          onClick={() => setIndex(index + 1)}
        >
          Sonraki
        </button>
      </nav>
    </main>
  )
}

export default App
