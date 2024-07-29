import { BiErrorCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

export const ErrorPage = ({error}) => {
    return(
        <section className="w-full h-[100vh] ">
            <div className="w-full h-full flex flex-col justify-center items-center gap-4">
                <div className="w">
                <BiErrorCircle className="size-10 " />
                </div>
                <h1 className="w-full text-4xl font-DM font-bold text-center ">
                    Error has ocurred
                </h1>
                <h2 className="w-full text-2xl font-DM font-bold text-center text-red-400">
                    {error}
                </h2>
                <Link 
                    className="w-[110px] h-8 text-white text-xl font-DM font-medium bg-orange-400
                    flex items-center justify-center rounded-full "
                    to={"/"} >
                    Home
                </Link>
            </div>
        </section>
    );
}