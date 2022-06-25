import style from './Sidebar.module.scss'
import classNames from 'classnames/bind';
import routesConfig from '../../../config/routes'
import MenuSidebar from './MenuSidebar/MenuSidebar';
import ItemSidebar from './MenuSidebar/ItemSidebar'


import {HomeIcon, UserGroupIcon, LiveIcon} from '../../../icons/icon'

const cx = classNames.bind(style)

function Sidebar() {
    return <aside className={cx('wrapper')} >
        <MenuSidebar >
            <ItemSidebar title='For Your' to={routesConfig.home} icon={<HomeIcon />}/>
            <ItemSidebar title='Following' to={routesConfig.following} icon={<UserGroupIcon />}/>
            <ItemSidebar title='LIVE' to={routesConfig.live} icon={<LiveIcon />}/>
        </MenuSidebar>
    </aside>
}

export default Sidebar;