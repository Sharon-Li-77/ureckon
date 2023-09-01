import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addNewPLayer, getAllPlayers } from '../apis/fruits'

function usePlayers() {
  const queryClient = useQueryClient()

  const { data, isLoading, isError } = useQuery(['players'], getAllPlayers)
  const players = { data, isLoading, isError }

  const addPlayer = useMutation({
    mutationFn: (name: string) => addNewPLayer(name),
    onSuccess: () => {
      queryClient.invalidateQueries(['players'])
    },
  })

  return { players, addPlayer }
}

export default usePlayers
