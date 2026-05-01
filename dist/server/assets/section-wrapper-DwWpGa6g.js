import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { c } from "react/compiler-runtime";
import { useState } from "react";
import { a8 as Skeleton, f as Button } from "./router-B2FLevz_.js";
import { AlertTriangle, RefreshCw } from "lucide-react";
function SectionLoading(t0) {
  const $ = c(17);
  const {
    type: t1,
    count: t2
  } = t0;
  const type = t1 === void 0 ? "default" : t1;
  const count = t2 === void 0 ? 1 : t2;
  switch (type) {
    case "card": {
      let t3;
      if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t3 = /* @__PURE__ */ jsx(Skeleton, { className: "h-32 w-32 rounded-lg" });
        $[0] = t3;
      } else {
        t3 = $[0];
      }
      let t4;
      if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t4 = /* @__PURE__ */ jsxs("div", { className: "rounded-lg border p-6 space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
            t3,
            /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-3", children: [
              /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-1/3" }),
              /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-full" }),
              /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-2/3" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-full" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-3/4" })
        ] });
        $[1] = t4;
      } else {
        t4 = $[1];
      }
      return t4;
    }
    case "grid": {
      let t3;
      if ($[2] !== count) {
        t3 = /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: Array.from({
          length: count
        }).map(_temp) });
        $[2] = count;
        $[3] = t3;
      } else {
        t3 = $[3];
      }
      return t3;
    }
    case "list": {
      let t3;
      if ($[4] !== count) {
        t3 = /* @__PURE__ */ jsx("div", { className: "space-y-3", children: Array.from({
          length: count
        }).map(_temp2) });
        $[4] = count;
        $[5] = t3;
      } else {
        t3 = $[5];
      }
      return t3;
    }
    case "hero": {
      let t3;
      let t4;
      let t5;
      if ($[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t3 = /* @__PURE__ */ jsx(Skeleton, { className: "h-8 w-32 mx-auto" });
        t4 = /* @__PURE__ */ jsx(Skeleton, { className: "h-16 w-2/3 mx-auto" });
        t5 = /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-1/2 mx-auto" });
        $[6] = t3;
        $[7] = t4;
        $[8] = t5;
      } else {
        t3 = $[6];
        t4 = $[7];
        t5 = $[8];
      }
      let t6;
      if ($[9] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t6 = /* @__PURE__ */ jsxs("div", { className: "space-y-6 py-16", children: [
          t3,
          t4,
          t5,
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4 justify-center", children: [
            /* @__PURE__ */ jsx(Skeleton, { className: "h-12 w-32" }),
            /* @__PURE__ */ jsx(Skeleton, { className: "h-12 w-32" })
          ] })
        ] });
        $[9] = t6;
      } else {
        t6 = $[9];
      }
      return t6;
    }
    case "pricing": {
      let t3;
      if ($[10] !== count) {
        t3 = /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: Array.from({
          length: count
        }).map(_temp3) });
        $[10] = count;
        $[11] = t3;
      } else {
        t3 = $[11];
      }
      return t3;
    }
    case "stats": {
      let t3;
      if ($[12] !== count) {
        t3 = /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: Array.from({
          length: count
        }).map(_temp4) });
        $[12] = count;
        $[13] = t3;
      } else {
        t3 = $[13];
      }
      return t3;
    }
    case "testimonials": {
      let t3;
      if ($[14] !== count) {
        t3 = /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: Array.from({
          length: count
        }).map(_temp6) });
        $[14] = count;
        $[15] = t3;
      } else {
        t3 = $[15];
      }
      return t3;
    }
    default: {
      let t3;
      if ($[16] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
        t3 = /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-full" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-3/4" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-1/2" })
        ] });
        $[16] = t3;
      } else {
        t3 = $[16];
      }
      return t3;
    }
  }
}
function _temp6(_, i) {
  return /* @__PURE__ */ jsxs("div", { className: "rounded-lg border p-6 space-y-3", children: [
    /* @__PURE__ */ jsx(Skeleton, { className: "h-8 w-8" }),
    /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-full" }),
    /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-full" }),
    /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-2/3" }),
    /* @__PURE__ */ jsx("div", { className: "flex gap-1", children: Array.from({
      length: 5
    }).map(_temp5) }),
    /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-1/3" })
  ] }, i);
}
function _temp5(__0, j) {
  return /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-4 rounded-full" }, j);
}
function _temp4(__1, i_0) {
  return /* @__PURE__ */ jsxs("div", { className: "text-center space-y-2", children: [
    /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-20 mx-auto" }),
    /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-16 mx-auto" })
  ] }, i_0);
}
function _temp3(__2, i_1) {
  return /* @__PURE__ */ jsxs("div", { className: "rounded-lg border p-6 space-y-4", children: [
    /* @__PURE__ */ jsx(Skeleton, { className: "h-12 w-12 rounded-full mx-auto" }),
    /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-24 mx-auto" }),
    /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-32 mx-auto" }),
    /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-20 mx-auto" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-2 pt-4", children: [
      /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-full" }),
      /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-3/4" }),
      /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-5/6" }),
      /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-1/2" })
    ] })
  ] }, i_1);
}
function _temp2(__3, i_2) {
  return /* @__PURE__ */ jsxs("div", { className: "flex gap-4 p-4 rounded-lg border", children: [
    /* @__PURE__ */ jsx(Skeleton, { className: "h-16 w-16 rounded-lg" }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-2", children: [
      /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-3/4" }),
      /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-1/2" })
    ] })
  ] }, i_2);
}
function _temp(__4, i_3) {
  return /* @__PURE__ */ jsxs("div", { className: "rounded-lg border p-4 space-y-3", children: [
    /* @__PURE__ */ jsx(Skeleton, { className: "h-48 w-full" }),
    /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-3/4" }),
    /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-1/2" }),
    /* @__PURE__ */ jsx(Skeleton, { className: "h-8 w-full" })
  ] }, i_3);
}
function SectionError(t0) {
  const $ = c(12);
  const {
    onRetry,
    showRefresh: t1
  } = t0;
  const showRefresh = t1 === void 0 ? true : t1;
  const [retried, setRetried] = useState(false);
  let t2;
  if ($[0] !== onRetry) {
    t2 = () => {
      setRetried(true);
      onRetry?.();
    };
    $[0] = onRetry;
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  const handleRetry = t2;
  if (retried) {
    let t32;
    if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t32 = /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center py-8 gap-3 border border-destructive/20 rounded-lg bg-destructive/5 my-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-destructive", children: [
          /* @__PURE__ */ jsx(AlertTriangle, { className: "w-5 h-5" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Unexpected error. Refresh page" })
        ] }),
        /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", onClick: _temp7, children: "Refresh Page" })
      ] });
      $[2] = t32;
    } else {
      t32 = $[2];
    }
    return t32;
  }
  let t3;
  if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-destructive", children: [
      /* @__PURE__ */ jsx(AlertTriangle, { className: "w-5 h-5" }),
      /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Something went wrong" })
    ] });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] !== handleRetry || $[5] !== onRetry) {
    t4 = onRetry && /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", onClick: handleRetry, children: [
      /* @__PURE__ */ jsx(RefreshCw, { className: "w-4 h-4 mr-2" }),
      "Try Again"
    ] });
    $[4] = handleRetry;
    $[5] = onRetry;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  let t5;
  if ($[7] !== showRefresh) {
    t5 = showRefresh && /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", onClick: _temp8, children: "Refresh Page" });
    $[7] = showRefresh;
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  let t6;
  if ($[9] !== t4 || $[10] !== t5) {
    t6 = /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center py-8 gap-3 border border-destructive/20 rounded-lg bg-destructive/5 my-4", children: [
      t3,
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
        t4,
        t5
      ] })
    ] });
    $[9] = t4;
    $[10] = t5;
    $[11] = t6;
  } else {
    t6 = $[11];
  }
  return t6;
}
function _temp8() {
  return window.location.reload();
}
function _temp7() {
  return window.location.reload();
}
function SectionWrapper(t0) {
  const $ = c(8);
  const {
    loading: t1,
    error: t2,
    onRetry,
    loadingType: t3,
    loadingCount: t4,
    showRefresh: t5,
    children
  } = t0;
  const loading = t1 === void 0 ? false : t1;
  const error = t2 === void 0 ? null : t2;
  const loadingType = t3 === void 0 ? "default" : t3;
  const loadingCount = t4 === void 0 ? 1 : t4;
  const showRefresh = t5 === void 0 ? true : t5;
  if (loading) {
    let t62;
    if ($[0] !== loadingCount || $[1] !== loadingType) {
      t62 = /* @__PURE__ */ jsx(SectionLoading, { type: loadingType, count: loadingCount });
      $[0] = loadingCount;
      $[1] = loadingType;
      $[2] = t62;
    } else {
      t62 = $[2];
    }
    return t62;
  }
  if (error) {
    let t62;
    if ($[3] !== onRetry || $[4] !== showRefresh) {
      t62 = /* @__PURE__ */ jsx(SectionError, { onRetry, showRefresh });
      $[3] = onRetry;
      $[4] = showRefresh;
      $[5] = t62;
    } else {
      t62 = $[5];
    }
    return t62;
  }
  let t6;
  if ($[6] !== children) {
    t6 = /* @__PURE__ */ jsx(Fragment, { children });
    $[6] = children;
    $[7] = t6;
  } else {
    t6 = $[7];
  }
  return t6;
}
export {
  SectionWrapper as S
};
