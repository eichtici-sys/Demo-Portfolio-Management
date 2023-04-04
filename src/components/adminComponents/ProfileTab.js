import { useState, useEffect } from "react";
import useProfile from "@/hooks/useProfile";
import { UilPaperclip } from "@iconscout/react-unicons";
import { toast } from "react-hot-toast";
import Loading from "../Loading";

const GENDER = ["Male", "Female"];

const ProfileTab = ({ tabContent }) => {
  const { editProfile, profile } = useProfile();

  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [numberAd, setNumberAd] = useState("");
  const [city, setCity] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [imageUp, setImageUp] = useState("");
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (profile.length === 0) return;
    if (profile._id) {
      setId(profile._id);
      setName(profile.name);
      setLastname(profile.lastname);
      setBirthday(profile.birthday.split("T")[0]);
      setGender(profile.gender);
      setEmail(profile.email);
      setPhone(profile.phone);
      setAddress(profile.address);
      setNumberAd(profile.numberAd);
      setCity(profile.city);
      setImageURL(profile.imageURL);
    }
  }, [profile.length, profile]);

  const onSelectFile = (e) => {
    let selectFile = e.target.files[0];
    if (selectFile) {
      setImageUp(selectFile);
    }
  };

  useEffect(() => {
    if (!imageUp) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(imageUp);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [imageUp]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      [
        name,
        lastname,
        birthday,
        gender,
        email,
        phone,
        address,
        numberAd,
        city,
      ].includes("")
    ) {
      toast.error("All fields are required");
      return;
    }
    if (imageUp === "") {
      await editProfile({
        id,
        name,
        lastname,
        birthday,
        gender,
        email,
        phone,
        address,
        numberAd,
        city,
      });
    } else {
      await editProfile({
        id,
        name,
        lastname,
        birthday,
        gender,
        email,
        phone,
        address,
        numberAd,
        city,
        imageUp,
      });
      setImageUp("");
    }

    setPreview(undefined);
  };

  return (
    <div className={`${tabContent === 1 ? "grid" : "hidden"} md:px-3 px-1`}>
      <div className={`flex justify-between w-full mb-1`}>
        <h3 className="uppercase text-lg md:text-3xl my-2 md:my-3 w-full px-1">
          Personal Data
        </h3>
      </div>
      <div className="bg-primary1 h-1.5 md:h-2 w-44 md:w-52 mb-5"></div>
      <form
        className=" flex md:flex-row flex-col-reverse w-full gap-5"
        onSubmit={handleSubmit}
      >
        <div className="w-full md:w-2/3">
          <div className="bg-white py-3 px-1 rounded-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label
                  htmlFor="firstname"
                  className=" text-sm md:text-base text-darkText"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="firstname"
                  className="w-full py-2 px-3 text-sm md:text-base border-solid border-[1px] border-[#d1d7e0] outline-none bg-transparent internIp text-slate-500 rounded-md mt-4 valid:bg-gray-100"
                  placeholder="Enter your first name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="lastname"
                  className=" text-sm md:text-base text-darkText"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="lastname"
                  className="w-full py-2 px-3 text-sm md:text-base border-solid border-[1px] border-[#d1d7e0] outline-none bg-transparent internIp text-slate-500 rounded-md mt-4 valid:bg-gray-100"
                  placeholder="Enter your last name"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label
                  htmlFor="brithday"
                  className=" text-sm md:text-base text-darkText"
                >
                  Birthday
                </label>
                <input
                  type="date"
                  id="birthday"
                  className="w-full py-2 px-3 text-sm md:text-base border-solid border-[1px] border-[#d1d7e0] outline-none bg-transparent internIp text-slate-500 rounded-md mt-4 valid:bg-gray-100"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="gender"
                  className=" text-sm md:text-base text-darkText"
                >
                  Gender
                </label>
                <select
                  type="text"
                  id="gender"
                  className="w-full py-2 px-3 text-sm md:text-base border-solid border-[1px] border-[#d1d7e0] outline-none bg-transparent internIp text-slate-500 rounded-md mt-4 valid:bg-gray-100"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value={""}> -- Select --</option>
                  {GENDER.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className=" text-sm md:text-base text-darkText"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="w-full py-2 px-3 text-sm md:text-base border-solid border-[1px] border-[#d1d7e0] outline-none bg-transparent internIp text-slate-500 rounded-md mt-4 read-only:bg-slate-200 valid:bg-gray-100"
                  readOnly
                  value={email}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className=" text-sm md:text-base text-darkText"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  className="w-full py-2 px-3 text-sm md:text-base border-solid border-[1px] border-[#d1d7e0] outline-none bg-transparent internIp text-slate-500 rounded-md mt-4 valid:bg-gray-100"
                  placeholder="Example: 999999999"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <h3 className="mb-3 mt-6">Address</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="mb-4 col-span-3 md:col-span-2">
                <label
                  htmlFor="address"
                  className=" text-sm md:text-base text-darkText"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="w-full py-2 px-3 text-sm md:text-base border-solid border-[1px] border-[#d1d7e0] outline-none bg-transparent internIp text-slate-500 rounded-md mt-4 valid:bg-gray-100"
                  placeholder="Enter your actual address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="mb-4 col-span-3 md:col-span-1">
                <label
                  htmlFor="lastname"
                  className=" text-sm md:text-base text-darkText"
                >
                  Number
                </label>
                <input
                  type="number"
                  id="lastname"
                  className="w-full py-2 px-3 text-sm md:text-base border-solid border-[1px] border-[#d1d7e0] outline-none bg-transparent internIp text-slate-500 rounded-md mt-4 valid:bg-gray-100"
                  value={numberAd}
                  onChange={(e) => setNumberAd(e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label
                  htmlFor="city"
                  className=" text-sm md:text-base text-darkText"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  className="w-full py-2 px-3 text-sm md:text-base border-solid border-[1px] border-[#d1d7e0] outline-none bg-transparent internIp text-slate-500 rounded-md mt-4 valid:bg-gray-100"
                  placeholder="Enter the city where you live"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </div>
            <div className="w-[200px] mx-auto mt-4">
              <input
                type="submit"
                value={"Save All"}
                className="bg-gradient-to-r from-primary1 to-primary2 w-full py-2 px-6 rounded-lg text-white uppercase cursor-pointer hover:to-primary1 transition-colors"
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          <div className="px-3 rounded-xl flex flex-col items-center bg-gradient-to-br from-secondary to-darkText py-6 text-white border-[1px] border-darkText">
            <div className=" w-40 h-40 rounded-full border-4 bg-slate-500 mb-4">
              {imageURL ? (
                <img
                  src={imageURL}
                  width={400}
                  height={400}
                  alt="User photo"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <img
                  src={"/no-image.png"}
                  width={400}
                  height={400}
                  alt="User photo"
                  className="w-full h-full object-cover rounded-full"
                />
              )}
            </div>
            <span className="text-xl capitalize font-semibold my-2 text-primary2">
              username
            </span>
            <div className="flex gap-2 my-3">
              <span>{name}</span>
              <span>{lastname}</span>
            </div>
            <p className="text-sm">{address}</p>
          </div>
          <div className="bg-white p-3 flex flex-col items-center border-2 rounded-xl">
            <h3 className="mb-3">Select profile photo</h3>
            {/* Imagen Preview */}
            {preview && (
              <div className="flex py-2 border-2 max-w-[310px] rounded-md mb-3 relative select-none">
                <img src={preview} alt="image preview profile" />
                <span className=" text-white px-2 py-1 rounded-md absolute top-1/2 left-1/2 translate-x-[-50%] select-none translate-y-[-50%] bg-[rgba(0,0,0,.6)]">
                  Preview Image
                </span>
              </div>
            )}

            <div className="flex px-6 py-2 cursor-pointer border-2 rounded-md">
              <UilPaperclip className="cursor-pointer w-10 h-10" />
              <input
                type="file"
                name="Image"
                accept="image/*"
                onChange={onSelectFile}
                className="opacity-0 max-w-[270px] cursor-pointer absolute"
              />
              <div className="block px-4 cursor-pointer">
                <div className="text-sm cursor-pointer mb-1 font-light">
                  Choose Image
                </div>
                <div className=" text-xs cursor-pointer font-light">
                  JPG, GIF or PNG. Max Size 800k
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileTab;
