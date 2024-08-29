import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const GroupComponent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onCloseRoundIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      className={`w-[21.563rem] flex flex-col items-start justify-start pt-[2.5rem] px-[0rem] pb-[1.625rem] box-border gap-[3.125rem] min-w-[21.563rem] max-w-full z-[2] text-left text-[1.375rem] text-[#d29a5a] font-[Poppins] mq450:gap-[1.563rem] mq450:pt-[1.25rem] mq450:box-border mq450:min-w-full mq750:flex-1 mq1050:pt-[1.625rem] mq1050:pb-[1.25rem] mq1050:box-border ${className}`}
    >
      <div className="self-stretch h-[56.25rem] relative bg-[rgba(19,15,12,0.9)] hidden" />
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0.5rem] pr-[0.437rem] box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start pt-[0rem] px-[3.062rem] pb-[11.562rem] box-border relative bg-[url('/public/chefmattrevwhitehighres12048x1365-1@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[1]">
          <img
            className="h-[13.813rem] w-[20.625rem] relative object-cover hidden max-w-full z-[0]"
            alt=""
            src="/chefmattrevwhitehighres12048x1365-1@2x.png"
          />
          <img
            className="h-[2.25rem] w-[2.25rem] relative cursor-pointer z-[2]"
            loading="lazy"
            alt=""
            src="/close-round.svg"
            onClick={onCloseRoundIconClick}
          />
          <a className="[text-decoration:none] absolute !m-[0] bottom-[-1.5rem] left-[1.625rem] text-[inherit] inline-block min-w-[3.938rem] z-[2] mq450:text-[1.125rem]">
            HOME
          </a>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start pt-[0rem] px-[2.125rem] pb-[13.062rem] mq450:pb-[8.5rem] mq450:box-border">
        <nav className="m-[0px] flex flex-col items-start justify-start gap-[1.625rem] text-left text-[1.375rem] text-[#fff] font-[Poppins]">
          <div className="relative inline-block min-w-[7.25rem] z-[1] mq450:text-[1.125rem]">
            PRODUCTS
          </div>
          <div className="relative z-[1] mq450:text-[1.125rem]">
            MEET CHEF MATT
          </div>
          <div className="relative inline-block min-w-[2.75rem] z-[1] mq450:text-[1.125rem]">
            FAQ
          </div>
          <div className="relative z-[1] mq450:text-[1.125rem]">
            CONNECT WITH US
          </div>
        </nav>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.093rem] text-[1rem] text-[#fff]">
        <div className="flex flex-row items-start justify-start py-[0rem] pl-[2.125rem] pr-[1.75rem]">
          <div className="relative z-[1]">
            <span className="whitespace-pre-wrap">{`TEXT SUPPORT 24/7   `}</span>
            <span className="[text-decoration:underline] text-[#d29a5a]">
              070-7782-9137
            </span>
          </div>
        </div>
        <div className="self-stretch h-[0.125rem] relative bg-[#fff] [transform:_rotate(-180deg)] z-[1]" />
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[2.125rem] pr-[2.437rem] text-[1.375rem]">
          <div className="flex-1 flex flex-row items-start justify-start gap-[2.625rem] mq450:gap-[1.313rem]">
            <div className="flex flex-row items-start justify-start gap-[0.625rem]">
              <img
                className="h-[1.813rem] w-[1.813rem] relative z-[1]"
                loading="lazy"
                alt=""
                src="/bag-alt.svg"
              />
              <div className="relative inline-block min-w-[3.625rem] z-[1] mq450:text-[1.125rem]">
                CART
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[0.625rem]">
              <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
                <img
                  className="w-[1.75rem] h-[1.75rem] relative z-[1]"
                  loading="lazy"
                  alt=""
                  src="/favorite.svg"
                />
              </div>
              <div className="relative inline-block min-w-[5.938rem] z-[1] mq450:text-[1.125rem]">
                WISHLIST
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
