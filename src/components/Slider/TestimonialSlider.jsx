import React, { useState } from 'react';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import Testimonial from '../Testimonial';
import Div from '../Div';
import Spacing from '../Spacing';
export default function TestimonialSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  
  const testimonialData = [
    {
      testimonialThumb: '/images/profilepics/nairanjana.jpeg',
      testimonialText: 'Now that you are on the verge of the next chapter of your lives, I wish that you  become the best version of yourselves, achieve all that you deserve and make us proud. Godspeed !!!!',
        
      avatarName: 'Nairanjana Chowdhury',
      avatarDesignation: 'Techno Main Salt Lake',
      ratings: '4',
    },
    {
      testimonialThumb: '/images/profilepics/poulami.jpg',
      testimonialText: 'Dear students, Fly higher and higher and higher .... No good byes ... just FAIR WELL ... loads of love ... PD Ma`m',
        
      avatarName: 'Prof. Poulami Dutta',
      avatarDesignation: 'Techno Main Salt Lake',
      ratings: '4',
    },
    {
      testimonialThumb: '/images/profilepics/moutushibanerjee.jpg',
      testimonialText: '           KYU TU ITNA SOCHTA HAI...DUNIYA YAAD RAKHTA HAI USE          JO HAMESHA LAUT KE ATA HAI...KHULA HAI TERA MANJIL KA RASTA...SAMAT LE APNE AAP KO, AUR           BOL DE, HASTA LA VISTA.....',
        
      avatarName: 'Moutushi Banerjee',
      avatarDesignation: 'Techno Main Salt Lake',
      ratings: '4',
    },{
      testimonialThumb: '/images/profilepics/mkn.jpg',
      testimonialText: 'Your academic life may have ended but always remember that learning is a never-ending process. Try to be a good human being and enjoy the journey. My heartfelt good wishes to all of you. ',
        
      avatarName: 'Mrinal Kanti Nath',
      avatarDesignation: 'Techno Main Salt Lake',
      ratings: '4',
    },{
      testimonialThumb: '/images/profilepics/utpal.jpg',
      testimonialText: 'Finally that day has come: a day of sorrow, a day of happiness. It`s hard to believe you will be leaving soon. Happy to be a part of your amazing journey in TMSL. Pretty sure you are going to be an asset wherever you go. Wish you the very best, keep in touch. With love: UD.',
        
      avatarName: 'Utpal Das',
      avatarDesignation: 'Techno Main Salt Lake',
      ratings: '4',
    },{
      testimonialThumb: '/images/profilepics/manashi.jpg',
      testimonialText: '"Believe in yourself and all that you are. Know that there is something inside you  that     is greater than any obstacle.” I hope that the education that you all have  gained here would help you in your future. May you enjoy life and achieve greater heights in your career. Once again,  all the very best to all of you for your brightest future.',
        
      avatarName: 'Manashi De',
      avatarDesignation: 'Techno Main Salt Lake',
      ratings: '4',
    },{
      testimonialThumb: '/images/profilepics/ujjal.jpeg',
      testimonialText: 'Dear students, you made us successful through your results and achievements. Our journey with you may stop here, but for you, it is the beginning of your life. Be dedicated to your work. We wish you a successful life.',
        
      avatarName: 'Ujjal Chakraborty',
      avatarDesignation: 'Techno Main Salt Lake',
      ratings: '4',
    },{
      testimonialThumb: '/images/profilepics/arpita.jpg',
      testimonialText: 'A happy farewell to you. Education does not stop you from making mistakes but it inspires you to take lessons from your mistakes. May you all get success in whatever you do in the future. May you have a shining future ahead. It’s sad to see you leave but it’s good to see you’re all prepared for the next phase of your life. Congratulations on your farewell. Now, shape your career according to your dreams. Best of luck.',
        
      avatarName: 'Dr. ARPITA BISWAS',
      avatarDesignation: 'Techno Main Salt Lake',
      ratings: '4',
    },{
      testimonialThumb: '/images/profilepics/tapan.jpg',
      testimonialText: 'As life gives you wings, always remember that no matter what you do and where you go, your well-wishers are always here...looking out for you and wishing that all your dreams come true. All the Best...GOD Bless you.',
        
      avatarName: 'Dr. Tapan Chowdhury',
      avatarDesignation: 'Techno Main Salt Lake',
      ratings: '4',
    },{
      testimonialThumb: '/images/profilepics/dipankar.jpg',
      testimonialText: 'Best wishes to all for a very bright and prosperous journey ahead, both in life and in your career.',
        
      avatarName: 'Dipankar Pal',
      avatarDesignation: 'Techno Main Salt Lake',
      ratings: '4',
    },{
      testimonialThumb: '/images/profilepics/amit.jpeg',
      testimonialText: 'You don’t always get what you wish for; you get what you work for. So, work hard and be successful in your future life.',
        
      avatarName: 'Amit Das',
      avatarDesignation: 'Techno Main Salt Lake',
      ratings: '4',
    },{
      testimonialThumb: '/images/profilepics/ariruna.jpg',
      testimonialText: 'The end of one journey marks the beginning of another. Hope you succeed in all of your endeavors. My best wishes are always with you.',
        
      avatarName: 'Ariruna Dasgupta',
      avatarDesignation: 'Techno Main Salt Lake',
      ratings: '4',
    },{
      testimonialThumb: '/images/profilepics/simanti.jpg',
      testimonialText: 'Dear students,May you have a successful career ahead. Thank you for all the wonderful moments that you blessed us with. Let your farewell from this institute open newer doors of opportunities for you .The dedication you showed throughout your student life is unimaginable. There is no doubt that this dedication will take you on a new height in life. Happy Farewell!',
        
      avatarName: 'Simanti Biswas',
      avatarDesignation: 'Techno Main Salt Lake',
      ratings: '4',
    },
  ];
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  return (
    <>
      <Div className="cs-gradient_bg_1 cs-shape_wrap_3 cs-parallax">
        <Spacing lg="130" md="80" />
        <Div className="cs-shape_3 cs-to_up">
          <img src="/images/shape_1.svg" alt="Shape" />
        </Div>
        <Div className="container">
          <Div className="cs-testimonial_slider">
            <Div className="cs-testimonial_slider_left">
              <Slider
                asNavFor={nav1}
                ref={slider2 => setNav2(slider2)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
                centerMode={true}
                centerPadding="0px"
                arrows={false}
              >
                {testimonialData.map((item, index) => (
                  <Div className="slider-nav_item" key={index}>
                    <Div className="cs-rotate_img">
                      <Div className="cs-rotate_img_in">
                        <img src={item.testimonialThumb} alt="Thumb" />
                      </Div>
                    </Div>
                  </Div>
                ))}
              </Slider>
            </Div>
            <Div className="cs-testimonial_slider_right">
              <Slider
                asNavFor={nav2}
                ref={slider1 => setNav1(slider1)}
                prevArrow={<SlickArrowLeft />}
                nextArrow={<SlickArrowRight />}
                className="cs-arrow_style1"
              >
                {testimonialData.map((item, index) => (
                  <Div key={index}>
                    <Testimonial
                      testimonialText={item.testimonialText}
                      avatarName={item.avatarName}
                      avatarDesignation={item.avatarDesignation}
                      ratings={item.ratings}
                    />
                  </Div>
                ))}
              </Slider>
            </Div>
          </Div>
        </Div>
        <Spacing lg="130" md="80" />
      </Div>
    </>
  );
}
