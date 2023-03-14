import React from 'react'

const About = () => {
  return (
    <>
    <section id="about">
        <h1 className="text-center fs-1 text-dark fst-bold mt-5">About Us</h1>
        <div className="container-fluid">
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="./image/about.png" style={{height:"30rem"}}alt="First slide"/>
    </div>
     
  </div>
</div>
        
        </div>
        <div className="container-fluid mb-2 mt-5">
            <div className="row">
            <div className="col-md-6 ">
                    <img src="https://imgs.search.brave.com/7oZbK89tbAvTzpXXuxgwZi_6Pp64AfoQrtbb8amfH-M/rs:fit:1200:1038:1/g:ce/aHR0cHM6Ly93YWMt/Y2RuLmF0bGFzc2lh/bi5jb20vZGFtL2pj/cjpmYzA0ZWQ1Ny1m/YTI3LTRjMTYtODVk/MC0xYjU0MTQwMmUw/MzIvU3RhY2tAMngu/cG5nP2NkblZlcnNp/b249am8" className='img-fluid' alt="about"/>
                </div>
                <div className="col-md-6 mt-5 text-center">
                    <h1 className='text-primary fw-bold'>Team Extension</h1>
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