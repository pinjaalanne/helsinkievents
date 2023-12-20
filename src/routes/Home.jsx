import { useState, useEffect } from 'react';
import axios from "axios";
import EventCard from '../components/EventCard'
import PlacesCard from '../components/PlacesCard'
import 'react-datepicker/dist/react-datepicker.css'
import BackToTop from "../components/BackToTop";
import { NavLink } from "react-router-dom";

function Home() {
    const [events, setEvents] = useState([]);
    const [search, setSearch] = useState('');

    const searchHandler = (e) => {
        setSearch(e.target.value);
        console.log(e.target.value);
    }
    function closeHandler(id) {
        console.log(id);
        const newArray = events.filter((element) => element.id !== id); // newArray is everything but not that id
        setEvents(newArray);

    }

    useEffect(() => {
        axios.get('https://api.hel.fi/linkedevents/v1/event/?days=30')
            .then((res) => {
                console.log(res.data.data)
                setEvents(res.data.data)
            }).catch((error) => console.log(error))
    }, []);

    return (
        <main className="box">
            <div className="placesContainer">
                <PlacesCard />
            </div>
            <h1 className="welcometext">Welcome to HelsinkiEvents</h1>
            <p className="welcometextp">Discover the heartbeat of Helsinki&apos;s vibrant cultural scene with our comprehensive event platform.</p>
            <p><NavLink className="about" to="/about">Learn more about us</NavLink></p>
            <div className="searchwrap">
                <h3>Search for an event below</h3>
                <input type="text" onChange={searchHandler} id="search" placeholder="Search by date yyyy-mm-dd"></input>
            </div>
            <div className="cards">
                {events
                    .filter((event) => event.start_time.toLowerCase().includes(search.toLowerCase()))
                    .map((event) => <EventCard key={event.id} event={event} onclick={() => closeHandler(event.id)} />)}
            </div>
            <BackToTop />
        </main >
    );
}

export default Home;