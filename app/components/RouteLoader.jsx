"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "../loading";

export default function RouteLoader() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);

    const timer = setTimeout(() => {
      setShow(false);
    }, 700); // animation feel

    return () => clearTimeout(timer);
  }, [pathname]);

  return show ? <Loading /> : null;
}
