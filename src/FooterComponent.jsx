import React from 'react'

function FooterComponent() {
    return (
        <>
            <footer id="footer" className="footer position-relative light-background">

                <div className="container">
                    <div className="copyright text-center ">
                        <h3 className='fw-bold'>Vigneshwaran</h3>
                        <p><span>All Rights Reserved | {new Date().getFullYear()} | </span> ©<strong className="px-1 sitename">iPortfolio</strong> </p>
                    </div>
                    <div className="credits">
                        {/* <!-- All the links in the footer should remain intact. -->
                        <!-- You can delete the links only if you've purchased the pro version. -->
                        <!-- Licensing information: https://bootstrapmade.com/license/ -->
                        <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] --> */}
                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default FooterComponent