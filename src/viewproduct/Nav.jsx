import { FaArrowLeft } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";

export const Nav = () => {
    return(
        <section className="w-full grid grid-cols-3 grid-rows-1 place-items-center">
            <div className="place-self-start ">
                <FaArrowLeft className="text-center" />
            </div>
            <div className="place-self-center">
                <h1 className="w-full text-center">
                    Detail
                </h1>
            </div>
            <div className="place-self-end">
                <SlOptions className="text-center" />
            </div>
        </section>
    );
}