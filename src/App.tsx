import React, {useEffect, useState} from 'react';
import './App.css';
import {Setting} from "./Setting";
import {View} from "./View";

function App() {
    const [count, setCount] = useState<number>(0)
    const [inc, setInc] = useState<boolean>(false)
    const [set, setSet] = useState<boolean>(true)
    const [max, setMax] = useState<number>(5)
    const [start, setStart] = useState<number>(0)

    useEffect(() => {
        let getStartVal = localStorage.getItem('startValue')
        if (getStartVal) {
            setStart(JSON.parse(getStartVal))
            setCount(JSON.parse(getStartVal))
        }
        let getMaxVal = localStorage.getItem('maxValue')
        if (getMaxVal) {
            setMax(JSON.parse(getMaxVal))
        }
    }, [])

    const getMaxValue = (value: string) => {
        setMax(Number(value))
    }
    const getStartValue = (value: string) => {
        setStart(Number(value))
    }

    const setValues = () => {
        setSet(true)
        setInc(false)
        setCount(start)
        localStorage.setItem('startValue', JSON.stringify(start))
        localStorage.setItem('maxValue', JSON.stringify(max))
    }
    const addValue = () => {
        setCount(count + 1)
        if (Number(count) >= max - 1) setInc(true)
    }

    return (
        <div className={'App'}>
            {
                !set
                    ? <div className='commonBoxes'>
                        <Setting
                            start={start}
                            max={max}
                            getStartValue={getStartValue}
                            getMaxValue={getMaxValue}
                            setValues={setValues}
                        />
                    </div>
                    :
                    <div className='commonBoxes'>
                        <View
                            count={count}
                            start={start}
                            max={max}
                            inc={inc}
                            addValue={addValue}
                            setCount={setCount}
                            setInc={setInc}
                            setSet={setSet}
                        />
                    </div>
            }
        </div>
    );
}

export default App;
