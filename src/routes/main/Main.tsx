import React from 'react';
import { useSelector, shallowEqual, useDispatch } from "react-redux"

// components
import Header from '../../components/Header';
import BTCList from '../../components/BTCList'
 

// assets
import Bg from '../../assets/bg.png';
import Figure from '../../assets/figure.png';

// hooks
import MainLogic from './MainLogic';

 



interface ICoin {
    id: string | number
    symbol: string
    value: number | string
}


type CoinState = {
    coins: ICoin[]
}


const Main = () => {
    const {onAdd, loading, onChangeField, onRemove} = MainLogic()
    const coins: readonly ICoin[] = useSelector(
        (state: CoinState) => state.coins,
        shallowEqual
    )

    return (
        <div className='flex w-full flex-col min-h-full justify-between'>
        <div className='relative w-full h-full'>
            <div className='fixed -right-[30%] -top-[0%] bottom-0  max-w-[60%]'>
            <img src={Bg} className="h-full max-w-none"/>
            </div> 

            <div className='container relative z-10 px-4 min-h-full h-full flex flex-col'>
                <Header />
                <main className='flex justify-between mt-6 min-h-full'>
                    <div className='w-[100%] md:w-[30%] text-white'>
                        <div className='mb-4 w-full'>
                            <h1 className='text-[38px] mb-4'>
                                Now you can track <br />
                                all your cryptos here!
                            </h1>
                            <p className='text-[#77628B] text-2xl'>
                                Just enter the <br />cryptocurrency code on the form to the right.
                            </p>
                        </div>

                        <BTCList list={coins || []} onRemove={onRemove}/>
                    </div>

                    <div className='w-[100%] md:w-[30%] text-white relative'>
                        <div className='fixed bottom-[0px] w-[30%] translate-x-[-50%] left-[50%]'>
                            <img src={Figure} />
                        </div>
                    </div>

                    <div className='static md:relative w-[100%] md:w-[30%] text-white'>
                        <div className='w-full p-8 rounded-[5px] bg-white shadow-md'>
                            <div className='field relative'>
                                <label htmlFor='fieldBTC' className='bg-white p-2 absolute -top-[14px] left-1 text-[8px] text-[#ccc] uppercase'>cryptocurrency code</label>
                                <input id='fieldBTC' type='text' placeholder='BTC' className='uppercase' onChange={onChangeField} />

                                <button type='button' className='bg-[#FD4B24] text-center h-[38px] w-full rounded-[30px] mt-4 hover:bg-[#2A0A4A]' onClick={onAdd} disabled={loading}>{loading ? "Lading..." : "Add"}</button>

                                <p className='mt-8 text-center text-md text-[#ccc]'>Use of this service is subject to terms and conditions.</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        <footer className='bg-white h-[100px] relative top-[100px] text-center z-10'>
            <div className='container px-32 py-6'>
                <p className='text-[#888] text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolorum sit, non harum minus vero enim aliquid blanditiis quam quia debitis asperiores nam, voluptates labore cum, nihil illo delectus? Aut.
                </p>
            </div>
        </footer>
        </div>
    )
}

export default Main;