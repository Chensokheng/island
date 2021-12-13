import { useLayoutEffect, useState } from "react";

export default function useWindowPosition(id) {
  const [animation, setAnimation] = useState(false);

  useLayoutEffect(() => {
    function updatePosition() {
      const offetSetHeight = window.document.getElementById(id).offsetHeight;
      // if (window.pageYOffset > offetSetHeight * 0.7) {
      setAnimation(true);
      // }
    }
    updatePosition();
    //   // window.addEventListener("scroll", updatePosition);
    //   return () => window.removeEventListener("scroll", updatePosition);
  }, [id]);
  return animation;
}
