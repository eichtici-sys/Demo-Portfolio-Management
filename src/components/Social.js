import Link from "next/link";
import {
  UilFacebookF,
  UilLinkedinAlt,
  UilGithubAlt,
  UilWhatsapp,
  UilInstagram,
  UilFacebookMessengerAlt,
  UilTwitter,
  UilSnapchatSquare,
  UilSkypeAlt,
  UilTelegramAlt,
  UilGoogleHangouts,
  UilYoutube,
  UilQuestionCircle,
} from "@iconscout/react-unicons";

const Social = ({ socialN, alter }) => {
  const icon = socialN.icon.trim().toLowerCase();
  const styles = `duration-500 text-[rgba(64 64 64 / 1)] dark:text-white dark:hover:text-primary1 ${
    alter ? "hover:text-primary2 " : "hover:text-primary1 "
  } hover:scale-125`;

  return (
    <>
      {(() => {
        switch (icon) {
          case "facebook":
            return (
              <Link href={socialN.link}>
                <UilFacebookF className={styles} />
              </Link>
            );
          case "instagram":
            return (
              <Link href={socialN.link}>
                <UilInstagram className={styles} />
              </Link>
            );
          case "linkedin":
            return (
              <Link href={socialN.link}>
                <UilLinkedinAlt className={styles} />
              </Link>
            );

          case "github":
            return (
              <Link href={socialN.link}>
                <UilGithubAlt className={styles} />
              </Link>
            );
          case "whatsapp":
            return (
              <Link href={socialN.link}>
                <UilWhatsapp className={styles} />
              </Link>
            );

          case "messenger":
            return (
              <Link href={socialN.link}>
                <UilFacebookMessengerAlt className={styles} />
              </Link>
            );
          case "facebook messenger":
            return (
              <Link href={socialN.link}>
                <UilFacebookMessengerAlt className={styles} />
              </Link>
            );
          case "twitter":
            return (
              <Link href={socialN.link}>
                <UilTwitter className={styles} />
              </Link>
            );
          case "snapchat":
            return (
              <Link href={socialN.link}>
                <UilSnapchatSquare className={styles} />
              </Link>
            );
          case "skype":
            return (
              <Link href={socialN.link}>
                <UilSkypeAlt className={styles} />
              </Link>
            );
          case "telegram":
            return (
              <Link href={socialN.link}>
                <UilTelegramAlt className={styles} />
              </Link>
            );
          case "hangouts":
            return (
              <Link href={socialN.link}>
                <UilGoogleHangouts className={styles} />
              </Link>
            );
          case "youtube":
            return (
              <Link href={socialN.link}>
                <UilYoutube className={styles} />
              </Link>
            );
          default:
            return (
              <Link href={socialN.link}>
                <UilQuestionCircle className={styles} />
              </Link>
            );
        }
      })()}
    </>
  );
};

export default Social;
