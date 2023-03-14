import React from 'react'

const Module = () => {
  return (
    <>
    <section id="profile-section">
    <div class="container shadow-lg mb-5 bannerone rounded mt-5">
        <div class="row">
             

            {/* <div class="col-md-6 text-center mt-2 mb-2">
                <img src="https://imgs.search.brave.com/jj1L8GM60Or1I4I-h72ARIP2oO_UyjX0W-rhCmQq6Ls/rs:fit:686:542:1/g:ce/aHR0cHM6Ly93d3cu/cGluY2xpcGFydC5j/b20vcGljZGlyL2Jp/Zy83My03MzU5ODZf/cmVjcnVpdG1lbnQt/Z2F0ZXdheS1ub3ct/aGlyaW5nLWJ1c2lu/ZXNzLWhlbHAtd2Fu/dGVkLXdpbmRvdy5w/bmc" class="profileimg" style={{height:"200px", width:"200px"}} alt="banner"/>

            </div> */}
            <div class="col text-center  ">
                <h1 className='fw-bold'>Browse By Category</h1>
                <h1 className='fst-italic'>Enroll now</h1>
               

                {/* <button type="button" class="btn btn-danger py-2 mt-3 ms-5 mb-2">Logout</button> */}

            </div>
        </div>
    </div>
<div class="container">
    <div class="row">
        <div class="col-md-4">
            <div class="card  card-shadows mb-5  mt-2 ">
                <div class="card-body">
                    <div class="container text-center py-3">
                        <img src="https://imgs.search.brave.com/BpqhdH8rMl6-B-RseMIjYaECpRzZ_hGHV8ikNSSPTy8/rs:fit:770:573:1/g:ce/aHR0cHM6Ly93d3cu/dHVuZXJsYWJzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OS8wNi9pbWctMTYu/cG5n"  style={{height:'200px',  width:'320px'}}
                            class="card-img-top" alt="..."/>
                    </div>
                    <h5 class="card-title">Mobile Application</h5>
                    <p class="fs-8"> language: Flutter   Java</p>
                    <a href="/" class="btn btn-warning bold-btn">View</a>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card card-shadows mb-5  mt-2">
                <div class="card-body">
                    <div class="container text-center py-3">
                        <img src="https://imgs.search.brave.com/OMVez7srZG4UT7a7ST1Ff3FAvHSUukK-XIGTuVPIctQ/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly9zb2xz/bm93LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMC8wMi9z/b2x1dGlvbnMtd2Ut/cHJvdmlkZS5wbmc"   style={{height:'200px',  width:'320px'}}
                            class="card-img-top" alt="..."/>
                    </div>
                    <h5 class="card-title">Web Development</h5>
                    <p class="fs-8">Language: python   MERN </p>
                    <a href="/" class="btn btn-warning bold-btn">View</a>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card  card-shadows mb-5  mt-2 ">
                <div class="card-body">
                    <div class="container text-center py-3">
                        <img src="https://imgs.search.brave.com/rl3dJxHvPU8nNIBIX1HLOgDQkDUdj7zlfzjBp5gBe-s/rs:fit:620:432:1/g:ce/aHR0cHM6Ly9zdGF0/aWMud2l4c3RhdGlj/LmNvbS9tZWRpYS82/N2M1YmFfNDg2OWM5/ZWRlZmFmNGVlZDhj/OGIwOWY4NmNiNDc3/Zjd-bXYyLnBuZy92/MS9maWxsL3dfNjIw/LGhfNDMyLGFsX2Ms/dXNtXzAuNjZfMS4w/MF8wLjAxL2lsbHVz/dHJhdGlvbi1mb3It/ZW50ZXJwcmlzZSU0/MDJ4LnBuZw"  style={{height:'200px',  width:'320px'}}
                            class="card-img-top" alt="..."/>
                    </div>
                    <h5 class="card-title">Enterprise Softwares</h5>
                    <p class="fs-8 ">Language: Java   Python</p>
                    <a href="/" class="btn btn-warning bold-btn">View</a>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card  card-shadows mb-5 mt-2">
                <div class="card-body">
                    <div class="container text-center py-3">
                        <img src="https://imgs.search.brave.com/5_oWO2W5KGfx7UhIFrmDZ0nMZxzvz_bwOwPtu0X3EvQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/cG5ncGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzkvTWFy/a2V0aW5nLVRyYW5z/cGFyZW50LUltYWdl/cy5wbmc"   style={{height:'200px',  width:'320px'}}
                            class="card-img-top" alt="..."/>
                    </div>
                    <h5 class="card-title">Digital marketing</h5>
                    <p class="fs-8">Random Text.....</p>
                    <a href="/" class="btn btn-warning bold-btn">View</a>
                </div>
            </div>
        </div>
       
       
    </div>
</div>
</section>
</>

  )
}

export default Module;
