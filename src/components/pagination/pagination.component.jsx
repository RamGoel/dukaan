import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import SelectArrowIcon from '../../media/icons/SelectArrowIcon';

const Pagination = () => {
    const [page, setPage] = useState(11)
    const values = [1, '...', 11, 12, 13, 14, 15, 16, 17]
    return (
        <ul className="flex items-center w-fit my-6 mx-auto">
            <li>
                <button className=" text-black border-[1.5px] hover:bg-gray-100 flex items-center justify-center rounded px-3 text-xs py-2"><SelectArrowIcon customClass='rotate-90 mr-2' size={10} /> Previous</button>
            </li>
            {
                values.map(item => {
                    return <li onClick={()=>setPage(item)}>
                        <button className={`rounded w-[30px] h-[30px] mx-1  text-xs ${page === item ? ' bg-blue-900 text-white' : 'hover:bg-gray-100 text-black'}`}>{item}</button>
                    </li>
                })
            }
            <li>
                <button className=" text-black border-[1.5px] hover:bg-gray-100 flex items-center justify-center rounded px-3 text-xs py-2">Next <SelectArrowIcon customClass='-rotate-90 ml-2' size={10} /></button>
            </li>
        </ul>
    );
};

export default Pagination;
