import { jsx } from "react/jsx-runtime";
import { c } from "react/compiler-runtime";
import React__default, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { y as cn } from "./router-p6p1R6bc.js";
function AnimatedListItem(t0) {
  const $ = c(3);
  const {
    children
  } = t0;
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = {
      initial: {
        scale: 0,
        opacity: 0
      },
      animate: {
        scale: 1,
        opacity: 1,
        originY: 0
      },
      exit: {
        scale: 0,
        opacity: 0
      },
      transition: {
        type: "spring",
        stiffness: 350,
        damping: 40
      }
    };
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const animations = t1;
  let t2;
  if ($[1] !== children) {
    t2 = /* @__PURE__ */ jsx(motion.div, { ...animations, layout: true, className: "mx-auto w-full", children });
    $[1] = children;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  return t2;
}
const AnimatedList = React__default.memo((t0) => {
  const $ = c(25);
  let children;
  let className;
  let props;
  let t1;
  if ($[0] !== t0) {
    ({
      children,
      className,
      delay: t1,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = props;
    $[4] = t1;
  } else {
    children = $[1];
    className = $[2];
    props = $[3];
    t1 = $[4];
  }
  const delay = t1 === void 0 ? 1e3 : t1;
  const [index, setIndex] = useState(0);
  let t2;
  if ($[5] !== children) {
    t2 = React__default.Children.toArray(children);
    $[5] = children;
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  const childrenArray = t2;
  let t3;
  let t4;
  if ($[7] !== childrenArray.length || $[8] !== delay || $[9] !== index) {
    t3 = () => {
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
    };
    t4 = [index, delay, childrenArray.length];
    $[7] = childrenArray.length;
    $[8] = delay;
    $[9] = index;
    $[10] = t3;
    $[11] = t4;
  } else {
    t3 = $[10];
    t4 = $[11];
  }
  useEffect(t3, t4);
  let t5;
  if ($[12] !== childrenArray || $[13] !== index) {
    t5 = childrenArray.slice(0, index + 1).reverse();
    $[12] = childrenArray;
    $[13] = index;
    $[14] = t5;
  } else {
    t5 = $[14];
  }
  const result = t5;
  const itemsToShow = result;
  let t6;
  if ($[15] !== className) {
    t6 = cn("flex flex-col items-center gap-4", className);
    $[15] = className;
    $[16] = t6;
  } else {
    t6 = $[16];
  }
  let t7;
  if ($[17] !== itemsToShow) {
    t7 = itemsToShow.map(_temp);
    $[17] = itemsToShow;
    $[18] = t7;
  } else {
    t7 = $[18];
  }
  let t8;
  if ($[19] !== t7) {
    t8 = /* @__PURE__ */ jsx(AnimatePresence, { children: t7 });
    $[19] = t7;
    $[20] = t8;
  } else {
    t8 = $[20];
  }
  let t9;
  if ($[21] !== props || $[22] !== t6 || $[23] !== t8) {
    t9 = /* @__PURE__ */ jsx("div", { className: t6, ...props, children: t8 });
    $[21] = props;
    $[22] = t6;
    $[23] = t8;
    $[24] = t9;
  } else {
    t9 = $[24];
  }
  return t9;
});
AnimatedList.displayName = "AnimatedList";
function _temp(item) {
  return /* @__PURE__ */ jsx(AnimatedListItem, { children: item }, item.key);
}
export {
  AnimatedList as A
};
