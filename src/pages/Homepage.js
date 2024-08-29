import Content from "../components/Content";
import CarouselControls from "../components/CarouselControls";

const Homepage = () => {
  return (
    <div className="w-full relative bg-[#130f0c] overflow-hidden flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[13.687rem] box-border gap-[4.875rem] leading-[normal] tracking-[normal] text-left text-[2.375rem] text-[#fff] font-[Poppins] mq800:gap-[2.438rem] mq450:gap-[1.188rem]">
      <section className="w-full h-[69.813rem] absolute !m-[0] top-[0rem] right-[0rem] left-[0rem]">
        <img
          className="absolute top-[49.875rem] left-[9.875rem] w-[19.938rem] h-[19.938rem] object-cover"
          loading="lazy"
          alt=""
          src="/pngtreefive-thai-sweet-basil-leaves-4231023-1@2x.png"
        />
        <img
          className="absolute top-[-3.687rem] left-[0rem] w-[90rem] h-[59.938rem] object-cover z-[1]"
          alt=""
          src="/slide4-image-1@2x.png"
        />
        <img
          className="absolute top-[53.688rem] left-[48.438rem] w-[4.875rem] h-[0.75rem] z-[2]"
          loading="lazy"
          alt=""
          src="/group-1.svg"
        />
      </section>
      <img
        className="w-[27.938rem] h-[18.688rem] absolute !m-[0] right-[26.125rem] bottom-[-2.312rem] object-cover"
        alt=""
        src="/chefmattrevwhitehighres12048x1365-21@2x.png"
      />
      <div className="w-[54.875rem] h-[13.563rem] relative hidden max-w-full z-[2]">
        <div className="absolute top-[0rem] left-[0rem] mq800:text-[1.875rem] mq450:text-[1.438rem]">
          SIGN UP SPECIAL PROMOTIONS
        </div>
        <div className="absolute top-[5.813rem] left-[0rem] text-[1.125rem]">
          Get exclusive deals you won’t find anywhere else straight to your
          inbox!
        </div>
        <div className="absolute top-[9.938rem] left-[0rem] w-[36.938rem] flex flex-col items-start justify-start max-w-full text-[0.875rem]">
          <div className="self-stretch flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch bg-[rgba(255,255,255,0.1)] border-[#fff] border-[1px] border-solid box-border overflow-hidden flex flex-col items-center justify-start py-[0.375rem] px-[0.437rem] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                <div className="h-[2.563rem] flex-1 relative leading-[1.5rem] flex items-center max-w-full">
                  Enter your email address
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[9.938rem] left-[37.75rem] bg-[#d29a5a] w-[17.125rem] flex flex-col items-start justify-start text-center text-[1.375rem]">
          <div className="self-stretch h-[3.625rem] relative">
            <div className="absolute w-full top-[calc(50%_-_14.5px)] right-[0rem] left-[0rem] flex flex-col items-start justify-start py-[0rem] px-[1rem] box-border">
              <div className="self-stretch relative leading-[128%] [text-shadow:0.3px_0_0_#fff,_0_0.3px_0_#fff,_-0.3px_0_0_#fff,_0_-0.3px_0_#fff] mq450:text-[1.125rem] mq450:leading-[1.438rem]">
                Subscribe
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[3.875rem] left-[35.75rem] bg-[#fff] w-[35.75rem] h-[0.25rem] [transform:_rotate(-180deg)] [transform-origin:0_0]" />
      </div>
      <Content />
      <section className="self-stretch flex flex-row items-start justify-end max-w-full">
        <CarouselControls />
      </section>
    </div>
  );
};

export default Homepage;
