import img from '../assets/center.jpg'

function EventCard() {
    return (
        <>
            <div className="cards">
                <div className="card">
                    <img className="eventimg" src={img} alt="no img"></img>
                    <h3 className="eventheader">Event name</h3>
                    <p className="eventtext">Brief description, click to view more...</p>
                </div >
                <div className="card">
                    <img className="eventimg" src={img} alt="no img"></img>
                    <h3 className="eventheader">Event name</h3>
                    <p className="eventtext">Brief description, click to view more...</p>
                </div >
                <div className="card">
                    <img className="eventimg" src={img} alt="no img"></img>
                    <h3 className="eventheader">Event name</h3>
                    <p className="eventtext">Brief description, click to view more...</p>
                </div >
                <div className="card">
                    <img className="eventimg" src={img} alt="no img"></img>
                    <h3 className="eventheader">Event name</h3>
                    <p className="eventtext">Brief description, click to view more...</p>
                </div >
                <div className="card">
                    <img className="eventimg" src={img} alt="no img"></img>
                    <h3 className="eventheader">Event name</h3>
                    <p className="eventtext">Brief description, click to view more...</p>
                </div >
                <div className="card">
                    <img className="eventimg" src={img} alt="no img"></img>
                    <h3 className="eventheader">Event name</h3>
                    <p className="eventtext">Brief description, click to view more...</p>
                </div >
            </div >
        </>
    );
}

export default EventCard