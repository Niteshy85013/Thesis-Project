// import { useState } from "react"
 
// import React from 'react'
// import { useNavigate } from "react-router-dom"
//  import login from "../../Services/loginService"
// const Login = () => {
//   const [username,setusername] = useState('')
//     const [password,setPassword] = useState('')
//     const navigate = useNavigate()
//     const handleLogin= (e) => {
//             e.preventDefault();
//             login({username,password}).then(res => {
//                 window.localStorage.setItem(`token`,res.data.token)
//                 window.alert('Login successfully')
//                 navigate("/Home")
//             }).catch(err => console.log(err))  
//     }
//   return (
//     <div class="container mt-4 mb-3">
// <section class="background-radial-gradient overflow-hidden">
//     <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
//       <div class="row gx-lg-5 align-items-center mb-5">
//         <div class="col-lg-6 mb-5 mb-lg-0"  >
//           <h1 class="my-5 display-5 fw-bold ls-tight" style={{color: 'hsl(218, 81%, 95%)'}}>
//             Welcome to <br />
//               <span class="fst-italic">Learn</span><span class="text-danger fst-italic">Mania</span>
//           </h1>
//           <p class="mb-4 opacity-70" style={{color: 'hsl(218, 81%, 85%)'}}>
//             Log in to this system to have access to all of the free courses and services available. 
//             If you don't already have an account, go ahead and create one at the Registration area.
//           </p>
//         </div>
//         <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
//           <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
//           <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>
//           <div class="card bg-glass">
//             <div class="card-body px-4 py-5 px-md-4">
//                 <div class="row">
//                   <h1 class="mb-3 h3 text-center">Login</h1>
//                 </div>
//                 <form onSubmit={handleLogin} action="POST"autocomplete="off">
//                 <div class="form-outline mb-4">
//                   <label class="form-label">Username</label>
//                   <input type="text" name="username" id="username" placeholder="enter username"  value={username}
//                         onChange={(e) => setusername(e.target.value)}class="form-control" required/>
//                 </div>
//                 <div class="form-outline mb-4">
//                   <label class="form-label">Password</label>
//                   <input type="password" name="password"value={password}
//                         onChange={(e) => setPassword(e.target.value)} id="password"placeholder="enter password" class="form-control" required/>
//                 </div>
//                 <button type="submit" class="btn btn-primary btn-block mb-4" onClick={handleLogin} >
//                         Sign up
//                       </button>
//                 </form>
//                 <div class="text-center">
//                   <p>Don't have an account yet? <a href="/signup">Register</a></p>
//                 </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
//     </div>
//   )
// }
// export default Login
 