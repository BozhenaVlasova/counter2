import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "./store";
import {setCount, setInc, setSet} from "./counterSlice";

export type BoxPropsType = {
    addValue: () => void
}

export const View: React.FC<BoxPropsType> = (props) => {
    const {addValue} = props
    const count = useSelector((state: RootState) => state.counter.value)
    const inc = useSelector((state: RootState) => state.counter.inc)
    const max = useSelector((state: RootState) => state.counter.max)
    const start = useSelector((state: RootState) => state.counter.start)

    const dispatch = useDispatch<AppDispatch>()

    const onClickInc = () => {
        addValue()
    }
    const onClickReset = () => {
        dispatch(setCount(start))
        dispatch(setInc(false))
    }
    const onCLickSet = () => {
        dispatch(setSet(false))
    }

    return (
        <div className='box'>
            <div className={`values ${(Number(count) === max) ? 'limit' : ''}`}>{count}</div>
            <div className='buttons'>
                <button onClick={onClickInc} disabled={inc}>inc</button>
                <button onClick={onClickReset}>reset</button>
                <button onClick={onCLickSet}>set</button>
            </div>
        </div>

    );
};