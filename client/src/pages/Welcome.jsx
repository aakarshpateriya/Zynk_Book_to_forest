
import { useState } from 'react'
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Home,
  Leaf,
  MapPin,
  Award,
  Clock3,
  Users,
} from 'lucide-react'
import '../App.css'
const slides = [
  {
    title: 'Choose Your Tree',
    description: 'Pick from a variety of beautiful trees',
    icon: Leaf,
  },
  {
    title: 'Pick a Planting Spot',
    description: 'Select your location on our green farm',
    icon: MapPin,
  },
  {
    title: 'Get Your Unique ID',
    description: 'Receive your planting certificate',
    icon: Award,
  },
]

function Welcome({ onGetStarted }) {
  const [activeSlide, setActiveSlide] = useState(0)

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length)
  }

  const previousSlide = () => {
    setActiveSlide(
      (current) => (current - 1 + slides.length) % slides.length
    )
  }

  const CurrentIcon = slides[activeSlide].icon

  return (
    <div className="welcome-page">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">ZYNKLY</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-actions">
          <button className="login-button">Login</button>
          <button className="signup-button">Sign Up</button>
        </div>
      </nav>

      {/* Hero */}
      <main className="hero">

        {/* Left Content */}
        <section className="hero-content">

          <div className="initiative-badge">
            <Leaf size={18} />
            ZYNKLY GREEN INITIATIVE
          </div>

          <h1>
            Book a Service,
            <span>Plant a Tree</span>
          </h1>

          <p className="hero-description">
            This Diwali, let's clean homes and green the future together.
          </p>

          {/* Steps */}
          <div className="hero-steps">

            <div className="hero-step">
              <div className="step-icon">
                <Home size={24} />
              </div>

              <div>
                <h3>Book a Service</h3>
                <p>Get your home cleaned</p>
              </div>
            </div>

            <div className="hero-step">
              <div className="step-icon">
                <Leaf size={24} />
              </div>

              <div>
                <h3>Choose Your Tree</h3>
                <p>Select from beautiful tree options</p>
              </div>
            </div>

            <div className="hero-step">
              <div className="step-icon">
                <MapPin size={24} />
              </div>

              <div>
                <h3>Pick a Planting Spot</h3>
                <p>Be a part of a greener tomorrow</p>
              </div>
            </div>

          </div>

          {/* CTA */}
          <button
            className="primary-button"
            onClick={onGetStarted}
          >
            Get Started
            <ArrowRight size={22} />
          </button>

        </section>

        {/* Carousel */}
        <section className="carousel-wrapper">

          <div className="carousel">

            {/* Left floating card */}
            <div className="carousel-card top">

              <div className="carousel-card-icon">
                <CurrentIcon size={22} />
              </div>

              <h3>{slides[activeSlide].title}</h3>

              <p>{slides[activeSlide].description}</p>

            </div>

            {/* Main tree illustration */}
            <div className="plant-scene">

              <div className="sun">☀️</div>

              <div className="tree">
                <div className="tree-leaves">
                  🌿
                </div>

                <div className="tree-trunk">
                  🌳
                </div>
              </div>

            </div>

            {/* Right floating card */}
            <div className="carousel-card bottom">

              <div className="carousel-card-icon">
                <Leaf size={22} />
              </div>

              <h3>{slides[activeSlide].title}</h3>

              <p>{slides[activeSlide].description}</p>

            </div>

            {/* Arrows */}
            <button
              className="carousel-arrow left"
              onClick={previousSlide}
              aria-label="Previous slide"
            >
              <ChevronLeft size={23} />
            </button>

            <button
              className="carousel-arrow right"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <ChevronRight size={23} />
            </button>

          </div>

          {/* Dots */}
          <div className="carousel-dots">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                className={`carousel-dot ${
                  activeSlide === index ? 'active' : ''
                }`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </section>

      </main>

      {/* Stats */}
      <section className="stats">

        <div className="stat-card">
          <div className="stat-icon">
            <Home size={27} />
          </div>

          <div>
            <h2 className="stat-number">999+</h2>
            <p className="stat-label">Homes Cleaned</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <Clock3 size={27} />
          </div>

          <div>
            <h2 className="stat-number">2015+</h2>
            <p className="stat-label">Hours Saved</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <Users size={27} />
          </div>

          <div>
            <h2 className="stat-number">50+</h2>
            <p className="stat-label">Zynkly Professionals</p>
          </div>
        </div>

      </section>

    </div>
  )
}

export default Welcome
