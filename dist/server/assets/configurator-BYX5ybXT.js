import { jsx, jsxs } from "react/jsx-runtime";
import { c } from "react/compiler-runtime";
import { useState } from "react";
import { z as products, f as Button, C as Card, o as CardContent, y as cn } from "./router-B2FLevz_.js";
import { T as Textarea } from "./textarea-D-En9Vqt.js";
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
const BOTTLE_OPTIONS = [{
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
const SIZE_OPTIONS = [{
  id: "30ml",
  name: "30ml"
}, {
  id: "50ml",
  name: "50ml"
}, {
  id: "100ml",
  name: "100ml"
}];
const splitNotes = (notes) => {
  const allNotes = notes.flatMap((n) => n.split(",").map((s) => s.trim()));
  return [...new Set(allNotes)];
};
const SCENT_OPTIONS = {
  top: splitNotes(products.map((p) => p.notes.top)),
  heart: splitNotes(products.map((p) => p.notes.heart)),
  base: splitNotes(products.map((p) => p.notes.base))
};
const PACKAGING_OPTIONS = [{
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
  const $ = c(91);
  const [selectedBottle, setSelectedBottle] = useState(BOTTLE_OPTIONS[0]);
  const [selectedSize, setSelectedSize] = useState(SIZE_OPTIONS[1]);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = {
      top: [],
      heart: [],
      base: []
    };
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  const [selectedScents, setSelectedScents] = useState(t0);
  const [selectedPackaging, setSelectedPackaging] = useState(PACKAGING_OPTIONS[0]);
  const [customMessage, setCustomMessage] = useState("");
  let t1;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = (category, note) => {
      setSelectedScents((prev) => {
        const current = prev[category];
        if (current.includes(note)) {
          return {
            ...prev,
            [category]: current.filter((n) => n !== note)
          };
        }
        if (current.length >= 3) {
          return prev;
        }
        return {
          ...prev,
          [category]: [...current, note]
        };
      });
    };
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const toggleScent = t1;
  const OptionGroup = _temp;
  const OptionButton = _temp2;
  const t2 = `${selectedPackaging.id}-bg`;
  let t3;
  if ($[2] !== selectedPackaging.image || $[3] !== selectedPackaging.name || $[4] !== t2) {
    t3 = /* @__PURE__ */ jsx("img", { src: selectedPackaging.image, alt: selectedPackaging.name, className: "absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-300" }, t2);
    $[2] = selectedPackaging.image;
    $[3] = selectedPackaging.name;
    $[4] = t2;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  let t4;
  if ($[6] !== selectedBottle.id || $[7] !== selectedBottle.image || $[8] !== selectedBottle.name) {
    t4 = /* @__PURE__ */ jsx("img", { src: selectedBottle.image, alt: selectedBottle.name, className: "relative z-10 h-3/4 max-h-[400px] transition-transform duration-300 transform group-hover:scale-105" }, selectedBottle.id);
    $[6] = selectedBottle.id;
    $[7] = selectedBottle.image;
    $[8] = selectedBottle.name;
    $[9] = t4;
  } else {
    t4 = $[9];
  }
  let t5;
  if ($[10] !== t3 || $[11] !== t4) {
    t5 = /* @__PURE__ */ jsx(Card, { className: "overflow-hidden shadow-lg", children: /* @__PURE__ */ jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxs("div", { className: "aspect-[1/1] bg-muted flex items-center justify-center p-8 relative", children: [
      t3,
      t4
    ] }) }) });
    $[10] = t3;
    $[11] = t4;
    $[12] = t5;
  } else {
    t5 = $[12];
  }
  let t6;
  if ($[13] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "Your Configuration" });
    $[13] = t6;
  } else {
    t6 = $[13];
  }
  let t7;
  if ($[14] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ jsx("span", { children: "Bottle:" });
    $[14] = t7;
  } else {
    t7 = $[14];
  }
  let t8;
  if ($[15] !== selectedBottle.name) {
    t8 = /* @__PURE__ */ jsxs("li", { className: "flex justify-between", children: [
      t7,
      " ",
      /* @__PURE__ */ jsx("span", { className: "font-medium text-foreground", children: selectedBottle.name })
    ] });
    $[15] = selectedBottle.name;
    $[16] = t8;
  } else {
    t8 = $[16];
  }
  let t9;
  if ($[17] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t9 = /* @__PURE__ */ jsx("span", { children: "Size:" });
    $[17] = t9;
  } else {
    t9 = $[17];
  }
  let t10;
  if ($[18] !== selectedSize.name) {
    t10 = /* @__PURE__ */ jsxs("li", { className: "flex justify-between", children: [
      t9,
      " ",
      /* @__PURE__ */ jsx("span", { className: "font-medium text-foreground", children: selectedSize.name })
    ] });
    $[18] = selectedSize.name;
    $[19] = t10;
  } else {
    t10 = $[19];
  }
  let t11;
  if ($[20] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t11 = /* @__PURE__ */ jsx("span", { children: "Scent:" });
    $[20] = t11;
  } else {
    t11 = $[20];
  }
  let t12;
  if ($[21] !== selectedScents.base || $[22] !== selectedScents.heart || $[23] !== selectedScents.top) {
    t12 = [...selectedScents.top, ...selectedScents.heart, ...selectedScents.base];
    $[21] = selectedScents.base;
    $[22] = selectedScents.heart;
    $[23] = selectedScents.top;
    $[24] = t12;
  } else {
    t12 = $[24];
  }
  const t13 = t12.join(", ");
  let t14;
  if ($[25] !== t13) {
    t14 = /* @__PURE__ */ jsxs("li", { className: "flex justify-between", children: [
      t11,
      " ",
      /* @__PURE__ */ jsx("span", { className: "font-medium text-foreground truncate", children: t13 })
    ] });
    $[25] = t13;
    $[26] = t14;
  } else {
    t14 = $[26];
  }
  let t15;
  if ($[27] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t15 = /* @__PURE__ */ jsx("span", { children: "Packaging:" });
    $[27] = t15;
  } else {
    t15 = $[27];
  }
  let t16;
  if ($[28] !== selectedPackaging.name) {
    t16 = /* @__PURE__ */ jsxs("li", { className: "flex justify-between", children: [
      t15,
      " ",
      /* @__PURE__ */ jsx("span", { className: "font-medium text-foreground", children: selectedPackaging.name })
    ] });
    $[28] = selectedPackaging.name;
    $[29] = t16;
  } else {
    t16 = $[29];
  }
  let t17;
  if ($[30] !== customMessage) {
    t17 = customMessage && /* @__PURE__ */ jsxs("li", { className: "flex justify-between items-start", children: [
      /* @__PURE__ */ jsx("span", { children: "Message:" }),
      /* @__PURE__ */ jsxs("span", { className: "font-medium text-foreground text-right pl-4", children: [
        '"',
        customMessage,
        '"'
      ] })
    ] });
    $[30] = customMessage;
    $[31] = t17;
  } else {
    t17 = $[31];
  }
  let t18;
  if ($[32] !== t10 || $[33] !== t14 || $[34] !== t16 || $[35] !== t17 || $[36] !== t8) {
    t18 = /* @__PURE__ */ jsxs("ul", { className: "text-muted-foreground space-y-2", children: [
      t8,
      t10,
      t14,
      t16,
      t17
    ] });
    $[32] = t10;
    $[33] = t14;
    $[34] = t16;
    $[35] = t17;
    $[36] = t8;
    $[37] = t18;
  } else {
    t18 = $[37];
  }
  let t19;
  if ($[38] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t19 = /* @__PURE__ */ jsx("p", { className: "text-4xl font-bold mt-6 text-right", children: "€129.99" });
    $[38] = t19;
  } else {
    t19 = $[38];
  }
  let t20;
  if ($[39] !== t18) {
    t20 = /* @__PURE__ */ jsxs("div", { className: "mt-8 text-left bg-background/50 backdrop-blur-sm p-6 rounded-lg border", children: [
      t6,
      t18,
      t19
    ] });
    $[39] = t18;
    $[40] = t20;
  } else {
    t20 = $[40];
  }
  let t21;
  if ($[41] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t21 = /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(Button, { size: "xl", className: "w-full p-8 text-2xl font-bold", children: "Add to Cart" }) });
    $[41] = t21;
  } else {
    t21 = $[41];
  }
  let t22;
  if ($[42] !== t20 || $[43] !== t5) {
    t22 = /* @__PURE__ */ jsxs("div", { className: "sticky top-24 self-start", children: [
      t5,
      t20,
      t21
    ] });
    $[42] = t20;
    $[43] = t5;
    $[44] = t22;
  } else {
    t22 = $[44];
  }
  let t23;
  if ($[45] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t23 = /* @__PURE__ */ jsx("h1", { className: "text-4xl sm:text-5xl font-heading font-bold text-foreground mb-8", children: "Create Your Scent" });
    $[45] = t23;
  } else {
    t23 = $[45];
  }
  let t24;
  if ($[46] !== selectedBottle.id) {
    t24 = BOTTLE_OPTIONS.map((bottle) => /* @__PURE__ */ jsxs(OptionButton, { selected: selectedBottle.id === bottle.id, onClick: () => setSelectedBottle(bottle), children: [
      /* @__PURE__ */ jsx("img", { src: bottle.image, alt: bottle.name, className: "h-24 w-auto" }),
      /* @__PURE__ */ jsx("span", { children: bottle.name })
    ] }, bottle.id));
    $[46] = selectedBottle.id;
    $[47] = t24;
  } else {
    t24 = $[47];
  }
  let t25;
  if ($[48] !== t24) {
    t25 = /* @__PURE__ */ jsx(OptionGroup, { title: "1. Choose Your Bottle", children: t24 });
    $[48] = t24;
    $[49] = t25;
  } else {
    t25 = $[49];
  }
  let t26;
  if ($[50] !== selectedSize.id) {
    t26 = SIZE_OPTIONS.map((size) => /* @__PURE__ */ jsx(OptionButton, { selected: selectedSize.id === size.id, onClick: () => setSelectedSize(size), children: /* @__PURE__ */ jsx("span", { className: "text-2xl font-semibold", children: size.name }) }, size.id));
    $[50] = selectedSize.id;
    $[51] = t26;
  } else {
    t26 = $[51];
  }
  let t27;
  if ($[52] !== t26) {
    t27 = /* @__PURE__ */ jsx(OptionGroup, { title: "2. Select Size", children: t26 });
    $[52] = t26;
    $[53] = t27;
  } else {
    t27 = $[53];
  }
  let t28;
  if ($[54] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t28 = /* @__PURE__ */ jsx("h3", { className: "text-2xl font-heading font-semibold mb-4", children: "3. Compose Your Scent" });
    $[54] = t28;
  } else {
    t28 = $[54];
  }
  let t29;
  if ($[55] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t29 = /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold mb-3", children: "Top Note (up to 3)" });
    $[55] = t29;
  } else {
    t29 = $[55];
  }
  let t30;
  if ($[56] !== selectedScents.top) {
    t30 = SCENT_OPTIONS.top.map((note_0) => /* @__PURE__ */ jsx(Button, { className: "text-base p-3 h-auto", variant: selectedScents.top.includes(note_0) ? "default" : "outline", onClick: () => toggleScent("top", note_0), children: note_0 }, note_0));
    $[56] = selectedScents.top;
    $[57] = t30;
  } else {
    t30 = $[57];
  }
  let t31;
  if ($[58] !== t30) {
    t31 = /* @__PURE__ */ jsxs("div", { children: [
      t29,
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: t30 })
    ] });
    $[58] = t30;
    $[59] = t31;
  } else {
    t31 = $[59];
  }
  let t32;
  if ($[60] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t32 = /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold mb-3", children: "Heart Note (up to 3)" });
    $[60] = t32;
  } else {
    t32 = $[60];
  }
  let t33;
  if ($[61] !== selectedScents.heart) {
    t33 = SCENT_OPTIONS.heart.map((note_1) => /* @__PURE__ */ jsx(Button, { className: "text-base p-3 h-auto", variant: selectedScents.heart.includes(note_1) ? "default" : "outline", onClick: () => toggleScent("heart", note_1), children: note_1 }, note_1));
    $[61] = selectedScents.heart;
    $[62] = t33;
  } else {
    t33 = $[62];
  }
  let t34;
  if ($[63] !== t33) {
    t34 = /* @__PURE__ */ jsxs("div", { children: [
      t32,
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: t33 })
    ] });
    $[63] = t33;
    $[64] = t34;
  } else {
    t34 = $[64];
  }
  let t35;
  if ($[65] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t35 = /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold mb-3", children: "Base Note (up to 3)" });
    $[65] = t35;
  } else {
    t35 = $[65];
  }
  let t36;
  if ($[66] !== selectedScents.base) {
    t36 = SCENT_OPTIONS.base.map((note_2) => /* @__PURE__ */ jsx(Button, { className: "text-base p-3 h-auto", variant: selectedScents.base.includes(note_2) ? "default" : "outline", onClick: () => toggleScent("base", note_2), children: note_2 }, note_2));
    $[66] = selectedScents.base;
    $[67] = t36;
  } else {
    t36 = $[67];
  }
  let t37;
  if ($[68] !== t36) {
    t37 = /* @__PURE__ */ jsxs("div", { children: [
      t35,
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: t36 })
    ] });
    $[68] = t36;
    $[69] = t37;
  } else {
    t37 = $[69];
  }
  let t38;
  if ($[70] !== t31 || $[71] !== t34 || $[72] !== t37) {
    t38 = /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      t28,
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        t31,
        t34,
        t37
      ] })
    ] });
    $[70] = t31;
    $[71] = t34;
    $[72] = t37;
    $[73] = t38;
  } else {
    t38 = $[73];
  }
  let t39;
  if ($[74] !== selectedPackaging.id) {
    t39 = PACKAGING_OPTIONS.map((pack) => /* @__PURE__ */ jsxs(OptionButton, { selected: selectedPackaging.id === pack.id, onClick: () => setSelectedPackaging(pack), children: [
      /* @__PURE__ */ jsx("img", { src: pack.image, alt: pack.name, className: "h-24 w-auto" }),
      /* @__PURE__ */ jsx("span", { children: pack.name })
    ] }, pack.id));
    $[74] = selectedPackaging.id;
    $[75] = t39;
  } else {
    t39 = $[75];
  }
  let t40;
  if ($[76] !== t39) {
    t40 = /* @__PURE__ */ jsx(OptionGroup, { title: "4. Select Packaging", children: t39 });
    $[76] = t39;
    $[77] = t40;
  } else {
    t40 = $[77];
  }
  let t41;
  if ($[78] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t41 = /* @__PURE__ */ jsx("h3", { className: "text-2xl font-heading font-semibold mb-4", children: "5. Add a Custom Message" });
    $[78] = t41;
  } else {
    t41 = $[78];
  }
  let t42;
  if ($[79] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t42 = (e) => setCustomMessage(e.target.value);
    $[79] = t42;
  } else {
    t42 = $[79];
  }
  let t43;
  if ($[80] !== customMessage) {
    t43 = /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      t41,
      /* @__PURE__ */ jsx(Textarea, { placeholder: "Happy Birthday, Sarah!", value: customMessage, onChange: t42, className: "text-lg bg-background", rows: 4 })
    ] });
    $[80] = customMessage;
    $[81] = t43;
  } else {
    t43 = $[81];
  }
  let t44;
  if ($[82] !== t25 || $[83] !== t27 || $[84] !== t38 || $[85] !== t40 || $[86] !== t43) {
    t44 = /* @__PURE__ */ jsxs("div", { children: [
      t23,
      t25,
      t27,
      t38,
      t40,
      t43
    ] });
    $[82] = t25;
    $[83] = t27;
    $[84] = t38;
    $[85] = t40;
    $[86] = t43;
    $[87] = t44;
  } else {
    t44 = $[87];
  }
  let t45;
  if ($[88] !== t22 || $[89] !== t44) {
    t45 = /* @__PURE__ */ jsx("main", { className: "pt-32 pb-16", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-24", children: [
      t22,
      t44
    ] }) }) });
    $[88] = t22;
    $[89] = t44;
    $[90] = t45;
  } else {
    t45 = $[90];
  }
  return t45;
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
