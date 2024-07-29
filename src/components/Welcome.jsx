import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Welcome = () => {

    const navigate = useNavigate();

    const delayInSeconds = 2;

    useEffect(() => {
        const delayInMilliseconds = delayInSeconds * 1000;
    
        const timer = setTimeout(() => {
            navigate("/products")
        }, delayInMilliseconds);
    
        return () => clearTimeout(timer);
      }, [delayInSeconds]);

    return(
        <section className="w-full h-[100vh] bg-orange-50 flex flex-col justify-center ">
            <h1 className="w-full text-start text-6xl font-DM font-bold text-emerald-300 ">
                Welcome to
            </h1>
            <h2 className="w-full text-start text-4xl font-DM font-extrabold text-orange-400">
                Beer Challenge
            </h2>
        </section>
    );
}