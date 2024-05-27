const Table = () => {
    const dataset = [
        {
          Name: 'Selling with re entr',
          Calmar_Ratio: 3.96,
          Overall_Profit: 	381845,
          Avg_Daily_Profit: 319.54	,
          Win_Pcn_Day: 0.65,
          Price: 0,
          Action: 'View'
        },
        {
          Name: 'strategy_name',
          Calmar_Ratio: 3.62,
          Overall_Profit: 	268872.5,
          Avg_Daily_Profit: 216.31,
          Win_Pcn_Day: 0.64,
          Price:500,
          Action: 'Buy'
        },
        {
          Name: 'Based on premium and',
          Calmar_Ratio: 3.42,
          Overall_Profit: 	255425,
          Avg_Daily_Profit: 208.51,
          Win_Pcn_Day: 0.64,
          Price: 0,
          Action: 'View'
        },
        {
          Name: 'strategy_name',
          Calmar_Ratio: 3.22,
          Overall_Profit: 370845,
          Avg_Daily_Profit: 303.47,
          Win_Pcn_Day: 0.65,
          Price:0 ,
          Action: 'View'
        },
        {
          Name: 'strategy_name',
          Calmar_Ratio: 3.22,
          Overall_Profit: 370845,
          Avg_Daily_Profit: 303.47,
          Win_Pcn_Day: 0.65,
          Price: 0,
          Action: 'View'
        },
        {
          Name: 'Based on premium wit',
          Calmar_Ratio: 3.01,
          Overall_Profit: 135980,
          Avg_Daily_Profit: 185.77,
          Win_Pcn_Day: 0.49,
          Price: 0,
          Action: 'View'
        },
        {
          Name: 'strategy_name',
          Calmar_Ratio: 2.76,
          Overall_Profit: 267867.5,
          Avg_Daily_Profit: 218.49,
          Win_Pcn_Day: 0.6,
          Price: 0,
          Action: 'View'
        },
        {
          Name: 'Wait and trade_Save',
          Calmar_Ratio: 2.62,
          Overall_Profit: 	267867.5,
          Avg_Daily_Profit: 161.9,
          Win_Pcn_Day: 0.63,
          Price: 0,
          Action: 'View'
        },
        {
          Name: 'iron condor',
          Calmar_Ratio: 2.44,
          Overall_Profit: 178252.5,
          Avg_Daily_Profit: 137.51,
          Win_Pcn_Day: 0.65,
          Price:0,
          Action: 'View'
        },
        {
          Name: 'strategy_name',
          Calmar_Ratio: 2.04,
          Overall_Profit:244555,
          Avg_Daily_Profit: 198.66,
          Win_Pcn_Day: 0.62,
          Price: 0,
          Action: 'View'
        },
      ]
    return (
        <div>
            <div className="relative overflow-x-auto drop-shadow-basic bg-white rounded-lg w-full">

                <div className="p-4 border-b font-semibold">Basic Backtest</div>
                <div className="px-4 pb-4 w-full ">
                    <table className=" w-full text-[15px] text-left rtl:text-right text-gray-700 ">
                        <thead className="text-[15px] text-gray-900 ">
                            <tr>
                                <th scope="col" className="px-6 py-6 whitespace-nowrap  w-[2vw] min-w-[20px]">
                                    Rank
                                </th>
                                <th scope="col" className="px-6 py-6 whitespace-nowrap ">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-6 whitespace-nowrap ">
                                    Calmar Ratio
                                </th>
                                <th scope="col" className="px-6 py-6 whitespace-nowrap ">
                                    Overall Profit
                                </th>
                                <th scope="col" className="px-6 py-6 whitespace-nowrap ">
                                    Avg. Daily Profit
                                </th>
                                <th scope="col" className="px-6 py-6 whitespace-nowrap ">
                                    Win %(Day)
                                </th>
                                <th scope="col" className="px-6 py-6 whitespace-nowrap ">
                                    Price (Rs)
                                </th>
                                <th scope="col" className="px-6 py-6 whitespace-nowrap ">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                // eslint-disable-next-line react/prop-types
                                dataset?.map((data, id) => {
                                    return (
                                        <tr className="even:bg-white  odd:bg-pink-200 rounded hover:scale-x-[1.01] duration-300" key={id}>
                                            <th scope="row" className="px-6 py-6 whitespace-nowrap font-medium text-gray-900 rounded-l-lg ">
                                                {id + 1}
                                            </th>
                                            <td className="px-6 py-6 whitespace-nowrap">
                                                {data.Name}
                                            </td>
                                            <td className="px-6 py-6 whitespace-nowrap">
                                                {data.Calmar_Ratio}
                                            </td>
                                            <td className="px-6 py-6 whitespace-nowrap">
                                                {data.Overall_Profit}
                                            </td>
                                            <td className="px-6 py-6 whitespace-nowrap">
                                                {data.Avg_Daily_Profit}
                                            </td>
                                            <td className="px-6 py-6 whitespace-nowrap">
                                                {data.Win_Pcn_Day}
                                            </td>
                                            <td className="px-6 py-6 whitespace-nowrap">
                                                {data.Price}
                                            </td>
                                            <th className="px-6 py-6 whitespace-nowrap rounded-r-lg">
                                                <a href="#" className="font-medium text-blue-600  hover:underline">{data.Action}</a>
                                            </th>
                                        </tr>
                                    )
                                })
                            }



                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    )
}

export default Table