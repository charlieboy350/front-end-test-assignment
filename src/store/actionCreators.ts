import * as actionTypes from "./actionTypes"

interface ICoin {
    id: string | number
    symbol: string
    value: number | string
}

type CoinAction = {
    type: string
    coin: ICoin
}
type DispatchType = (args: CoinAction ) => CoinAction


export function addCoin(coin: ICoin) {
  const action: CoinAction = {
    type: actionTypes.ADD_COIN,
    coin,
  }

  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}

export function removeCoin(coin: ICoin) {
    const action: CoinAction = {
      type: actionTypes.REMOVE_COIN,
      coin,
    }
  
    return (dispatch: DispatchType) => {
      setTimeout(() => {
        dispatch(action)
      }, 500)
    }
  }

// export function removeArticle(article: IArticle) {
//   const action: ArticleAction = {
//     type: actionTypes.REMOVE_ARTICLE,
//     article,
//   }
//   return 
// }
 