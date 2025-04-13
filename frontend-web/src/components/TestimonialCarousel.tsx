import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    position: 'Software Engineer',
    company: 'Tech Corp',
    testimonial: 'This job portal helped me find my dream job quickly and easily.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Product Manager',
    company: 'Innovate Inc',
    testimonial: 'The best platform for job seekers and employers alike.',
  },
  {
    id: 3,
    name: 'Sam Wilson',
    position: 'UX Designer',
    company: 'Creative Studio',
    testimonial: 'A seamless experience from job search to application.',
  },
];

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="testimonial-carousel">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <p>{testimonial.testimonial}</p>
            <h4>{testimonial.name}</h4>
            <p>{testimonial.position} at {testimonial.company}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
