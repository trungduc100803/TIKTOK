import style from './Header.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';


const cx = classNames.bind(style)

function Header({title, onBack}) {
    return <div className={cx('wrapper')}>
        <button className={cx('btn')}  onClick={onBack} >
            <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <h2 className={cx('header-title')} >{title}</h2>
    </div>
}

export default Header;