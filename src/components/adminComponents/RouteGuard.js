import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useAuth from "@/hooks/useAuth";
import SpinnerLoading from "./SpinnerLoading";

export { RouteGuard };

function RouteGuard({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { auth, setAuthorized, authorized } = useAuth();

  useEffect(() => {
    authCheck(router.asPath);
    const hideContent = () => {
      setAuthorized(false);
      setLoading(true);
    };
    router.events.on("routeChangeStart", hideContent);
    router.events.on("routeChangeComplete", authCheck);

    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", authCheck);
    };
  }, [router, router.events, setAuthorized]);

  function authCheck(url) {
    setLoading(true);
    const publicPaths = ["/auth"];
    const path = url.split("?")[0];
    if (!auth._id && !publicPaths.includes(path)) {
      setAuthorized(false);
      router.push({
        pathname: "/auth",
        query: { returnUrl: router.asPath },
      });
    } else {
      setAuthorized(true);
    }
    setLoading(false);
  }
  return loading ? <SpinnerLoading /> : authorized && children;
}
