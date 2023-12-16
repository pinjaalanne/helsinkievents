function EventCard({ event }) {

    return (
        <div className="card">
            <button className="closebtn">x</button>
            <h3 className="eventheader">{event.name.fi}</h3>
            <img className="eventimg" src={event.images[0].url} alt='no img'></img>
            <div className="eventtext-wrap">
                <p className="starttime">Event date: {(event.start_time).split('', 10)}</p>
                <p className="eventtext">{event.short_description.fi}</p>
            </div >
        </div>
    );
}

export default EventCard