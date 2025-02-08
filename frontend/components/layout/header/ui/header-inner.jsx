import Image from "next/image";
import Link from "next/link";

const HeaderInner = ({logoSrc, profile}) => {
    return (
        <div className="header__inner">
            <Link href="/">
                <Image className="header__logo" src={logoSrc} alt="Лого" />
            </Link>
            {profile}
        </div>
    )
}

export default HeaderInner;