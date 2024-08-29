import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center flex-wrap content-start max-w-full [row-gap:20px] text-left text-[1rem] text-[#130f0c] font-[Poppins] ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start min-w-[26.063rem] max-w-full mq750:min-w-full">
        <div className="self-stretch bg-[#fff] flex flex-row items-start justify-start pt-[2.612rem] px-[1.937rem] pb-[2.606rem] box-border relative shrink-0 max-w-full z-[1]">
          <div className="h-[14.369rem] w-[40.063rem] relative bg-[#fff] hidden max-w-full z-[1]" />
          <div className="h-full w-[20.656rem] absolute !m-[0] top-[0rem] right-[1.738rem] bottom-[0rem] bg-[url('/public/image-banner-1-1@2x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
            <img
              className="absolute top-[0rem] left-[0rem] w-full h-full object-cover hidden"
              alt=""
              src="/image-banner-1-1@2x.png"
            />
            <div className="absolute top-[4.606rem] left-[0rem] bg-[#fff] w-[9.519rem] h-[7.713rem] z-[1]" />
          </div>
          <div className="w-[21.213rem] flex flex-col items-start justify-start pt-[4.668rem] px-[0rem] pb-[0rem] box-border max-w-full">
            <div className="self-stretch relative z-[2]">
              <p className="m-[0px]">Join Chef Matt’s Monthly Subscription</p>
              <p className="m-[0px]">and bring world class chef quality</p>
              <p className="m-[0px]">meals to your home.</p>
            </div>
          </div>
          <h1 className="m-[0px] w-[25.188rem] relative text-[2.375rem] font-normal font-[inherit] inline-block shrink-0 [text-shadow:1px_0_0_#130f0c,_0_1px_0_#130f0c,_-1px_0_0_#130f0c,_0_-1px_0_#130f0c] max-w-full z-[2] ml-[-21.207rem] mq450:text-[1.438rem] mq1050:text-[1.875rem]">{`SUBSCRIBE & SAVE`}</h1>
        </div>
        <img
          className="self-stretch h-[14.375rem] relative max-w-full overflow-hidden shrink-0 object-cover mt-[-0.007rem]"
          loading="lazy"
          alt=""
          src="/rectangle-13@2x.png"
        />
      </div>
      <div className="h-[28.738rem] flex-1 relative min-w-[26.063rem] max-w-full mq750:min-w-full">
        <img
          className="absolute top-[14.363rem] left-[0rem] w-[40.063rem] h-[14.375rem] object-cover z-[3]"
          alt=""
          src="/rectangle-14@2x.png"
        />
        <img
          className="absolute top-[0rem] left-[0rem] w-[40.063rem] h-[14.369rem] object-cover z-[4]"
          loading="lazy"
          alt=""
          src="/mask-group@2x.png"
        />
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
