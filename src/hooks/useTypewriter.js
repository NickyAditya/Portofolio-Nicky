import { useState, useEffect } from 'react'

export const useTypewriter = (words, speed = 100, delayBetweenWords = 1000) => {
  const [displayText, setDisplayText] = useState('')
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    let timer

    if (!isDeleting) {
      // Typing mode
      if (currentCharIndex < currentWord.length) {
        timer = setTimeout(() => {
          setDisplayText(currentWord.substring(0, currentCharIndex + 1))
          setCurrentCharIndex(currentCharIndex + 1)
        }, speed)
      } else {
        // Word complete, wait before deleting
        timer = setTimeout(() => {
          setIsDeleting(true)
        }, delayBetweenWords)
      }
    } else {
      // Deleting mode
      if (currentCharIndex > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentWord.substring(0, currentCharIndex - 1))
          setCurrentCharIndex(currentCharIndex - 1)
        }, speed / 2)
      } else {
        // Move to next word
        setIsDeleting(false)
        setCurrentWordIndex((currentWordIndex + 1) % words.length)
      }
    }

    return () => clearTimeout(timer)
  }, [currentCharIndex, currentWordIndex, isDeleting, words, speed, delayBetweenWords])

  return displayText
}
