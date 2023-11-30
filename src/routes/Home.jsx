import EventCard from '../components/EventCard'
import PlacesCard from '../components/PlacesCard'

function Home() {
    return (
        <>
            <main>
                <div class="box">
                    <h3>Home here</h3>
                    <input type="text" id="search" placeholder="Search an event"></input>
                    <div className="cards">
                        <EventCard />
                    </div>

                    <PlacesCard />
                </div>
            </main >
        </>
    );
}

export default Home