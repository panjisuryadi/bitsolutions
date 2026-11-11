import { useState } from 'react'
import heroImg from './assets/hero.png'
import imgLogo from './assets/image.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="scroll-indicator">
        <i className="fas fa-arrow-down"></i>
      </div>
    
      <section className="hero">
        <div className="container">
          <h1>Bit Solutions</h1>
          <h1 className="display-4 fw-bold animate__animated animate__fadeIn">Empowering Your Digital Transformation</h1>

          <p className="lead mt-3">IT consulting & solutions tailored for your business success.</p>
          <a href="#contact" className="btn btn-light btn-lg mt-4">Get Started</a>
        </div>
      </section>

      <section id="services" className="py-5">
        <div className="container">
          <div className="section-title text-center">
            <p>Our Services</p>
            <p>Professional services to boost your business</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title warna_bit">IT Consulting</h5>
                  <p className="card-text">We provide expert advice and guidance to help your business leverage technology effectively.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title warna_bit">Software Development</h5>
                  <p className="card-text">We create custom software solutions for web, mobile, and desktop platforms that suit your needs.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title warna_bit">Sales & Service</h5>
                  <p className="card-text">We sell and service computers, laptops, and spare parts with warranty and after-sales support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-5 bg-light">
        <div className="container">
          <div className="section-title text-center">
            <p>About Us</p>
            <p>Your trusted IT partner</p>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <p>We are a team of professional IT consultants based in Bandung, Indonesia. We provide expert services in software development, computer sales and service, and IT consulting. Our mission is to help businesses transform digitally by offering tailored solutions and ensuring high-quality after-sales support.</p>
            </div>
            <div className="col-md-6 text-center">
              <img src={imgLogo} className="img-fluid" alt="About Image" />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-5">
        <div className="container">
          <div className="section-title text-center">
            <p>Contact Us</p>
            <p>We'd love to hear from you</p>
          </div>
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control" placeholder="Your Email" required />
              </div>
              <div className="col-12">
                <textarea className="form-control" rows="4" placeholder="Your Message" required></textarea>
              </div>
              <div className="col-12 text-center">
                <button type="submit" className="btn btn-success px-4">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <a
        href="https://wa.me/6281220559620"  
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat via WhatsApp"
      >
        <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="WhatsApp" />
      </a>

      <footer className="footer">
        <div className="container">
          <p className="mb-0">&copy; 2025 BitSolutions. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App