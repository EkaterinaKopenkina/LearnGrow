import logoSrc from './img/logo.svg';
import ProfileIcon from './ui/icons/profile-icon';
import MHeaderLayout from "./ui/header-layout"
import HeaderInner from "./ui/header-inner";
import Link from "next/link";
import { topAnimation } from '../../../animation/animation';
import { useEffect, useState } from "react";
import clsx from 'clsx';

const Header = ({isAuth, userId}) => {
    const [profile, setProfile] = useState(null);
    // let profile = <Link href="/login" className="header__login">
    //     <ProfileIcon className="header__login-icon"/>
    //         Вход
    // </Link>

    useEffect(() => {
        setProfile(<Link href={isAuth ? `/account/${userId}` : "/login"} className="header__login">
            <ProfileIcon className={clsx("header__login-icon", {
                "header__login-icon--auth": isAuth
            })}/>
            {isAuth ? null : "Вход"}
        </Link>)
    }, [isAuth])

    return (
        <MHeaderLayout
            initial="hidden"
            animate="visible"
            custom={1}
            variants={topAnimation}
        >
            <HeaderInner 
                logoSrc={logoSrc}
                profile={profile}
            />
        </MHeaderLayout>
    )
}

export default Header;