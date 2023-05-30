import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../static/1.avif'
import slide2 from '../static/2.jpg'
import slide3 from '../static/3.jpg'

const Home = ()=> {
  return (
    <div className='row'>
        <Carousel variant="dark">
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={slide1}
            alt="First slide"
            />
            <Carousel.Caption>
            <h5>Data Implementation</h5>
            <p>User's Data is Managed Using Crud and API</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={slide2}
            alt="Second slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={slide3}
            alt="Third slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </div>
  );
};

export default Home;