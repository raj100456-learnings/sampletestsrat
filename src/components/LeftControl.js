import { useMemo } from "react";
import PropTypes from "prop-types";

const LeftControl = ({
  className = "",
  propFlex,
  propAlignSelf,
  ellipse5,
  ellipse6,
  ellipse7,
  ellipse8,
}) => {
  const leftControlStyle = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propAlignSelf]);

  return (
    <div
      className={`flex-1 flex flex-row items-start justify-start flex-wrap content-start gap-[0.875rem] max-w-full text-center text-[1.125rem] text-[#d29a5a] font-[Poppins] ${className}`}
      style={leftControlStyle}
    >
      <div className="flex flex-col items-start justify-start pt-[4.875rem] px-[0rem] pb-[0rem]">
        <img
          className="w-[4.75rem] h-[4.813rem] relative"
          loading="lazy"
          alt=""
          src="/expand-left-double-light.svg"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[1.5rem] min-w-[46.375rem] max-w-full mq1125:min-w-full">
        <div className="self-stretch flex flex-row items-start justify-center gap-[2.375rem] max-w-full mq800:gap-[1.188rem] mq1125:flex-wrap">
          <img
            className="h-[14.625rem] w-[14.625rem] relative rounded-[50%] object-cover min-h-[14.625rem]"
            loading="lazy"
            alt=""
            src={ellipse5}
          />
          <img
            className="h-[14.625rem] w-[14.688rem] relative rounded-[50%] object-cover min-h-[14.625rem]"
            loading="lazy"
            alt=""
            src={ellipse6}
          />
          <img
            className="h-[14.625rem] w-[14.688rem] relative rounded-[50%] object-cover min-h-[14.625rem]"
            loading="lazy"
            alt=""
            src={ellipse7}
          />
          <div className="flex-1 flex flex-row items-start justify-start gap-[0.875rem] min-w-[13.188rem] max-w-full mq450:flex-wrap">
            <img
              className="h-[14.625rem] w-[14.625rem] relative rounded-[50%] object-cover"
              loading="lazy"
              alt=""
              src={ellipse8}
            />
            <div className="flex flex-col items-start justify-start pt-[4.875rem] px-[0rem] pb-[0rem]">
              <img
                className="w-[4.75rem] h-[4.813rem] relative"
                loading="lazy"
                alt=""
                src="/expand-right-double-light.svg"
              />
            </div>
          </div>
        </div>
        <div className="w-[65.688rem] flex flex-row items-start justify-start py-[0rem] px-[2.25rem] box-border max-w-full">
          <div className="flex-1 flex flex-col items-end justify-start gap-[0.312rem] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq800:flex-wrap">
              <div className="flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[0.25rem]">
                <div className="relative">CINNAMON HONEY</div>
              </div>
              <div className="flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[1.312rem]">
                <div className="relative inline-block min-w-[7.625rem]">
                  COCONUT OIL
                </div>
              </div>
              <div className="relative">MANGO HONEY</div>
              <div className="relative">HONEY HABANERO</div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pl-[2.062rem] pr-[1.937rem] box-border max-w-full text-[0.875rem] text-[#fff]">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq800:flex-wrap">
                <div className="w-[6.063rem] relative inline-block min-w-[6.063rem]">
                  <span>
                    <span className="[text-decoration:line-through]">
                      $12.00
                    </span>
                    {`  `}
                  </span>
                  <span className="text-[1rem]"> $9.00</span>
                </div>
                <div className="w-[6.875rem] flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[0.187rem] box-border">
                  <div className="self-stretch relative">
                    <span className="whitespace-pre-wrap">
                      <span className="[text-decoration:line-through]">
                        $20.00
                      </span>
                    </span>
                    <span className="whitespace-pre-wrap">{`  `}</span>
                    <span className="text-[1rem]"> $15.00</span>
                  </div>
                </div>
                <div className="w-[6.313rem] flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[0.437rem] box-border">
                  <div className="self-stretch relative inline-block min-w-[5.875rem]">
                    <span className="whitespace-pre-wrap">
                      <span className="[text-decoration:line-through]">
                        $9.00
                      </span>
                    </span>
                    <span className="whitespace-pre-wrap">{`  `}</span>
                    <span className="text-[1rem]"> $6.00</span>
                  </div>
                </div>
                <div className="w-[6.063rem] relative inline-block min-w-[6.063rem]">
                  <span>
                    <span className="[text-decoration:line-through]">
                      $12.00
                    </span>
                    {`  `}
                  </span>
                  <span className="text-[1rem]"> $9.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LeftControl.propTypes = {
  className: PropTypes.string,
  ellipse5: PropTypes.string,
  ellipse6: PropTypes.string,
  ellipse7: PropTypes.string,
  ellipse8: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default LeftControl;
