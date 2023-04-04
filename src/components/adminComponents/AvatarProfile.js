import { CldImage } from "next-cloudinary";

const AvatarProfile = ({ row, nav = false, creator = false }) => {
  return (
    <div className={`flex items-center justify-center ${nav ? "p-0" : "p-2"}`}>
      <div
        className={`${nav ? "p-0 h-[40px] w-[40px]" : "p-1 h-[50px] w-[50px]"}`}
      >
        <img
          src={
            nav
              ? row?.imageURL
              : creator
              ? row?.creator?.userProfile?.imageURL
              : row?.user?.userProfile?.imageURL
          }
          width={100}
          height={100}
          className="rounded-full h-full object-cover"
          alt={`User Profile Image ${
            nav
              ? row?.name
              : creator
              ? row?.creator?.userProfile?.name
              : row?.user?.userProfile?.name
          }`}
        />
      </div>
    </div>
  );
};

export default AvatarProfile;
