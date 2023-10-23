import React from "react";

const Hero = () => {
  return (
    <section className=" xl:min-h-screen bg-[url('../images/banner/3.png')]  bg-no-repeat bg-center overflow-hidden">
      <div className="container relative">
        <div className="xl:max-w-[570px] lg:max-w-[770px] xl:py-[174px] lg:py-28 md:py-20 py-14">
          <h1>
            Jadi bagian dari &nbsp;
            <span className="text-secondary inline-block bg-[url('../images/banner/shape.svg')]  bg-no-repeat bg-bottom">
              DKV
            </span>
            BUMIGORA
          </h1>
          <div className=" plain-text text-gray leading-[30px] mt-8 mb-14">
            Dengan bergabung bersama kami di Universitas Bumigora fakultas
            Desain Teknik
          </div>
          <div className="md:flex  md:space-x-4 space-y-3 md:space-y-0">
            <a href="#" className="btn btn-primary">
              Lihat Prtofolio Kami
            </a>
          </div>
        </div>
        <div className="imge-box absolute right-[-60px] top-1/2  -translate-y-1/2 hidden xl:block   ">
          <img src="/images/banner/man3.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
