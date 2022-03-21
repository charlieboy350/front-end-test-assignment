import {gql} from '@apollo/client';

export const LOAD_LATEST_PRICE = gql`
query price($coin: String!) {
    markets(filter:{ baseSymbol: {_eq:$coin} quoteSymbol: {_eq:"EUR"}}) {
      marketSymbol
      ticker {
        lastPrice
      }
    }
  }
  
`