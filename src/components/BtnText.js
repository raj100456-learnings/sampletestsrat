import { useMemo } from "react";
import PropTypes from "prop-types";

const BtnText = ({
  className = "",
  instanceContent,
  propColor,
  propTextShadow,
}) => {
  const instanceContentStyle = useMemo(() => {
    return {
      color: propColor,
      textShadow: propTextShadow,
    };
  }, [propColor, propTextShadow]);

  return (
    <div
      className={`flex-1 flex flex-row items-start justify-start py-[0rem] px-[1rem] box-border max-w-full text-center text-[1.5rem] text-[#130f0c] font-[Poppins] ${className}`}
    >
      <div
        className="flex-1 relative leading-[1.938rem] inline-block [text-shadow:0.3px_0_0_#130f0c,_0_0.3px_0_#130f0c,_-0.3px_0_0_#130f0c,_0_-0.3px_0_#130f0c] max-w-full mq450:text-[1.188rem] mq450:leading-[1.563rem]"
        style={instanceContentStyle}
      >
        {instanceContent}
      </div>
    </div>
  );
};

BtnText.propTypes = {
  className: PropTypes.string,
  instanceContent: PropTypes.string,

  /** Style props */
  propColor: PropTypes.any,
  propTextShadow: PropTypes.any,
};

export default BtnText;
