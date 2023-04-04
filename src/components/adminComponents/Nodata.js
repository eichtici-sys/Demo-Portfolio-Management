import { UilDocumentInfo } from "@iconscout/react-unicons";

const Nodata = ({ text }) => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 h-[400px] text-center flex flex-col items-center">
      <UilDocumentInfo className=" w-20 h-20 text-gray-400 mb-3" />
      <p className="text-secondary">{text}</p>
    </div>
  );
};

export default Nodata;
