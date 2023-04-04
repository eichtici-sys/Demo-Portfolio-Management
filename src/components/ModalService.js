import { UilTimes, UilCheckCircle } from "@iconscout/react-unicons";

const ModalService = ({
  data,
  name,
  description,
  showModal,
  ind,
  handleClickModal,
}) => {
  return (
    <div
      className={` fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,.5)] z-[999] flex justify-center items-center py-0 px-4 ${
        showModal === ind ? "opacity-100 visible" : " opacity-0 invisible"
      }  duration-300`}
    >
      <div className="max-w-[500px] w-full relative bg-white pt-16 pr-9 pb-9 rounded-3xl pl-9">
        <div>
          <UilTimes
            className="absolute top-6 right-6 w-[18px] h-[18px] cursor-pointer text-gray-400 hover:text-darkText"
            onClick={handleClickModal}
          />
        </div>
        <h3 className="text-center text-lg mb-2.5">{name}</h3>
        <p className="text-center font-light px-10 mb-4">{description}</p>
        <ul className="grid gap-y-3">
          {data.map((item) => (
            <li className="flex items-center gap-x-3 font-light" key={item._id}>
              <UilCheckCircle className="text-primary1 w-[21px] h-[21px]" />
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ModalService;
