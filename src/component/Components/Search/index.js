import style from  './Search.module.scss';
import classNames from 'classnames/bind';
import React, { useEffect, useState, useRef } from 'react';
import TippyHeadLess from '@tippyjs/react/headless';

import request from '../../../utils/request';
import useDebounce from '../../../hooks/useDebounce';
import AccountItem from '../AccountItem';
import {Wrapper as PopperWrapper} from '../Poper'

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

    const debounce = useDebounce(inputValue, 600)

    const handleClear = () => {
        setInputValue('');
        inputRef.current.focus()
    }

    const handleNextPage = () => {
        setVisible([])
        setInputValue('')
    }

    const handleChange = (e) => {
        const searchValue = e.target.value

        if(!searchValue.startsWith(' ')){
            setInputValue(searchValue)
        }
    }

    useEffect( () => {
        if(!debounce.trim()) {
            setVisible([])
            return
        }

        setLoading(true)

        // fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounce)}&type=less`)
        request
        .get('users/search',{
            params: {
                q: debounce,
                type: 'less'
            }
        })
        // .then(res => res.json())
        .then((res) => {
            setVisible(res.data.data);
            setLoading(false)
        })
        .catch(
            setLoading(false)
        )
        
    },[debounce])


    return <TippyHeadLess
        appendTo={() => document.body}
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

                            <AccountItem onClick= {handleNextPage} key={result.id} data = {result}/>
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
                onChange = {handleChange}    
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



            <button className={cx('search-btn')} onMouseDown={e => e.preventDefault()}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
    </TippyHeadLess>
}

export default Search;