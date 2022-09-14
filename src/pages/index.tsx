/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// import type { NextPage } from 'next'
import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import Layout from '../components/layout'
import Image from 'next/image'
import styles from './style.module.css'
import Link from 'next/link'
import Marquee from "react-fast-marquee";
import Head from 'next/head'
import { useState } from 'react'

function Main() {
  return (<>
    <Head>
      <title>Bunga Sofa - Servis & Produsen Sofa Riau</title>
    </Head>
    <Layout>
      <div className=''>
        <img className={styles['bd-placeholder-img']} width="100%" height="100%" src="/static/images/heroes/main.png" />
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
              <form action="https://api.whatsapp.com/send?phone=6282233223303" method='get'>
                <input type="text" name="phone" value="6282233223303" hidden/>
                <input type="text" name="text" value="acrit banegt" hidden/>
                <button type='submit' className="btn btn-success btn-lg px-4 gap-3">
                  <i className="bi bi-whatsapp"></i> Chat Kami
                </button>
              </form>
              <Link href="/layanan">
                <a className="btn btn-outline-light btn-lg px-4">
                  <i className="bi bi-journal"></i> Lihat Layanan Kami
                </a>
              </Link>
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

      <div className="">
        <div className="container card border-0 shadow rounded-3 overflow-hidden">
          <div className="card-body p-0">
            <div className="row gx-0">
              <div className="col-lg-6 col-xl-5 py-lg-5">
                <div className="p-4 p-md-5">
                  <div className="badge bg-primary bg-gradient rounded-pill mb-2">News</div>
                  <div className="h2 fw-bolder">Article heading goes here</div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique delectus ab doloremque, qui doloribus ea officiis...</p>
                  <a className="stretched-link text-decoration-none" href="#!">
                    Read more
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-xl-7">
                <div
                  className={styles['bg-featured-blog']}
                  style={{ backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")" }}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className="mt-5 row featurette">
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
            <img className={`${styles['bd-placeholder-img']} mx-auto rounded-top`} width="100%" height="500" src="/static/images/wall-1.png" />
          </div>
        </div>
      </div>
    </Layout>
  </>)
}

export default Main
