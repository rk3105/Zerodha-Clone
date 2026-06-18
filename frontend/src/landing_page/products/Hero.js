import React from 'react';

function Hero() {
    return ( 
        <div className="container border-bottom mt-3 ">
        <b><p className="text-center mt-5 pt-5 "style={{fontSize:"150%"}}>Zerodha Products</p></b>
        <p className="text-center">Sleek, modern, and intuitive trading platforms</p>
        <p className="text-center mb-5" >Check out our <a href="#" style={{textDecoration:"none"}}>investment offerings<i class="fa fa-long-arrow-right"></i></a> </p>
        </div>
     );
}

export default Hero;