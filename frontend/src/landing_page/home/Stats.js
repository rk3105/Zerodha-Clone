import React from "react";

function Stats() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

        {/* Left Section */}
        <div className="col-lg-5">
          <h1 className="mb-5">Trust with confidence</h1>

          <div className="mb-4">
            <h4>Customer-first always</h4>
            <p className="text-muted">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>
          </div>

          <div className="mb-4">
            <h4>No spam or gimmicks</h4>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push
              notifications. High quality apps that you use at your pace.
            </p>
          </div>

          <div className="mb-4">
            <h4>The Zerodha universe</h4>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer tailored services specific to your needs.
            </p>
          </div>

          <div>
            <h4>Do better with money</h4>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with
              your money.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-lg-7 text-center">
          <img
            src="media/images/ecosystem.png"
            alt="ecosystem"
            className="img-fluid"
          />

          <div className="mt-4 align-center">
            <a href="#" className="me-5 text-decoration-none">
              Explore our products<i class="fa fa-long-arrow-right"></i>
            </a>

            <a href="#" className="text-decoration-none">
              Try Kite Demo<i class="fa fa-long-arrow-right"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Stats;