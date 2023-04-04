const Loading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className=" w-10 h-10 relative charge">
        <div className="w-full h-full absolute left-0 top-0 charge-dot"></div>
        <div className="w-full h-full absolute left-0 top-0 charge-dot"></div>
        <div className="w-full h-full absolute left-0 top-0 charge-dot"></div>
        <div className="w-full h-full absolute left-0 top-0 charge-dot"></div>
        <div className="w-full h-full absolute left-0 top-0 charge-dot"></div>
        <div className="w-full h-full absolute left-0 top-0 charge-dot"></div>
      </div>
    </div>
  );
};

export default Loading;
