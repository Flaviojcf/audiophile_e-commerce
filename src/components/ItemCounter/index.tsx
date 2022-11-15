import { ItemCounterContainer } from './styles'

type ItemCounterProps = {
  count: number
  changeCountValue: (params: any) => void
}

export function ItemCounter ({ count, changeCountValue }: ItemCounterProps) {
  function increaseCount () {
    changeCountValue(count + 1)
  }

  function decreaseCount () {
    if (count === 1) {
      return
    }

    changeCountValue(count - 1)
  }

  return (
    <ItemCounterContainer>
      <button
        onClick={() => decreaseCount()}
        disabled={count === 1}
      >-</button>
      <span>{count}</span>
      <button
        onClick={() => increaseCount()}
      >+</button>
    </ItemCounterContainer>
  )
}
