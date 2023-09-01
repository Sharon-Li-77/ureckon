import { useQuery } from '@tanstack/react-query'
import { fetchQuestions } from '../apis/fruits.js'
import { Link, useParams } from 'react-router-dom'
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

  const answerArray = [
    ...(incorrect_answers !== undefined ? incorrect_answers : []),
    correctAnswer,
  ]
  console.log('all answers', answerArray)

  const shuffle = (array: string[]) => {
    return array.sort(() => Math.random() - 0.5)
  }

  const shuffledArray = shuffle(answerArray as string[])

  return (
    <>
      <div className="app">
        <h1>{he.decode(question ?? '')}</h1>
        <ul>
          {shuffledArray &&
            shuffledArray.map((p, index) => (
              <li key={index}>
                <br />
                <br />
                <input type="radio" name="answer" id={p} value={p} />
                <label htmlFor={p}>{he.decode(p ?? '')}</label>
              </li>
            ))}
        </ul>
        <button>
          <Link to="/categories"> Categories</Link>
        </button>
      </div>
    </>
  )
}

export default Trivia
