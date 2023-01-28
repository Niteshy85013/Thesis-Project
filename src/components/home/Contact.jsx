import React from 'react'

const Contact = () => {
  return (
 

  <section id="contact" class="shadowcart">
    
  <div class="container shadowcart rounded text-center ">
     <div class="row ">
          <h1 class="text-center mt-2">Contact Us</h1>
          <div class="col-md-6">
                 <img src="./image/contact.gif" alt="" class=" img-fluid"   />
             </div>
         <div class="col-md-6 mt-5">
         
            
             <div class="card   ">
                 <div class="card-body ">
                     <h4 class="fst-italic">Fill this form to get in touch with us...</h4>

                     <form action="/contact" method="POST"autocomplete="off">

                     <div class="form-floating">
                         <input type="text" class="form-control" name="fullname"   placeholder="Full Name"
                              required/>
                         <label for="floatingInputGroup1">Fullname</label>
                     </div>

                     <div class="form-floating mt-3">
                         <input type="email" class="form-control" name="email" placeholder="Email" required/>
                         <label for="floatingInputGroup1">Email</label>
                     </div>
                     <div class="form-floating mt-3">
                         <input type="text" class="form-control" name="phone"   placeholder="Phone"
                              required/>
                         <label for="floatingInputGroup1">Phone</label>
                     </div>

                     <div class="form-floating mt-3">
                         <textarea class="form-control" placeholder="Leave a comment here" name="desc"  
                               required></textarea>
                         <label for="floatingTextarea2">Leave Your Message</label>
                     </div>

                      
                     <button type="submit" class="btn btn-success text-center mt-4 ">Submit</button>
                     </form>

                 </div>

             </div>
             </div>

             
         </div>
     </div>

</section>
 
  );
};

export default Contact;