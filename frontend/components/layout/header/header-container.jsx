import { connect } from "react-redux"
import Header from "./header"
import Link from "next/link"
import ProfileIcon from "./ui/icons/profile-icon"
import clsx from "clsx"
import { loadAuth } from "../../../redux/auth-reducer"
import { useEffect } from "react"

const HeaderContainer = ({isAuth, id, loadAuth, cookies}) => {
    useEffect(() => {
        if (cookies.login && cookies.id) {
            loadAuth({
                token: cookies.login,
                id: cookies.id,
            })
        }
    }, [cookies])

    const profile = <Link href={isAuth ? `/account/${id}` : "/login"} className="header__login">
                        <ProfileIcon className={clsx("header__login-icon", {
                            "header__login-icon--auth": isAuth
                        })}/>
                        {isAuth ? null : "Вход"}
                    </Link>

    return <Header profile={profile} />
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    id: state.auth.id,
})

export default connect(mapStateToProps, {loadAuth})(HeaderContainer)