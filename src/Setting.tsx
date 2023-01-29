import React, {ChangeEvent} from 'react';

export type BoxPropsType = {
    start: number,
    max: number,

    getStartValue:(value: string) => void,
    getMaxValue:(value: string) => void,
    setValues:() => void
}

export const Setting = (props: BoxPropsType) => {

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.getMaxValue?.(e.currentTarget.value)
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.getStartValue?.(e.currentTarget.value)
    }
    const onClickSet = () => {
        props.setValues()
    }

//---------------------------------------------------------------------------------------

        return (
            <div className='box'>
                <div className='values'>
                    <div className='valueItem'>
                        <div>max value:</div>
                        <input
                            className={props.max <= props.start? 'error' : ''}
                            type='number'
                            value={props.max}
                            onChange={onChangeMaxValue}
                        />
                    </div>
                    <div className='valueItem'>
                        <div>start value:</div>
                        <input
                            className={props.start < 0 || props.start >= props.max ? 'error' : ''}
                            type='number'
                            value={props.start}
                            onChange={onChangeStartValue}
                        />
                    </div>
                </div>
                <div className='buttons'>
                    <button disabled={props.start < 0 || props.start >= props.max} onClick={onClickSet}>set</button>
                </div>
            </div>
        )
};