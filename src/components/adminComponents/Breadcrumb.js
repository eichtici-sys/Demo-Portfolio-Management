import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import { UilEstate } from "@iconscout/react-unicons";

const Breadcrumb = ({ list }) => {
  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb">
      <Link underline="hover" key="1" color="inherit" href="/admin">
        <UilEstate className=" sm:w-6 w-4 sm:h-6 h-4" />
      </Link>
      {}
      {list.map((item, index, arr) =>
        index + 1 === arr.length ? (
          <Typography key="3" color="text.primary font-poppins">
            <span className="font-bold sm:text-base text-xs">
              {item.display}
            </span>
          </Typography>
        ) : (
          <Link
            key="2"
            color="inherit"
            href={item.url}
            className="sm:text-base text-xs hover:underline font-poppins"
          >
            {item.display}
          </Link>
        )
      )}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
