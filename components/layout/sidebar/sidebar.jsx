import Link from "next/link";

const Sidebar = ({navList, activeItem}) => {
    return (
        <aside className="sidebar">
            <nav className="sidebar__inner">
                {navList.map((item, i) => <SidebarItem item={item} key={i}/>)}
            </nav>
        </aside>
    )
}

const SidebarItem = ({item}) => {
    return (
        <div className="sidebar__item-container">
            <Link href={item.href} className="sidebar__item">{item.name}</Link>
        </div>
    )
}

export default Sidebar;