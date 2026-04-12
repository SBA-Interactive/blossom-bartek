import { jsx } from "react/jsx-runtime";
import { c } from "react/compiler-runtime";
import { motion } from "motion/react";
import { y as cn } from "./router-DBR8M-aC.js";
const BorderBeam = (t0) => {
  const $ = c(28);
  const {
    className,
    size: t1,
    delay: t2,
    duration: t3,
    colorFrom: t4,
    colorTo: t5,
    transition,
    style,
    reverse: t6,
    initialOffset: t7,
    borderWidth: t8
  } = t0;
  const size = t1 === void 0 ? 50 : t1;
  const delay = t2 === void 0 ? 0 : t2;
  const duration = t3 === void 0 ? 6 : t3;
  const colorFrom = t4 === void 0 ? "#ffaa40" : t4;
  const colorTo = t5 === void 0 ? "#9c40ff" : t5;
  const reverse = t6 === void 0 ? false : t6;
  const initialOffset = t7 === void 0 ? 0 : t7;
  const borderWidth = t8 === void 0 ? 1 : t8;
  const t9 = `${borderWidth}px`;
  let t10;
  if ($[0] !== t9) {
    t10 = {
      "--border-beam-width": t9
    };
    $[0] = t9;
    $[1] = t10;
  } else {
    t10 = $[1];
  }
  const t11 = t10;
  let t12;
  if ($[2] !== className) {
    t12 = cn("absolute aspect-square", "bg-linear-to-l from-(--color-from) via-(--color-to) to-transparent", className);
    $[2] = className;
    $[3] = t12;
  } else {
    t12 = $[3];
  }
  const t13 = `rect(0 auto auto 0 round ${size}px)`;
  let t14;
  if ($[4] !== colorFrom || $[5] !== colorTo || $[6] !== size || $[7] !== style || $[8] !== t13) {
    t14 = {
      width: size,
      offsetPath: t13,
      "--color-from": colorFrom,
      "--color-to": colorTo,
      ...style
    };
    $[4] = colorFrom;
    $[5] = colorTo;
    $[6] = size;
    $[7] = style;
    $[8] = t13;
    $[9] = t14;
  } else {
    t14 = $[9];
  }
  const t15 = t14;
  const t16 = `${initialOffset}%`;
  let t17;
  if ($[10] !== t16) {
    t17 = {
      offsetDistance: t16
    };
    $[10] = t16;
    $[11] = t17;
  } else {
    t17 = $[11];
  }
  let t18;
  if ($[12] !== initialOffset || $[13] !== reverse) {
    t18 = {
      offsetDistance: reverse ? [`${100 - initialOffset}%`, `${-initialOffset}%`] : [`${initialOffset}%`, `${100 + initialOffset}%`]
    };
    $[12] = initialOffset;
    $[13] = reverse;
    $[14] = t18;
  } else {
    t18 = $[14];
  }
  const t19 = -delay;
  let t20;
  if ($[15] !== duration || $[16] !== t19 || $[17] !== transition) {
    t20 = {
      repeat: Infinity,
      ease: "linear",
      duration,
      delay: t19,
      ...transition
    };
    $[15] = duration;
    $[16] = t19;
    $[17] = transition;
    $[18] = t20;
  } else {
    t20 = $[18];
  }
  let t21;
  if ($[19] !== t12 || $[20] !== t15 || $[21] !== t17 || $[22] !== t18 || $[23] !== t20) {
    t21 = /* @__PURE__ */ jsx(motion.div, { className: t12, style: t15, initial: t17, animate: t18, transition: t20 });
    $[19] = t12;
    $[20] = t15;
    $[21] = t17;
    $[22] = t18;
    $[23] = t20;
    $[24] = t21;
  } else {
    t21 = $[24];
  }
  let t22;
  if ($[25] !== t11 || $[26] !== t21) {
    t22 = /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 rounded-[inherit] border-(length:--border-beam-width) border-transparent mask-[linear-gradient(transparent,transparent),linear-gradient(#000,#000)] mask-intersect [mask-clip:padding-box,border-box]", style: t11, children: t21 });
    $[25] = t11;
    $[26] = t21;
    $[27] = t22;
  } else {
    t22 = $[27];
  }
  return t22;
};
export {
  BorderBeam as B
};
