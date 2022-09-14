/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

function Main() {
  return (<>
    <div className="sticky-top">
    <nav className="py-3 navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Eighth navbar example">
      <div className="container">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <img className="pe-4 d-block mx-auto" src="/static/logo/logo_with_brandname.png" alt="" width={200} />

      <div className="collapse navbar-collapse" id="navbarsExample07">
        <ul className="nav nav-pills navbar-nav ms-auto mb-2 mb-lg-0 text-uppercase font-weight-bold text-center">
          <li className="nav-item ps-lg-3">
            <a className="nav-link active" aria-current="page" href="#">Beranda</a>
          </li>
          <li className="nav-item ps-lg-3 dropdown">
            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Layanan</a>
            <ul className="dropdown-menu dropdown-menu-dark gap-1 p-2 rounded-3 mx-0 border-0 shadow w-220px">
              <li><a className="dropdown-item rounded-2" href="#">Servis Sofa</a></li>
              <li><a className="dropdown-item rounded-2" href="#">Pembuatan Sofa</a></li>
            </ul>
          </li>
          <li className="nav-item ps-lg-3">
            <a className="nav-link" href="#">Tentang Kami</a>
          </li>
          <li className="nav-item ps-lg-3">
            <a className="nav-link" href="#">Artikel</a>
          </li>
          <li className="nav-item ps-lg-3">
            <a className="nav-link" href="#">Kontak</a>
          </li>
        </ul>
      </div>
      </div>
    </nav>
    </div>
  </>)
}

export default Main
