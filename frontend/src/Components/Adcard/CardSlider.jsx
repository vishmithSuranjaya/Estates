import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSlider = () => {
    const data = [
        {
            name: 'Jogn Morgan',
            review: 'test'
        },

        {
            name: 'Ellie Anderson',
            review: 'test02'
        },

        {
            name: 'Jogn Morgan',
            review: 'test'
        },

        {
            name: 'Ellie Anderson',
            review: 'test02'
        },

        {
            name: 'Jogn Morgan',
            review: 'test'
        },

        {
            name: 'Ellie Anderson',
            review: 'test02'
        }
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024, // For screen widths below 1024px
              settings: {
                slidesToShow: 3, // Show 3 slides
              },
            },
            {
              breakpoint: 768, // For screen widths below 768px
              settings: {
                slidesToShow: 2, // Show 2 slides
              },
            },
            {
              breakpoint: 480, // For screen widths below 480px
              settings: {
                slidesToShow: 1, // Show 1 slide
              },
            },
          ],
      };

  return (
    <div className='w-3/4 m-auto'>
      <div className='mt-20 bg-blue'>
        <Slider {...settings} >
        {data.map((d)=>(
         <div className='bg-white h-[300px] text-black rounded-xl pl-[10px]' style={{marginLeft:'10px'}}>
            <div className='rounded-xl'>
                 <img src='' alt='image 01' />
            </div>

            <div className='flex flex-col justify-center items-center gap-4 p-4'>
                <p className='text-xl font-semibold'>{d.name}</p>
                <p>{d.review}</p>
            </div>
         </div>
        ))}
        </Slider>
      </div>
    </div>
  )
}

export default CardSlider
