import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import style from './DefaultUI.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(style)

function DefaultUI({children}) {
    return <div className={cx('wrapper')} >
        <Header/>
        <div className={cx('container')}>
            <Sidebar/>
            <div className={cx('content')}>{children}</div>
        </div>
    </div>
}

export default DefaultUI;