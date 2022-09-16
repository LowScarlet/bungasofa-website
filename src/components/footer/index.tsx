/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import styles from './style.module.css'
import { whatsapp_message } from '../whatsapp_message'
import { glocation, instagram, phone, whatsapp } from '../link_packs'
import Link from 'next/link'

function main() {
  return (<>
    <a href={whatsapp} className={`${styles['floating']}`} target="_blank" style={{
      bottom: "80px", right: "20px", backgroundColor: "#25d366",
    }} rel="noreferrer"> <i className="bi bi-whatsapp"></i>
    </a>
    <a href={instagram} className={`${styles['floating']}`} target="_blank" style={{
      bottom: "20px", right: "20px", backgroundColor: "#8a3ab9",
    }} rel="noreferrer"> <i className="bi bi-instagram"></i>
    </a>
    <div className={`${styles['secondary-heroes']} text-bg-dark`}>
      <div className="px-4 py-5 text-center">
        <h1 className="display-5 fw-bold">BUTUH SERVIS SOFA MURAH DI AREA RIAU?</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Silahkan hubungi kami untuk konsultasi jika ada pertanyaan mengenai jasa kami. Kami siap membantu segala kebutuhan Anda.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <a href={whatsapp} target="_blank" rel="noreferrer" className="btn btn-success btn-lg"><i className="pe-2 bi bi-whatsapp"></i>Chat Kami Sekarang!</a>
          </div>
        </div>
      </div>
    </div>

    <div className="text-bg-dark pt-5 pb-3">
      <footer className="container">
        <div className="row">

          <div className="col-6 col-md-2 mb-3">
            <h5>Pintasan</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><i className="pe-2 bi bi-house-fill"></i>Beranda</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><i className="pe-2 bi bi-card-heading"></i>Layanan</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><i className="pe-2 bi bi-journal-text"></i>Tentang Kami</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><i className="pe-2 bi bi-person-rolodex"></i>Kontak</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Hubungi Kami</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href={whatsapp} target="_blank" rel="noreferrer" className="nav-link p-0 text-muted"><i className="pe-2 bi bi-whatsapp"></i>0822-8474-1825</a></li>
              <li className="nav-item mb-2"><a href={phone} target="_blank" rel="noreferrer" className="nav-link p-0 text-muted"><i className="pe-2 bi bi-telephone-inbound"></i>0822-8474-1825</a></li>
              <li className="nav-item mb-2"><a href={instagram} target="_blank" rel="noreferrer" className="nav-link p-0 text-muted"><i className="pe-2 bi bi-instagram"></i>@ryanprsetyo_</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Layanan</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><i className="pe-2 bi bi-card-heading"></i>Servis Sofa</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"><i className="pe-2 bi bi-card-heading"></i>Pembuatan Sofa</a></li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3 text-center text-md-end">
            
            <Link href="/">
              <a><Image className="d-block mx-auto" src="/static/logo/logo_with_brandname.png" alt="" width={236} height={64} /></a>
            </Link>
            <a href={glocation} target="_blank" className="pt-2 nav-link p-0 text-muted" rel="noreferrer"><i className="pe-2 bi bi-geo-alt-fill"></i>Batu Gajah, Air Molek I, Kec. Pasir Penyu, Kabupaten Indragiri Hulu, Riau 29353</a>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between pt-4 mt-4 border-top">
          <p>&copy; 2022 Bunga Sofa, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-light" href={instagram} target="_blank" rel="noreferrer">
                <i className={`${styles['bi']} bi-instagram`}></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-light" href={whatsapp} target="_blank" rel="noreferrer">
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
