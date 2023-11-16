import EventCard from '../components/EventCard'

function Home() {
    return (
        <>
            <main>
                <h3>Home here</h3>
                <input type="text" id="search" placeholder="Search an event"></input>
                <div className="cards">
                    <EventCard />
                </div>
            </main>
        </>
    );
}

export default Home