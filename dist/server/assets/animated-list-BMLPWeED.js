import { jsx } from "react/jsx-runtime";
import React__default, { useState, useMemo, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { x as cn } from "./router-CtctPOdV.js";
function AnimatedListItem({ children }) {
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 }
  };
  return /* @__PURE__ */ jsx(motion.div, { ...animations, layout: true, className: "mx-auto w-full", children });
}
const AnimatedList = React__default.memo(
  ({ children, className, delay = 1e3, ...props }) => {
    const [index, setIndex] = useState(0);
    const childrenArray = useMemo(() => React__default.Children.toArray(children), [children]);
    useEffect(() => {
      let timeout = null;
      if (index < childrenArray.length - 1) {
        timeout = setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length);
        }, delay);
      }
      return () => {
        if (timeout !== null) {
          clearTimeout(timeout);
        }
      };
    }, [index, delay, childrenArray.length]);
    const itemsToShow = useMemo(() => {
      const result = childrenArray.slice(0, index + 1).reverse();
      return result;
    }, [index, childrenArray]);
    return /* @__PURE__ */ jsx("div", { className: cn(`flex flex-col items-center gap-4`, className), ...props, children: /* @__PURE__ */ jsx(AnimatePresence, { children: itemsToShow.map((item) => /* @__PURE__ */ jsx(AnimatedListItem, { children: item }, item.key)) }) });
  }
);
AnimatedList.displayName = "AnimatedList";
export {
  AnimatedList as A
};
