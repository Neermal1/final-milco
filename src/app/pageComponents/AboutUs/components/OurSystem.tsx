const OurSystem = () => {
  return (
    <div className="bg-[#cfe2de] black-color">
      <div className="layout component-padding">
        <div className="flex items-center justify-center">
          <div className="lg:text-[38px] text-[20px]  font-semibold text-center lg:leading-[60px]">
            Upon our {`technician's`} arrival, if the service charge {` isn't`}{" "}
            suitable and you decide not to proceed,{" "}
            <span
              style={{
                color: "var(--accent-color)",
              }}
            >
              $85 fee should still be paid.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSystem;
