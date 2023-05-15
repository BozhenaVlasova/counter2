import React, {ChangeEvent} from 'react';
import {useSelector} from "react-redux";
import {RootState} from "./store";

export type BoxPropsType = {
    getStartValue:(value: string) => void,
    getMaxValue:(value: string) => void,
    setValues:() => void
}

export const Setting: React.FC<BoxPropsType> = (props) => {
    const {getStartValue, getMaxValue, setValues} = props
    const max = useSelector((state: RootState) => state.counter.max)
    const start = useSelector((state: RootState) => state.counter.start)

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        getMaxValue?.(e.currentTarget.value)
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        getStartValue?.(e.currentTarget.value)
    }
    const onClickSet = () => {
        setValues()
    }

//---------------------------------------------------------------------------------------

        return (
            <div className='box'>
                <div className='values'>
                    <div className='valueItem'>
                        <div>max value:</div>
                        <input
                            className={max <= start? 'error' : ''}
                            type='number'
                            value={max}
                            onChange={onChangeMaxValue}
                        />
                    </div>
                    <div className='valueItem'>
                        <div>start value:</div>
                        <input
                            className={start < 0 || start >= max ? 'error' : ''}
                            type='number'
                            value={start}
                            onChange={onChangeStartValue}
                        />
                    </div>
                </div>
                <div className='buttons'>
                    <button disabled={start < 0 || start >= max} onClick={onClickSet}>set</button>
                </div>
            </div>
        )
};