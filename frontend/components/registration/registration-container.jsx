import { useEffect, useState } from "react";
import UiLoader from "../helpers/ui-loader";
import UiError from "../helpers/ui-error";
import Registration from "./registration";
import { connect } from "react-redux";
import { getClasses } from "../../redux/classes-reducer";

const RegistrationContainer = ({classes, getClasses}) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        //getClasses(setLoading, setError);
    }, [])

    if (loading) {
        return <UiLoader container={true} />
    }
    if (error) {
        return <UiError />
    }
    if (classes) {
        return <Registration classes={classes}/>
    }
}

const mapStateToProps = (state) => ({
    classes: state.classes,
})


export default connect(mapStateToProps, {getClasses})(RegistrationContainer);