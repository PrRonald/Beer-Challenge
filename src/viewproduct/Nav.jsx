import { FaArrowLeft } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";

export const Nav = () => {
    return(
        <section className="w-full grid grid-cols-3 grid-rows-1 place-items-center">
            <div className="place-self-start self-center">
                <FaArrowLeft className="text-2xl  " />
            </div>
            <div className="place-self-center">
                <h1 className="w-full text-center font-DM font-bold text-lg">
                    Detail
                </h1>
            </div>
            <div className="place-self-end self-center">
                <SlOptions className="text-2xl" />
            </div>
        </section>
    );
}