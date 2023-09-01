import { useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchQuestions, updateScoreforPlayer } from '../apis/fruits.js'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import he from 'he'
import usePlayers from '../hooks/usePlayers.js'
import { useEffect, useState } from 'react'

function Trivia() {
  const queryClient = useQueryClient()
  const players = usePlayers().players.data
  const [searchParams, setSearchParams] = useSearchParams()
  const [currentPlayer, setCurrentPlayer] = useState(0)
  const [correct, setCorrect] = useState(false)
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
  const shuffle = (array: string[]) => {
    return array.sort(() => Math.random() - 0.5)
  }

  const shuffledArray = shuffle(answerArray as string[])

  function checkAnswer(e: React.FormEvent<HTMLFormElement>) {
    // const answer = searchParams.get('answer')
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const answer = form.get('answer')
    const result = answer === correctAnswer
    const playerTurn = players[currentPlayer]
    console.log({ answer, correctAnswer, result })
    result && updateScoreforPlayer(playerTurn.id, 1)
    const nextPlayer = currentPlayer + 1
    setCurrentPlayer(nextPlayer)
    nextPlayer === players?.length && setCurrentPlayer(0)
    queryClient.invalidateQueries(['questions'])
    setCorrect(result)
  }

  return (
    <>
      <div className="app">
        <h1 className="question-text">{he.decode(question ?? '')}</h1>
        <h4 className="turn-text">
          {players && `It is ${players[currentPlayer].name}s turn`}
        </h4>
        <form onSubmit={checkAnswer}>
          <ul className="trivia-answers">
            {shuffledArray &&
              shuffledArray.map((p, index) => (
                <li key={index}>
                  <br />
                  <br />
                  <input type="radio" name="answer" id={p} value={p} />
                  <label className="answer-text" htmlFor={p}>
                    {he.decode(p ?? '')}
                  </label>
                </li>
              ))}
          </ul>
          <div>
            <button className="confirm">Confirm Answer</button>
          </div>
        </form>
        <div>
          <button className="category-button">
            <Link to="/categories"> Categories</Link>
          </button>
        </div>
        {correct && (
          <p className="correct-wrong">The previous players answer was right</p>
        )}
        {!correct && (
          <p className="correct-wrong">The previous players answer was wrong</p>
        )}
        {players && (
          <p className="correct-wrong">{`Your score is ${players[currentPlayer].score}`}</p>
        )}
      </div>
    </>
  )
}

export default Trivia
