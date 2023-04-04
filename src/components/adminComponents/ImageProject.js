const ImageProject = ({ row }) => {
  return (
    <div className={`flex items-center justify-center p-1`}>
      <div className="p-1 h-[60px]">
        <img
          src={row.imageURL}
          width={100}
          height={100}
          className="rounded-md h-full object-cover"
          alt={`Image of Project - ${row.name}`}
        />
      </div>
    </div>
  );
};

export default ImageProject;
