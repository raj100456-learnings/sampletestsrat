import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PrimarybtnPrimaryHover from "./PrimarybtnPrimaryHover";
import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";

const Content = ({ className = "" }) => {
  const navigate = useNavigate();

  const onMenuHamburgerClick = useCallback(() => {
    navigate("/menu-open");
  }, [navigate]);

  return (
    <section
      className={`w-[76rem] flex flex-row items-end justify-start py-[0rem] px-[13.937rem] box-border [row-gap:20px] max-w-full text-center text-[2.375rem] text-[#d29a5a] font-[Poppins] mq800:pl-[3.438rem] mq800:pr-[3.438rem] mq800:box-border mq1350:flex-wrap mq1350:pl-[6.938rem] mq1350:pr-[6.938rem] mq1350:box-border mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border ${className}`}
    >
      <div className="ml-[-18.688rem] h-[73.5rem] w-[18.688rem] flex flex-col items-start justify-start min-w-[18.688rem] shrink-0 mq1350:flex-1">
        <div className="self-stretch h-[56.25rem] relative shrink-0 z-[2]">
          <div className="absolute h-full top-[0rem] bottom-[0rem] left-[4.75rem] bg-[rgba(19,15,12,0.8)] w-[9.375rem] hidden" />
          <div className="absolute h-full top-[0rem] bottom-[0rem] left-[4.75rem] w-[13.938rem]">
            <div className="absolute top-[0rem] left-[9.875rem] bg-[#d29a5a] w-[56.25rem] h-[0.5rem] [transform:_rotate(90deg)] [transform-origin:0_0]" />
            <img
              className="absolute top-[14.125rem] left-[-4.75rem] w-[18.688rem] h-[27.938rem] object-contain z-[1]"
              alt=""
              src="/chefmattrevwhitehighres12048x1365-11@2x.png"
            />
          </div>
          <img
            className="absolute top-[2.375rem] left-[8.188rem] w-[2.5rem] h-[2.5rem] overflow-hidden cursor-pointer z-[1]"
            loading="lazy"
            alt=""
            src="/menu--hamburger.svg"
            onClick={onMenuHamburgerClick}
          />
        </div>
      </div>
      <div className="w-[48.125rem] flex flex-col items-end justify-start gap-[18.25rem] min-w-[48.125rem] shrink-0 max-w-full mq800:gap-[9.125rem] mq1350:flex-1 mq1350:min-w-full mq450:gap-[4.563rem]">
        <PrimarybtnPrimaryHover propBorder="3px solid #fff" />
        <FrameComponent />
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
