import React, {useEffect} from 'react';
import './App.css';
import {Setting} from "./Setting";
import {View} from "./View";
import {AppDispatch, RootState} from "./store";
import {useDispatch, useSelector} from "react-redux";
import {increment, setCount, setInc, setMax, setSet, setStart} from "./counterSlice";

function App() {
    const count = useSelector((state: RootState) => state.counter.value)
    const set = useSelector((state: RootState) => state.counter.set)
    const max = useSelector((state: RootState) => state.counter.max)
    const start = useSelector((state: RootState) => state.counter.start)

    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        let getStartVal = localStorage.getItem('startValue')
        if (getStartVal) {
            dispatch(setStart(JSON.parse(getStartVal)))
            dispatch(setCount(JSON.parse(getStartVal)))
        }
        let getMaxVal = localStorage.getItem('maxValue')
        if (getMaxVal) {
            dispatch(setMax(JSON.parse(getMaxVal)))
        }
    }, [])

    const getMaxValue = (value: string) => {
        dispatch(setMax(Number(value)))
    }
    const getStartValue = (value: string) => {
        dispatch(setStart(Number(value)))
    }

    const setValues = () => {
        dispatch(setSet(true))
        dispatch(setInc(false))
        dispatch(setCount(start))
        localStorage.setItem('startValue', JSON.stringify(start))
        localStorage.setItem('maxValue', JSON.stringify(max))
    }
    const addValue = () => {
        dispatch(increment())
        if (Number(count) >= max - 1) dispatch(setInc(true))
    }

    return (
        <div className={'App'}>
            {
                !set
                    ? <div className='commonBoxes'>
                        <Setting
                            getStartValue={getStartValue}
                            getMaxValue={getMaxValue}
                            setValues={setValues}
                        />
                    </div>
                    :
                    <div className='commonBoxes'>
                        <View
                            addValue={addValue}
                        />
                    </div>
            }
        </div>
    );
}

export default App;
