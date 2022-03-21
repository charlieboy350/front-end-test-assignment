import * as actionTypes from "./actionTypes"

interface ICoin {
    id: string | number
    symbol: string
    value: number | string
}

type CoinState = {
    coins: ICoin[]
}

type CoinAction = {
    type: string
    coin: ICoin
}


const initialState: CoinState = {
    coins: [],
}


const reducer = (
    state: CoinState = initialState,
    action: CoinAction
  ): CoinState => {
    switch (action.type) {
      case actionTypes.ADD_COIN: 
        return {...state, coins : [...state.coins, action.coin]}
      case actionTypes.REMOVE_COIN: {   
         const filterArray = state.coins.filter((coin: ICoin)=>{
            if(coin.id !== action.coin.id) {
                return coin
            }
        })
        return {...state, coins : [...filterArray]}
      }
    }
    return state
  }
  
  export default reducer
  