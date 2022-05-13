import React from 'react';
import banner from '../../assets/images/bucketgirl.png'
const Landing = () => {
    return (
    <div>
        <div class="hero h-screen lg:h-[63vh] bg-accent mt-16 sm:mt-0 lg:mt-12">
        <div class="hero-content flex-col lg:flex-row">
            
            <div className='max-w-xl' 
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000" >
                <h4 className='capitalize text-sm md:text-lg font-bold'>best quality</h4>
            <h1 class="text-2xl sm:3xl lg:text-5xl font-bold">Professional Cleaning Service</h1>
            <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
            <button class="btn btn-primary">Get Started</button>
            </div>
            <div className='h-[60vh]'
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-easing="ease-in-out"
            data-aos-duration="1500">
                <img src={banner} class="h-[60vh] rounded-lg shrink-0 " alt='...' />
            </div>
        </div>
        </div>
        <div className='shadow-lg p-10 relative bg-base-100 mt-[-40px] z-40 rounded-2xl mx-auto w-full lg:w-5/6 mb-16'
            data-aos="fade-up"
             data-aos-delay="700"
              data-aos-easing="ease-in-out"
              data-aos-duration="2000"

           >
            <h2 className='text-2xl capitalize text-primary'>get free estimate</h2>
            <div className='mt-5'>
                <form className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                  <div>
                       <input type="text" placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
                  </div>
                  <div>
                       <input type="number" placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                  </div>
                  <div>
                       <input type="text" placeholder="Type of Cleaning" class="input input-bordered w-full max-w-xs" />
                  </div>
                  <div>
                       <input type="numbers" placeholder="Number of Bedrooms" class="input input-bordered w-full max-w-xs" />
                  </div>
                  <div>
                     <input type="numbers" placeholder="Number of Bethroom" class="input input-bordered w-full max-w-xs" />
                  </div>
                  <div>
                       <input type="text" placeholder="Frequency of Cleaning" class="input input-bordered w-full max-w-xs" />
                  </div>
                  <div>
                       <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                  </div>
                  <div>
                       <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                  </div>
                <button class="btn btn-primary uppercase" type='submit'>REQUEST A QOUTE</button>

                </form>
            </div>
        </div>
    </div>
    );
};

export default Landing;