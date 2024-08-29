import GroupComponent from "../components/GroupComponent";
import PrimarybtnPrimaryHover from "../components/PrimarybtnPrimaryHover";
import ProductSlider from "../components/ProductSlider";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import ShippingGuarantee from "../components/ShippingGuarantee";

const MenuOpen = () => {
  return (
    <div className="w-full relative bg-[#130f0c] overflow-hidden flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[13.075rem] box-border gap-[8.062rem] leading-[normal] tracking-[normal] text-left text-[2.375rem] text-[#fff] font-[Poppins] mq450:gap-[2rem] mq750:gap-[4rem]">
      <section className="w-full h-[69.813rem] absolute !m-[0] top-[0rem] right-[0rem] left-[0rem]">
        <img
          className="absolute top-[49.875rem] left-[9.875rem] w-[19.938rem] h-[19.938rem] object-cover"
          alt=""
          src="/pngtreefive-thai-sweet-basil-leaves-4231023-1@2x.png"
        />
        <img
          className="absolute top-[-3.687rem] left-[0rem] w-[90rem] h-[59.938rem] object-cover z-[1]"
          alt=""
          src="/slide4-image-1@2x.png"
        />
        <img
          className="absolute top-[53.688rem] left-[48.438rem] w-[4.875rem] h-[0.75rem] z-[2]"
          loading="lazy"
          alt=""
          src="/group-1.svg"
        />
      </section>
      <img
        className="w-[27.938rem] h-[18.688rem] absolute !m-[0] right-[26.188rem] bottom-[-2.925rem] object-cover"
        loading="lazy"
        alt=""
        src="/chefmattrevwhitehighres12048x1365-2@2x.png"
      />
      <div className="w-[54.875rem] h-[13.563rem] relative hidden max-w-full z-[2]">
        <div className="absolute top-[0rem] left-[0rem] mq450:text-[1.438rem] mq1050:text-[1.875rem]">
          SIGN UP SPECIAL PROMOTIONS
        </div>
        <div className="absolute top-[5.813rem] left-[0rem] text-[1.125rem]">
          Get exclusive deals you won’t find anywhere else straight to your
          inbox!
        </div>
        <div className="absolute top-[9.938rem] left-[0rem] w-[36.938rem] flex flex-col items-start justify-start max-w-full text-[0.875rem]">
          <div className="self-stretch flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch bg-[rgba(255,255,255,0.1)] border-[#fff] border-[1px] border-solid box-border overflow-hidden flex flex-col items-center justify-start py-[0.375rem] px-[0.437rem] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                <div className="h-[2.563rem] flex-1 relative leading-[1.5rem] flex items-center max-w-full">
                  Enter your email address
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[9.938rem] left-[37.75rem] bg-[#d29a5a] w-[17.125rem] flex flex-col items-start justify-start text-center text-[1.375rem]">
          <div className="self-stretch h-[3.625rem] relative">
            <div className="absolute w-full top-[calc(50%_-_14.5px)] right-[0rem] left-[0rem] flex flex-col items-start justify-start py-[0rem] px-[1rem] box-border">
              <div className="self-stretch relative leading-[128%] [text-shadow:0.3px_0_0_#fff,_0_0.3px_0_#fff,_-0.3px_0_0_#fff,_0_-0.3px_0_#fff] mq450:text-[1.125rem] mq450:leading-[1.438rem]">
                Subscribe
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[3.875rem] left-[35.75rem] bg-[#fff] w-[35.75rem] h-[0.25rem] [transform:_rotate(-180deg)] [transform-origin:0_0]" />
      </div>
      <section className="w-[63.313rem] flex flex-row items-end justify-between py-[0rem] pl-[0rem] pr-[1.25rem] box-border max-w-full gap-[1.25rem] mq750:flex-wrap">
        <GroupComponent />
        <div className="w-[22.438rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[10.187rem] box-border min-w-[22.438rem] min-h-[14.938rem] max-w-full mq450:min-w-full mq750:flex-1">
          <PrimarybtnPrimaryHover
            propWidth="unset"
            propFlex="unset"
            propAlignSelf="stretch"
            propBorder="3px solid #fff"
          />
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-end py-[0rem] px-[0.062rem] box-border max-w-full">
        <div className="w-[81.375rem] flex flex-col items-start justify-start py-[0rem] pl-[1.25rem] pr-[0rem] box-border gap-[6.125rem] max-w-full mq450:gap-[1.5rem] mq750:gap-[3.063rem]">
          <ProductSlider />
          <FrameComponent1
            propWidth="78.688rem"
            propPadding="0rem 1.25rem"
            messageBackground="/code-background@2x.png"
            propWidth1="unset"
            propFlex="1"
            propAlignSelf="unset"
          />
          <FrameComponent3 />
          <FrameComponent2
            propPadding="0rem 4.062rem 5.5rem"
            titleBackground="/rectangle-16@2x.png"
            propBottom="-15.312rem"
          />
          <footer className="self-stretch flex flex-col items-start justify-start gap-[4.312rem] max-w-full text-left text-[1.5rem] text-[#d29a5a] font-[Poppins] mq450:gap-[1.063rem] mq750:gap-[2.125rem]">
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[3.5rem] pr-[3.562rem] box-border max-w-full lg:pl-[1.75rem] lg:pr-[1.75rem] lg:box-border">
              <div className="flex-1 flex flex-row items-start justify-start gap-[4.625rem] max-w-full lg:gap-[2.313rem] lg:flex-wrap mq750:gap-[1.125rem]">
                <ShippingGuarantee
                  shippingIcon="/vector.svg"
                  propHeight="2rem"
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
          </footer>
        </div>
      </section>
    </div>
  );
};

export default MenuOpen;
