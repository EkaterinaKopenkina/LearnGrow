import UiLoader from "../helpers/ui-loader";
import UiError from "../helpers/ui-error";
import Account from "./account";
import { useEffect, useState } from "react";
import { loadAuthData } from "../../redux/auth-reducer";
import { connect } from "react-redux";

const AccountContainer = ({token, id}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        //loadAuthData();
        getAuthData(`students/${id}/`, setData, setLoading, setError, token);
    }, [])

    if (loading) {
        return <UiLoader container={true} />
    }
    if (error) {
        return <UiError />
    }
    if (data) {
        return <Account userId={id} data={data} token={token} />
    }
}

const mapStateToProps = (state) => ({
    token: state.auth.token,
    id: state.auth.id,
})

export default connect(mapStateToProps, {loadAuthData})(AccountContainer);