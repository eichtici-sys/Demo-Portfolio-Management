import Image from "next/image";

const SpinnerLoading = () => {
  return (
    <>
      <div className=" bg-gradient-to-tr from-primary1 to-primary2 w-screen h-screen mt-0 flex flex-col items-center justify-center">
        <div className="w-full flex justify-center">
          <div className=" w-20 h-20 rounded-full bg-white flex justify-center items-center animate-bounce shadow-boxMenu">
            <Image
              src={"/logotipo-eichtici.svg"}
              width={160}
              height={160}
              alt={"Logotipo Eichtici"}
              className={"w-[80%]"}
              priority={true}
            />
          </div>
        </div>

        <div className="mt-[30px] mb-0 mx-auto text-center w-full">
          <div className="w-[18px] h-[18px] bg-primary1 rounded-full inline-block animate-spinLoad animation-delay-32"></div>
          <div className="w-[18px] h-[18px] bg-gray-600 rounded-full inline-block animate-spinLoad animation-delay-16"></div>
          <div className="w-[18px] h-[18px] bg-primary2 rounded-full inline-block animate-spinLoad"></div>
        </div>
      </div>
    </>
  );
};

export default SpinnerLoading;
