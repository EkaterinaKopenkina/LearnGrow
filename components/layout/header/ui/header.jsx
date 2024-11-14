import Image from "next/image";
import Link from "next/link";
import logoSrc from './img/logo.svg';
import ProfileIcon from './icons/profile-icon';

const isAuth = false;

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <Link href="/">
                        <Image className="header__logo" src={logoSrc} alt="Лого" />
                    </Link>

                    {
                        isAuth 
                        ? <Link href="/account" className="header__login">
                            <ProfileIcon className="header__login-icon header__login-icon--auth"/>
                        </Link>
                        : <Link href="/login" className="header__login">
                            <ProfileIcon className="header__login-icon"/>
                            Вход
                        </Link>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;