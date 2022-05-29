import style from './Button.module.scss'
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style)

function Button({children, icon, to, href, primary, text, big, round, disabled, ...sta}) {
    let Comp = 'button'
    
    const status = {
        onclick,
        icon,
        ...sta
    }

    const classes = cx('btn', {
        primary,
        text,
        big,
        round,
        disabled
    })

    if(to) {
        Comp = Link
        status.to = to
    }else if (href) {
        Comp = 'a'
        status.href = href
    }



        return <Comp className={classes} {...status}>
            {icon && <span className={cx('icon')} >{icon}</span>}
            <span >{children}</span>
        </Comp>
    
}

export default Button;