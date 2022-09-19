/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Head from "next/head"
import Layout from "../../components/layout"
import styles from './style.module.css'
import Image from 'next/image'

function Main() {
    return (<>
        <Head>
            <title>Tentang Kami</title>
        </Head>
        <Layout>
            <div className={`${styles['secondary-heroes']} text-bg-dark`}>
                <div className="px-4 py-5 text-center">
                    <h1 className="display-5 fw-bold">Tentang Kami</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">
                        Bunga Sofa akan membantu Anda menciptakan kenyamanan yang berarti.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <div className="row g-5 pt-3">
                    <div className="col-md-8">
                        <article className="blog-post text-muted" style={{ textAlign: "justify" }}>
                            <p>
                                Bunga Sofa adalah workshop yang bergerak pada bidang pembuatan dan servis sofa/kursi yang beralamat di Riau. Kami menyediakan jasa pembuatan dan servis sofa dengan berbagai jenis dan model, untuk berbagai lokasi seperti, perumahan, perkantoran, sekolah, cafe, gedung pemerintahan,fasilitas umum, dan lokasi lainnya yang berada di daerah Riau.
                            </p>

                            <p>
                                Kami menyediakan jasa pembuatan dan servis sofa dengan  memberikan berbagai macam  bentuk model sofa / kursi diantaranya sofa L, sofa 3.2.1, sofa minimalis, sofa bed, sofa reclining, sofa puff/kotak, sofa sleeper dan yang lainnya.
                            </p>

                            <p>
                                Material pembuatan dan servis sofa berkualitas, busa bersetifikasi tinggi internasional dan menggunakan kain yang berserat halus untuk menciptakan kenyamanan penggunanya. Kami menerima servis dan pembuatan berbagai macam medel sofa seperti model sofa klasik, modern, minimalis, dll. Pemilihan warna-warna yang solid kami mampu memproduksi sofa yang mewah dan elegan. Hanya dengan harga yang relatif murah, anda bisa merubah tampilan sofa anda menjadi lebih indah dan baru.
                            </p>
                        </article>
                    </div>

                    <div className="col-md-4">
                        <div className="position-sticky" style={{ top: "6rem" }}>
                            <div className="">
                                <img className={`${styles['bd-placeholder-img']} mx-auto rounded-top`} width="100%" height="500" src="/static/images/wall-1.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    </>)
}

export default Main