/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Main() {

  const router = useRouter();

  return (<>
    <div className="sticky-top">
      <nav className="py-3 navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Eighth navbar example">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link href="/">
            <a><img className="pe-4 d-block mx-auto" src="/static/logo/logo_with_brandname.png" alt="" width={200} /></a>
          </Link>

          <div className="collapse navbar-collapse" id="navbarsExample07">
            <ul className="nav nav-pills navbar-nav ms-auto mb-2 mb-lg-0 text-uppercase font-weight-bold text-center">
              <li className="nav-item ps-lg-3">
                <Link href="/">
                  <a className={`nav-link ${router.pathname == "/" ? "active" : ""}`}>Beranda</a>
                </Link>
              </li>
              <li className="nav-item ps-lg-3 dropdown">
                <a className={`nav-link dropdown-toggle ${router.pathname == "/layanan" ? "active" : ""}`} href="#" data-bs-toggle="dropdown" aria-expanded="false">Layanan</a>
                <ul className="dropdown-menu dropdown-menu-dark gap-1 p-2 rounded-3 mx-0 border-0 shadow w-220px">
                  <li>
                    <Link href="/layanan#servis-sofa">
                      <a className="dropdown-item rounded-2">Servis Sofa</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/layanan#pembuatan-sofa">
                      <a className="dropdown-item rounded-2">Pembuatan Sofa</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item ps-lg-3">
                <Link href="/tentang">
                  <a className={`nav-link ${router.pathname == "/tentang" ? "active" : ""}`}>Tentang Kami</a>
                </Link>
              </li>
              <li className="nav-item ps-lg-3">
                <Link href="/kontak">
                  <a className={`nav-link ${router.pathname == "/kontak" ? "active" : ""}`}>Kontak</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </>)
}

export default Main
