import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className="site-header header-normal top-0 bg-white z-[9] rt-sticky">
      <div className="py-8">
        <div className="container">
          <div className="flex items-center justify-between flex-wrap">
            <Link href="/" className="brand-logo flex-none lg:mr-10 md:w-auto ">
              <img src="/images/logo/logo.svg" alt="" width={200} />
            </Link>
            <div className="flex items-center flex-1">
              <div className="flex-1 main-menu  lg:relative xl:mr-[74px] mr-6">
                <ul className="menu-active-classNamees">
                  <li>
                    <Link href="/tentang">Tentang</Link>
                  </li>
                  <li>
                    <Link href="/mata-kuliah">Matkul</Link>
                  </li>
                  <li>
                    <Link href="/dosen">Dosen</Link>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Portofolio</a>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/portofolio/mahasiswa">Mahasiswa</Link>
                      </li>
                      <li>
                        <Link href="/portofolio/dosen">Dosen</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/semua-event">Event</Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link href="/ukm">UKM</Link>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/ukm/insomnia">Insomnia</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="flex-none flex space-x-[18px]">
                <div className=" block   lg:hidden">
                  <button
                    type="button"
                    className=" text-3xl md:w-[56px] h-10 w-10 md:h-[56px] rounded bg-[#F8F8F8] flex flex-col items-center justify-center menu-click"
                  >
                    <i>hamburger</i>
                  </button>
                </div>
                <div className="hidden lg:block">
                  <Link
                    href="/kontak"
                    className="btn btn-primary py-[15px] px-8 "
                  >
                    Hubungi Kontak Disini
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:hidden block mt-4">
            <div className="border border-gray rounded-md  h-[46px] modal-search">
              <input
                type="text"
                className=" block w-full rounded-md  h-full border-none ring-0 focus:outline-none  focus:ring-0"
                placeholder="Search.."
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
