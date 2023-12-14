import img from '../assets/center.jpg'
import { useState, useEffect } from 'react';
import axios from "axios";
import ShowEventCard from "./ShowEventCard";

function EventCard() {

    const [events, setEvents] = useState([]);
    const [loaded, setLoaded] = useState(false);
    console.log('events', events);

    useEffect(() => {
        setLoaded(false);
    }, []);
    // [] props

    function handleResponse(res) {
        setEvents(res.data);
        console.log('text', res.data);
        setLoaded(true);
    }

    function load() {
        const url = "https://api.hel.fi/linkedevents/v1/event/?days=7";
        axios.get(url)
            .then(handleResponse)
    }

    if (loaded) {
        console.log('events', events)

        return (
            <>
                <div className="cards">
                    {events.map(function (event, index) {
                        return (
                            < div className="card" key={index}>
                                <ShowEventCard data={event} />
                            </div >

                        )
                    })}

                </div >
            </>
        );
    } else {

        load();
        return null;

    }
}

export default EventCard

