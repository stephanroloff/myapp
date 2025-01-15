export function YearTrackingGrid() {

    const datesList = [
        new Date('2024-01-06'),
        new Date('2024-01-17'),
        new Date('2024-02-06'),
        new Date('2024-03-13'),
        new Date('2024-03-23'),
        new Date('2024-03-28'),
        new Date('2024-03-31'),
        new Date('2024-04-27'),
        new Date('2024-04-29'),
        new Date('2024-04-30'),
        new Date('2024-05-09'),
        new Date('2024-05-11'),
        new Date('2024-05-16'),
        new Date('2024-05-29'),
        new Date('2024-06-08'),
        new Date('2024-06-11'),
        new Date('2024-06-20'),
        new Date('2024-06-26'),
        new Date('2024-07-11'),
        new Date('2024-07-15'),
        new Date('2024-07-26'),
        new Date('2024-08-02'),
        new Date('2024-08-04'),
        new Date('2024-08-18'),
        new Date('2024-08-20'),
        new Date('2024-08-25'),
        new Date('2024-09-28'),
        new Date('2024-10-10'),
        new Date('2024-10-11'),
        new Date('2024-10-20'),
        new Date('2024-10-25'),
        new Date('2024-11-09'),
        new Date('2024-12-08'),
        new Date('2024-12-11'),
        new Date('2024-12-21'),
        new Date('2024-12-23'),
        new Date('2024-12-26'),
        new Date('2024-12-28'),
        new Date('2024-12-30'),
        new Date('2025-1-10'),
        new Date('2025-1-15'),
    ];

    const startDate = new Date();
    startDate.setFullYear(startDate.getFullYear() - 1); // Rest 1 year
    startDate.setDate(startDate.getDate() - 1); // Rest 1 day
    console.log('dia comienzo', startDate.getFullYear());
    
    const endDate = new Date();

    const boxes: [Date, boolean][] = [];
    let datesListIndex = 0;

    while (startDate < endDate) {
        const newday = new Date(startDate.setDate(startDate.getDate()+1));

        if (
            datesListIndex < datesList.length &&
            newday.getDate() == datesList[datesListIndex].getDate() &&
            newday.getMonth() == datesList[datesListIndex].getMonth() &&
            newday.getFullYear() == datesList[datesListIndex].getFullYear()
        ) {
            boxes.push([new Date(newday), true]);
            datesListIndex++;
        } else {
            boxes.push([new Date(newday), false]);
            if(datesList[datesListIndex].getTime()<startDate.getTime()){
                datesListIndex++;
            }
        }

    }
    // Dividir el array en grupos de 7 elementos
    const chunkArray = (arr: [Date, boolean][], size: number) => {
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    };
    // Dividir `boxes` en grupos de 7
    const groupedBoxes = chunkArray(boxes, 7);

    const months:number[] =[];

    function showMonthOnce(group: [Date, boolean][]) {
        let highValue:number=0;
        for (let index = 0; index < group.length; index++) {
            const element = group[index][0].getMonth();
            highValue=element;
        }
        const lastArrayElement = months[months.length - 1];
        if(lastArrayElement==highValue){
            return '';
        }else{
            months.push(highValue);
            let month = '';
            switch (highValue) {
                case 0:
                    month = 'Jan';
                    break;
                case 1:
                    month = 'Feb';
                    break;
                case 2:
                    month = 'Mar';
                    break;
                case 3:
                    month = 'Apr';
                    break;
                case 4:
                    month = 'May';
                    break;
                case 5:
                    month = 'Jun';
                    break;
                case 6:
                    month = 'Jul';
                    break;
                case 7:
                    month = 'Aug';
                    break;
                case 8:
                    month = 'Sep';
                    break;
                case 9:
                    month = 'Oct';
                    break;
                case 10:
                    month = 'Nov';
                    break;
                case 11:
                    month = 'Dec';
                    break;
                default:
                    break;
            }
            return month;
        }
    }

    return (
        <div className="group-container flex">
            <div className="flex flex-col  mr-2 ">
                <div className="h-4"></div>
                <p className="text-[10px] leading-none mb-[6px]">Mon</p>
                <p className="text-[10px] leading-none mb-[6px]">Tue</p>
                <p className="text-[10px] leading-none mb-[6px]">Wed</p>
                <p className="text-[10px] leading-none mb-[6px]">Thu</p>
                <p className="text-[10px] leading-none mb-[6px]">Fri</p>
                <p className="text-[10px] leading-none mb-[6px]">Sat</p>
                <p className="text-[10px] leading-none mb-[6px]">Sun</p>
            </div>
            {groupedBoxes.map((group, groupIndex) => (
                <div key={groupIndex} className="group-container flex-col relative">
                    <div className="h-[17px]"></div>
                    {group.map((element, index) => (
                        <>
                            {index == 0 ? <p key={index+1} className="text-[11px] absolute top-0 left-0 leading-none mb-[6px]">{showMonthOnce(group)}</p> : ''}
                            <div
                                key={index}
                                title={element[0].toDateString()}
                                className={`box w-3 h-3 rounded-[3px] mb-1 mr-1 border-gray-400 border dark:bg-gray-600 dark:border-0 
                            ${element[1] ? 'bg-themeColor dark:bg-themeColor' : ''
                                    }`}
                            ></div>
                        </>
                    ))}
                </div>
            ))}
        </div>
    );

}
