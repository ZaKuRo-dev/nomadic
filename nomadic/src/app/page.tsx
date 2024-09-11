import Head from 'next/head';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';



import Image from 'next/image';

export default function Home() {
  return (
    <>
      <header className="bg-light py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <a href='/' className="logo">
            <img src="/th/to/logo.png" alt="Logo" width="150" />
          </a>
          <nav className="d-flex align-items-center">
            <ul className="nav">
              <li className="nav-item dropdown">
              <a className="nav-link text-dark dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
              </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
      <section className="hero" style={{ position: 'relative', height: '400px' }}>
          <Image src="/th/to/hero-image.jpg" layout="fill" objectFit="cover" alt="Hero Image" />
          <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="container h-100 d-flex flex-column justify-content-end align-items-start text-white">
              <h1>Welcome to Nomad</h1>
              <p>Explore the beauty of nomadic life</p>
            </div>
          </div>
        </section>

        <section className="news-cards container py-5">
          <div className='row'>
            <div className='col-md-8'>
              <div className='section-name'>
                style
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="card mb-4">
                    <img src="/th/to/image1.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">News Title 1</h5>
                      <p className="card-text highlight-item-short-desc">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-4">
                    <img src="/th/to/image2.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">News Title 2</h5>
                      <p className="card-text highlight-item-short-desc">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-4">
                    <img src="/th/to/image3.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">News Title 3</h5>
                      <p className="card-text highlight-item-short-desc">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-4">
                    <img src="/th/to/image1.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">News Title 1</h5>
                      <p className="card-text highlight-item-short-desc">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-4">
                    <img src="/th/to/image2.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">News Title 2</h5>
                      <p className="card-text highlight-item-short-desc">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-4">
                    <img src="/th/to/image3.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">News Title 3</h5>
                      <p className="card-text highlight-item-short-desc">Some quick example text to build on the card title and make up the bulk of the card's content.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>

            </div>
          </div>
        </section>
        <section className="footer bg-dark text-white py-4">
          <div className="container text-center">
            <p>&copy; 2024 Nomad. All rights reserved.</p>
          </div>
        </section>
      </main>
    </>
  );
}

 const styles = {
  headerCategory: {
    display : "flex",
    padding : "10"

  }


 }