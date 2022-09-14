/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// import type { NextPage } from 'next'
import { Button } from 'reactstrap'
import Layout from '../components/layout'
import Image from 'next/image'
import styles from './style.module.css'
import Link from 'next/link'
import Marquee from "react-fast-marquee";

function Main() {
  return (
    <Layout>
      <div id="myCarousel" className={`${styles['carousel']} carousel slide mb-0`} data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className={`${styles['carousel-item']} carousel-item active`}>
            <img className={styles['bd-placeholder-img']} width="100%" height="100%" src="/static/images/heroes/main.png" />

            <div className={`${styles['carousel-caption']} carousel-caption text-start`}>
              <div className='container'>
                <Image className="d-block mx-auto" src="/static/logo/logo_with_brandname.png" alt="" width={236} height={64} />
                <p>
                Tips Cerdas Yang Membuat Rumah Anda Menjadi Lebih Mewah dan Berkelas
                </p>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                  <Link href="/account">
                    <a className="btn btn-primary px-4 me-sm-3">
                      Tentang Kami
                    </a>
                  </Link>
                  <Link href="/community">
                    <a className="btn btn-outline-light px-4">
                      Lihat Artikel
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles['carousel-item']} carousel-item`}>
            <img className={styles['bd-placeholder-img']} width="100%" height="100%" src="/static/images/heroes/secondary-3.png" />

            <div className={`${styles['carousel-caption']} carousel-caption`}>
              <div className='container'>
                <Image className="d-block mx-auto" src="/static/logo/logo_with_brandname.png" alt="" width={236} height={64} />
                <p>
                  Tambahkan Kain Kinerja sofa & bagian menjadi ruang tamu Anda
                </p>
                <div className="d-grid gap-3 d-sm-flex justify-content-center">
                  <Link href="/account">
                    <a className="btn btn-primary px-4 me-sm-3">
                      Tentang Kami
                    </a>
                  </Link>
                  <Link href="/community">
                    <a className="btn btn-outline-light px-4">
                      Lihat Artikel
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles['carousel-item']} carousel-item`}>
            <img className={styles['bd-placeholder-img']} width="100%" height="100%" src="/static/images/heroes/secondary-2.png" />

            <div className="${styles['carousel-caption']} carousel-caption text-end">
              <div className='container'>
                <Image className="d-block mx-auto" src="/static/logo/logo_with_brandname.png" alt="" width={236} height={64} />
                <p>
                  Kelembutan, kehangatan dan Warna menawarkan ketenangan dan relaksasi, mengurangi semua stres Anda.
                </p>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-end">
                  <Link href="/account">
                    <a className="btn btn-primary px-4 me-sm-3">
                      Tentang Kami
                    </a>
                  </Link>
                  <Link href="/community">
                    <a className="btn btn-outline-light px-4">
                      Lihat Artikel
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className={`${styles['secondary-heroes']} text-bg-dark`}>
        <div className="px-4 py-5 text-center">
          <h1 className="display-5 fw-bold">Selamat Datang Di Website</h1>
          <Image className="d-block mx-auto" src="/static/logo/logo_with_brandname.png" alt="" width={236} height={64} />
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              Menerima pembuatan custom sofa dan service sofa berbagai model untuk rumah, kantor, apartement, hotel dan keperluan lainnya dengan biaya yang sangat bersaing.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button type="button" className="btn btn-success btn-lg px-4 gap-3"><i className="bi bi-whatsapp"></i> Chat Kami</button>
              <button type="button" className="btn btn-outline-light btn-lg px-4"><i className="bi bi-journal"></i> Lihat Layanan Kami</button>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className="d-flex justify-content-center row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          <div className="col d-flex align-items-start">
            <i className="px-4 bi bi-people-fill" />
            <div>
              <h4 className="fw-bold mb-0">Berpengalaman & Tepat Waktu</h4>
              <p>Tim yang berpengalaman dan profesional dibidang ini.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <i className="px-4 bi bi-clock-fill" />
            <div>
              <h4 className="fw-bold mb-0">Cepat, Rapih & Bersih</h4>
              <p>Siap datang ke tempat dan memberikan layanan terbaik sesuai ekspektasi Anda.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <i className="px-4 bi bi-currency-exchange" />
            <div>
              <h4 className="fw-bold mb-0">Berkualitas & Terjangkau</h4>
              <p>Terjangkau sesuai dengan bahan yang dipilih dan kebutuhan reparasi anda.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className="row featurette">
        <div className="col-md-7 py-2">
          <div className='mb-2'>
            <h2 className="featurette-heading fw-normal lh-1"><i className="pe-2 bi bi-caret-right-fill"></i>Jenis bahan yang kami gunakan</h2>
            <p className="lead">Material pembuatan dan service sofa berkualitas, busa bersetifikasi tinggi internasional dan menggunakan kain yang berserat halus untuk menciptakan kenyamanan penggunanya.</p>
          </div>
          <div className='mb-2'>
            <h2 className="featurette-heading fw-normal lh-1"><i className="pe-2 bi bi-caret-right-fill"></i>Berbagai Macam Bentuk Sofa</h2>
            <p className="lead">Kami dapat melakukan service pada sofa dengan berbagai macam bentuk sebagai berikut:</p>
            <ul className="text-muted">
              <li>Sofa 3.2.1</li>
              <li>Sofa sudut L</li>
              <li>Sofa minimalis</li>
              <li>Sofa bed</li>
              <li>Sofa Jaguar</li>
              <li>Sofa Syahrini</li>
              <li>Dan lain-lain</li>
            </ul>
          </div>
        </div>
        <div className="col-md-5">
        <img className={`${styles['bd-placeholder-img']} mx-auto rounded-top`} width="100%" height="500" src="/static/images/heroes/main.png" />
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default Main
