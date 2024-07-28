import { RiMenu2Fill } from "react-icons/ri";

export const Header = () => {
    return(
        <section className="w-full" >
            <div className="grid grid-cols-2 grid-rows-1 items-center py-10" >
            <div className="">
                <RiMenu2Fill className="size-[24px]" />
            </div>
            <div className="w-12 place-self-end">
                <img 
                    src="./img/user.jpg"
                    alt="imagen user" 
                    className="size-10 rounded-full "
                />
            </div>
        </div>
        <div className="w-full">
            <h3 className="text-base font-DM font-normal text-gray-400">
                Hi Mr. Michael,
            </h3>
            <h1 className="text-2xl font-DM font-bold text-black py-1">
                Welcome Back!
            </h1>
            <h2 className="text-lg font-DM font-bold text-black py-3">
                Our Products
            </h2>
        </div>
        </section>
    );
}