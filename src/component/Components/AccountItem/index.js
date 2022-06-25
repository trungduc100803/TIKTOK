import style from './Account.module.scss'
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style)


function AccountItem({data, onClick}) {
    return <Link onClick={onClick} to={`/@${data.nickname}`} className={cx('wrapper')} >
        <img src={data.avatar} alt= "" ></img>
        <div className={cx('account-content')} >
            <div className={cx('artist')} >
                <h3>{data.full_name}</h3>
            </div>
            <h4>{data.nickname}</h4>
        </div>
    
    </Link>
}

export default AccountItem;