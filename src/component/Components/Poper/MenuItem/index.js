import Button from "../../Button";
import style from './MenuItem.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(style)

function MenuItem({data, onClick}) {
    let classes = cx('menu', {
        line: data.line
    })

    return ( 
        <div className={classes}>
            <Button  to={data.to} icon= {data.icon} onClick = {onClick}>
                <span className={cx('title')} >{data.title}</span>
            </Button>
        </div>
    )
}

export default MenuItem;