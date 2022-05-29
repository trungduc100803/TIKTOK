import style from './Account.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(style)


function AccountItem() {
    return <div className={cx('wrapper')} >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZc9YefcOSGXvWoH6Vv_bFqHREDw1Fqtfyg&usqp=CAU" alt= "" ></img>
        <div className={cx('account-content')} >
            <div className={cx('artist')} >
                <h3>Amee</h3>
            </div>
            <h4>St365-Entertaiment</h4>
        </div>
    
    </div>
}

export default AccountItem;