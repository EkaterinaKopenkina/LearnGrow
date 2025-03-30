import logoSrc from './img/logo.svg';
import MHeaderLayout from "./ui/header-layout"
import HeaderInner from "./ui/header-inner";
import { topAnimation } from '../../../animation/animation';

const Header = ({profile}) => {
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