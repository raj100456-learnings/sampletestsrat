import FrameComponent from "./FrameComponent";
import LeftControl from "./LeftControl";
import PropTypes from "prop-types";

const ProductSlider = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[1.562rem] pb-[4.375rem] box-border max-w-full mq750:pb-[2.813rem] mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[4.875rem] max-w-full mq450:gap-[1.188rem] mq750:gap-[2.438rem]">
        <FrameComponent
          propAlignSelf="unset"
          propWidth="41.063rem"
          propPadding="0rem 2.562rem"
          propWidth1="unset"
          propFlex="1"
        />
        <LeftControl
          propFlex="unset"
          propAlignSelf="stretch"
          ellipse5="/ellipse-5@2x.png"
          ellipse6="/ellipse-6@2x.png"
          ellipse7="/ellipse-7@2x.png"
          ellipse8="/ellipse-8@2x.png"
        />
      </div>
    </div>
  );
};

ProductSlider.propTypes = {
  className: PropTypes.string,
};

export default ProductSlider;
