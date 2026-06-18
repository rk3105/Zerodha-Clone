import React from 'react';

function Brokerage() {
    return ( 
        <div className='container'>
            <div className="row p-5 mt-5 text-center border-top">
                <div className='col-8 p-4'>
                    <a href="" style={{textDecoration:"none"}}><h1 className='fs-5'>Brokerage calculator</h1></a>
                    <ul style={{textAlign:"left",fontSize:"12px",lineHeight:"2.0"}} className='mt-5 text-muted'>
                        <li>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</li>
                        <li>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</li>
                        <li>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</li>
                        <li>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</li>
                        <li>
                            If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.
            
                        </li>
                        <li>₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</li>
                        <li>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</li>
                    </ul>
                </div>
                <div className='col-4 p-4'>
                    <a href="" style={{textDecoration:"none"}}><h1 className='fs-5'>List of charges</h1></a>
                </div>
            </div>
        </div>
     );
}

export default Brokerage;