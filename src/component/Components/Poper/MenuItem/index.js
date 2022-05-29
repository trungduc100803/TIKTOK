import Button from "../../Button";
import style from './MenuItem.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(style)

function MenuItem({data}) {
    return ( 
        <div className={cx('menu')}>
            <Button  to={data.to} icon= {data.icon}>
                <span className={cx('title')} >{data.title}</span>
            </Button>
        </div>
    )
}

export default MenuItem;