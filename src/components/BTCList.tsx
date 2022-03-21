import React, { ReactElement } from 'react';
import Icon from '../assets/icon.svg';

interface ICoin {
    id: string | number
    symbol: string
    value: number | string
}

interface BTCListProps  {
    list: readonly ICoin[]
    className?: string 
    onRemove(coin: ICoin): void
}

const BTCList = (props:BTCListProps) => {

    const finalList = [...props.list].reverse()
    return (
        <div className={`${props.className || ''} mt-16 w-full`}>
            {Boolean(finalList) && finalList.map((coin:ICoin): ReactElement =>{
                return <div key={coin.id} className='btcList flex flex-row w-full py-4 relative items-center'>
                <div className='mr-6'>
                    <img src={Icon} />
                </div>

                <div className='mr-6'>
                    <h3>{coin.symbol.toUpperCase()}</h3>
                    <p>{coin.value} €</p>
                </div>
                <div className='ml-auto cursor-pointer' onClick={()=>props.onRemove(coin)}>
                    x
                </div>
            </div>
            })}
        </div>
    )
}

export default BTCList;