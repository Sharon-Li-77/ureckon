import { useQuery } from '@tanstack/react-query'
import { fetchQuestions } from '../apis/fruits.js'
import { useParams } from 'react-router-dom'
import he from 'he'

function Trivia() {
  const { id } = useParams()
  const { data } = useQuery({
    queryKey: ['questions'],
    queryFn: () => fetchQuestions(Number(id)),
  })
  const qAndA = data?.results[0]
  const question = qAndA?.question
  const correctAnswer = qAndA?.correct_answer
  const incorrect_answers = qAndA?.incorrect_answers

  // function getRandomInt(max: number) {
  //   return Math.floor(Math.random() * max)
  // }
  // const random = getRandomInt(Number(incorrect_answers?.length))
  // const answerArray = incorrect_answers?.splice(random, 0, correctAnswer)

  // console.log(answerArray)

  return (
    <>
      <div className="app">
        <h1>{question}</h1>
        <ul>
          {incorrect_answers &&
            incorrect_answers.map((p, index) => (
              <li key={index}>
                <br />
                <br />
                <input type="radio" name="answer" id={p} value={p} />
                <label htmlFor={p}>{he.decode(p)}</label>
              </li>
            ))}
          <br />
          <br />
          <input
            type="radio"
            name="answer"
            id={correctAnswer}
            value={correctAnswer}
          />
          <label htmlFor={correctAnswer}>{correctAnswer}</label>
        </ul>
      </div>
    </>
  )
}

export default Trivia
