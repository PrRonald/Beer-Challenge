import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";


export const AddButton = ({to}) => {
    return(
        <section className="size-10 bg-orange-400 flex flex-row
                 items-center justify-center rounded-tl-[12px] rounded-br-[12px]">
                    <Link to={to}>
                        <FaPlus className="size-4 text-white" />
                    </Link >
        </section>
    );
}