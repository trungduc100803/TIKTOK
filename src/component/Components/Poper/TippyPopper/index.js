import style from  './TippyPopper.module.scss';
import classNames from 'classnames/bind';

import MenuItem from '../MenuItem';
import Wrapper from '../Wrapper';
import Tippy from '@tippyjs/react/headless';

const cx = classNames.bind(style)

function TippyPopper({children, items}) {

    const renderItem = () => {
        return items.map((item, index) => (
            <MenuItem key={index} data = {item} />
        ))
    }

    return (  
        <Tippy
            interactive
            // placement='top end'
            delay={[0, 600]}
            render={attrs => (
                <div className={cx('more-container')} tabIndex="-1" {...attrs}>
                    <Wrapper>
                        <div className={cx('more-list')} >
                            {renderItem()}
                        </div>
                    </Wrapper>
                </div>
            )}
        >{children}</Tippy>
    )
}

export default TippyPopper;