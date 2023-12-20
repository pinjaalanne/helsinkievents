import './Gallery.css';
import image from '../assets/archipelago.jpg';
import image1 from '../assets/center.jpg';
import image2 from '../assets/electric-bus.jpg';
import image3 from '../assets/helsinki-cathedral.jpg';
import image4 from '../assets/nature.jpg';
import image5 from '../assets/rigatta.jpg';
import image6 from '../assets/sibelius.jpg';
import image7 from '../assets/station.jpg';

function Gallery() {
    return (
        <div className="container-grid">
            <figure className='item1'>
                <img src={image} alt='helsinki' className="image" />
            </figure>
            <figure className='item2'>
                <img src={image1} alt='helsinki' className="image" />
            </figure>
            <figure className='item3'>
                <img src={image2} alt='helsinki' className="image" />
            </figure>
            <figure className='item4'>
                <img src={image3} alt='helsinki' className="image" />
            </figure>
            <figure className='item5'>
                <img src={image4} alt='helsinki' className="image" />
            </figure>
            <figure className='item6'>
                <img src={image5} alt='helsinki' className="image" />
            </figure>
            <figure className='item7'>
                <img src={image6} alt='helsinki' className="image" />
            </figure>
            <figure className='item8'>
                <img src={image7} alt='helsinki' className="image" />
            </figure>
        </div >
    )
}

export default Gallery