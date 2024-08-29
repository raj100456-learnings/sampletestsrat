import { useMemo } from "react";
import BtnBase from "./BtnBase";
import PropTypes from "prop-types";

const PrimarybtnPrimaryHover = ({
  className = "",
  propWidth,
  propFlex,
  propAlignSelf,
  propBorder,
}) => {
  const primarybtnPrimaryHoverStyle = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propFlex, propAlignSelf]);

  return (
    <div
      className={`w-[22.438rem] flex flex-row items-start justify-start max-w-full z-[2] ${className}`}
      style={primarybtnPrimaryHoverStyle}
    >
      <BtnBase
        propBorder={propBorder}
        instanceContent="Meet Chef Matt"
        propColor="#fff"
        propTextShadow="0.3px 0 0 #fff, 0 0.3px 0 #fff, -0.3px 0 0 #fff, 0 -0.3px 0 #fff"
      />
    </div>
  );
};

PrimarybtnPrimaryHover.propTypes = {
  className: PropTypes.string,
  propBorder: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default PrimarybtnPrimaryHover;
