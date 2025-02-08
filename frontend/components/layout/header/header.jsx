import logoSrc from './img/logo.svg';
import ProfileIcon from './ui/icons/profile-icon';
import HeaderLayout from "./ui/header-layout"
import HeaderInner from "./ui/header-inner";
import Link from "next/link";

const Header = ({isAuth, userId}) => {
    const profile = isAuth 
    ? <Link href={`/account/${userId}`} className="header__login">
        <ProfileIcon className="header__login-icon header__login-icon--auth"/>
    </Link>
    : <Link href="/login" className="header__login">
        <ProfileIcon className="header__login-icon"/>
        Вход
    </Link>

    return (
        <HeaderLayout>
            <HeaderInner 
                logoSrc={logoSrc}
                profile={profile}
            />
        </HeaderLayout>
    )
}

export default Header;