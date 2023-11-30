import './PlacesCard.css';
import image1 from '../assets/cathedral.jpg';
import image2 from '../assets/kamppiH.jpg';
import image3 from '../assets/korkesaari.jpg';
import image4 from '../assets/suomenlinna.jpg';


export default function PlacesCard() {
    return (
        <>
            <div className="placesContainer">
                <div className="placesCard middle">
                    <div className="slides">
                        <input type="radio" name="r" id="r1" />
                        <input type="radio" name="r" id="r2" />
                        <input type="radio" name="r" id="r3" />
                        <input type="radio" name="r" id="r4" />

                        <div className="slide one s1">
                            <img src={image1} alt='Cathedral' className="imageSlide1" />
                            <div className='image-date1'><h2>Cathedral</h2>
                                <a href="https://helsingintuomiokirkko.fi">See more</a></div>
                        </div>
                        <div className="slide two">
                            <img src={image2} alt='Kamppi' className="imageSlide" />
                        </div>
                        <div className="slide three">
                            <img src={image3} alt='Korkesaari' className="imageSlide" />
                        </div>
                        <div className="slide four">
                            <img src={image4} alt='Suomenlinna' className="imageSlide" />
                        </div>
                    </div>

                    <div className="navigation">
                        <label for="r1" className="bar"></label>
                        <label for="r2" className="bar"></label>
                        <label for="r3" className="bar"></label>
                        <label for="r4" className="bar"></label>

                    </div>
                </div >
            </div>
        </>
    );
}