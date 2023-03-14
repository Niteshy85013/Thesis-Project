import React from 'react'
import Contact from "./Contact"
import About from"./About"
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
            {/* <div class="col-md-6  mb-3  text-center ">
                <img src="./image/homemain1.png" class="img-fluid" style={{width:'50rem', height:'35rem'}}alt="homepage"   />
            </div> */}

       
    </div>
    </section>
  

  {/* <!-- {{!-- Main section ends --}} --> */}

 
                  {/* {{!-- Services sections --}} --> */}
<section className='service'>
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
</div>
        
{/* <!-- 
{{!-- Service section ends --}} */}

</section>
 <About/>

 <Contact/> 
</>
  )
}

export default Home