
export default function ShowEventCard(props) {

    return (
        <>
            <h1>{props.data.id}</h1>
            <img className="eventimg" src={props.data.imgages.url} alt='no img'></img>
            <h3 className="eventheader">{props.data.name}</h3>
            <p className="eventtext">Brief description, click to view more...</p>
        </>
    )

}

/*
{props.data.imgages.url}
*/