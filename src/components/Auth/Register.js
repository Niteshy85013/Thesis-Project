// import React from 'react'
// import axios from "axios"
// import { FormFeedback} from "reactstrap"
// import {  useState } from "react"
// import { useNavigate } from "react-router-dom"
// const Signup = () => {
//   const [username, setUsername] = useState('')
//   const [fullname, setfullname] = useState('')
//   const [password, setpassword] = useState('')
//   const [email, setemail] = useState('')
//   const [address, setaddress] = useState('')
//   const [phone, setphone] = useState('')
//   const [message, setMessage] = useState('')
//   const navigate = useNavigate()
//   const handleRegister = (e) => {
//       e.preventDefault()
//       console.log(username, password, fullname, email, address, phone)
//       axios.post('http://localhost:5568/auth/registerUser',
//           { username, password, fullname, email, address, phone })
//           .then(res => {
//               window.alert('Register successfully')
//               navigate('/login')
//           })
//           .catch(err => console.log(err))
//   }
//   return (
//     <div class="container mt-4 mb-5">
//     <section class="background-radial-gradient overflow-hidden">
//     <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
//         <div class="row gx-lg-5 align-items-center mb-5">
//           <div class="col-lg-6 mb-5 mb-lg-0"  >
//             <h1 class="my-5 display-5 fw-bold ls-tight" style={{color: 'hsl(218, 81%, 95%)'}}>
//               Welcome to <br />
//               <span class="fst-italic">Learn</span><span class="text-danger fst-italic">Mania</span>
//             </h1>
//             <p class="mb-4 opacity-70" style={{color: 'hsl(218, 81%, 85%)'}}>
//               Create your account and get access to the free courses.
//             </p>
//           </div>
//           <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
//             <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
//             <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>
//             <div class="card bg-glass">
//               <div class="card-body py-3 px-md-5">
//                 <form  onSubmit={handleRegister} >
//                   <div class="row">
//                     <h1 class="mb-3 h3 text-center">Register</h1>
//                       <div class="form-outline mb-4">
//                         <label class="form-label" for="form3Example3">Fullname</label>
//                         <input type="text" name="fullname" id="form3Example3"   value={fullname}
//                         onChange={(e) => setfullname(e.target.value)}class="form-control" required />
//                       </div>
//                       {/* <!-- Username Input --> */}
//                       <div class="form-outline mb-4">
//                         <label class="form-label" for="form3Example3">Username</label>
//                         <input type="text" name="username" value={username}
//                         onChange={(e) => setUsername(e.target.value)}id="form3Example3" class="form-control" required />
//                       </div>

//                       {/* <!-- Address Input  --> */}
//                       <div class="form-outline mb-4">
//                         <label class="form-label" for="form3Example3">Address</label>
//                         <input type="text" value={address}
//                         onChange={(e) => setaddress(e.target.value)}name="address" id="form3Example3" class="form-control" required />
//                       </div>

//                       {/* <!-- Phone Input  --> */}
//                       <div class="form-outline mb-4">
//                         <label class="form-label" for="form3Example3">Phone</label>
//                         <input type="text" name="phone" value={phone}
//                         onChange={(e) => setphone(e.target.value)}id="form3Example3" class="form-control" required />
//                       </div>

//                       {/* <!-- Email input --> */}
//                       <div class="form-outline mb-4">
//                         <label class="form-label" for="form3Example3">Email address</label>
//                         <input type="email" name="email"value={email}
//                         onChange={(e) => setemail(e.target.value)} id="form3Example3" class="form-control" required />
//                       </div>

//                       {/* <!-- Password input --> */}
//                       <div class="form-outline mb-4">
//                         <label class="form-label" for="form3Example4">Password</label>
//                         <input type="password" name="password"value={password}
//                         onChange={(e) => setpassword(e.target.value)} id="form3Example4" class="form-control" required />
//                       </div>

//                       <FormFeedback onInvalid={() => setMessage('password matches')}>
//                         {message}
//                     </FormFeedback>

//                       {/* <!-- {{!-- <div class="input-group mb-3"> */}
//                             {/* <label class="mt-3">Upload Image</label>
//                             <input type="file" name="image" class="mt-3 ms-3">
//                         </div> --}} --> */}

//                       {/* <!-- Submit button --> */}
//                       <button type="submit" class="btn btn-primary btn-block mb-4" onClick={handleRegister}>
//                         Sign up
//                       </button>
//                     {/* <!-- Register buttons --> */}
//                     <div class="text-center">
//                       <p>Already have an account? <a href="/login">Login</a></p>
//                     </div>
//                     </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//     {/* <!-- Section: Design Block --> */}
//   </div>
//   )
// }
// export default Signup