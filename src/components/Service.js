import { 
  UilWebGrid,
  UilDesktopAlt,
  UilServerNetworkAlt,
  UilServicemark
} from "@iconscout/react-unicons";

const Service = ({ dataArray }) => {
  const nameSplit = dataArray.name.split(" ");
  
  return (
    <div className="relative border-[1px] border-solid border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)] bg-white dark:bg-slate-600 pt-16 pr-0 pb-8 pl-9 rounded-lg">
      <div>
        {(() => {
          switch (dataArray.icon) {
            case "web":
              return (
                <UilWebGrid className="block w-[30px] h-[30px] mb-4 text-[rgba(64 64 64 /1)] dark:text-white" />
              );
            case "frontend":
              return (
                <UilDesktopAlt className="block w-[30px] h-[30px] mb-4 text-[rgba(64 64 64 /1)] dark:text-white" />
              );
            case "backend":
              return (
                <UilServerNetworkAlt className="block w-[30px] h-[30px] mb-4 text-[rgba(64 64 64 /1)] dark:text-white" />
              );
            default:
              return (
                <UilServicemark className="block w-[30px] h-[30px] mb-4 text-[rgba(64 64 64 /1)] dark:text-white" />
              );
          }
        })()}
        <h3 className="mb-4 text-lg text-[rgba(64 64 64 /1)] dark:text-white">
          {nameSplit[0]}
          <br /> {nameSplit[1]}
        </h3>
      </div>
    </div>
  );
};

export default Service;
