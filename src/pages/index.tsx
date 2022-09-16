/* eslint-disable react/no-unescaped-entities */
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
import { useEffect, useState } from 'react'
import { whatsapp_message } from '../components/whatsapp_message'
import moment from 'moment'
import { gmap, instagram, whatsapp } from '../components/link_packs'

function Main() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/api/instagram_post')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

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
              <a href={whatsapp} target="_blank" rel="noreferrer" className="btn btn-success btn-lg px-4 gap-3">
                <i className="bi bi-whatsapp"></i> Chat Kami
              </a>
              <Link href="/layanan">
                <a className="btn btn-outline-light btn-lg px-4">
                  <i className="bi bi-journal"></i> Lihat Layanan Kami
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 bg-light">
        <div className="text-center">
          <h2 className="fw-bolder">POSTINGAN INSTAGRAM</h2>
          <p className="lead fw-normal text-muted mb-5">Lebih update karena terhubung dengan instagram</p>
        </div>
        <div className="container card border-0 shadow rounded-3 overflow-hidden">
          <div className="card-body p-0">
            <div className="row gx-0">
              <div className="col-lg-6 col-xl-5 py-lg-5">
                <div className="p-4 p-md-5">
                  <div className="badge bg-success bg-gradient rounded-pill mb-2">Terbaru!</div>
                  <div className="h2 fw-bolder">
                    <i className="pe-2 bi bi-instagram"></i> Instagram Post #1
                  </div>
                  <p>
                    {
                      isLoading ? (
                        'Loading..'
                      ) : (
                        data['data'][0]['caption']
                      )
                    }
                  </p>
                  <a className="stretched-link text-decoration-none" href=
                    {
                      isLoading ? (
                        '#'
                      ) : (
                        data['data'][0]['permalink']
                      )
                    }
                  >
                    Read more
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                  <div className="d-flex align-items-end justify-content-between">
                    <div className="d-flex align-items-center">
                      <img className="rounded-circle me-3" src="/static/logo/brand-logo.ico" alt="..." />
                      <div className="small">
                        <div className="fw-bold">@ryanprsetyo_</div>
                        <div className="text-muted">
                          {
                            isLoading ? (
                              'Loading..'
                            ) : (
                              moment(`${data['data'][0]['timestamp']}`).format('MMMM D YYYY') + " - " + moment(`${data['data'][0]['timestamp']}`, "YYYY-MM-DD").fromNow()
                            )
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-7">
                {
                  isLoading ? (
                    <div />
                  ) : (
                    data['data'][0]['media_type'] === "VIDEO" ? (
                      <div
                        className={styles['bg-featured-blog']}
                        style={{ backgroundImage: "url(" + `${data['data'][0]['thumbnail_url']}` + ")" }}>
                      </div>
                    ) : (
                      <div
                        className={styles['bg-featured-blog']}
                        style={{ backgroundImage: "url(" + `${data['data'][0]['media_url']}` + ")" }}>
                      </div>
                    )
                  )
                }
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row gx-5">
            <div className="col-xl-8">
              <div className="row gx-5">
                <div className="col-lg-6 mb-5">
                  <div className="card h-100 shadow border-0">
                    {
                      isLoading ? (
                        <div />
                      ) : (
                        data['data'][1]['media_type'] === "VIDEO" ? (
                          <div
                            className={`${styles['bg-secondary-blog']} rounded-top`}
                            style={{ backgroundImage: "url(" + `${data['data'][1]['thumbnail_url']}` + ")" }}>
                          </div>
                        ) : (
                          <div
                            className={`${styles['bg-secondary-blog']} rounded-top`}
                            style={{ backgroundImage: "url(" + `${data['data'][1]['media_url']}` + ")" }}>
                          </div>
                        )
                      )
                    }
                    <div className="card-body p-4">
                      <a className="text-decoration-none link-dark stretched-link" href=
                        {
                          isLoading ? (
                            '#'
                          ) : (
                            data['data'][1]['permalink']
                          )
                        }
                      >
                        <div className="h5 card-title mb-3">
                          <i className="pe-2 bi bi-instagram"></i> Instagram Post #2
                        </div>
                      </a>
                      <p className="card-text mb-0">
                        {
                          isLoading ? (
                            'Loading..'
                          ) : (
                            data['data'][1]['caption']
                          )
                        }
                      </p>
                    </div>
                    <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                      <div className="d-flex align-items-end justify-content-between">
                        <div className="d-flex align-items-center">
                          <img className="rounded-circle me-3" src="/static/logo/brand-logo.ico" alt="..." />
                          <div className="small">
                            <div className="fw-bold">@ryanprsetyo_</div>
                            {
                              isLoading ? (
                                'Loading..'
                              ) : (
                                moment(`${data['data'][1]['timestamp']}`).format('MMMM D YYYY') + " - " + moment(`${data['data'][1]['timestamp']}`, "YYYY-MM-DD").fromNow()
                              )
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-5">
                  <div className="card h-100 shadow border-0">
                    {
                      isLoading ? (
                        <div />
                      ) : (
                        data['data'][2]['media_type'] === "VIDEO" ? (
                          <div
                            className={`${styles['bg-secondary-blog']} rounded-top`}
                            style={{ backgroundImage: "url(" + `${data['data'][2]['thumbnail_url']}` + ")" }}>
                          </div>
                        ) : (
                          <div
                            className={`${styles['bg-secondary-blog']} rounded-top`}
                            style={{ backgroundImage: "url(" + `${data['data'][2]['media_url']}` + ")" }}>
                          </div>
                        )
                      )
                    }
                    <div className="card-body p-4">
                      <a className="text-decoration-none link-dark stretched-link" href=
                        {
                          isLoading ? (
                            '#'
                          ) : (
                            data['data'][2]['permalink']
                          )
                        }
                      >
                        <div className="h5 card-title mb-3">
                          <i className="pe-2 bi bi-instagram"></i> Instagram Post #3
                        </div>
                      </a>
                      <p className="card-text mb-0">
                        {
                          isLoading ? (
                            'Loading..'
                          ) : (
                            data['data'][2]['caption']
                          )
                        }
                      </p>
                    </div>
                    <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                      <div className="d-flex align-items-end justify-content-between">
                        <div className="d-flex align-items-center">
                          <img className="rounded-circle me-3" src="/static/logo/brand-logo.ico" alt="..." />
                          <div className="small">
                            <div className="fw-bold">@ryanprsetyo_</div>
                            {
                              isLoading ? (
                                'Loading..'
                              ) : (
                                moment(`${data['data'][2]['timestamp']}`).format('MMMM D YYYY') + " - " + moment(`${data['data'][2]['timestamp']}`, "YYYY-MM-DD").fromNow()
                              )
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="card border-0 h-100">
                <div className="card-body p-4">
                  <div className="d-flex h-100 align-items-center justify-content-center">
                    <div className="text-center">
                      <div className="h6 fw-bolder">@ryanprsetyo_</div>
                      <p className="text-muted mb-4">
                        Penasaran dengan postingan lainnya?
                      </p>
                      <div className="h6 fw-bolder">Ikuti Kami</div>
                      <a className="fs-5 px-2 link-dark" href={instagram} target="_blank" rel="noreferrer"><i className="bi-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container mt-5 pt-5'>
        <div className="text-center">
          <h2 className="fw-bolder">KEUNGGULAN KAMI</h2>
          <p className="lead fw-normal text-muted mb-5">Berikut alasan kenapa kami mitra jasa service sofa terbaik Anda</p>
        </div>
        <div className="d-flex justify-content-center row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
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

      <div className='bg-light'>
        <div className='container mt-5 pt-5'>
          <div className="text-center">
            <h2 className="fw-bolder">SEKILAS TENTANG BUNGA SOFA</h2>
            <p className="lead fw-normal text-muted mb-5">Penasaran dengan kami? kepoin yuk</p>
          </div>
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
              <img className={`${styles['bd-placeholder-img']} mx-auto rounded-top`} width="100%" height="500" src="/static/images/wall-1.png" />
            </div>
          </div>
          <div className="mt-3 row gx-5 align-items-center">
            <div className="col-lg-6">
              <div id="map-container-google-2" className="pt-3 z-depth-1-half map-container" style={{ height: "500px" }}>
                <iframe src={gmap} width="100%" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="featurette-heading fw-normal lh-1"><i className="pe-2 bi bi-caret-right-fill"></i>Tentang Kami</h2>
              <p className="lead">
                Bunga Sofa adalah workshop yang bergerak di bidang furniture. Kami menerima pembuatan sofa costum dan servis sofa dengan berbagai jenis/model. Kami menyediakan jasa pembuatan dan servis sofa dengan berbagai jenis dan model untuk berbagai lokasi seperti, perumahan, perkantoran, sekolah, cafe, gedung pemerintahan, fasilitas umum, dan lokasi lainnya yang berada di Kota Air Molek.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </>)
}

export default Main
