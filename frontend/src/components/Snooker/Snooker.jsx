import { useState } from "react";

export default function Snooker() {

    const [tableStatus, setTableStatus] = useState({
        table1: false,
        table2: false,
        table3: false,
    });

    function toggleTable(id, status) {
        if(status) 
            console.log(`Starting Table ${id}`);
        else 
            console.log(`Stoping Table ${id}`);
        setTableStatus(prevStatus => ({
            ...prevStatus,
            [`table${id}`]: status,
          }));
    }

    return (
        <div className=" min-h-full w-full mt-20">
            <div className=" pt-5">
                <h1 className="flex justify-center items-center text-7xl font-bold text-white">Snooker</h1>
            </div>
            <div className="flex flex-row justify-evenly items-center w-full text-white">

                {/* Table 1 */}
                <div className="w-1/5 ml-10 mt-20 relative group">
                    <h1 className="flex justify-center text-4xl font-semibold mr-16 mb-2">Table 1</h1>
                    <img src="Snooker-Graphic.png" alt="Snooker Graphic" className="rounded-lg" />
                    <div className="absolute inset-0 flex flex-col mr-16 justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className={`${tableStatus.table1 ? 'bg-green-900' : 'bg-green-500'} text-white font-bold py-2 px-4 rounded mb-2`}
                               disabled={tableStatus.table1} onClick={() => {toggleTable(1, true)}}>Start</button>
                        <button className={`${ tableStatus.table1 ? 'bg-red-500' : 'bg-red-950'} text-white font-bold py-2 px-4 rounded`}
                                disabled={!tableStatus.table1} onClick={() => toggleTable(1, false)}>Stop</button>
                    </div>
                </div>

                {/* Table 2 */}
                <div className="w-1/5 ml-10 mt-20 relative group">
                    <h1 className="flex justify-center text-4xl font-semibold mr-16 mb-2">Table 2</h1>
                    <img src="Snooker-Graphic.png" alt="Snooker Graphic" className="rounded-lg" />
                    <div className="absolute inset-0 flex flex-col mr-16 justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className={`${tableStatus.table2 ? 'bg-green-900' : 'bg-green-500'} text-white font-bold py-2 px-4 rounded mb-2`}
                                disabled={tableStatus.table2} onClick={() => {toggleTable(2,true)}}>Start</button>
                        <button className={`${tableStatus.table2 ? 'bg-red-500' : 'bg-red-950'} text-white font-bold py-2 px-4 rounded`}
                                disabled={!tableStatus.table2} onClick={() => toggleTable(2, false)}>Stop</button>
                    </div>
                </div>

                {/* Table 3 */}
                <div className="w-1/5 ml-10 mt-20 relative group">
                    <h1 className="flex justify-center text-4xl font-semibold mr-16 mb-2">Table 3</h1>
                    <img src="Snooker-Graphic.png" alt="Snooker Graphic" className="rounded-lg" />
                    <div className="absolute inset-0 flex flex-col mr-16 justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className={`${tableStatus.table3 ? 'bg-green-900' : 'bg-green-500'} text-white font-bold py-2 px-4 rounded mb-2`}
                                disabled={tableStatus.table3} onClick={() => {toggleTable(3, true)}}>Start</button>
                        <button className="bg-red-500 text-white font-bold py-2 px-4 rounded" 
                                disabled={!tableStatus.table3} onClick={() => toggleTable(3, false)}>Stop</button>
                    </div>
                </div>

            </div>
        </div>
    )
}