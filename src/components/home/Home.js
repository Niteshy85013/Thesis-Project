import React from 'react'
import Contact from "./Contact"
import About from "./About"
 
const Home = () => {
  return (
    <>
    <section id="home" class="bodymain">
    <div className="container">
            <div class="col text-center">
                <h1 class="text-dark py-5 fw-bold headings">We Bring <span class="text-primary">Grate Talents</span></h1>
                <h2 class="fst-italic">Looking for Quality Technology Products and Marketing for your business</h2>
                <br/>
                <a href="/" class="btn btn-warning shadow-lg rounded fw-bold fs-3 cardshd ">Get Started</a>
            </div>
    </div>
    </section>
    
    <div class="container backimg contradius mt-2">
  <div class="row">
        <div class="row ">
        <h1 className=' fst-bold text-light mt-2'>For Clients</h1>
            <h1 class="section-title fst-bold mb-3 py-3 text-warning">Discover talent on your own terms.</h1>
            <h2 class="fst-bold text-primary py-3">Collaborate with the greatest network of independent specialists to do tasks quickly and completely.</h2>
        </div>
        <div class="col mb-4 ">
            <div class="card  pt-5 bg-success">
                <div class="card-body">  
                    <h4 class=" mb-3 text-light">Post a job and hire a pro</h4>
                </div>
            </div>
        </div>
        <div class="col mb-4">
            <div class="card  pt-5 bg-success">
                <div class="card-body">  
                    <h4 class="  mb-3 text-light">Browse and buy project</h4>
                </div>
            </div>
        </div>
        <div class="col mb-4">
            <div class="card  pt-5 bg-success">
                <div class="card-body">  
                    <h4 class=" mb-3 text-light">Let Us help you find a right Talents</h4>
                </div>
            </div>
        </div>
        
    </div>
</div>
  {/* <!-- {{!-- Main section ends --}} --> */}

  {/* Banner Section */}
  <div className="container-fluid mb-2 mt-5 contradius border-dark">
            <div className="row">
            <div className="col-md-6 ">
                    <img src="https://imgs.search.brave.com/LGVvt1WYiSOuwGoIjBM_D76t6D-s6JWYhCfM8KbgTj4/rs:fit:804:615:1/g:ce/aHR0cHM6Ly93d3cu/amluZy5mbS9jbGlw/aW1nL2Z1bGwvMjU0/LTI1NDU1ODJfZW1w/bG95ZWUtY2xpcGFy/dC1jb21wdXRlci13/b3JrZXItbWFuLWlu/LW9mZmljZS1jbGlw/YXJ0LnBuZw" className='img-fluid' alt="about"/>
                </div>
                <div className="col-md-6 mt-5 ">
                    <h2 className='text-warning fw-bold'>For Talents</h2>
                    <h1 className=' fw-bold py-3'>Find Excellent Work </h1>
                    <h2 class="py-3">Meet clients you want to work with and advance your career or business.</h2>
               
                  
                    <span class="fs-5 pw-bold"><i class="fa fa-check" style={{ fontSize: '40px', color:"green" }}/> Discover opportunities at each stage of your freelance career.</span><br></br><br></br>
                    <span class="fs-5 pw-bold"><i class="fa fa-check" style={{ fontSize: '40px', color:"green" }}/> You have control over when, where, and how you work.</span><br></br><br></br>
                    <span class="fs-5 pw-bold"><i class="fa fa-check" style={{ fontSize: '40px', color:"green" }}/> Investigate various ways to make money.</span>
                    

                   
                    
                     
                     
                    
                </div>
            </div>
        </div>
    
 
  {/* Banner Section Ends */}

 
                  {/* {{!-- Services sections --}} --> */}
{/* <section className='service'>
<div class="container mt-5">
    <div class="row">
        <div class="col-lg-12 text-center">
            <h2 class="section-title fst-bold mb-3">Services We Provide</h2>
        </div>
        <div class="col-lg-3 col-sm-6 mb-4">
            <div class="card  secnd pt-5">
                <div class="card-body"> <i class="fa fa-object-ungroup icon-lg icon-primary icon-bg-primary icon-bg-circle mb-3"></i>
                    <h4 class="mt-4 mb-3 ">24 x 7</h4>
                    <p >For what reason would it be advisable for me to think about business content?</p>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6 mb-4">
            <div class="card secnd   pt-5">
                <div class="card-body"> <i class="fa fa-users icon-lg icon-yellow icon-bg-yellow icon-bg-circle mb-3"></i>
                    <h4 class="mt-4 mb-3">Free Delivery</h4>
                    <p >For what reason would it be advisable for me to think about business content?</p>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6 mb-4">
            <div class="card  secnd pt-5">
                <div class="card-body"> <i class="fa fa-receipt icon-lg icon-purple icon-bg-purple icon-bg-circle mb-3"></i>
                    <h4 class="mt-4 mb-3">Secure Payments</h4>
                    <p >For what reason would it be advisable for me to think about business content?</p>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6 mb-4">
            <div class="card secnd pt-5">
                <div class="card-body"> <i class="fa fa-cloud icon-lg icon-cyan icon-bg-cyan icon-bg-circle mb-3"></i>
                    <h4 class="mt-4 mb-3">Cloud Service</h4>
                    <p >For what reason would it be advisable for me to think about business content?</p>
                </div>
            </div>
        </div>
    </div>
</div> */}
        
{/* <!-- 
{{!-- Service section ends --}} */}

{/* // </section> */}
 <About/>

 <Contact/> 
</>
  )
}

export default Home