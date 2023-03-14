import React from 'react'

const About = () => {
  return (
    <>
    <section id="about">
        <h1 className="text-center fs-1 text-dark fst-bold">About Us</h1>
        <div className="container-fluid">
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="./image/about.png" style={{height:"30rem"}}alt="First slide"/>
    </div>
     
  </div>
</div>
        
        </div>
        <div className="container-fluid mb-2 mt-2">
            <div className="row">
               
            <div className="col-md-6 ">
                    <img src="./image/abou.png" className='img-fluid' alt="about"/>
                </div>
                <div className="col-md-6 mt-5 text-center">
                    <h1 className='text-primary fst-bold'>Team Extension</h1>
                    <p className='fs-5 text-left'>Our team extension services assist you in swiftly scaling your business, using agile 
                    development processes, and reducing time-to-market. End-to-end development and release, as well as customizable engagements 
                    tailored to your specific needs, include platform specialty, mobile strategy, project management, and more. If you 
                    need to supplement your internal team, we can provide the skills you require to bring your mobile product to market. 
                    We provide customized, collaborative, and transparent on-site, off-site, and hybrid team extension solutions. With our 
                    expertise entrenched. You have complete control and ownership of the project.</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About