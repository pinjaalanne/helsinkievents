import img from '../assets/center.jpg'

function EventCard(props) {

    return (
        <>
            <div className="cards">
                <div className="card">
                    <img className="eventimg" src={props.data.images.url} alt='no img'></img>
                    <h3 className="eventheader">{props.data.name}</h3>
                    <p className="eventtext">Brief description, click to view more...</p>

                </div >
            </div >
        </>
    );
}

export default EventCard