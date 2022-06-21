import style from  './TippyPopper.module.scss';
import classNames from 'classnames/bind';

import MenuItem from '../MenuItem';
import Wrapper from '../Wrapper';
import Tippy from '@tippyjs/react/headless';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(style)
const def = () => {}
function TippyPopper({children, items, onChange = def}) {
    const [history, setHistory] = useState([{data: items}])
    const current = history[history.length - 1] 
    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.sub
            //convert sang boolean
            
            return <MenuItem 
                        key={index} 
                        data = {item} 
                        onClick = {() => {
                            if(isParent){
                                setHistory(prev => [...prev, item.sub])
                            }else{
                                onChange(item)
                            }
                        }} 
                    />
        })
    }

    return (  
        <Tippy
            interactive
            delay={[0, 600]}
            render={attrs => (
                <div className={cx('more-container')} tabIndex="-1" {...attrs}>
                    <Wrapper>
                        <div className={cx('more-list')} >
                            {history.length > 1 && <Header title='Language' onBack= {() => {
                                setHistory(prev => prev.slice(0, prev.length - 1))
                            }} />}
                            {renderItem()}
                        </div>
                    </Wrapper>
                </div>
            )}
            onHide = {() => setHistory(prev => prev.slice(0,1))}
        >{children}</Tippy>
    )
}

export default TippyPopper;