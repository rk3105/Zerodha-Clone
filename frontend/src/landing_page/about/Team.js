import React from 'react';

function Team() {
    return ( 
        <div className='d-flex'>
            <div className='col-2'></div>
            <div className='col-4 mt-5 py-5'><img src="media/images/nithinKamath.jpg" className="d-block mx-auto p-2"style={{ borderRadius:"50%",width:"65%"}}alt="ceo"></img>
            <p className='text-center mt-5 fs-5'>Nithin Kamath</p>
            <p className='text-center fs-5'>Founder, CEO</p></div>
            <div className='col-5 mt-5 py-5 ms-5 mb-5'>
                <h1 className='mb-5 mt-5'>People</h1>
                <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                <p>Playing basketball is his zen.</p>
                <p>Connect on Homepage / TradingQnA / Twitter</p>
            </div>
        </div>
     );
}

export default Team;