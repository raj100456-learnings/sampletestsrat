import LeftControl from "./LeftControl";
import FrameComponent1 from "./FrameComponent1";
import FrameComponent2 from "./FrameComponent2";
import ShippingGuarantee from "./ShippingGuarantee";
import PropTypes from "prop-types";

const CarouselControls = ({ className = "" }) => {
  return (
    <div
      className={`w-[81.375rem] flex flex-col items-start justify-start py-[0rem] pl-[1.25rem] pr-[0rem] box-border gap-[9.125rem] max-w-full text-center text-[2.375rem] text-[#d29a5a] font-[Poppins] mq800:gap-[2.25rem] mq1350:gap-[4.563rem] mq450:gap-[1.125rem] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[1.375rem] pl-[1.5rem] pr-[1.625rem] box-border max-w-full text-[1.125rem]">
        <LeftControl
          ellipse5="/ellipse-5@2x.png"
          ellipse6="/ellipse-6@2x.png"
          ellipse7="/ellipse-7@2x.png"
          ellipse8="/ellipse-8@2x.png"
        />
      </div>
      <FrameComponent1
        messageBackground="/code-background@2x.png"
        propWidth1="unset"
        propFlex="1"
        propAlignSelf="unset"
      />
      <FrameComponent2 titleBackground="/rectangle-161@2x.png" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[4.312rem] max-w-full text-left text-[1.5rem] mq800:gap-[2.125rem] mq450:gap-[1.063rem]">
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[3.5rem] pr-[3.562rem] box-border max-w-full mq1350:pl-[1.75rem] mq1350:pr-[1.75rem] mq1350:box-border">
          <div className="flex-1 flex flex-row items-start justify-start gap-[4.625rem] max-w-full mq800:gap-[1.125rem] mq1350:gap-[2.313rem] mq1350:flex-wrap">
            <ShippingGuarantee
              shippingIcon="/vector.svg"
              fREESHIPPINGWORLDWIDE="FREE SHIPPING WORLDWIDE"
              guaranteedDelivery="Guaranteed Delivery"
            />
            <div className="flex flex-row items-start justify-start gap-[1.687rem] max-w-full mq450:flex-wrap">
              <img
                className="h-[1.875rem] w-[1.938rem] relative"
                loading="lazy"
                alt=""
                src="/vector-1.svg"
              />
              <div className="flex flex-col items-start justify-start gap-[0.75rem]">
                <div className="relative mq450:text-[1.188rem]">
                  24/7 CUSTOMER SERVICE
                </div>
                <div className="relative text-[1.125rem] text-[#fff]">
                  Text Us 24/7 at 070-7782-9137
                </div>
              </div>
            </div>
            <ShippingGuarantee
              shippingIcon="/vector-2.svg"
              propHeight="2.25rem"
              fREESHIPPINGWORLDWIDE="QUALITY GUARANTEE!"
              guaranteedDelivery="Send Within 30 Days"
            />
          </div>
        </div>
        <div className="self-stretch h-[0.5rem] relative bg-[#d29a5a] [transform:_rotate(-180deg)] z-[1]" />
      </div>
    </div>
  );
};

CarouselControls.propTypes = {
  className: PropTypes.string,
};

export default CarouselControls;
