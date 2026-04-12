import { jsx, jsxs } from "react/jsx-runtime";
import { c } from "react/compiler-runtime";
import { useState } from "react";
import { f as Button, C as Card, o as CardContent, y as cn, z as products } from "./router-DBR8M-aC.js";
import { T as Textarea } from "./textarea-C1jWC8B9.js";
import "@tanstack/react-router";
import "lucide-react";
import "class-variance-authority";
import "radix-ui";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-tooltip";
import "zustand";
import "react-dom";
import "zustand/middleware";
import "@hugeicons/react";
import "@hugeicons/core-free-icons";
import "motion/react";
import "next-themes";
import "sonner";
const bottleOptions = [{
  id: "citrus-bloom",
  name: "Citrus Bloom",
  image: "/perfume_citrus_bloom_medium.png"
}, {
  id: "berry-mist",
  name: "Berry Mist",
  image: "/perfume_berry_mist_big.png"
}, {
  id: "garden-peel",
  name: "Garden Peel",
  image: "/perfume_garden_peel.png"
}, {
  id: "tropical-sun",
  name: "Tropical Sun",
  image: "/perfume_tropical_sun_medium.png"
}, {
  id: "forest-dew",
  name: "Forest Dew",
  image: "/perfume_forest_dew_big.png"
}, {
  id: "rose-petal",
  name: "Rose Petal",
  image: "/perfume_rose_petal_small.png"
}];
const sizeOptions = [{
  id: "30ml",
  name: "30ml"
}, {
  id: "50ml",
  name: "50ml"
}, {
  id: "100ml",
  name: "100ml"
}];
const scentOptions = {
  top: [...new Set(products.map((p) => p.notes.top))],
  heart: [...new Set(products.map((p) => p.notes.heart))],
  base: [...new Set(products.map((p) => p.notes.base))]
};
const packagingOptions = [{
  id: "standard",
  name: "Standard Box",
  image: "/images/packaging_standard.png"
}, {
  id: "gift",
  name: "Gift Wrapped",
  image: "/images/packaging_gift.png"
}, {
  id: "birthday",
  name: "Birthday Box",
  image: "/images/packaging_birthday.png"
}, {
  id: "luxury",
  name: "Luxury Velvet Pouch",
  image: "/images/packaging_luxury.png"
}];
function ConfiguratorPage() {
  const $ = c(88);
  const [selectedBottle, setSelectedBottle] = useState(bottleOptions[0]);
  const [selectedSize, setSelectedSize] = useState(sizeOptions[1]);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = {
      top: scentOptions.top[0],
      heart: scentOptions.heart[0],
      base: scentOptions.base[0]
    };
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  const [selectedScents, setSelectedScents] = useState(t0);
  const [selectedPackaging, setSelectedPackaging] = useState(packagingOptions[0]);
  const [customMessage, setCustomMessage] = useState("");
  const OptionGroup = _temp;
  const OptionButton = _temp2;
  const t1 = `${selectedPackaging.id}-bg`;
  let t2;
  if ($[1] !== selectedPackaging.image || $[2] !== selectedPackaging.name || $[3] !== t1) {
    t2 = /* @__PURE__ */ jsx("img", { src: selectedPackaging.image, alt: selectedPackaging.name, className: "absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-300" }, t1);
    $[1] = selectedPackaging.image;
    $[2] = selectedPackaging.name;
    $[3] = t1;
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  let t3;
  if ($[5] !== selectedBottle.id || $[6] !== selectedBottle.image || $[7] !== selectedBottle.name) {
    t3 = /* @__PURE__ */ jsx("img", { src: selectedBottle.image, alt: selectedBottle.name, className: "relative z-10 h-3/4 max-h-[400px] transition-transform duration-300 transform group-hover:scale-105" }, selectedBottle.id);
    $[5] = selectedBottle.id;
    $[6] = selectedBottle.image;
    $[7] = selectedBottle.name;
    $[8] = t3;
  } else {
    t3 = $[8];
  }
  let t4;
  if ($[9] !== t2 || $[10] !== t3) {
    t4 = /* @__PURE__ */ jsx(Card, { className: "overflow-hidden shadow-lg", children: /* @__PURE__ */ jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxs("div", { className: "aspect-[1/1] bg-muted flex items-center justify-center p-8 relative", children: [
      t2,
      t3
    ] }) }) });
    $[9] = t2;
    $[10] = t3;
    $[11] = t4;
  } else {
    t4 = $[11];
  }
  let t5;
  if ($[12] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "Your Configuration" });
    $[12] = t5;
  } else {
    t5 = $[12];
  }
  let t6;
  if ($[13] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ jsx("span", { children: "Bottle:" });
    $[13] = t6;
  } else {
    t6 = $[13];
  }
  let t7;
  if ($[14] !== selectedBottle.name) {
    t7 = /* @__PURE__ */ jsxs("li", { className: "flex justify-between", children: [
      t6,
      " ",
      /* @__PURE__ */ jsx("span", { className: "font-medium text-foreground", children: selectedBottle.name })
    ] });
    $[14] = selectedBottle.name;
    $[15] = t7;
  } else {
    t7 = $[15];
  }
  let t8;
  if ($[16] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t8 = /* @__PURE__ */ jsx("span", { children: "Size:" });
    $[16] = t8;
  } else {
    t8 = $[16];
  }
  let t9;
  if ($[17] !== selectedSize.name) {
    t9 = /* @__PURE__ */ jsxs("li", { className: "flex justify-between", children: [
      t8,
      " ",
      /* @__PURE__ */ jsx("span", { className: "font-medium text-foreground", children: selectedSize.name })
    ] });
    $[17] = selectedSize.name;
    $[18] = t9;
  } else {
    t9 = $[18];
  }
  let t10;
  if ($[19] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t10 = /* @__PURE__ */ jsx("span", { children: "Scent:" });
    $[19] = t10;
  } else {
    t10 = $[19];
  }
  let t11;
  if ($[20] !== selectedScents.base || $[21] !== selectedScents.heart || $[22] !== selectedScents.top) {
    t11 = /* @__PURE__ */ jsxs("li", { className: "flex justify-between", children: [
      t10,
      " ",
      /* @__PURE__ */ jsxs("span", { className: "font-medium text-foreground truncate", children: [
        selectedScents.top,
        ", ",
        selectedScents.heart,
        ", ",
        selectedScents.base
      ] })
    ] });
    $[20] = selectedScents.base;
    $[21] = selectedScents.heart;
    $[22] = selectedScents.top;
    $[23] = t11;
  } else {
    t11 = $[23];
  }
  let t12;
  if ($[24] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t12 = /* @__PURE__ */ jsx("span", { children: "Packaging:" });
    $[24] = t12;
  } else {
    t12 = $[24];
  }
  let t13;
  if ($[25] !== selectedPackaging.name) {
    t13 = /* @__PURE__ */ jsxs("li", { className: "flex justify-between", children: [
      t12,
      " ",
      /* @__PURE__ */ jsx("span", { className: "font-medium text-foreground", children: selectedPackaging.name })
    ] });
    $[25] = selectedPackaging.name;
    $[26] = t13;
  } else {
    t13 = $[26];
  }
  let t14;
  if ($[27] !== customMessage) {
    t14 = customMessage && /* @__PURE__ */ jsxs("li", { className: "flex justify-between items-start", children: [
      /* @__PURE__ */ jsx("span", { children: "Message:" }),
      /* @__PURE__ */ jsxs("span", { className: "font-medium text-foreground text-right pl-4", children: [
        '"',
        customMessage,
        '"'
      ] })
    ] });
    $[27] = customMessage;
    $[28] = t14;
  } else {
    t14 = $[28];
  }
  let t15;
  if ($[29] !== t11 || $[30] !== t13 || $[31] !== t14 || $[32] !== t7 || $[33] !== t9) {
    t15 = /* @__PURE__ */ jsxs("ul", { className: "text-muted-foreground space-y-2", children: [
      t7,
      t9,
      t11,
      t13,
      t14
    ] });
    $[29] = t11;
    $[30] = t13;
    $[31] = t14;
    $[32] = t7;
    $[33] = t9;
    $[34] = t15;
  } else {
    t15 = $[34];
  }
  let t16;
  if ($[35] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t16 = /* @__PURE__ */ jsx("p", { className: "text-4xl font-bold mt-6 text-right", children: "€129.99" });
    $[35] = t16;
  } else {
    t16 = $[35];
  }
  let t17;
  if ($[36] !== t15) {
    t17 = /* @__PURE__ */ jsxs("div", { className: "mt-8 text-left bg-background/50 backdrop-blur-sm p-6 rounded-lg border", children: [
      t5,
      t15,
      t16
    ] });
    $[36] = t15;
    $[37] = t17;
  } else {
    t17 = $[37];
  }
  let t18;
  if ($[38] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t18 = /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(Button, { size: "xl", className: "w-full p-8 text-2xl font-bold", children: "Add to Cart" }) });
    $[38] = t18;
  } else {
    t18 = $[38];
  }
  let t19;
  if ($[39] !== t17 || $[40] !== t4) {
    t19 = /* @__PURE__ */ jsxs("div", { className: "sticky top-24 self-start", children: [
      t4,
      t17,
      t18
    ] });
    $[39] = t17;
    $[40] = t4;
    $[41] = t19;
  } else {
    t19 = $[41];
  }
  let t20;
  if ($[42] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t20 = /* @__PURE__ */ jsx("h1", { className: "text-4xl sm:text-5xl font-heading font-bold text-foreground mb-8", children: "Create Your Scent" });
    $[42] = t20;
  } else {
    t20 = $[42];
  }
  let t21;
  if ($[43] !== selectedBottle.id) {
    t21 = bottleOptions.map((bottle) => /* @__PURE__ */ jsxs(OptionButton, { selected: selectedBottle.id === bottle.id, onClick: () => setSelectedBottle(bottle), children: [
      /* @__PURE__ */ jsx("img", { src: bottle.image, alt: bottle.name, className: "h-24 w-auto" }),
      /* @__PURE__ */ jsx("span", { children: bottle.name })
    ] }, bottle.id));
    $[43] = selectedBottle.id;
    $[44] = t21;
  } else {
    t21 = $[44];
  }
  let t22;
  if ($[45] !== t21) {
    t22 = /* @__PURE__ */ jsx(OptionGroup, { title: "1. Choose Your Bottle", children: t21 });
    $[45] = t21;
    $[46] = t22;
  } else {
    t22 = $[46];
  }
  let t23;
  if ($[47] !== selectedSize.id) {
    t23 = sizeOptions.map((size) => /* @__PURE__ */ jsx(OptionButton, { selected: selectedSize.id === size.id, onClick: () => setSelectedSize(size), children: /* @__PURE__ */ jsx("span", { className: "text-2xl font-semibold", children: size.name }) }, size.id));
    $[47] = selectedSize.id;
    $[48] = t23;
  } else {
    t23 = $[48];
  }
  let t24;
  if ($[49] !== t23) {
    t24 = /* @__PURE__ */ jsx(OptionGroup, { title: "2. Select Size", children: t23 });
    $[49] = t23;
    $[50] = t24;
  } else {
    t24 = $[50];
  }
  let t25;
  if ($[51] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t25 = /* @__PURE__ */ jsx("h3", { className: "text-2xl font-heading font-semibold mb-4", children: "3. Compose Your Scent" });
    $[51] = t25;
  } else {
    t25 = $[51];
  }
  let t26;
  if ($[52] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t26 = /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold mb-3", children: "Top Note" });
    $[52] = t26;
  } else {
    t26 = $[52];
  }
  let t27;
  if ($[53] !== selectedScents.top) {
    t27 = scentOptions.top.map((note) => /* @__PURE__ */ jsx(Button, { className: "flex-1 text-base p-4 h-auto", variant: selectedScents.top === note ? "default" : "outline", onClick: () => setSelectedScents((s) => ({
      ...s,
      top: note
    })), children: note }, note));
    $[53] = selectedScents.top;
    $[54] = t27;
  } else {
    t27 = $[54];
  }
  let t28;
  if ($[55] !== t27) {
    t28 = /* @__PURE__ */ jsxs("div", { children: [
      t26,
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2", children: t27 })
    ] });
    $[55] = t27;
    $[56] = t28;
  } else {
    t28 = $[56];
  }
  let t29;
  if ($[57] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t29 = /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold mb-3", children: "Heart Note" });
    $[57] = t29;
  } else {
    t29 = $[57];
  }
  let t30;
  if ($[58] !== selectedScents.heart) {
    t30 = scentOptions.heart.map((note_0) => /* @__PURE__ */ jsx(Button, { className: "flex-1 text-base p-4 h-auto", variant: selectedScents.heart === note_0 ? "default" : "outline", onClick: () => setSelectedScents((s_0) => ({
      ...s_0,
      heart: note_0
    })), children: note_0 }, note_0));
    $[58] = selectedScents.heart;
    $[59] = t30;
  } else {
    t30 = $[59];
  }
  let t31;
  if ($[60] !== t30) {
    t31 = /* @__PURE__ */ jsxs("div", { children: [
      t29,
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2", children: t30 })
    ] });
    $[60] = t30;
    $[61] = t31;
  } else {
    t31 = $[61];
  }
  let t32;
  if ($[62] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t32 = /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold mb-3", children: "Base Note" });
    $[62] = t32;
  } else {
    t32 = $[62];
  }
  let t33;
  if ($[63] !== selectedScents.base) {
    t33 = scentOptions.base.map((note_1) => /* @__PURE__ */ jsx(Button, { className: "flex-1 text-base p-4 h-auto", variant: selectedScents.base === note_1 ? "default" : "outline", onClick: () => setSelectedScents((s_1) => ({
      ...s_1,
      base: note_1
    })), children: note_1 }, note_1));
    $[63] = selectedScents.base;
    $[64] = t33;
  } else {
    t33 = $[64];
  }
  let t34;
  if ($[65] !== t33) {
    t34 = /* @__PURE__ */ jsxs("div", { children: [
      t32,
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2", children: t33 })
    ] });
    $[65] = t33;
    $[66] = t34;
  } else {
    t34 = $[66];
  }
  let t35;
  if ($[67] !== t28 || $[68] !== t31 || $[69] !== t34) {
    t35 = /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      t25,
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        t28,
        t31,
        t34
      ] })
    ] });
    $[67] = t28;
    $[68] = t31;
    $[69] = t34;
    $[70] = t35;
  } else {
    t35 = $[70];
  }
  let t36;
  if ($[71] !== selectedPackaging.id) {
    t36 = packagingOptions.map((pack) => /* @__PURE__ */ jsxs(OptionButton, { selected: selectedPackaging.id === pack.id, onClick: () => setSelectedPackaging(pack), children: [
      /* @__PURE__ */ jsx("img", { src: pack.image, alt: pack.name, className: "h-24 w-auto" }),
      /* @__PURE__ */ jsx("span", { children: pack.name })
    ] }, pack.id));
    $[71] = selectedPackaging.id;
    $[72] = t36;
  } else {
    t36 = $[72];
  }
  let t37;
  if ($[73] !== t36) {
    t37 = /* @__PURE__ */ jsx(OptionGroup, { title: "4. Select Packaging", children: t36 });
    $[73] = t36;
    $[74] = t37;
  } else {
    t37 = $[74];
  }
  let t38;
  if ($[75] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t38 = /* @__PURE__ */ jsx("h3", { className: "text-2xl font-heading font-semibold mb-4", children: "5. Add a Custom Message" });
    $[75] = t38;
  } else {
    t38 = $[75];
  }
  let t39;
  if ($[76] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t39 = (e) => setCustomMessage(e.target.value);
    $[76] = t39;
  } else {
    t39 = $[76];
  }
  let t40;
  if ($[77] !== customMessage) {
    t40 = /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      t38,
      /* @__PURE__ */ jsx(Textarea, { placeholder: "Happy Birthday, Sarah!", value: customMessage, onChange: t39, className: "text-lg bg-background", rows: 4 })
    ] });
    $[77] = customMessage;
    $[78] = t40;
  } else {
    t40 = $[78];
  }
  let t41;
  if ($[79] !== t22 || $[80] !== t24 || $[81] !== t35 || $[82] !== t37 || $[83] !== t40) {
    t41 = /* @__PURE__ */ jsxs("div", { children: [
      t20,
      t22,
      t24,
      t35,
      t37,
      t40
    ] });
    $[79] = t22;
    $[80] = t24;
    $[81] = t35;
    $[82] = t37;
    $[83] = t40;
    $[84] = t41;
  } else {
    t41 = $[84];
  }
  let t42;
  if ($[85] !== t19 || $[86] !== t41) {
    t42 = /* @__PURE__ */ jsx("main", { className: "pt-32 pb-16", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-24", children: [
      t19,
      t41
    ] }) }) });
    $[85] = t19;
    $[86] = t41;
    $[87] = t42;
  } else {
    t42 = $[87];
  }
  return t42;
}
function _temp2(t0) {
  const {
    selected,
    onClick,
    children: children_0
  } = t0;
  return /* @__PURE__ */ jsx(Button, { variant: selected ? "default" : "outline", className: cn("h-auto p-4 text-base md:text-lg flex flex-col items-center justify-center gap-2 transition-all duration-200", "border-2", selected ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"), onClick, children: children_0 });
}
function _temp(t0) {
  const {
    title,
    children
  } = t0;
  return /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-2xl font-heading font-semibold mb-4", children: title }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-4", children })
  ] });
}
const SplitComponent = ConfiguratorPage;
export {
  SplitComponent as component
};
