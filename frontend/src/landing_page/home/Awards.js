import React from 'react';

function Awards() {
    return (  
        <div className='container d-flex'>
            <img src="media/images/largestBroker.svg" alt="awards"className='col-6 me-4 p-5' />
            <div className=' col-6 p-5'>
                <h1 className='text-m mb-5'>Largest stock broker in India</h1>
                <p className='mb-4'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India by trading and investing in:</p>
                <div className='d-flex  p-3 container'>
                    <ul className="col-6 mb-4">
                        <li className="mb-4">Futures and Options</li>
                        <li className="mb-4" >Commodity derivatives</li>
                        <li >Currency derivatives</li>
                    </ul>
                    <ul className="col-6 mb-4">
                        <li className="mb-4">Stocks & IPOs</li>
                        <li className="mb-4">Direct mutual funds</li>
                        <li >Bonds and </li>
                    </ul>
                </div>
                <img src="media/images/pressLogos.png" alt="logos" style={{width:"90%"}}/>
                    
            </div>
        </div>
    );
}

export default Awards;