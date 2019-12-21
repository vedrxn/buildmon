import { GET_STATS_SUCCESS } from '../actions/getStats'

interface Action {
  error?: boolean
  meta?: any
  payload?: any
  type: string
}

interface Unique {
  [key: string]: any
  id: string
}

const initialState = {
  items: []
}

const merge = <TItem extends Unique>(listA: TItem[], listB: TItem[]): TItem[] =>
  listB.reduce((result: TItem[], itemB) => {
    const indexA = result.findIndex(itemA => itemA.id === itemB.id)

    return indexA === -1
      ? [...result, itemB]
      : [...result.slice(0, indexA), itemB, ...result.slice(indexA + 1)]
  }, listA)

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case GET_STATS_SUCCESS:
      return {
        ...state,
        items: merge(state.items, action.payload)
      }
    default:
      return state
  }
}
