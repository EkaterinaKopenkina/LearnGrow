import Link from "next/link";
import clsx from 'clsx';

const SidebarItem = ({isActive, item}) => {
    return (
        <div className={clsx("sidebar__item-container", {
            "active": isActive
        })}>
            <div className="sidebar__icon">{item.icon}</div>
            <Link href={item.href} className="sidebar__item">{item.name}</Link>
        </div>
    )
}

export default SidebarItem;