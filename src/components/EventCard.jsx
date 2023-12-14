function EventCard({ event }) {
    return (
        <div className="card">
            <div className="card-wrap">
                <img className="eventimg" src={event.images[0].url} alt='no img'></img>
                <h3 className="eventheader">{event.name.fi}</h3>
                <div className="eventtext-wrap">
                    <p className="eventtext">{event.short_description.fi}</p>
                    <p className="starttime">{event.start_time}</p>
                </div >
            </div>
        </div>
    );
}

export default EventCard