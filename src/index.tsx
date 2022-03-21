import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.css';

// global state mangement
import { createStore, applyMiddleware, Store } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import reducer from "./store/reducer"

import App from './client/App'
import Main from './routes/main/Main';
import reportWebVitals from './reportWebVitals';



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
type DispatchType = (args: CoinAction) => CoinAction



const store: Store<CoinState, CoinAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
      <App>
        <Main />
      </App>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
