import { useState, useEffect } from 'react';
import axios from "axios";
import EventCard from '../components/EventCard'
import PlacesCard from '../components/PlacesCard'
import 'react-datepicker/dist/react-datepicker.css'

function Home() {
    const [events, setEvents] = useState([]);
    const [search, setSearch] = useState('');

    const searchHandler = (e) => {
        setSearch(e.target.value);
        console.log(e.target.value);
    }

    console.log('events', events);

    useEffect(() => {
        axios.get('https://api.hel.fi/linkedevents/v1/event/')
            .then((res) => {
                console.log(res.data.data)
                setEvents(res.data.data)
            }).catch((error) => console.log(error))
    }, []);

    return (
        <>
            <main className="box">
                <div className="placesContainer">

                    <PlacesCard />
                </div>
                <h1 className="welcometext">Helsinki city events</h1>
                {/* <div><h2 className="placestext">Don't Miss</h2></div> */}
                <div className="searchwrap">
                    <h3>Search for an event below</h3>
                    <input type="text" onChange={searchHandler} id="search" placeholder="Search by date yyyy/mm/dd"></input>
                </div>
                <div className="cards">
                    {events
                        .filter((event) => event.start_time.toLowerCase().includes(search.toLowerCase()))
                        .map((event) => <EventCard key={event.id} event={event} />)}
                </div>
            </main >
        </>
    );
}

export default Home;