import Image from 'next/image';
import { styles } from '../data/reviews';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };


const ImageSlider = () => {

  return (
    <Carousel
    swipeable={true}
    draggable={true}
    showDots={true}
    responsive={responsive}
    ssr={true}
    infinite={true}
    autoPlay={false}
    autoPlaySpeed={5000}
    transitionDuration={500}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    // deviceType={this.props.deviceType}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    >
    {styles.map((style, index) => (
        <Image key={index} src={style} alt="image" draggable="false" />
    ))}
    </Carousel>
  )
}

export default ImageSlider