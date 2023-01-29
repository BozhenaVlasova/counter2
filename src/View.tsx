import React from 'react';

export type BoxPropsType = {
    count: number,
    start: number,
    max: number,
    inc: boolean,

    addValue: () => void,
    setCount: (count: number) => void,
    setInc: (dis: boolean) => void,
    setSet: (set: boolean) => void
}

export const View = (props: BoxPropsType) => {

    const onClickIncHandler = () => {
        props.addValue()
    }
    const onClickResetHandler = () => {
        props.setCount(props.start)
        props.setInc(false)
    }
    const onCLickSetHandler = () => {
        props.setSet(false)
    }

    return (
        <div className='box'>
            <div className={`values ${(Number(props.count) === props.max) ? 'limit' : ''}`}>{props.count}</div>
            <div className='buttons'>
                <button onClick={onClickIncHandler} disabled={props.inc}>inc</button>
                <button onClick={onClickResetHandler}>reset</button>
                <button onClick={onCLickSetHandler}>set</button>
            </div>
        </div>

    );
};