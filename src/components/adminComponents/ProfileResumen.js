import Image from "next/image";
import useProfile from "@/hooks/useProfile";
import { formatDate } from "@/helpers/formatDate";
import { useRouter } from "next/router";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import Loading from "../Loading";

const ProfileResumen = ({ resProfile }) => {
  const { socials } = useProfile();
  const router = useRouter();
  const {
    name,
    lastname,
    email,
    phone,
    birthday,
    address,
    numberAd,
    public_id,
    city,
  } = resProfile;
  const handleClickViewProfile = () => {
    router.push("/admin/information");
  };
  return (
    <>
      {resProfile.public_id ? (
        <div className=" py-2 md:py-4 px-2 md:px-5 md:shadow-boxSidebar mt-3 rounded-lg mb-6">
          <span className="text-sm block md:text-start text-center">
            Eichtici Developer
          </span>
          <div className="flex md:justify-start justify-center gap-2 md:gap-4 md:my-4 my-2">
            <h2>Hey {name}</h2>
            <Image
              src={"/hand.svg"}
              width={100}
              height={100}
              alt={"hand image"}
              className={` md:w-10 w-8 md:h-10 h-8`}
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-0 flex-start justify-between items-center w-full">
            <div className=" md:w-48 w-40 md:h-48 h-40">
              {resProfile.public_id && (
                <CldImage
                  src={public_id}
                  alt={"Image profile"}
                  className="rounded-full w-full h-full object-cover"
                  width={500}
                  height={500}
                />
              )}
            </div>
            <button
              className="w-full max-w-[150px] px-3 py-2 text-center rounded-xl lg:mr-7"
              onClick={handleClickViewProfile}
            >
              Edit Profile
            </button>
          </div>
          <div className="my-4">
            <div className="py-3 border-b-2">
              <p className="flex justify-between lg:text-base text-sm">
                <span className="font-bold pr-3">Fullname:</span>
                {name} {lastname}
              </p>
            </div>
            <div className="py-3 border-b-2">
              <p className="flex justify-between lg:text-base text-sm">
                <span className="font-bold pr-3">Email:</span>
                {email}
              </p>
            </div>
            <div className="py-3 border-b-2">
              <p className="flex justify-between lg:text-base text-sm">
                <span className="font-bold pr-3">Phone:</span>
                {phone}
              </p>
            </div>
            <div className="py-3 border-b-2">
              <p className="flex justify-between lg:text-base text-sm">
                <span className="font-bold pr-3">Birthday:</span>
                {formatDate(birthday)}
              </p>
            </div>
            <div className="py-3 border-b-2">
              <p className="flex justify-between lg:text-base text-sm">
                <span className="font-bold pr-3">Address:</span>
                {address} {numberAd} {city}
              </p>
            </div>
          </div>
          <div className="w-full py-3 lg:text-base text-sm">
            Your social networks:
          </div>
          <div>
            {socials.length ? (
              socials.map((social) => (
                <div
                  className="flex justify-between my-2 font-bold border-t-2 pt-3 lg:text-base text-sm"
                  key={social._id}
                >
                  {social.name}
                  <div className="px-3 py-1 text-center text-white bg-primary1 rounded-lg cursor-pointer">
                    <Link
                      href={social.link}
                      className="font-normal uppercase lg:text-base text-sm"
                    >
                      Link
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-2 px-4">
                <p className="text-slate-400 text-sm">
                  You haven&apos;t registered any Experience yet
                </p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 my-7 py-3">
          <Loading />
          <p>
            <span className="text-sm mr-1"> ...Loading Profile</span>
          </p>
        </div>
      )}
    </>
  );
};

export default ProfileResumen;
