import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className="site-header header-normal top-0 bg-white z-[9] rt-sticky">
      <div className="py-8">
        <div className="container">
          <div className="flex items-center justify-between flex-wrap">
            <a
              href="index.html"
              className="brand-logo flex-none lg:mr-10 md:w-auto max-w-[120px] "
            >
              <img src="/images/logo/logo.svg" alt="" />
            </a>
            <div className="flex items-center flex-1">
              <div className="flex-1 main-menu  lg:relative xl:mr-[74px] mr-6">
                <ul className="menu-active-classNamees">
                  <li>
                    <a href="contact.html">Tentang</a>
                  </li>
                  <li>
                    <a href="contact.html">MataKuliah</a>
                  </li>
                  <li>
                    <a href="contact.html">Dosen</a>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Portofolio</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="index.html">Mahasiswa</a>
                      </li>
                      <li>
                        <a href="index2.html">Dosen</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">Events</a>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">UKM</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="index.html">Insomnia</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">Kontak</a>
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
                  <a href="#" className="btn btn-primary py-[15px] px-8 ">
                    Start Free Trial
                  </a>
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
