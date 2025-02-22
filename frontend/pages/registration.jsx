import { useEffect, useState } from "react";
import Registration from "../components/registration/registration";
import UiLoader from "../components/helpers/ui-loader";
import { getData } from "../api/api";
import UiError from "../components/helpers/ui-error";

const RegistrationPage = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getData('classes/', setData, setLoading, setError);
    }, [])

    if (loading) {
        return <UiLoader container={true} />
    }
    if (error) {
        return <UiError />
    }
    if (data) {
        return <Registration classes={data}/>
    }
}

export default RegistrationPage;