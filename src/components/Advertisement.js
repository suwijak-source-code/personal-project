import { useState } from "react";

// import "./Carousel.css";

const Carousel = () => {
  const [data, setData] = useState([
    {
      id: 1,
      img: "baner1.png",
    },
    {
      id: 2,
      img: "baner2.png",
    },
    {
      id: 3,
      img: "baner3.png",
    },
  ]);
  const [slide, setSlide] = useState({
    id: 1,
    img: "baner1.png",
  });

  const handlePrevious = (e) => {
    e.preventDefault();
    if (slide.id !== 1) {
      const { id, img } = data.find((value) => value.id === slide.id - 1);
      setSlide({ ...slide, id, img });
    } else {
      setSlide(slide);
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (slide.id < data.length) {
      const { id, img } = data.find((value) => value.id === slide.id + 1);
      setSlide({ ...slide, id, img });
    } else {
      setSlide(slide);
    }
  };

  const handleChange = (e, item) => {
    e.preventDefault();
    const { id, img } = data.find((value) => value.id === item);
    setSlide({ ...slide, id, img });
  };

  // const timeSlide = (e) => {
  //     e.preventDefault();

  //     setTimeout(timeSlide, 2000);
  // }

  return (
    <div className="carousel-component">
      <div>
        <img className="img-carousel" src={slide.img} alt="" />
        <a className="previous" onClick={handlePrevious}>
          &#10094;
        </a>
        <a className="next" onClick={handleNext}>
          &#10095;
        </a>
      </div>

      <div>
        {data.map((value) => (
          <span
            className="dot"
            onClick={(e) => handleChange(e, value.id)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
