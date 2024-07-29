import { useParams } from "react-router-dom";
import { Nav } from "./Nav";
import { useDispatch, useSelector } from "react-redux";
import { itemsFetch, stockPriceFetch } from "../body/itemsSlice";
import { useEffect, useState } from "react";
import { truncateString } from "./truncateString";
import { LiaShoppingBagSolid } from "react-icons/lia";


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
            <section className="w-full">
                <div className="w">
                    <Nav />
                </div>
                <div
                    style={{
                        backgroundImage: `url(/img${beerInfo.image})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: "no-repeat",
                        height: '122px',
                        width: '122px',
                    }}
                    className="w">
                </div>
                <div>
                    <div className="w">
                        <div className="w">
                            <h1 className="text">
                                {beerInfo.brand}
                            </h1>
                            <h2 className="text">
                                Origin: {beerInfo.origin} | Stock:
                            </h2>
                        </div>
                        <div className="w">
                            <h1 className="text">
                                Description
                            </h1>
                            <p className="text">
                                {beerInfo.information}
                            </p>
                        </div>
                    </div>
                    <div className="w">
                        <div className="w">
                            <h1 className="text">
                                Size
                            </h1>
                        </div>
                        <div >
                            <div className="w-full grid grid-rows-1 grid-cols-3 gap-4 place-items-center" >
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
                    <div className="w-full grid grid-cols-[25%_75%] grid-row-1 gap-6">
                        <div className="w-full border rounded-[54px] border-orange-400 flex items-center ">
                            <LiaShoppingBagSolid className="w-full text-center text-[24px] text-orange-400" />
                        </div>
                        <div className="w-[247px] h-[54px] flex items-center 
                        rounded-xl bg-orange-400 text-white">
                            <h1 className="w-full text-center">
                                Add to cart
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
