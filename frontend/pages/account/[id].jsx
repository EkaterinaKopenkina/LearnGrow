import { useEffect, useState } from "react";
import UiLoader from "../../components/helpers/ui-loader";
import Account from "../../components/account/account"
import { getAuthData } from "../../api/api"
import UiError from "../../components/helpers/ui-error";

const AccountPage = ({ userId, cookie}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getAuthData(`students/${userId}/`, setData, setLoading, setError, cookie.login);
    }, [])

    if (loading) {
        return <UiLoader container={true} />
    }
    if (error) {
        return <UiError />
    }
    if (data) {
        return <Account userId={userId} data={data} token={cookie.login} />
    }

}

export default AccountPage;