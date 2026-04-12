import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { c } from "react/compiler-runtime";
import { S as SectionWrapper } from "./section-wrapper-D1EfZ7on.js";
import { D as useCompareStore, i as useCartStore, B as Badge, A as Avatar, g as AvatarFallback, a as EmptyHeader, b as EmptyMedia, c as EmptyTitle, d as EmptyDescription, h as BlurFade, E as Empty, e as EmptyContent, f as Button } from "./router-DBR8M-aC.js";
import { Link } from "@tanstack/react-router";
import { GitCompare, Package, ArrowRight, X, ShoppingBag } from "lucide-react";
import "react";
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
function SkipLink() {
  const $ = c(1);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx("a", { href: "#compare-main-content", className: "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary", children: "Skip to main content" });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
}
function ComparePage() {
  const $ = c(84);
  const items = useCompareStore(_temp);
  const removeItem = useCompareStore(_temp2);
  const clearCompare = useCompareStore(_temp3);
  const addItem = useCartStore(_temp4);
  let t0;
  if ($[0] !== addItem) {
    t0 = (productId) => {
      addItem(productId, 1);
    };
    $[0] = addItem;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  const handleAddToCart = t0;
  let t1;
  if ($[2] !== removeItem) {
    t1 = (productId_0) => {
      removeItem(productId_0);
    };
    $[2] = removeItem;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  const handleRemoveItem = t1;
  let t2;
  if ($[4] !== clearCompare) {
    t2 = () => {
      clearCompare();
    };
    $[4] = clearCompare;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  const handleClearCompare = t2;
  if (items.length === 0) {
    let t32;
    if ($[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t32 = /* @__PURE__ */ jsx(SkipLink, {});
      $[6] = t32;
    } else {
      t32 = $[6];
    }
    let t42;
    if ($[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t42 = /* @__PURE__ */ jsxs("header", { className: "flex items-center gap-3 mb-8", children: [
        /* @__PURE__ */ jsx(Avatar, { className: "w-12 h-12 bg-primary/10", children: /* @__PURE__ */ jsx(AvatarFallback, { className: "bg-primary/10", children: /* @__PURE__ */ jsx(GitCompare, { className: "w-6 h-6 text-primary", "aria-hidden": "true" }) }) }),
        /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-heading font-bold text-foreground", children: "Compare Products" })
      ] });
      $[7] = t42;
    } else {
      t42 = $[7];
    }
    let t52;
    if ($[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t52 = /* @__PURE__ */ jsxs(EmptyHeader, { children: [
        /* @__PURE__ */ jsx(EmptyMedia, { variant: "icon", children: /* @__PURE__ */ jsx(GitCompare, { className: "w-10 h-10" }) }),
        /* @__PURE__ */ jsx(EmptyTitle, { children: "No products to compare" }),
        /* @__PURE__ */ jsx(EmptyDescription, { children: "Add products to compare their features and prices." })
      ] });
      $[8] = t52;
    } else {
      t52 = $[8];
    }
    let t62;
    if ($[9] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t62 = /* @__PURE__ */ jsx(Package, { className: "mr-2 w-4 h-4" });
      $[9] = t62;
    } else {
      t62 = $[9];
    }
    let t72;
    if ($[10] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t72 = /* @__PURE__ */ jsxs(Fragment, { children: [
        t32,
        /* @__PURE__ */ jsx("main", { className: "pt-24 min-h-screen", id: "compare-main-content", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16", children: /* @__PURE__ */ jsx(SectionWrapper, { loading: false, error: null, children: /* @__PURE__ */ jsxs(BlurFade, { inView: true, children: [
          t42,
          /* @__PURE__ */ jsxs(Empty, { children: [
            t52,
            /* @__PURE__ */ jsx(EmptyContent, { children: /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", children: /* @__PURE__ */ jsxs(Link, { to: "/products", children: [
              t62,
              "Browse Products",
              /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-4 h-4" })
            ] }) }) })
          ] })
        ] }) }) }) })
      ] });
      $[10] = t72;
    } else {
      t72 = $[10];
    }
    return t72;
  }
  let T0;
  let T1;
  let t10;
  let t11;
  let t12;
  let t13;
  let t14;
  let t3;
  let t4;
  let t5;
  let t6;
  let t7;
  let t8;
  let t9;
  if ($[11] !== handleAddToCart || $[12] !== handleClearCompare || $[13] !== handleRemoveItem || $[14] !== items) {
    const specs = [{
      label: "Category",
      key: "category"
    }, {
      label: "Size",
      key: "size"
    }, {
      label: "Price",
      key: "price",
      format: _temp6
    }, {
      label: "Top Notes",
      key: "notes.top",
      get: _temp7
    }, {
      label: "Heart Notes",
      key: "notes.heart",
      get: _temp8
    }, {
      label: "Base Notes",
      key: "notes.base",
      get: _temp9
    }];
    if ($[29] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t14 = /* @__PURE__ */ jsx(SkipLink, {});
      $[29] = t14;
    } else {
      t14 = $[29];
    }
    t12 = "pt-24 min-h-screen";
    t13 = "compare-main-content";
    t11 = "container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16";
    T1 = SectionWrapper;
    t9 = false;
    t10 = null;
    T0 = BlurFade;
    t7 = true;
    let t152;
    let t162;
    if ($[30] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t152 = /* @__PURE__ */ jsx(Avatar, { className: "w-12 h-12 bg-primary/10", children: /* @__PURE__ */ jsx(AvatarFallback, { className: "bg-primary/10", children: /* @__PURE__ */ jsx(GitCompare, { className: "w-6 h-6 text-primary", "aria-hidden": "true" }) }) });
      t162 = /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-heading font-bold text-foreground", children: "Compare Products" });
      $[30] = t152;
      $[31] = t162;
    } else {
      t152 = $[30];
      t162 = $[31];
    }
    let t172;
    if ($[32] !== items.length) {
      t172 = /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "ml-2", children: [
        items.length,
        " products"
      ] });
      $[32] = items.length;
      $[33] = t172;
    } else {
      t172 = $[33];
    }
    let t182;
    if ($[34] !== handleClearCompare) {
      t182 = /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", onClick: handleClearCompare, className: "ml-auto", children: "Clear All" });
      $[34] = handleClearCompare;
      $[35] = t182;
    } else {
      t182 = $[35];
    }
    if ($[36] !== t172 || $[37] !== t182) {
      t8 = /* @__PURE__ */ jsxs("header", { className: "flex items-center gap-3 mb-8", children: [
        t152,
        t162,
        t172,
        t182
      ] });
      $[36] = t172;
      $[37] = t182;
      $[38] = t8;
    } else {
      t8 = $[38];
    }
    t6 = "overflow-x-auto";
    t4 = "w-full border-collapse";
    let t192;
    if ($[39] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t192 = /* @__PURE__ */ jsx("th", { className: "p-4 text-left border-b w-40 bg-muted/50" });
      $[39] = t192;
    } else {
      t192 = $[39];
    }
    let t202;
    if ($[40] !== handleAddToCart || $[41] !== handleRemoveItem || $[42] !== items) {
      let t212;
      if ($[44] !== handleAddToCart || $[45] !== handleRemoveItem) {
        t212 = (item_0) => /* @__PURE__ */ jsx("th", { className: "p-4 border-b w-64", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", className: "absolute -top-2 -right-2 h-6 w-6", onClick: () => handleRemoveItem(item_0.productId), children: /* @__PURE__ */ jsx(X, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ jsxs(Link, { to: "/product/$productId", params: {
            productId: item_0.productId
          }, children: [
            /* @__PURE__ */ jsx("div", { className: "aspect-square rounded-lg overflow-hidden bg-muted mb-3", children: /* @__PURE__ */ jsx("img", { src: item_0.product.image, alt: item_0.product.name, className: "w-full h-full object-cover" }) }),
            /* @__PURE__ */ jsx("h3", { className: "font-heading font-semibold text-lg", children: item_0.product.name })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-primary font-bold text-xl mt-1", children: [
            "€",
            item_0.product.price
          ] }),
          /* @__PURE__ */ jsxs(Button, { size: "sm", className: "w-full mt-2", onClick: () => handleAddToCart(item_0.productId), children: [
            /* @__PURE__ */ jsx(ShoppingBag, { className: "w-4 h-4 mr-2" }),
            "Add to Cart"
          ] })
        ] }) }, item_0.id);
        $[44] = handleAddToCart;
        $[45] = handleRemoveItem;
        $[46] = t212;
      } else {
        t212 = $[46];
      }
      t202 = items.map(t212);
      $[40] = handleAddToCart;
      $[41] = handleRemoveItem;
      $[42] = items;
      $[43] = t202;
    } else {
      t202 = $[43];
    }
    if ($[47] !== t202) {
      t5 = /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
        t192,
        t202
      ] }) });
      $[47] = t202;
      $[48] = t5;
    } else {
      t5 = $[48];
    }
    t3 = specs.map((spec) => /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
      /* @__PURE__ */ jsx("td", { className: "p-4 font-medium text-muted-foreground bg-muted/30", children: spec.label }),
      items.map((item_1) => {
        let value;
        if (spec.get) {
          value = spec.get(item_1.product);
        } else {
          value = item_1.product[spec.key];
        }
        return /* @__PURE__ */ jsx("td", { className: "p-4 text-center", children: spec.format ? spec.format(value) : value }, item_1.id);
      })
    ] }, spec.key));
    $[11] = handleAddToCart;
    $[12] = handleClearCompare;
    $[13] = handleRemoveItem;
    $[14] = items;
    $[15] = T0;
    $[16] = T1;
    $[17] = t10;
    $[18] = t11;
    $[19] = t12;
    $[20] = t13;
    $[21] = t14;
    $[22] = t3;
    $[23] = t4;
    $[24] = t5;
    $[25] = t6;
    $[26] = t7;
    $[27] = t8;
    $[28] = t9;
  } else {
    T0 = $[15];
    T1 = $[16];
    t10 = $[17];
    t11 = $[18];
    t12 = $[19];
    t13 = $[20];
    t14 = $[21];
    t3 = $[22];
    t4 = $[23];
    t5 = $[24];
    t6 = $[25];
    t7 = $[26];
    t8 = $[27];
    t9 = $[28];
  }
  let t15;
  if ($[49] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t15 = /* @__PURE__ */ jsx("td", { className: "p-4 font-medium text-muted-foreground bg-muted/30", children: "Certifications" });
    $[49] = t15;
  } else {
    t15 = $[49];
  }
  let t16;
  if ($[50] !== items) {
    t16 = items.map(_temp1);
    $[50] = items;
    $[51] = t16;
  } else {
    t16 = $[51];
  }
  let t17;
  if ($[52] !== t16) {
    t17 = /* @__PURE__ */ jsxs("tr", { children: [
      t15,
      t16
    ] });
    $[52] = t16;
    $[53] = t17;
  } else {
    t17 = $[53];
  }
  let t18;
  if ($[54] !== t17 || $[55] !== t3) {
    t18 = /* @__PURE__ */ jsxs("tbody", { children: [
      t3,
      t17
    ] });
    $[54] = t17;
    $[55] = t3;
    $[56] = t18;
  } else {
    t18 = $[56];
  }
  let t19;
  if ($[57] !== t18 || $[58] !== t4 || $[59] !== t5) {
    t19 = /* @__PURE__ */ jsxs("table", { className: t4, children: [
      t5,
      t18
    ] });
    $[57] = t18;
    $[58] = t4;
    $[59] = t5;
    $[60] = t19;
  } else {
    t19 = $[60];
  }
  let t20;
  if ($[61] !== t19 || $[62] !== t6) {
    t20 = /* @__PURE__ */ jsx("div", { className: t6, children: t19 });
    $[61] = t19;
    $[62] = t6;
    $[63] = t20;
  } else {
    t20 = $[63];
  }
  let t21;
  if ($[64] !== T0 || $[65] !== t20 || $[66] !== t7 || $[67] !== t8) {
    t21 = /* @__PURE__ */ jsxs(T0, { inView: t7, children: [
      t8,
      t20
    ] });
    $[64] = T0;
    $[65] = t20;
    $[66] = t7;
    $[67] = t8;
    $[68] = t21;
  } else {
    t21 = $[68];
  }
  let t22;
  if ($[69] !== T1 || $[70] !== t10 || $[71] !== t21 || $[72] !== t9) {
    t22 = /* @__PURE__ */ jsx(T1, { loading: t9, error: t10, children: t21 });
    $[69] = T1;
    $[70] = t10;
    $[71] = t21;
    $[72] = t9;
    $[73] = t22;
  } else {
    t22 = $[73];
  }
  let t23;
  if ($[74] !== t11 || $[75] !== t22) {
    t23 = /* @__PURE__ */ jsx("div", { className: t11, children: t22 });
    $[74] = t11;
    $[75] = t22;
    $[76] = t23;
  } else {
    t23 = $[76];
  }
  let t24;
  if ($[77] !== t12 || $[78] !== t13 || $[79] !== t23) {
    t24 = /* @__PURE__ */ jsx("main", { className: t12, id: t13, children: t23 });
    $[77] = t12;
    $[78] = t13;
    $[79] = t23;
    $[80] = t24;
  } else {
    t24 = $[80];
  }
  let t25;
  if ($[81] !== t14 || $[82] !== t24) {
    t25 = /* @__PURE__ */ jsxs(Fragment, { children: [
      t14,
      t24
    ] });
    $[81] = t14;
    $[82] = t24;
    $[83] = t25;
  } else {
    t25 = $[83];
  }
  return t25;
}
function _temp1(item_2) {
  return /* @__PURE__ */ jsx("td", { className: "p-4 text-center", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1 justify-center", children: item_2.product.certificates.map(_temp0) }) }, item_2.id);
}
function _temp0(cert) {
  return /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: cert }, cert);
}
function _temp9(p_1) {
  return p_1.notes.base;
}
function _temp8(p_0) {
  return p_0.notes.heart;
}
function _temp7(p) {
  return p.notes.top;
}
function _temp6(v) {
  return `€${v}`;
}
function _temp4(state_2) {
  return state_2.addItem;
}
function _temp3(state_1) {
  return state_1.clearCompare;
}
function _temp2(state_0) {
  return state_0.removeItem;
}
function _temp(state) {
  return state.items;
}
const SplitComponent = () => {
  const $ = c(1);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(ComparePage, {});
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
};
export {
  SplitComponent as component
};
