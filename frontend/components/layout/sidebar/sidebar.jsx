import SidebarInner from "./ui/sidebar-inner";
import SidebarItem from "./ui/sidebar-item";

const Sidebar = ({navList, activeItem}) => {
    return (
        <SidebarInner>
            {navList.map((item, i) => 
                <SidebarItem isActive={i === activeItem} item={item} key={i}/>
            )}
        </SidebarInner>
    )
}

export default Sidebar;