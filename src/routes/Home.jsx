import { useState, useEffect } from 'react';
import axios from "axios";
import EventCard from '../components/EventCard'
import PlacesCard from '../components/PlacesCard'

function Home() {
    const url = 'https://api.hel.fi/linkedevents/v1/event';
    const [events, setEvents] = useState([]);
    console.log('events', events);

    useEffect(() => {
        axios.get('https://api.hel.fi/linkedevents/v1/event')
            .then((res) => {
                console.log(res.data)
                setEvents(res.data.data)
            }).catch((error) => console.log(error))
    }, []);

    return (
        <>
            <main className="box">
                <h1 className="welcometext">Helsinki city events</h1>
                <div className="searchwrap">
                    <h3>Search for an event below</h3>
                    <input type="text" id="search" placeholder="Search an event"></input>
                    <button className="searchbtn">Check Events</button>
                </div>
                <div className="cards">
                    {events.map(event => <EventCard key={event.id} {...event} />)}
                </div>
                <div><h2 className="placestext">Don't Miss</h2></div>
                <div className="placesContainer">

                    <PlacesCard />
                </div>
            </main >
        </>
    );
}

export default Home;