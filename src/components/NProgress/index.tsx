import nprogress from "nprogress";
import React, { useEffect } from "react";

export default function NProgress() {
  useEffect(() => {
    nprogress.start();
    return () => {
      nprogress.done();
    };
  }, []);

  return <React.Fragment />;
}
