import { ItemCounterContainer } from './styles'

type ItemCounterProps = {
  count: number
  increaseCount: () => void
  decreaseCount: () => void
}

export function ItemCounter ({ count, decreaseCount, increaseCount }: ItemCounterProps) {
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
