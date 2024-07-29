import { useParams } from "react-router-dom";
import { Nav } from "./Nav";
import { useDispatch, useSelector } from "react-redux";
import { itemsFetch, stockPriceFetch } from "../body/itemsSlice";
import { useEffect, useState } from "react";
import { truncateString } from "./truncateString";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { ButtonAdd } from "./ButtonAdd";
import { ImgView } from "./ImgView";


const parseBeerInfo = (carString) => {
    const [id, brand, model] = carString.split('-');
    return { id: Number(id), brand, model };
};

export const ViewProduct = () => {

    const { productId } = useParams()
    const { id, brand, model } = parseBeerInfo(productId)


    const dispatch = useDispatch();
    const items = useSelector((state) => state.items.data);
    const itemsStatus = useSelector((state) => state.items.status);
    const stockPrices = useSelector((state) => state.stockPrice.data);
    const stockPricesStatus = useSelector((state) => state.stockPrice.status);
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        dispatch(itemsFetch());
        dispatch(stockPriceFetch());
    }, [dispatch]);

    if (itemsStatus === 'loading' && stockPricesStatus === 'loading') {
        <p>Loading...</p>
    }

    if (itemsStatus === 'failed') {
        return (
            <p className="text">
                Failed to load items.
            </p>
        );
    }

    if (itemsStatus === 'succeeded' && stockPricesStatus === 'succeeded') {
        const beerInfo = items.find(item => item.id === id)

        const handleOptionChange = (event) => {
            setSelectedOption(event.target.value);
        };

        return (
            <section className="w-full flex flex-col items-center px-4 pt-10">
                <div className="w-full pt-[4px]">
                    <Nav />
                </div >
                    <ImgView img={beerInfo.image} size={{h: "240px", w: "240px"}} />
                <div>
                    <div className="w">
                        <div className="w">
                            <h1 className="w-full text-start font-DM font-bold text-2xl">
                                {beerInfo.brand}
                            </h1>
                            <h2 className="w-full text-start font-DM font-normal text-gray-400 ">
                                Origin: {beerInfo.origin} I Stock:
                            </h2>
                        </div>
                        <div className="w-full flex flex-col justify-center pt-5">
                            <h1 className="w-full text-start font-bold font-DM  text-base pb-2 ">
                                Description
                            </h1>
                            <p className="w-full text-start font-normal font-DM text-gray-400">
                                {beerInfo.information}
                            </p>
                        </div>
                    </div>
                    <div className="w-full grid  grid-cols-1 grid-rows-2 gap-3 pt-4 ">
                        <div className="w">
                            <h1 className="w-full text-start font-DM font-bold text-base">
                                Size
                            </h1>
                        </div>
                        <div >
                            <div className="w-full grid grid-rows-1 grid-flow-col gap-4 place-content-start " >
                                {beerInfo.skus.map(option => (
                                    <div className={`w-[87px] h-[31px] 
                                        ${selectedOption === option.name ?
                                            "text-orange-400 border-orange-400" :
                                            " text-gray-400 border-gray-400"}
                                         border rounded-full `}>
                                        <label
                                            className="w-full h-full flex  items-center justify-center  text-[14px]  font-normal font-DM"
                                            key={option.code}
                                            htmlFor={option.name}>
                                            {truncateString(option.name)}
                                            <input
                                                id={option.name}
                                                type="checkbox"
                                                value={option.name}
                                                checked={selectedOption === option.name}
                                                onChange={handleOptionChange}
                                                className="hidden"
                                            />
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-[25%_75%] grid-row-1 pt-12 pb-9 gap-6">
                        <div className="w-full border rounded-[54px] border-orange-400 flex items-center ">
                            <LiaShoppingBagSolid className="w-full text-center text-[24px] text-orange-400" />
                        </div>
                        <div className="">
                            <ButtonAdd value={"Add to cart"} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
