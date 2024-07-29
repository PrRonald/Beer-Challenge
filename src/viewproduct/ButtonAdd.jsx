export const ButtonAdd = ({value}) => {
    return(
        <section className="w-[230px] h-[54px] flex items-center 
        rounded-xl bg-orange-400 text-white">
        <h1 className="w-full text-center">
            {value}
        </h1>
    </section>
    );
}