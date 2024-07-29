import { useState } from "react";

export const SizeButton = ({index, name, setCheckedValue, checked }) => {

    // const [check, setChecked] = useState(beerInfo.skus[0].name);

        const onChange = (event) => {
            setCheckedValue(event.target.value)
            // console.log(event.target.value)
        }
    return (
        <label
            className={`w-full h-auto text-[14px] font-normal font-DM
                ${checked === index ? " text-gray-400 border-gray-400" : "text-orange-400 border-orange-400"}
                 border rounded-full `}>
            {truncateString(name)}
            <input
                type="checkbox"
                id={index}
                checked={checked === index}
                value={index}
                onChange={onChange}
            >
            </input>
            {console.log(checked === index)}
        </label>
    );
}

const truncateString = (str) => {
    const words = str.split(' ');
    let result = '';
    let length = 0;
    let wordCount = 0;

    for (const word of words) {
        if (wordCount < 3 && (length + word.length + (result ? 1 : 0)) <= 12) {
            if (result) {
                result += ' ';
                length += 1;
            }
            result += word;
            length += word.length;
            wordCount += 1;
        } else {
            break;
        }
    }

    return result;
};