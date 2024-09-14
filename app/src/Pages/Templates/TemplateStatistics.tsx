type templateStatisticsProps = {
    data:{
        "name": string,
        "url": string,
        "habitType": number,
        "submenus": string[] 
    }
}

const Statistics = (props:templateStatisticsProps) => {
    const {data} = props;

return (
    <>
        <h1>{data.name} Statistics Page</h1>
        <br/>
        <p>{data.name}</p>
        <p>{data.url}</p>
        <p>{data.url}/{data.submenus}</p>
    </>
);
};

export default Statistics;
  