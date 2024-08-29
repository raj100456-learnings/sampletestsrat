import { useMemo } from "react";
import PrimarybtnPrimaryHover from "./PrimarybtnPrimaryHover";
import PropTypes from "prop-types";

const FrameComponent1 = ({
  className = "",
  propWidth,
  propPadding,
  messageBackground,
  propWidth1,
  propFlex,
  propAlignSelf,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  return (
    <div
      className={`w-[78.563rem] flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[5.375rem] box-border max-w-full text-center text-[2.375rem] text-[#130f0c] font-[Poppins] mq450:pb-[3.5rem] mq450:box-border ${className}`}
      style={frameDiv1Style}
    >
      <div className="w-[28.438rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[2.937rem] box-border relative gap-[1.25rem] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pl-[1.25rem] pr-[1.312rem]">
          <h1 className="m-[0px] relative text-inherit font-normal font-[inherit] z-[2] mq800:text-[1.875rem] mq450:text-[1.438rem]">
            ONLINE ONLY
          </h1>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[2.437rem] max-w-full text-[1.375rem] mq450:gap-[1.188rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem]">
            <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pl-[1.25rem] pr-[1.312rem]">
              <div className="h-[0.25rem] w-[4.875rem] relative bg-[#130f0c] [transform:_rotate(-180deg)] z-[2]" />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start relative">
              <div className="w-[80.125rem] !m-[0] absolute right-[-26.625rem] bottom-[-11.062rem] bg-[#fff] flex flex-row items-start justify-start pt-[2.437rem] px-[1.5rem] pb-[0rem] box-border">
                <div className="h-[23.938rem] w-[80.125rem] relative bg-[#fff] hidden max-w-full" />
                <img
                  className="h-[21.5rem] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
                  alt=""
                  src={messageBackground}
                />
              </div>
              <div className="relative z-[2] mq450:text-[1.125rem]">
                <p className="m-[0px] font-light">
                  GET 20% OFF YOUR ORDER OF $50 OR MORE
                </p>
                <p className="m-[0px]">
                  <span className="font-light">{`Use code `}</span>
                  <span className="font-extrabold font-[Poppins]">
                    “Chef20”
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[2.937rem] pr-[3.062rem] box-border max-w-full mq450:pl-[1.438rem] mq450:pr-[1.5rem] mq450:box-border">
            <PrimarybtnPrimaryHover
              propWidth={propWidth1}
              propFlex={propFlex}
              propAlignSelf={propAlignSelf}
            />
          </div>
        </div>
        <img
          className="w-[4.875rem] h-[0.75rem] absolute !m-[0] right-[11.75rem] bottom-[0rem] z-[2]"
          loading="lazy"
          alt=""
          src="/group-3.svg"
        />
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  messageBackground: PropTypes.string,
  propWidth1: PropTypes.string,
  propFlex: PropTypes.string,
  propAlignSelf: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propPadding: PropTypes.any,
};

export default FrameComponent1;
