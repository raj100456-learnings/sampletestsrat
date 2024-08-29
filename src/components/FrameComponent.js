import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent = ({
  className = "",
  propAlignSelf,
  propWidth,
  propPadding,
  propWidth1,
  propFlex,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
      padding: propPadding,
    };
  }, [propAlignSelf, propWidth, propPadding]);

  const productsTitleStyle = useMemo(() => {
    return {
      width: propWidth1,
      flex: propFlex,
    };
  }, [propWidth1, propFlex]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start max-w-full text-center text-[2.375rem] text-[#d29a5a] font-[Poppins] ${className}`}
      style={frameDivStyle}
    >
      <div
        className="w-[35.938rem] flex flex-col items-start justify-start gap-[1.937rem] max-w-full mq800:gap-[0.938rem]"
        style={productsTitleStyle}
      >
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.062rem] max-w-full">
          <h1 className="m-[0px] relative text-inherit font-normal font-[inherit] inline-block max-w-full z-[1] mq800:text-[1.875rem] mq450:text-[1.438rem]">
            CHEF MATT PRODUCTS
          </h1>
          <div className="self-stretch h-[0.25rem] relative bg-[#d29a5a] [transform:_rotate(-180deg)] z-[1]" />
        </div>
        <div className="relative text-[1.125rem] text-[#fff] text-left">
          <p className="m-[0px]">{`Shop Gourmet Chef Quality products from the Chef Matt brand. `}</p>
          <p className="m-[0px]">Chef it yourself and Thank us later.</p>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
  propPadding: PropTypes.any,
  propWidth1: PropTypes.any,
  propFlex: PropTypes.any,
};

export default FrameComponent;
