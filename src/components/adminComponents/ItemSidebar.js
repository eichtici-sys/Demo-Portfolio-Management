import { motion } from "framer-motion";
import Link from "next/link";

function ItemSidebar({ icon, name, href, pathname, mobile = false }) {
  const keyHref = href.split("/")[2];

  const subHeading = {
    true: {
      opacity: 1,
    },
    false: {
      opacity: 0,
      display: "none",
    },
  };
  const itemContainer = {
    true: {
      paddingLeft: "10px",
      paddingRight: "10px",
    },
    false: {
      paddingLeft: "0px",
      paddingRight: "0px",
      justifyContent: "center",
    },
  };
  const iconVariant = {
    true: {
      marginRight: "8px",
    },
    false: {
      marginRight: "0px",
    },
  };
  if (mobile) {
    return (
      <Link
        className={`flex py-1.5  px-3 items-center justify-start rounded-md ${
          pathname === "/admin" && href === "/admin"
            ? "bg-gradient-to-r from-primary1 to-primary2 text-white shadow-boxSidebar backdrop-blur-sm"
            : pathname.split("/").includes(keyHref)
            ? "bg-gradient-to-r from-primary1 to-primary2 text-white shadow-boxSidebar backdrop-blur-sm"
            : ""
        }`}
        href={href}
      >
        <div className={"flex items-center"}>
          <div className=" mr-2">{icon}</div>
          <span className="text-sm">{name}</span>
        </div>
      </Link>
    );
  } else {
    return (
      <motion.div
        whileHover={{
          background: "linear-gradient(to right, #ff6801,#ffbc00)",
          color: "white",
          boxShadow: "0 8px 32px 0 rgba(31,38 ,135, 0.37)",
          backdropFilter: "blur(5.5px)",
          WebkitBackdropFilter: "blur(5.5px)",
          border: "1px solid rgba(255,255,255,0.18)",
          cursor: "pointer",
        }}
        transition={{
          type: "none",
          duration: 0.1,
        }}
        variants={itemContainer}
        className={`flex py-1.5 items-center justify-start rounded-md ${
          pathname === "/admin" && href === "/admin"
            ? "bg-gradient-to-r from-primary1 to-primary2 text-white shadow-boxSidebar backdrop-blur-sm"
            : pathname.split("/").includes(keyHref)
            ? "bg-gradient-to-r from-primary1 to-primary2 text-white shadow-boxSidebar backdrop-blur-sm"
            : ""
        }`}
      >
        <Link href={href} className={"flex items-center"}>
          <motion.div variants={iconVariant}>{icon}</motion.div>
          <motion.span variants={subHeading}>{name}</motion.span>
        </Link>
      </motion.div>
    );
  }
}

export default ItemSidebar;
