import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { c } from "react/compiler-runtime";
import { useState } from "react";
import { i as useCartStore, q as useSubscriptionStore, r as getScentNotesByCategory, s as BOTTLE_SIZES, h as BlurFade, C as Card, o as CardContent, P as PRICE_DISCOUNT_MULTIPLIER, t as PRICE_PARTIAL_DISCOUNT_MULTIPLIER, B as Badge, m as CardHeader, n as CardTitle, l as Separator, f as Button } from "./router-B2FLevz_.js";
import { T as TOAST_LONG_DURATION } from "./timeouts-BDPnrphD.js";
import { B as BLUR_FADE_DELAY_MEDIUM, a as BLUR_FADE_DELAY_SHORT, b as BLUR_FADE_DELAY_LONG } from "./animation-DXk-6j-p.js";
import { Sparkles, Droplets, ShoppingBag, RotateCcw, Check } from "lucide-react";
import "@tanstack/react-router";
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
const BASE_PRICE_PER_ML = 1.5;
function ScentSelector(t0) {
  const $ = c(17);
  const {
    title,
    notes,
    selected,
    onToggle
  } = t0;
  let t1;
  if ($[0] !== selected.length) {
    t1 = /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "text-xs", children: [
      selected.length,
      "/3"
    ] });
    $[0] = selected.length;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] !== t1 || $[3] !== title) {
    t2 = /* @__PURE__ */ jsxs("h3", { className: "font-heading font-semibold text-lg flex items-center gap-2", children: [
      title,
      t1
    ] });
    $[2] = t1;
    $[3] = title;
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  let t3;
  if ($[5] !== notes || $[6] !== onToggle || $[7] !== selected) {
    let t42;
    if ($[9] !== onToggle || $[10] !== selected) {
      t42 = (note) => {
        const isSelected = selected.some((s) => s.id === note.id);
        return /* @__PURE__ */ jsxs("button", { onClick: () => onToggle(note), className: `p-3 rounded-lg border text-left transition-all hover:shadow-md ${isSelected ? "border-primary bg-primary/10 shadow-md" : "border-border hover:border-primary/50"}`, children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start", children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium text-sm", children: note.name }),
            isSelected && /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-primary" })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "block text-xs text-muted-foreground mt-1", children: note.description })
        ] }, note.id);
      };
      $[9] = onToggle;
      $[10] = selected;
      $[11] = t42;
    } else {
      t42 = $[11];
    }
    t3 = notes.map(t42);
    $[5] = notes;
    $[6] = onToggle;
    $[7] = selected;
    $[8] = t3;
  } else {
    t3 = $[8];
  }
  let t4;
  if ($[12] !== t3) {
    t4 = /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2", children: t3 });
    $[12] = t3;
    $[13] = t4;
  } else {
    t4 = $[13];
  }
  let t5;
  if ($[14] !== t2 || $[15] !== t4) {
    t5 = /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
      t2,
      t4
    ] });
    $[14] = t2;
    $[15] = t4;
    $[16] = t5;
  } else {
    t5 = $[16];
  }
  return t5;
}
function BottleSizeSelector(t0) {
  const $ = c(6);
  const {
    selected,
    onSelect
  } = t0;
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsxs("h3", { className: "font-heading font-semibold text-lg flex items-center gap-2", children: [
      "Bottle Size",
      /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: "Required" })
    ] });
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  let t2;
  if ($[1] !== onSelect || $[2] !== selected) {
    t2 = BOTTLE_SIZES.map((size) => /* @__PURE__ */ jsxs("button", { onClick: () => onSelect(size.id), className: `p-4 rounded-lg border text-center transition-all hover:shadow-md ${selected === size.id ? "border-primary bg-primary/10 shadow-md" : "border-border hover:border-primary/50"}`, children: [
      /* @__PURE__ */ jsx("div", { className: "font-heading font-bold text-lg mb-1", children: size.label }),
      /* @__PURE__ */ jsxs("div", { className: "text-sm text-muted-foreground", children: [
        "€",
        Math.round(BASE_PRICE_PER_ML * size.ml * PRICE_DISCOUNT_MULTIPLIER),
        " total"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-xs text-muted-foreground mt-1", children: [
        "€",
        (BASE_PRICE_PER_ML * size.ml * PRICE_DISCOUNT_MULTIPLIER).toFixed(2)
      ] })
    ] }, size.id));
    $[1] = onSelect;
    $[2] = selected;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== t2) {
    t3 = /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
      t1,
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-3", children: t2 })
    ] });
    $[4] = t2;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  return t3;
}
function CustomPage() {
  const $ = c(110);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = {
      topNotes: [],
      heartNotes: [],
      baseNotes: [],
      bottleSize: "30ml",
      name: ""
    };
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  const [blend, setBlend] = useState(t0);
  const [notification, setNotification] = useState("");
  useState(false);
  const [customName, setCustomName] = useState("");
  const addCustomItem = useCartStore(_temp);
  const {
    applyDiscount,
    getDiscount,
    currentTier
  } = useSubscriptionStore();
  let t1;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = getScentNotesByCategory("top");
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const topNotes = t1;
  let t2;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = getScentNotesByCategory("heart");
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  const heartNotes = t2;
  let t3;
  if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = getScentNotesByCategory("base");
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  const baseNotes = t3;
  const totalNotes = blend.topNotes.length + blend.heartNotes.length + blend.baseNotes.length;
  const isComplete = totalNotes >= 3 && blend.bottleSize;
  let t4;
  bb0: {
    let t52;
    if ($[4] !== blend.bottleSize) {
      t52 = BOTTLE_SIZES.find((s) => s.id === blend.bottleSize);
      $[4] = blend.bottleSize;
      $[5] = t52;
    } else {
      t52 = $[5];
    }
    const size = t52;
    if (!size) {
      t4 = 0;
      break bb0;
    }
    let basePrice = BASE_PRICE_PER_ML * size.ml;
    if (totalNotes >= 6) {
      basePrice = basePrice * PRICE_DISCOUNT_MULTIPLIER;
    } else {
      if (totalNotes >= 3) {
        basePrice = basePrice * PRICE_PARTIAL_DISCOUNT_MULTIPLIER;
      }
    }
    let t62;
    if ($[6] !== applyDiscount || $[7] !== basePrice) {
      t62 = applyDiscount(basePrice);
      $[6] = applyDiscount;
      $[7] = basePrice;
      $[8] = t62;
    } else {
      t62 = $[8];
    }
    t4 = t62;
  }
  const price = t4;
  let t5;
  if ($[9] !== blend) {
    t5 = (note, category) => {
      const current = blend[category];
      const isSelected = current.some((n) => n.id === note.id);
      if (isSelected) {
        setBlend((prev) => ({
          ...prev,
          [category]: current.filter((n_0) => n_0.id !== note.id)
        }));
      } else {
        if (current.length < 3) {
          setBlend((prev_0) => ({
            ...prev_0,
            [category]: [...current, note]
          }));
        }
      }
    };
    $[9] = blend;
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  const toggleNote = t5;
  let t6;
  if ($[11] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = () => {
      setBlend({
        topNotes: [],
        heartNotes: [],
        baseNotes: [],
        bottleSize: "30ml",
        name: ""
      });
      setCustomName("");
    };
    $[11] = t6;
  } else {
    t6 = $[11];
  }
  const resetBlend = t6;
  let t7;
  if ($[12] !== addCustomItem || $[13] !== blend.baseNotes || $[14] !== blend.bottleSize || $[15] !== blend.heartNotes || $[16] !== blend.topNotes || $[17] !== customName || $[18] !== price) {
    t7 = () => {
      const finalName = customName || `Custom Blend (${blend.topNotes.map(_temp2).join(", ")})`;
      const sizeLabel = BOTTLE_SIZES.find((s_0) => s_0.id === blend.bottleSize)?.label || blend.bottleSize;
      const customBlendObj = {
        topNotes: blend.topNotes.map(_temp3),
        heartNotes: blend.heartNotes.map(_temp4),
        baseNotes: blend.baseNotes.map(_temp5)
      };
      addCustomItem(finalName, price, sizeLabel, customBlendObj);
      setNotification(`${finalName} added to cart - €${price.toFixed(2)}`);
      setTimeout(() => setNotification(""), TOAST_LONG_DURATION);
    };
    $[12] = addCustomItem;
    $[13] = blend.baseNotes;
    $[14] = blend.bottleSize;
    $[15] = blend.heartNotes;
    $[16] = blend.topNotes;
    $[17] = customName;
    $[18] = price;
    $[19] = t7;
  } else {
    t7 = $[19];
  }
  const handleAddToCart = t7;
  let t8;
  if ($[20] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t8 = /* @__PURE__ */ jsx(BlurFade, { inView: true, children: /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 mb-4", children: [
        /* @__PURE__ */ jsx(Sparkles, { className: "w-6 h-6 text-primary" }),
        /* @__PURE__ */ jsx(Badge, { variant: "default", children: "Custom" })
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4", children: "Create Your Custom Blend" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Mix your own signature fragrance by selecting top, heart, and base notes. The more notes you combine, the better the price!" })
    ] }) });
    $[20] = t8;
  } else {
    t8 = $[20];
  }
  let t9;
  if ($[21] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t9 = /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(Sparkles, { className: "w-5 h-5 text-primary" }),
      "Step 1: Choose Your Notes"
    ] }) });
    $[21] = t9;
  } else {
    t9 = $[21];
  }
  let t10;
  if ($[22] !== toggleNote) {
    t10 = (note_0) => toggleNote(note_0, "topNotes");
    $[22] = toggleNote;
    $[23] = t10;
  } else {
    t10 = $[23];
  }
  let t11;
  if ($[24] !== blend.topNotes || $[25] !== t10) {
    t11 = /* @__PURE__ */ jsx(ScentSelector, { title: "Top Notes (First Impression)", notes: topNotes, selected: blend.topNotes, onToggle: t10 });
    $[24] = blend.topNotes;
    $[25] = t10;
    $[26] = t11;
  } else {
    t11 = $[26];
  }
  let t12;
  if ($[27] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t12 = /* @__PURE__ */ jsx(Separator, {});
    $[27] = t12;
  } else {
    t12 = $[27];
  }
  let t13;
  if ($[28] !== toggleNote) {
    t13 = (note_1) => toggleNote(note_1, "heartNotes");
    $[28] = toggleNote;
    $[29] = t13;
  } else {
    t13 = $[29];
  }
  let t14;
  if ($[30] !== blend.heartNotes || $[31] !== t13) {
    t14 = /* @__PURE__ */ jsx(ScentSelector, { title: "Heart Notes (The Core)", notes: heartNotes, selected: blend.heartNotes, onToggle: t13 });
    $[30] = blend.heartNotes;
    $[31] = t13;
    $[32] = t14;
  } else {
    t14 = $[32];
  }
  let t15;
  if ($[33] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t15 = /* @__PURE__ */ jsx(Separator, {});
    $[33] = t15;
  } else {
    t15 = $[33];
  }
  let t16;
  if ($[34] !== toggleNote) {
    t16 = (note_2) => toggleNote(note_2, "baseNotes");
    $[34] = toggleNote;
    $[35] = t16;
  } else {
    t16 = $[35];
  }
  let t17;
  if ($[36] !== blend.baseNotes || $[37] !== t16) {
    t17 = /* @__PURE__ */ jsx(ScentSelector, { title: "Base Notes (The Lasting Memory)", notes: baseNotes, selected: blend.baseNotes, onToggle: t16 });
    $[36] = blend.baseNotes;
    $[37] = t16;
    $[38] = t17;
  } else {
    t17 = $[38];
  }
  let t18;
  if ($[39] !== t11 || $[40] !== t14 || $[41] !== t17) {
    t18 = /* @__PURE__ */ jsx(BlurFade, { delay: BLUR_FADE_DELAY_SHORT, inView: true, children: /* @__PURE__ */ jsxs(Card, { children: [
      t9,
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", children: [
        t11,
        t12,
        t14,
        t15,
        t17
      ] })
    ] }) });
    $[39] = t11;
    $[40] = t14;
    $[41] = t17;
    $[42] = t18;
  } else {
    t18 = $[42];
  }
  let t19;
  if ($[43] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t19 = /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(Droplets, { className: "w-5 h-5 text-primary" }),
      "Step 2: Choose Bottle Size"
    ] }) });
    $[43] = t19;
  } else {
    t19 = $[43];
  }
  let t20;
  if ($[44] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t20 = (id) => setBlend((prev_1) => ({
      ...prev_1,
      bottleSize: id
    }));
    $[44] = t20;
  } else {
    t20 = $[44];
  }
  let t21;
  if ($[45] !== blend.bottleSize) {
    t21 = /* @__PURE__ */ jsx(BlurFade, { delay: BLUR_FADE_DELAY_MEDIUM, inView: true, children: /* @__PURE__ */ jsxs(Card, { children: [
      t19,
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(BottleSizeSelector, { selected: blend.bottleSize, onSelect: t20 }) })
    ] }) });
    $[45] = blend.bottleSize;
    $[46] = t21;
  } else {
    t21 = $[46];
  }
  let t22;
  if ($[47] !== t18 || $[48] !== t21) {
    t22 = /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 space-y-8", children: [
      t18,
      t21
    ] });
    $[47] = t18;
    $[48] = t21;
    $[49] = t22;
  } else {
    t22 = $[49];
  }
  let t23;
  if ($[50] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t23 = /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Your Custom Blend" }) });
    $[50] = t23;
  } else {
    t23 = $[50];
  }
  let t24;
  if ($[51] !== totalNotes) {
    t24 = /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: totalNotes });
    $[51] = totalNotes;
    $[52] = t24;
  } else {
    t24 = $[52];
  }
  let t25;
  if ($[53] !== totalNotes) {
    t25 = totalNotes < 3 && /* @__PURE__ */ jsx(Badge, { variant: "destructive", className: "ml-2", children: "Min 3 required" });
    $[53] = totalNotes;
    $[54] = t25;
  } else {
    t25 = $[54];
  }
  let t26;
  if ($[55] !== t24 || $[56] !== t25) {
    t26 = /* @__PURE__ */ jsxs("div", { className: "text-sm text-muted-foreground", children: [
      t24,
      " notes selected",
      t25
    ] });
    $[55] = t24;
    $[56] = t25;
    $[57] = t26;
  } else {
    t26 = $[57];
  }
  let t27;
  if ($[58] !== blend.topNotes) {
    t27 = blend.topNotes.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground uppercase", children: "Top" }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1 mt-1", children: blend.topNotes.map(_temp6) })
    ] });
    $[58] = blend.topNotes;
    $[59] = t27;
  } else {
    t27 = $[59];
  }
  let t28;
  if ($[60] !== blend.heartNotes) {
    t28 = blend.heartNotes.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground uppercase", children: "Heart" }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1 mt-1", children: blend.heartNotes.map(_temp7) })
    ] });
    $[60] = blend.heartNotes;
    $[61] = t28;
  } else {
    t28 = $[61];
  }
  let t29;
  if ($[62] !== blend.baseNotes) {
    t29 = blend.baseNotes.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground uppercase", children: "Base" }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1 mt-1", children: blend.baseNotes.map(_temp8) })
    ] });
    $[62] = blend.baseNotes;
    $[63] = t29;
  } else {
    t29 = $[63];
  }
  let t30;
  if ($[64] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t30 = /* @__PURE__ */ jsx(Separator, {});
    $[64] = t30;
  } else {
    t30 = $[64];
  }
  let t31;
  if ($[65] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t31 = /* @__PURE__ */ jsx("label", { className: "text-sm font-medium", children: "Name Your Blend (Optional)" });
    $[65] = t31;
  } else {
    t31 = $[65];
  }
  let t32;
  if ($[66] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t32 = (e) => setCustomName(e.target.value);
    $[66] = t32;
  } else {
    t32 = $[66];
  }
  let t33;
  if ($[67] !== customName) {
    t33 = /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      t31,
      /* @__PURE__ */ jsx("input", { type: "text", value: customName, onChange: t32, placeholder: "My Signature Scent", className: "w-full p-2 rounded-lg border border-input bg-background" })
    ] });
    $[67] = customName;
    $[68] = t33;
  } else {
    t33 = $[68];
  }
  let t34;
  if ($[69] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t34 = /* @__PURE__ */ jsx(Separator, {});
    $[69] = t34;
  } else {
    t34 = $[69];
  }
  let t35;
  if ($[70] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t35 = /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Total" });
    $[70] = t35;
  } else {
    t35 = $[70];
  }
  let t36;
  if ($[71] !== price) {
    t36 = price.toFixed(2);
    $[71] = price;
    $[72] = t36;
  } else {
    t36 = $[72];
  }
  let t37;
  if ($[73] !== t36) {
    t37 = /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-lg", children: [
      t35,
      /* @__PURE__ */ jsxs("span", { className: "font-heading font-bold text-2xl text-primary", children: [
        "€",
        t36
      ] })
    ] });
    $[73] = t36;
    $[74] = t37;
  } else {
    t37 = $[74];
  }
  let t38;
  if ($[75] !== currentTier || $[76] !== getDiscount) {
    t38 = currentTier !== "free" && /* @__PURE__ */ jsxs("div", { className: "text-xs text-muted-foreground text-center", children: [
      getDiscount(),
      "% subscription discount applied"
    ] });
    $[75] = currentTier;
    $[76] = getDiscount;
    $[77] = t38;
  } else {
    t38 = $[77];
  }
  let t39;
  if ($[78] !== totalNotes) {
    t39 = totalNotes >= 6 && /* @__PURE__ */ jsx("span", { className: "text-green-600", children: "20% bundle discount applied!" });
    $[78] = totalNotes;
    $[79] = t39;
  } else {
    t39 = $[79];
  }
  let t40;
  if ($[80] !== totalNotes) {
    t40 = totalNotes >= 3 && totalNotes < 6 && /* @__PURE__ */ jsx("span", { children: "10% multi-note discount applied!" });
    $[80] = totalNotes;
    $[81] = t40;
  } else {
    t40 = $[81];
  }
  let t41;
  if ($[82] !== t39 || $[83] !== t40) {
    t41 = /* @__PURE__ */ jsxs("div", { className: "text-xs text-muted-foreground", children: [
      t39,
      t40
    ] });
    $[82] = t39;
    $[83] = t40;
    $[84] = t41;
  } else {
    t41 = $[84];
  }
  const t42 = !isComplete;
  let t43;
  if ($[85] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t43 = /* @__PURE__ */ jsx(ShoppingBag, { className: "mr-2 w-5 h-5" });
    $[85] = t43;
  } else {
    t43 = $[85];
  }
  let t44;
  if ($[86] !== handleAddToCart || $[87] !== t42) {
    t44 = /* @__PURE__ */ jsxs(Button, { size: "lg", className: "w-full", disabled: t42, onClick: handleAddToCart, children: [
      t43,
      "Add to Cart"
    ] });
    $[86] = handleAddToCart;
    $[87] = t42;
    $[88] = t44;
  } else {
    t44 = $[88];
  }
  let t45;
  if ($[89] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t45 = /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "lg", className: "w-full", onClick: resetBlend, children: [
      /* @__PURE__ */ jsx(RotateCcw, { className: "mr-2 w-4 h-4" }),
      "Start Over"
    ] });
    $[89] = t45;
  } else {
    t45 = $[89];
  }
  let t46;
  if ($[90] !== t44) {
    t46 = /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
      t44,
      t45
    ] });
    $[90] = t44;
    $[91] = t46;
  } else {
    t46 = $[91];
  }
  let t47;
  if ($[92] !== t26 || $[93] !== t27 || $[94] !== t28 || $[95] !== t29 || $[96] !== t33 || $[97] !== t37 || $[98] !== t38 || $[99] !== t41 || $[100] !== t46) {
    t47 = /* @__PURE__ */ jsx("div", { className: "lg:sticky lg:top-24 h-fit", children: /* @__PURE__ */ jsx(BlurFade, { delay: BLUR_FADE_DELAY_LONG, inView: true, children: /* @__PURE__ */ jsxs(Card, { className: "sticky top-24", children: [
      t23,
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
        t26,
        t27,
        t28,
        t29,
        t30,
        t33,
        t34,
        t37,
        t38,
        t41,
        t46
      ] })
    ] }) }) });
    $[92] = t26;
    $[93] = t27;
    $[94] = t28;
    $[95] = t29;
    $[96] = t33;
    $[97] = t37;
    $[98] = t38;
    $[99] = t41;
    $[100] = t46;
    $[101] = t47;
  } else {
    t47 = $[101];
  }
  let t48;
  if ($[102] !== t22 || $[103] !== t47) {
    t48 = /* @__PURE__ */ jsx("main", { className: "pt-24 min-h-screen", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16", children: [
      t8,
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-3 gap-8", children: [
        t22,
        t47
      ] })
    ] }) });
    $[102] = t22;
    $[103] = t47;
    $[104] = t48;
  } else {
    t48 = $[104];
  }
  let t49;
  if ($[105] !== notification) {
    t49 = notification && /* @__PURE__ */ jsx("div", { className: "fixed bottom-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg", children: notification });
    $[105] = notification;
    $[106] = t49;
  } else {
    t49 = $[106];
  }
  let t50;
  if ($[107] !== t48 || $[108] !== t49) {
    t50 = /* @__PURE__ */ jsxs(Fragment, { children: [
      t48,
      t49
    ] });
    $[107] = t48;
    $[108] = t49;
    $[109] = t50;
  } else {
    t50 = $[109];
  }
  return t50;
}
function _temp8(n_7) {
  return /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "text-xs", children: n_7.name }, n_7.id);
}
function _temp7(n_6) {
  return /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "text-xs", children: n_6.name }, n_6.id);
}
function _temp6(n_5) {
  return /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "text-xs", children: n_5.name }, n_5.id);
}
function _temp5(n_4) {
  return {
    id: n_4.id,
    name: n_4.name
  };
}
function _temp4(n_3) {
  return {
    id: n_3.id,
    name: n_3.name
  };
}
function _temp3(n_2) {
  return {
    id: n_2.id,
    name: n_2.name
  };
}
function _temp2(n_1) {
  return n_1.name;
}
function _temp(state) {
  return state.addCustomItem;
}
const SplitComponent = () => {
  const $ = c(1);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(CustomPage, {});
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
};
export {
  SplitComponent as component
};
