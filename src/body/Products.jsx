import { useDispatch, useSelector } from "react-redux";
import { AddButton } from "../AddButton";
import { useEffect } from "react";
import { stockPriceFetch } from "./itemsSlice";

export const Products = ({ items, stockPrices }) => {

    return (
        <section className="grid grid-cols-[155px_155px] grid-flow-row place-items-center justify-center
                gap-x-[13px] gap-y-[5px] ">
            {items.map((item, index) => (
                <div
                    key={item.id}
                >
                    <div className={`w-[155px] h-[195px] grid grid-cols-1 grid-rows-[auto_auto_auto]
                            gap-1 rounded-[12px] ${index % 2 ? "rounded-tl-[32px]" : "rounded-tr-[32px]"}
                             bg-white place-items-center`}>
                        <h1 className="w-full text-base font-DM font-medium text-black text-center">
                            {item.brand}
                        </h1>
                        <div style={{
                            backgroundImage: `url(./img${item.image})`,
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            backgroundRepeat: "no-repeat",
                            height: '122px',
                            width: '122px',
                        }}>
                        </div>
                        <div className="w-full grid grid-cols-2 grid-row-1 items-center">
                            <div className="w-full ">
                                <h2 className="text-base font-DM font-medium text-black">
                                    {`$${(stockPrices[item.skus[0].code].price)/100}`}
                                </h2>
                            </div>
                            <div className="place-self-end">
                                <AddButton to={`${item.id}-${(item.brand).replace(/ /g, '-')}`} />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}