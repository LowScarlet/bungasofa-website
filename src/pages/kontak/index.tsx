/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Head from "next/head"
import Layout from "../../components/layout"
import styles from './style.module.css'
import Image from 'next/image'
import { instagram, phone, whatsapp } from "../../components/link_packs"

function Main() {
    return (<>
        <Head>
            <title>Kontak Kami</title>
        </Head>
        <Layout>
            <div className={`${styles['secondary-heroes']} text-bg-dark`}>
                <div className="px-4 py-5 text-center">
                    <h1 className="display-5 fw-bold">Kontak Kami</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">
                            Apa pun masalah mengenai sofa rumah anda. Datang atau hubungi kami untuk mendapatkan solusinya.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <div className="row g-5 pt-3">
                    <div className="col-md-8">
                        <div className='mb-2'>
                            <p className="lead">Silahkan hubungi kami untuk konsultasi jika ada pertanyaan mengenai jasa kami. Kami siap membantu segala kebutuhan Anda.</p>
                            <ul className="text-muted list-unstyled">
                                <li className="nav-item mb-2"><a href={whatsapp} target="_blank" rel="noreferrer" className="nav-link p-0 text-muted"><i className="pe-2 bi bi-whatsapp"></i>0822-8474-1825</a></li>
                                <li className="nav-item mb-2"><a href={phone} target="_blank" rel="noreferrer" className="nav-link p-0 text-muted"><i className="pe-2 bi bi-telephone-inbound"></i>0822-8474-1825</a></li>
                                <li className="nav-item mb-2"><a href={instagram} target="_blank" rel="noreferrer" className="nav-link p-0 text-muted"><i className="pe-2 bi bi-instagram"></i>@ryanprsetyo_</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="position-sticky" style={{ top: "6rem" }}>
                            <div id="map-container-google-2" className="pt-3 z-depth-1-half map-container" style={{ height: "500px" }}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.951619395994!2d102.27140055243648!3d-0.3761584680162686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e2991f6f237b029%3A0xa919f42516a25f4e!2sBunga%20Sofa!5e0!3m2!1sen!2sid!4v1655500319544!5m2!1sen!2sid" width="100%" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    </>)
}

export default Main