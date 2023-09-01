import usePlayers from '../hooks/usePlayers'

function Players() {
  const playerHook = usePlayers()
  const players = playerHook.players.data

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get('name')?.valueOf() as string

    playerHook.addPlayer.mutate(name)
  }
  return (
    <>
      <h1>Who playing?</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name"></input>
      </form>
      <h4>Current Players:</h4>
      {players && players.map((player) => <p key={player.id}>{player.name}</p>)}
    </>
  )
}

export default Players
