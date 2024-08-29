import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent2 = ({
  className = "",
  propPadding,
  titleBackground,
  propBottom,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const titleBackgroundIconStyle = useMemo(() => {
    return {
      bottom: propBottom,
    };
  }, [propBottom]);

  return (
    <div
      className={`w-[53.125rem] flex flex-row items-start justify-start py-[0rem] px-[4.062rem] box-border max-w-full text-left text-[2.375rem] text-[#fff] font-[Poppins] mq1125:pl-[2rem] mq1125:pr-[2rem] mq1125:box-border ${className}`}
      style={frameDiv2Style}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[1.937rem] max-w-full mq800:gap-[0.938rem]">
        <div className="w-[35.75rem] flex flex-col items-start justify-start gap-[0.062rem] max-w-full">
          <div className="flex flex-row items-start justify-start relative max-w-full">
            <img
              className="h-[25.063rem] w-[80.125rem] absolute !m-[0] right-[-41.25rem] bottom-[-12.812rem] object-cover"
              loading="lazy"
              alt=""
              src={titleBackground}
              style={titleBackgroundIconStyle}
            />
            <h1 className="m-[0px] relative text-inherit font-normal font-[inherit] z-[1] mq800:text-[1.875rem] mq450:text-[1.438rem]">
              SIGN UP SPECIAL PROMOTIONS
            </h1>
          </div>
          <div className="self-stretch h-[0.25rem] relative bg-[#fff] [transform:_rotate(-180deg)] z-[1]" />
        </div>
        <div className="relative text-[1.125rem] inline-block max-w-full z-[1]">
          Get exclusive deals you won’t find anywhere else straight to your
          inbox!
        </div>
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[1rem] max-w-full text-[0.75rem] text-[#3d454b] font-[Graphik]">
          <div className="flex-1 flex flex-col items-start justify-start min-w-[20.938rem] max-w-full z-[1]">
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch bg-[rgba(255,255,255,0.1)] border-[#fff] border-[1px] border-solid box-border overflow-hidden flex flex-col items-center justify-start py-[0.375rem] px-[0.437rem] gap-[0.25rem] max-w-full">
                <div className="w-[16.313rem] hidden flex-col items-start justify-start py-[0rem] pl-[1.75rem] pr-[0rem] box-border">
                  <div className="self-stretch h-[0.75rem] relative leading-[100%] inline-block">
                    Label
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[0.25rem] max-w-full text-[0.875rem] text-[#fff] font-[Poppins]">
                  <img
                    className="h-[1.5rem] w-[1.5rem] relative hidden min-h-[1.5rem]"
                    alt=""
                    src="/help.svg"
                  />
                  <div className="flex-1 relative leading-[1.5rem] inline-block max-w-full">
                    Enter email address
                  </div>
                  <img
                    className="h-[1.5rem] w-[1.5rem] relative hidden"
                    alt=""
                    src="/dropdown.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] p-[0px] bg-[transparent] w-[11.75rem] flex flex-col items-start justify-start z-[1]">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch bg-[#d29a5a] border-[#d29a5a] border-[1px] border-solid overflow-hidden flex flex-col items-center justify-start py-[0.375rem] px-[0.437rem] gap-[0.25rem]">
                <div className="self-stretch hidden flex-col items-start justify-start py-[0rem] pl-[1.75rem] pr-[0rem]">
                  <div className="self-stretch h-[0.75rem] relative text-[0.75rem] leading-[100%] font-[Graphik] text-[#3d454b] text-left inline-block">
                    Label
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[0.25rem]">
                  <img
                    className="h-[1.5rem] w-[1.5rem] relative hidden min-h-[1.5rem]"
                    alt=""
                    src="/help.svg"
                  />
                  <div className="flex-1 relative text-[0.875rem] leading-[1.5rem] font-[Poppins] text-[#fff] text-center">
                    Subscribe
                  </div>
                  <img
                    className="h-[1.5rem] w-[1.5rem] relative hidden min-h-[1.5rem]"
                    alt=""
                    src="/dropdown.svg"
                  />
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  titleBackground: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propBottom: PropTypes.any,
};

export default FrameComponent2;
