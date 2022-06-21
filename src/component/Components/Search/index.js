import style from  './Search.module.scss';
import classNames from 'classnames/bind';
import React, { useEffect, useState, useRef } from 'react';


import AccountItem from '../AccountItem';
import {Wrapper as PopperWrapper} from '../Poper'
import TippyHeadLess from '@tippyjs/react/headless';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner, 
    faMagnifyingGlass, 
    
} from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(style)



function Search() {
    const inputRef = useRef()
    const [inputValue, setInputValue] = useState('')
    const [visible, setVisible] = useState([])
    const [loading, setLoading] = useState(false)


    const handleClear = () => {
        setInputValue('');
        inputRef.current.focus()
    }

    useEffect( () => {
        if(!inputValue.trim()) {
            setVisible([])
            return
        }

        setLoading(true)

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(inputValue)}&type=less`)
        .then(res => res.json())
        .then((res) => {
            setVisible(res.data);
            setLoading(false)
        })
        .catch(
            setLoading(false)
        )
        
    },[inputValue])

    return <TippyHeadLess
        delay={[0, 500]}
        interactive
        visible={visible.length > 0}
        render={attrs => (
            <div className={cx('search-drop')} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                    <div className={cx('search-drop__container')} >
                        {/* <div className={cx('search-result')} >
                            <AccountItem />
                        </div> */}
                        <h3 className={cx('search-title')} >Tài khoản</h3>
                        {visible.map((result) => (

                            <AccountItem key={result.id} data = {result}/>
                        ))}
                    </div>
                </PopperWrapper>
            </div>
        )}
    >
        <div className={cx('search')} >
            <input  
                ref={inputRef}
                placeholder='Search account and video'
                spellCheck= {false}
                onChange = {e => setInputValue(e.target.value)}    
            />


            {!!inputValue && !loading && (
                <button 
                    className={cx('clear')} 
                    onClick = {handleClear}
                >
                    <FontAwesomeIcon icon={faCircleXmark}/>
                </button>
            )}
            {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/> } 



            <button className={cx('search-btn')} >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
    </TippyHeadLess>
}

export default Search;