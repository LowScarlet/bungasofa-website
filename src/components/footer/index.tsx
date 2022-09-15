/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import styles from './style.module.css'

function main() {
  return (<>
    <div className="text-bg-dark pt-5 pb-3">
      <footer className="container">
        <div className="row">

          <div className="col-6 col-md-2 mb-3">
            <h5>Pintasan</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Beranda</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Layanan</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Tentang Kami</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Kontak</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Hubungi Kami</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><i className="pe-2 bi bi-whatsapp"></i>081270634992</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><i className="pe-2 bi bi-telephone-inbound"></i>081270634992</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><i className="pe-2 bi bi-instagram"></i>@ryanprsetyo_</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Layanan</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Servis Sofa</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pembuatan Sofa</a></li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3 text-center text-md-end">
            <Image className="d-block mx-auto" src="/static/logo/logo_with_brandname.png" alt="" width={236} height={64} />
            <a href="#" className="pt-2 nav-link p-0 text-muted"><i className="pe-2 bi bi-geo-alt-fill"></i>Klodangan RT 02/RW 26, Karangasem, Sendangtirto, Berbah, Yogyakarta 55573</a>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between pt-4 mt-4 border-top">
          <p>&copy; 2022 Bunga Sofa, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-light" href="#">
                <i className={`${styles['bi']} bi-instagram`}></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-light" href="#">
                <i className={`${styles['bi']} bi-whatsapp`}></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  </>)
}

export default main
