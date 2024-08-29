import { useMemo } from "react";
import BtnText from "./BtnText";
import PropTypes from "prop-types";

const BtnBase = ({
  className = "",
  propBorder,
  instanceContent,
  propColor,
  propTextShadow,
}) => {
  const btnBaseStyle = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  return (
    <div
      className={`flex-1 border-[#130f0c] border-[3px] border-solid box-border flex flex-row items-start justify-start py-[1.187rem] px-[0rem] max-w-full text-center text-[1.5rem] text-[#130f0c] font-[Poppins] ${className}`}
      style={btnBaseStyle}
    >
      <BtnText
        instanceContent={instanceContent}
        propColor={propColor}
        propTextShadow={propTextShadow}
      />
      <div className="overflow-hidden hidden flex-row items-center justify-start py-[0.875rem] px-[0.5rem]">
        <img
          className="h-[0.75rem] w-[0.75rem] relative"
          alt=""
          src="/wrapper.svg"
        />
      </div>
      <div className="overflow-hidden hidden flex-row items-center justify-start py-[0.875rem] px-[0.5rem]">
        <img
          className="h-[0.75rem] w-[0.75rem] relative"
          alt=""
          src="/wrapper.svg"
        />
      </div>
    </div>
  );
};

BtnBase.propTypes = {
  className: PropTypes.string,
  instanceContent: PropTypes.string,
  propColor: PropTypes.string,
  propTextShadow: PropTypes.string,

  /** Style props */
  propBorder: PropTypes.any,
};

export default BtnBase;
