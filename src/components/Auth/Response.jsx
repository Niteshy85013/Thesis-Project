import React from 'react'

const response = () => {
     
  return (
    <>
     <section id="response" className=" bodysec"  >
    
    <div class="container  rounded text-center ">
       <div class="row ">
            <h1 class="text-center mt-5 fw-bold headings">Good to see you again</h1>
            <div class="col-md-6 mt-5">
            <h1 class="text-dark mt-2 py-2  fw-bold headings">Join as a <span class="text-danger">Client</span> or <span class="text-danger">Freelancer</span> </h1>
                <h2 class="fst-italic">Register according to you choice.</h2>
            
    </div>
           <div class="col-md-6 mt-5">
           <div class="card  bg-dark secnd ">
          {/* <img src="./image/home.webp" class="card-img-top" style={{height:'10rem', width:"10rem"}}alt="product.title" /> */}
        <div class="card-body">
          <h5 class="card-title">
            <p className='fs-3 text-warning'>I'm a client, hiring for project</p>
          </h5>
          <div class="d-grid gap-2">
            <a href="/" class="btn btn-danger bold-btn fw-bold text-light">Register now</a>
          </div>
        </div>
      </div>

      <div class="card mt-5 bg-dark secnd ">
          {/* <img src="./image/home.webp" class="card-img-top" style={{height:'10rem', width:"10rem"}}alt="product.title" /> */}
        <div class="card-body">
          <h5 class="card-title">
            <p className='fs-3 text-warning'>I'm a freelancer, looking for work</p>
          </h5>
          <div class="d-grid gap-2">
            <a href="/" class="btn btn-danger bold-btn fw-bold text-light">Register now</a>
          </div>
        </div>
      </div>
           
               </div>
  
               
           </div>
       </div>
  
  </section>
    </>
  )
}

export default response