import EventCard from '../components/EventCard'
import PlacesCard from '../components/PlacesCard'

function Home() {
    return (
        <>
            <main className="box">
                <h3>Home here</h3>
                <input type="text" id="search" placeholder="Search an event"></input>
                <div className="cards">
                    <EventCard />
                </div>
                <div><h2>Don't Miss</h2></div>
                <div className="placesContainer">

                    <PlacesCard />
                </div>
            </main >
        </>
    );
}

export default Home