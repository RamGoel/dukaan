import React from 'react';
import 'tailwindcss/tailwind.css';
import DownArrowIcon from '../../media/icons/DownArrowIcon';
import SelectArrowIcon from '../../media/icons/SelectArrowIcon';

const Pagination = () => {
    return (
        <ul className="flex items-center w-fit my-6 mx-auto">
            <li>
                <button className=" text-black border-[1.5px] hover:bg-gray-100 flex items-center justify-center rounded px-3 text-xs py-2"><SelectArrowIcon customClass='rotate-90 mr-2' size={10} /> Previous</button>
            </li>
            <li>
                <button className=" text-black rounded px-2 py-2 mx-1 hover:bg-gray-100 text-xs">1</button>
            </li>
            <li>
                <button className=" text-black rounded px-2 py-2 mx-1 hover:bg-gray-100 text-xs">...</button>
            </li>
            <li>
                <button className=" text-white rounded px-2 py-2 mx-1 hover:bg-gray-100 text-xs bg-blue-900">11</button>
            </li>
            <li>
                <button className=" text-black rounded px-2 py-2 mx-1 hover:bg-gray-100 text-xs">12</button>
            </li>
            <li>
                <button className=" text-black rounded px-2 py-2 mx-1 hover:bg-gray-100 text-xs">13</button>
            </li>
            <li>
                <button className=" text-black rounded px-2 py-2 mx-1 hover:bg-gray-100 text-xs">14</button>
            </li>
            <li>
                <button className=" text-black rounded px-2 py-2 mx-1 hover:bg-gray-100 text-xs">15</button>
            </li>
            <li>
                <button className=" text-black rounded px-2 py-2 mx-1 hover:bg-gray-100 text-xs">16</button>
            </li>
            <li>
                <button className=" text-black rounded px-2 py-2 mx-1 hover:bg-gray-100 text-xs">17</button>
            </li>
            <li>
                <button className=" text-black border-[1.5px] hover:bg-gray-100 flex items-center justify-center rounded px-3 text-xs py-2">Next <SelectArrowIcon customClass='-rotate-90 ml-2' size={10} /></button>
            </li>
        </ul>
    );
};

export default Pagination;
