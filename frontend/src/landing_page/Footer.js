import React from 'react';

function Footer() {
    return ( 
        <div className='container'>
            <div className='row d-flex'>
                <div className='col-3 p-5'>
                    <div>
                        <img src="media/images/logo.svg"alt="logo" style={{width:"50%"}} className='mb-3'/>
                        <p className='mb-3'>© 2010 - 2024, Zerodha Broking Ltd. All rights reserved.</p>
                        <div className='d-flex'>
                            <i class="fa fa-twitter m-2 fs-3"></i>
                            <i class="fa fa-facebook m-2 fs-3"></i>
                            <i class="fa fa-instagram m-2 fs-3"></i>
                            <i class="fa fa-linkedin m-2 fs-3"></i>
                        </div>
                        <hr></hr>
                        <div className='d-flex'>
                            <i class="fa fa-youtube m-2 fs-2"></i>
                            <i class="fa fa-envelope m-2 fs-2"></i>
                            <i class="fa fa-telegram m-2 fs-2"></i>

                        </div>
                    </div>
                </div>
                <div className='col-9 d-flex px-5 text-muted'>
                    <div className='col-4 p-3'>
                    <p>Company</p>
                    <ul  className="list-unstyled">
                        <li>About</li>
                        <li>Products</li>
                        <li>Pricing</li>
                        <li>Referral programme</li>
                        <li>Careers</li>
                        <li>Zerodha</li>
                        <li>About</li>
                        <li>About</li>
                    </ul>
                    </div>
                    <div className='col-4 p-3'>
                    <p>Support</p>
                    <ul  className="list-unstyled">
                        <li>Contact</li>
                        <li>Support portal</li>
                        <li>Z-Connect blog</li>
                        <li>List of charges</li>
                        <li>Downloads & resources</li>
                    </ul>
                    </div>
                    <div className='col-4 p-3'>
                    <p>Account</p>
                    <ul  className="list-unstyled">
                        <li>Open an account</li>
                        <li>Fund transfer</li>
                        <li>60 day challenge</li>
                    </ul>
                    </div>

                </div>
            </div>   
            <div className='row'>
                <p className='text-muted' style={{fontSize:"0.75rem"}}>Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF<br></br>

Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances<br></br>

Smart Online Dispute Resolution | Grievances Redressal Mechanism<br></br>

Investments in securities market are subject to market risks; read all the related documents carefully before investing.<br></br>

Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.<br></br>

India's largest broker based on networth as per NSE. NSE broker <br></br>

"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers/depository participants. Receive information of your transactions directly from Exchange/Depositories on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.<br></br>

*Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.<br></br>

Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI).</p></div> 
            <div className='d-flex'>
                <a href="#" style={{textDecoration:"none",color:"gray"}} className='px-3'>NSE</a>
                <a href="#" style={{textDecoration:"none",color:"gray"}} className='px-3'>BSE</a>
                <a href="#" style={{textDecoration:"none",color:"gray"}} className='px-3'>MCX</a>
                <a href="#" style={{textDecoration:"none",color:"gray"}} className='px-3'>MSEI</a>
                <a href="#" style={{textDecoration:"none",color:"gray"}} className='px-3'>Terms & Conditions</a>
                <a href="#" style={{textDecoration:"none",color:"gray"}} className='px-3'>Policies & procedures </a>
                <a href="#" style={{textDecoration:"none",color:"gray"}} className='px-3'>Privacy policy </a>
                <a href="#" style={{textDecoration:"none",color:"gray"}} className='px-3'>Disclosure </a>
                <a href="#" style={{textDecoration:"none",color:"gray"}} className='px-3'>For investor's attention </a>
                <a href="#" style={{textDecoration:"none",color:"gray"}} className='px-3'>Investor charter </a>
                <a href="#" style={{textDecoration:"none",color:"gray"}} className='px-3'>Sitemap</a>

            </div>
        </div>
     );
}

export default Footer;