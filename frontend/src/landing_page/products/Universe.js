import React from 'react';

function Universe() {
    return (
        <div className="container mt-5">
            <div className="row text-center">
                <h1 className='mb-5'>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                <div className="col-4 p-3 mt-5 mb-5">
                    <img src="media/images/smallcaseLogo.png" alt="logo"/>
                    <p className='text-muted'>Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img  className="col-4 p-3"src="media/images/streakLogo.png" alt="logo"/>
                    <p className='text-muted'>Systematic trading platform
that allows you to create and backtest
strategies without coding.</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/images/sensibullLogo.svg" alt="logo"/>
                    <p className='text-muted'>Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.
</p>
                </div>
                <div className="col-4 p-3 mt-5 mb-5">
                    <img src="media/images/zerodhaFundhouse.png"className="col-4 mt-4 py-1" alt="logo"/>
                    <p className='text-muted'>Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img  className="col-4 p-3"src="media/images/goldenpiLogo.png"className="col-4 mt-4 py-1" alt="logo"/>
                    <p className='text-muted'>Bonds trading platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img  className="col-4 p-3" src="media/images/dittoLogo.png" alt="logo"/>
                    <p className='text-muted'>Personalized advice on life
and health insurance. No spam
and no mis-selling.
Sign up for free</p>
                </div>
            </div>
        </div>
      );
}

export default Universe;