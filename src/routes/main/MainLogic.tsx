import React from 'react';
import { nanoid } from 'nanoid'

// hooks
import { useLazyQuery  } from '@apollo/client';
import {LOAD_LATEST_PRICE} from '../../GraphQL/Queries'


// actions
import { Dispatch } from "redux"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { addCoin, removeCoin } from "../../store/actionCreators"



interface ICoin {
    id: string | number
    symbol: string
    value: number | string
}


type CoinState = {
    coins: ICoin[]
}

const MainLogic = () => {

    
    const [fetch, { loading, error, data }] = useLazyQuery(LOAD_LATEST_PRICE); 
    const dispatch: Dispatch<any> = useDispatch()
    const [coin, setCoin] = React.useState()

    const onChangeField = (e:any)=>{
        setCoin(e.target.value);
    }

    
    const onAdd = async () => {
        if(!coin) return;
        
        await fetch({
            variables: {
                coin
            }
        }); 
    }


    const onRemove = async (coin: ICoin) => {
        dispatch(removeCoin(coin))
    }

    React.useEffect(()=>{
        if(data && coin) {
            const toSave = {
                id:  nanoid(),
                symbol: coin,
                value: data.markets[0]?.ticker.lastPrice 
            }
            data.markets.length && dispatch(addCoin(toSave));
        }
    },[data])

    return {loading, error, data, onAdd, onChangeField, onRemove};
}


export default MainLogic; 