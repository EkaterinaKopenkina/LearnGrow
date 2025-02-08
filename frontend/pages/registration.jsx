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
        // setData([
        //     {id: 1, title: '5А'},
        //     {id: 2, title: '11'},
        //     {id: 3, title: '5А'},
        //     {id: 4, title: '5А'},
        //     {id: 5, title: '5А'},
        //     {id: 6, title: '5А'},
        //     {id: 7, title: '5А'},
        //     {id: 8, title: '5А'},
        //     {id: 9, title: '5А'},
        //     {id: 10, title: '5А'},
        //     {id: 11, title: '5А'},
        //     {id: 12, title: '5А'},
        // ])
        // setLoading(false);
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