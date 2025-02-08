import Link from "next/link";
import clsx from 'clsx';

const Sidebar = ({navList, activeItem}) => {
    return (
        <aside className="sidebar">
            <nav className="sidebar__inner">
                {navList.map((item, i) => 
                    <SidebarItem isActive={i === activeItem} item={item} key={i}/>
                )}
            </nav>
        </aside>
    )
}

const SidebarItem = ({item, isActive}) => {
    return (
        <div className={clsx("sidebar__item-container", {
            "active": isActive
        })}>
            <div className="sidebar__icon">{item.icon}</div>
            <Link href={item.href} className="sidebar__item">{item.name}</Link>
        </div>
    )
}

export default Sidebar;