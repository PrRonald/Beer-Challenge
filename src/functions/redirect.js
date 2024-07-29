import { redirect } from "react-router-dom";

export const Redirect = ({to}) => {
    return(
        redirect({to})
    );
}