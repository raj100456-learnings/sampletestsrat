import { useMemo } from "react";
import PropTypes from "prop-types";

const ShippingGuarantee = ({
  className = "",
  shippingIcon,
  propHeight,
  fREESHIPPINGWORLDWIDE,
  guaranteedDelivery,
}) => {
  const shippingIconStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div
      className={`flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem] box-border max-w-full text-left text-[1.5rem] text-[#d29a5a] font-[Poppins] ${className}`}
    >
      <div className="flex flex-row items-start justify-start gap-[1.375rem] mq450:flex-wrap">
        <img
          className="h-[2rem] w-[2.25rem] relative"
          loading="lazy"
          alt=""
          src={shippingIcon}
          style={shippingIconStyle}
        />
        <div className="flex flex-col items-start justify-start gap-[0.625rem]">
          <div className="relative mq450:text-[1.188rem]">
            {fREESHIPPINGWORLDWIDE}
          </div>
          <div className="relative text-[1.125rem] text-[#fff]">
            {guaranteedDelivery}
          </div>
        </div>
      </div>
    </div>
  );
};

ShippingGuarantee.propTypes = {
  className: PropTypes.string,
  shippingIcon: PropTypes.string,
  fREESHIPPINGWORLDWIDE: PropTypes.string,
  guaranteedDelivery: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
};

export default ShippingGuarantee;
