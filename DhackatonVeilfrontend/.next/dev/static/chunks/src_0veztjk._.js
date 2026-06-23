(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BOUNTIES",
    ()=>BOUNTIES,
    "INITIAL_STATE",
    ()=>INITIAL_STATE,
    "STEPS",
    ()=>STEPS
]);
const BOUNTIES = [
    {
        id: 'factoring',
        status: 'open',
        reward: '500 XLM',
        rewardNum: 500,
        title: 'Factoring guard',
        desc: 'Break the multiplication invariant without revealing the factors.',
        victim: 'CA4F…9XQ2'
    },
    {
        id: 'overflow',
        status: 'open',
        reward: '750 XLM',
        rewardNum: 750,
        title: 'Overflow check',
        desc: 'Trigger an arithmetic overflow the guard fails to catch.',
        victim: 'CB18…7K4D'
    },
    {
        id: 'access',
        status: 'claimed',
        reward: '1,200 XLM',
        rewardNum: 1200,
        title: 'Access bypass',
        desc: 'Call a privileged path without the admin signature.',
        victim: 'CC93…0XR1'
    },
    {
        id: 'rounding',
        status: 'open',
        reward: '300 XLM',
        rewardNum: 300,
        title: 'Rounding drain',
        desc: 'Drain value through repeated rounding in the fee math.',
        victim: 'CD52…2M8F'
    },
    {
        id: 'reentry',
        status: 'claimed',
        reward: '900 XLM',
        rewardNum: 900,
        title: 'Re-entrancy',
        desc: "Re-enter settle() before balances update.",
        victim: 'CE77…1QP6'
    },
    {
        id: 'oracle',
        status: 'open',
        reward: '650 XLM',
        rewardNum: 650,
        title: 'Oracle skew',
        desc: 'Push a price the bounds check should reject.',
        victim: 'CF04…9ZB3'
    }
];
const STEPS = [
    'Submitting receipt to contract',
    'Verifying proof on-chain (RISC Zero)',
    'Checking victim binding',
    'Releasing reward'
];
const INITIAL_STATE = {
    screen: 'landing',
    filter: 'all',
    search: '',
    activeId: 'factoring',
    fileLoaded: false,
    fileName: '',
    dragging: false,
    verifyStep: 0,
    verified: false,
    balance: 2450,
    claimed: {},
    form: {
        addr: '',
        // prefill ImageID demo → default = bounty yang langsung claimable (re-prove → ganti nilai ini).
        imageId: '',
        reward: '',
        token: 'XLM'
    },
    toast: null
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/motion.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Shared reduced-motion check for canvas animations.
// SSR-safe: returns false when window/matchMedia is unavailable.
__turbopack_context__.s([
    "prefersReducedMotion",
    ()=>prefersReducedMotion
]);
function prefersReducedMotion() {
    if (("TURBOPACK compile-time value", "object") === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CanvasDiamond.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CanvasDiamond
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/motion.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const easeInOutCubic = (x)=>x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
const clamp01 = (x)=>x < 0 ? 0 : x > 1 ? 1 : x;
function CanvasDiamond({ width = 540, height = 540, className, style, word = 'VEIL' }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CanvasDiamond.useEffect": ()=>{
            const cv = ref.current;
            if (!cv) return;
            const ctx = cv.getContext('2d');
            if (!ctx) return;
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            const w = cv.clientWidth || width;
            const h = cv.clientHeight || height;
            cv.width = w * dpr;
            cv.height = h * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            const cx = w / 2;
            const cy = h / 2;
            // ── 1. diamond home points ──────────────────────────────
            const gap = Math.max(7, Math.round(w / 45));
            const R = w * 0.46;
            const diamond = [];
            for(let y = 0; y <= h; y += gap){
                for(let x = 0; x <= w; x += gap){
                    const man = Math.abs(x - cx) + Math.abs(y - cy);
                    if (man > R) continue;
                    diamond.push({
                        x,
                        y,
                        nd: man / R
                    });
                }
            }
            // ── 2. text target points (sample VEIL pixels) ──────────
            const text = [];
            {
                const off = document.createElement('canvas');
                off.width = w;
                off.height = h;
                const octx = off.getContext('2d');
                const fs = Math.round(w * 0.24);
                octx.fillStyle = '#fff';
                octx.textAlign = 'center';
                octx.textBaseline = 'middle';
                octx.font = `700 ${fs}px Inter, system-ui, sans-serif`;
                // letter spacing (supported in modern browsers; harmless if not)
                try {
                    octx.letterSpacing = `${Math.round(w * 0.015)}px`;
                } catch  {}
                octx.fillText(word, cx, cy);
                const tstep = Math.max(4, Math.round(w / 90));
                const img = octx.getImageData(0, 0, w, h).data;
                for(let y = 0; y < h; y += tstep){
                    for(let x = 0; x < w; x += tstep){
                        const a = img[(y * w + x) * 4 + 3];
                        if (a > 120) text.push({
                            x,
                            y
                        });
                    }
                }
            }
            // ── 3. build particle pool ──────────────────────────────
            const n = Math.max(diamond.length, text.length || 1);
            const particles = [];
            for(let i = 0; i < n; i++){
                const d = diamond[i % diamond.length];
                const tp = text.length ? text[i % text.length] : d;
                particles.push({
                    hx: d.x,
                    hy: d.y,
                    tx: tp.x,
                    ty: tp.y,
                    nd: d.nd,
                    seed: Math.random()
                });
            }
            // ── 4. timeline (seconds) ───────────────────────────────
            // diamond hold → morph in → text hold → morph out → loop
            const HOLD_D = 2.6, MORPH = 1.7, HOLD_T = 2.8;
            const CYCLE = HOLD_D + MORPH + HOLD_T + MORPH;
            const stagger = 0.24;
            const linearMorph = {
                "CanvasDiamond.useEffect.linearMorph": (tt)=>{
                    if (tt < HOLD_D) return 0;
                    if (tt < HOLD_D + MORPH) return (tt - HOLD_D) / MORPH;
                    if (tt < HOLD_D + MORPH + HOLD_T) return 1;
                    return 1 - (tt - HOLD_D - MORPH - HOLD_T) / MORPH;
                }
            }["CanvasDiamond.useEffect.linearMorph"];
            const start = performance.now();
            const still = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefersReducedMotion"])();
            let raf = 0;
            const draw = {
                "CanvasDiamond.useEffect.draw": (now)=>{
                    const time = still ? 0 : (now - start) / 1000;
                    const m = linearMorph(time % CYCLE);
                    ctx.clearRect(0, 0, w, h);
                    for(let i = 0; i < particles.length; i++){
                        const p = particles[i];
                        // staggered eased morph per particle
                        const er = clamp01((m - p.seed * stagger) / (1 - stagger));
                        const e = easeInOutCubic(er);
                        // diamond-state look (brightness wave)
                        const wave = Math.sin(p.nd * 9 - time * 1.5);
                        const intenD = clamp01((1 - p.nd) * 0.62 + wave * 0.24 + 0.12);
                        const tealD = p.nd < 0.34 && wave > 0.5;
                        const sizeD = 1.1 + intenD * 3.4;
                        const alphaD = tealD ? 0.5 * intenD + 0.25 : 0.5 * intenD;
                        // text-state look (shimmer)
                        const sh = 0.72 + 0.28 * Math.sin(time * 2.6 + p.seed * 7);
                        const tealT = p.seed < 0.5;
                        const sizeT = 2.5;
                        const alphaT = tealT ? 0.55 * sh + 0.3 : 0.5 * sh + 0.22;
                        if (e < 0.001 && intenD < 0.07) continue;
                        // interpolate position / size / alpha
                        const x = p.hx + (p.tx - p.hx) * e;
                        const y = p.hy + (p.ty - p.hy) * e;
                        const size = sizeD + (sizeT - sizeD) * e;
                        const alpha = alphaD + (alphaT - alphaD) * e;
                        if (alpha < 0.04) continue;
                        // interpolate colour (white ↔ teal per state)
                        const cD = tealD ? [
                            20,
                            184,
                            138
                        ] : [
                            237,
                            237,
                            237
                        ];
                        const cT = tealT ? [
                            20,
                            184,
                            138
                        ] : [
                            237,
                            237,
                            237
                        ];
                        const r = Math.round(cD[0] + (cT[0] - cD[0]) * e);
                        const g = Math.round(cD[1] + (cT[1] - cD[1]) * e);
                        const b = Math.round(cD[2] + (cT[2] - cD[2]) * e);
                        ctx.fillStyle = `rgba(${r},${g},${b},${alpha.toFixed(3)})`;
                        ctx.fillRect(x - size / 2, y - size / 2, size, size);
                    }
                    if (!still) raf = requestAnimationFrame(draw);
                }
            }["CanvasDiamond.useEffect.draw"];
            raf = requestAnimationFrame(draw);
            return ({
                "CanvasDiamond.useEffect": ()=>cancelAnimationFrame(raf)
            })["CanvasDiamond.useEffect"];
        }
    }["CanvasDiamond.useEffect"], [
        width,
        height,
        word
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: ref,
        className: className,
        style: {
            width,
            height,
            ...style
        }
    }, void 0, false, {
        fileName: "[project]/src/components/CanvasDiamond.tsx",
        lineNumber: 162,
        columnNumber: 5
    }, this);
}
_s(CanvasDiamond, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c = CanvasDiamond;
var _c;
__turbopack_context__.k.register(_c, "CanvasDiamond");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CanvasBurst.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CanvasBurst
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/motion.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function CanvasBurst({ style, className }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CanvasBurst.useEffect": ()=>{
            const cv = ref.current;
            if (!cv) return;
            const ctx = cv.getContext('2d');
            if (!ctx) return;
            const setup = {
                "CanvasBurst.useEffect.setup": ()=>{
                    const dpr = Math.min(window.devicePixelRatio || 1, 2);
                    const w = cv.clientWidth || 800;
                    const h = cv.clientHeight || 380;
                    cv.width = w * dpr;
                    cv.height = h * dpr;
                    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
                    const gap = 11;
                    const cx = w / 2;
                    const cy = h * 0.5;
                    const maxR = Math.hypot(Math.max(cx, w - cx), Math.max(cy, h - cy));
                    const hash = {
                        "CanvasBurst.useEffect.setup.hash": (i, j)=>{
                            const n = Math.sin(i * 12.9898 + j * 78.233) * 43758.5453;
                            return n - Math.floor(n);
                        }
                    }["CanvasBurst.useEffect.setup.hash"];
                    const start = performance.now();
                    const still = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefersReducedMotion"])();
                    let raf = 0;
                    const draw = {
                        "CanvasBurst.useEffect.setup.draw": (t)=>{
                            const time = still ? 0 : (t - start) / 1000;
                            ctx.clearRect(0, 0, w, h);
                            for(let y = 0; y <= h; y += gap){
                                for(let x = 0; x <= w; x += gap){
                                    const dx = x - cx;
                                    const dy = y - cy;
                                    const dist = Math.hypot(dx, dy);
                                    const ang = Math.atan2(dy, dx);
                                    const nd = dist / maxR;
                                    const ring = Math.sin(dist * 0.045 - time * 2.0);
                                    const ray = 0.5 + 0.5 * Math.sin(ang * 16 + Math.sin(time * 0.4) * 1.5);
                                    const fall = Math.max(0, 1 - nd * 1.05);
                                    let inten = fall * (0.4 + 0.45 * ring) * (0.32 + 0.68 * ray);
                                    inten *= 0.55 + 0.45 * hash(Math.round(x / gap), Math.round(y / gap));
                                    inten = Math.max(0, Math.min(1, inten));
                                    if (inten < 0.06) continue;
                                    const sq = 1.0 + inten * 3.0;
                                    const teal = nd < 0.2 && ring > 0.55;
                                    ctx.fillStyle = teal ? `rgba(20,184,138,${(0.45 * inten + 0.2).toFixed(2)})` : `rgba(237,237,237,${(0.58 * inten).toFixed(2)})`;
                                    ctx.fillRect(x - sq / 2, y - sq / 2, sq, sq);
                                }
                            }
                            if (!still) raf = requestAnimationFrame(draw);
                        }
                    }["CanvasBurst.useEffect.setup.draw"];
                    raf = requestAnimationFrame(draw);
                    return ({
                        "CanvasBurst.useEffect.setup": ()=>cancelAnimationFrame(raf)
                    })["CanvasBurst.useEffect.setup"];
                }
            }["CanvasBurst.useEffect.setup"];
            let cleanup = setup();
            const ro = new ResizeObserver({
                "CanvasBurst.useEffect": ()=>{
                    cleanup?.();
                    cleanup = setup();
                }
            }["CanvasBurst.useEffect"]);
            ro.observe(cv);
            return ({
                "CanvasBurst.useEffect": ()=>{
                    cleanup?.();
                    ro.disconnect();
                }
            })["CanvasBurst.useEffect"];
        }
    }["CanvasBurst.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: ref,
        className: className,
        style: {
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            ...style
        }
    }, void 0, false, {
        fileName: "[project]/src/components/CanvasBurst.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_s(CanvasBurst, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c = CanvasBurst;
var _c;
__turbopack_context__.k.register(_c, "CanvasBurst");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CanvasDiagGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CanvasDiagGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/motion.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function CanvasDiagGrid({ style, className }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CanvasDiagGrid.useEffect": ()=>{
            const cv = ref.current;
            if (!cv) return;
            const ctx = cv.getContext('2d');
            if (!ctx) return;
            const setup = {
                "CanvasDiagGrid.useEffect.setup": ()=>{
                    const dpr = Math.min(window.devicePixelRatio || 1, 2);
                    const w = cv.clientWidth || 900;
                    const h = cv.clientHeight || 420;
                    cv.width = w * dpr;
                    cv.height = h * dpr;
                    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
                    const cx = w / 2;
                    const cy = h / 2;
                    const gap = 19 // dot grid spacing
                    ;
                    const freq = 0.048 // band frequency (lower = wider beams)
                    ;
                    const ang = Math.PI * 0.28 // diagonal angle (~50°)
                    ;
                    const cosA = Math.cos(ang);
                    const sinA = Math.sin(ang);
                    const start = performance.now();
                    const still = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefersReducedMotion"])();
                    let raf = 0;
                    const draw = {
                        "CanvasDiagGrid.useEffect.setup.draw": (t)=>{
                            const time = still ? 0 : (t - start) / 1000;
                            // Global breath: ±14% amplitude over ~3.8s
                            const breath = 0.86 + 0.14 * Math.sin(time * 1.65);
                            ctx.fillStyle = '#191919';
                            ctx.fillRect(0, 0, w, h);
                            for(let xi = -1; xi * gap < w + gap * 2; xi++){
                                for(let yi = -1; yi * gap < h + gap * 2; yi++){
                                    const x = xi * gap;
                                    const y = yi * gap;
                                    // Diagonal bands — faster travel in opposite directions
                                    const p1 = x * cosA + y * sinA;
                                    const p2 = x * cosA - y * sinA;
                                    const b1 = Math.max(0, Math.sin(p1 * freq + time * 1.35));
                                    const b2 = Math.max(0, Math.sin(p2 * freq - time * 1.05));
                                    // Per-dot twinkle via grid-position hash
                                    const hash = Math.sin(xi * 127.1 + yi * 311.7) * 43758.5453;
                                    const twinkle = 0.58 + 0.42 * ((Math.sin(time * 3.8 + hash) + 1) / 2);
                                    // Combine beams; softer gamma so more dots stay bright
                                    let inten = (b1 * b1 + b2 * b2) * 0.9;
                                    inten = Math.pow(inten, 0.40);
                                    inten *= twinkle * breath;
                                    // Inverted vignette: edges brighter, center darker
                                    const dx = (x - cx) / (w * 0.52);
                                    const dy = (y - cy) / (h * 0.62);
                                    const edge = Math.min(1.1, Math.hypot(dx, dy));
                                    inten *= Math.max(0, 0.14 + 0.90 * edge);
                                    if (inten < 0.04) continue;
                                    const sq = 1.5 + inten * 2.8;
                                    const alpha = Math.min(0.84, inten * 0.84);
                                    ctx.fillStyle = `rgba(210,210,210,${alpha.toFixed(2)})`;
                                    ctx.fillRect(x - sq / 2, y - sq / 2, sq, sq);
                                }
                            }
                            if (!still) raf = requestAnimationFrame(draw);
                        }
                    }["CanvasDiagGrid.useEffect.setup.draw"];
                    raf = requestAnimationFrame(draw);
                    return ({
                        "CanvasDiagGrid.useEffect.setup": ()=>cancelAnimationFrame(raf)
                    })["CanvasDiagGrid.useEffect.setup"];
                }
            }["CanvasDiagGrid.useEffect.setup"];
            let cleanup = setup();
            const ro = new ResizeObserver({
                "CanvasDiagGrid.useEffect": ()=>{
                    cleanup?.();
                    cleanup = setup();
                }
            }["CanvasDiagGrid.useEffect"]);
            ro.observe(cv);
            return ({
                "CanvasDiagGrid.useEffect": ()=>{
                    cleanup?.();
                    ro.disconnect();
                }
            })["CanvasDiagGrid.useEffect"];
        }
    }["CanvasDiagGrid.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: ref,
        className: className,
        style: {
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            ...style
        }
    }, void 0, false, {
        fileName: "[project]/src/components/CanvasDiagGrid.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
_s(CanvasDiagGrid, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c = CanvasDiagGrid;
var _c;
__turbopack_context__.k.register(_c, "CanvasDiagGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/motion.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Reveal({ children, delay = 0, y = 18, className, style }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [shown, setShown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [reduce, setReduce] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Reveal.useEffect": ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefersReducedMotion"])()) {
                setReduce(true);
                setShown(true);
                return;
            }
            const el = ref.current;
            if (!el) return;
            const obs = new IntersectionObserver({
                "Reveal.useEffect": ([entry])=>setShown(entry.isIntersecting)
            }["Reveal.useEffect"], {
                threshold: 0.15,
                rootMargin: '0px 0px -8% 0px'
            });
            obs.observe(el);
            return ({
                "Reveal.useEffect": ()=>obs.disconnect()
            })["Reveal.useEffect"];
        }
    }["Reveal.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: className,
        style: {
            opacity: shown ? 1 : 0,
            transform: shown ? 'none' : `translateY(${y}px)`,
            transition: reduce ? 'none' : `opacity .6s ease ${delay}ms, transform .6s cubic-bezier(.22,.61,.36,1) ${delay}ms`,
            willChange: 'opacity, transform',
            ...style
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Reveal.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(Reveal, "TWdxpvqbY6+gvSfdysKREKUE+vg=");
_c = Reveal;
var _c;
__turbopack_context__.k.register(_c, "Reveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/screens/Landing.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Landing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CanvasDiamond$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CanvasDiamond.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CanvasBurst$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CanvasBurst.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CanvasDiagGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CanvasDiagGrid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Reveal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const MONO = "var(--font-mono,'JetBrains Mono',monospace)";
const SERIF = "var(--font-serif,'Instrument Serif',serif)";
const SANS = "var(--font-sans,'Inter',sans-serif)";
const FEATURES = [
    {
        title: 'Zero-knowledge proofs',
        desc: "Prove the exploit is real without revealing a single byte of how you did it."
    },
    {
        title: 'On-chain verification',
        desc: "RISC Zero receipts are verified inside the Soroban contract — no trusted middleman."
    },
    {
        title: 'Automatic payout',
        desc: "A valid proof releases the escrow in the same transaction. No negotiation, no delay."
    },
    {
        title: 'Open-source rules',
        desc: "Each bounty's ImageID pins the exact guest program that defines a valid break."
    },
    {
        title: 'No disclosure risk',
        desc: "The vulnerability is proven, not published. Nothing leaks to the contract or the chain."
    },
    {
        title: 'Permissionless',
        desc: "Anyone can open a bounty or claim one. The contract is the only arbiter."
    }
];
const STEPS = [
    {
        n: '01',
        title: 'Open a bounty',
        body: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                "A creator locks a reward against a deployed contract and publishes the guest ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                    style: {
                        fontFamily: MONO,
                        color: '#EDEDED',
                        background: 'none'
                    },
                    children: "ImageID"
                }, void 0, false, {
                    fileName: "[project]/src/components/screens/Landing.tsx",
                    lineNumber: 24,
                    columnNumber: 126
                }, ("TURBOPACK compile-time value", void 0)),
                " that defines a valid break."
            ]
        }, void 0, true)
    },
    {
        n: '02',
        title: 'Break it locally',
        body: "A hunter finds the exploit and runs the open-source guest program on their own machine — the secret input never leaves it."
    },
    {
        n: '03',
        title: 'Generate a proof',
        body: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                "RISC Zero produces a receipt — a ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                    style: {
                        fontFamily: MONO,
                        color: '#EDEDED',
                        background: 'none'
                    },
                    children: "journal + seal"
                }, void 0, false, {
                    fileName: "[project]/src/components/screens/Landing.tsx",
                    lineNumber: 26,
                    columnNumber: 82
                }, ("TURBOPACK compile-time value", void 0)),
                " — that proves the break happened, with nothing about how."
            ]
        }, void 0, true)
    },
    {
        n: '04',
        title: 'Verify on-chain',
        body: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                "The hunter submits the receipt; the Soroban contract verifies it against the ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                    style: {
                        fontFamily: MONO,
                        color: '#EDEDED',
                        background: 'none'
                    },
                    children: "ImageID"
                }, void 0, false, {
                    fileName: "[project]/src/components/screens/Landing.tsx",
                    lineNumber: 27,
                    columnNumber: 126
                }, ("TURBOPACK compile-time value", void 0)),
                " and the victim binding."
            ]
        }, void 0, true)
    },
    {
        n: '05',
        title: 'Get paid',
        body: "On a valid proof, the contract releases the escrow to the hunter automatically — in the same transaction."
    }
];
function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth'
    });
}
function Landing({ go, connectWallet }) {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // scroll-spy: highlight nav link for the section in view
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Landing.useEffect": ()=>{
            const ids = [
                'features',
                'howitworks'
            ];
            const els = ids.map({
                "Landing.useEffect.els": (id)=>document.getElementById(id)
            }["Landing.useEffect.els"]).filter(Boolean);
            if (!els.length) return;
            const obs = new IntersectionObserver({
                "Landing.useEffect": (entries)=>{
                    const vis = entries.filter({
                        "Landing.useEffect": (e)=>e.isIntersecting
                    }["Landing.useEffect"]).sort({
                        "Landing.useEffect": (a, b)=>b.intersectionRatio - a.intersectionRatio
                    }["Landing.useEffect"])[0];
                    if (vis) setActive(vis.target.id);
                    else if (window.scrollY < 300) setActive('');
                }
            }["Landing.useEffect"], {
                rootMargin: '-45% 0px -45% 0px',
                threshold: [
                    0,
                    0.25,
                    0.5,
                    1
                ]
            });
            els.forEach({
                "Landing.useEffect": (el)=>obs.observe(el)
            }["Landing.useEffect"]);
            return ({
                "Landing.useEffect": ()=>obs.disconnect()
            })["Landing.useEffect"];
        }
    }["Landing.useEffect"], []);
    const navLink = (id)=>({
            color: active === id ? '#EDEDED' : '#8A8A8A'
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: '#0A0A0A',
            color: '#EDEDED'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'sticky',
                    top: 0,
                    zIndex: 30,
                    background: 'rgba(10,10,10,.85)',
                    backdropFilter: 'blur(8px)',
                    borderBottom: '1px solid #242424'
                },
                className: "flex items-center justify-between px-5 md:px-12 py-[18px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-8 md:gap-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>window.scrollTo({
                                        top: 0,
                                        behavior: 'smooth'
                                    }),
                                className: "vbtn",
                                style: {
                                    fontFamily: MONO,
                                    fontWeight: 700,
                                    letterSpacing: '.34em',
                                    cursor: 'pointer',
                                    color: '#EDEDED',
                                    fontSize: 17
                                },
                                children: "VEIL"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/Landing.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex gap-[30px]",
                                children: [
                                    {
                                        label: 'Features',
                                        id: 'features',
                                        fn: ()=>scrollTo('features')
                                    },
                                    {
                                        label: 'How it works',
                                        id: 'howitworks',
                                        fn: ()=>scrollTo('howitworks')
                                    },
                                    {
                                        label: 'Bounties',
                                        id: '',
                                        fn: ()=>go('hunt')
                                    },
                                    {
                                        label: 'Docs',
                                        id: '',
                                        fn: ()=>{}
                                    }
                                ].map(({ label, id, fn })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        onClick: fn,
                                        className: "vlink",
                                        style: {
                                            fontFamily: MONO,
                                            fontSize: 13,
                                            letterSpacing: '.02em',
                                            cursor: 'pointer',
                                            ...navLink(id)
                                        },
                                        children: label
                                    }, label, false, {
                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/Landing.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/Landing.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: connectWallet,
                        className: "vbtn vbtn-ghost hidden md:inline-flex items-center gap-2",
                        style: {
                            background: 'transparent',
                            color: '#EDEDED',
                            border: '1px solid #333',
                            padding: '10px 18px',
                            fontFamily: MONO,
                            fontSize: 13,
                            letterSpacing: '.02em',
                            borderRadius: 2,
                            cursor: 'pointer'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    width: 6,
                                    height: 6,
                                    borderRadius: '50%',
                                    background: '#14B88A',
                                    display: 'inline-block'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/Landing.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            "Connect wallet"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/Landing.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setMenuOpen((o)=>!o),
                        className: "vbtn flex md:hidden items-center justify-center",
                        "aria-label": "Menu",
                        "aria-expanded": menuOpen,
                        style: {
                            background: 'transparent',
                            color: '#EDEDED',
                            border: '1px solid #333',
                            width: 40,
                            height: 38,
                            borderRadius: 2,
                            cursor: 'pointer',
                            fontSize: 16
                        },
                        children: menuOpen ? '✕' : '☰'
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/Landing.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/Landing.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden screen-enter",
                style: {
                    position: 'sticky',
                    top: 73,
                    zIndex: 29,
                    background: '#0E0E0E',
                    borderBottom: '1px solid #242424'
                },
                children: [
                    {
                        label: 'Features',
                        fn: ()=>{
                            scrollTo('features');
                            setMenuOpen(false);
                        }
                    },
                    {
                        label: 'How it works',
                        fn: ()=>{
                            scrollTo('howitworks');
                            setMenuOpen(false);
                        }
                    },
                    {
                        label: 'Bounties',
                        fn: ()=>go('hunt')
                    },
                    {
                        label: 'Create bounty',
                        fn: ()=>go('create')
                    }
                ].map(({ label, fn })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: fn,
                        className: "vlink px-5 py-4",
                        style: {
                            fontFamily: MONO,
                            fontSize: 14,
                            color: '#8A8A8A',
                            borderBottom: '1px solid #1a1a1a',
                            cursor: 'pointer'
                        },
                        children: label
                    }, label, false, {
                        fileName: "[project]/src/components/screens/Landing.tsx",
                        lineNumber: 124,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/screens/Landing.tsx",
                lineNumber: 117,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    overflow: 'hidden'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            inset: 0,
                            pointerEvents: 'none',
                            opacity: .35,
                            backgroundImage: 'linear-gradient(#161616 1px,transparent 1px),linear-gradient(90deg,#161616 1px,transparent 1px)',
                            backgroundSize: '64px 64px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/Landing.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_600px] items-center gap-10 px-5 md:px-12 pt-12 md:pt-24 pb-10 md:pb-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-flex items-center gap-2 mb-6 md:mb-9",
                                        style: {
                                            border: '1px solid #242424',
                                            padding: '6px 12px',
                                            borderRadius: 2
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    width: 5,
                                                    height: 5,
                                                    background: '#14B88A',
                                                    display: 'inline-block'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/Landing.tsx",
                                                lineNumber: 146,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: MONO,
                                                    fontSize: 11,
                                                    color: '#8A8A8A',
                                                    letterSpacing: '.14em',
                                                    textTransform: 'uppercase'
                                                },
                                                children: "Trustless proof-of-exploit · Stellar"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/Landing.tsx",
                                                lineNumber: 147,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-[48px] md:text-[84px] mb-5 md:mb-7",
                                        style: {
                                            fontFamily: SERIF,
                                            fontWeight: 400,
                                            lineHeight: .98,
                                            letterSpacing: '-.01em',
                                            color: '#EDEDED',
                                            margin: 0
                                        },
                                        children: [
                                            "Prove the exploit.",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/components/screens/Landing.tsx",
                                                lineNumber: 155,
                                                columnNumber: 33
                                            }, this),
                                            "Reveal nothing."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[15px] md:text-[17px] mb-7 md:mb-10",
                                        style: {
                                            lineHeight: 1.6,
                                            color: '#8A8A8A',
                                            maxWidth: 480,
                                            fontFamily: SANS,
                                            margin: 0
                                        },
                                        children: "Hunters prove they broke your contract without leaking how. The contract verifies the zero-knowledge proof on-chain and pays out automatically."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                        lineNumber: 157,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row gap-3 md:gap-[14px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>go('hunt'),
                                                className: "vbtn",
                                                style: {
                                                    background: '#EDEDED',
                                                    color: '#0A0A0A',
                                                    border: 'none',
                                                    padding: '14px 24px',
                                                    fontFamily: SANS,
                                                    fontWeight: 600,
                                                    fontSize: 14,
                                                    borderRadius: 2,
                                                    cursor: 'pointer'
                                                },
                                                children: "Explore bounties"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/Landing.tsx",
                                                lineNumber: 164,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>scrollTo('howitworks'),
                                                className: "vbtn vbtn-ghost",
                                                style: {
                                                    background: 'transparent',
                                                    color: '#EDEDED',
                                                    border: '1px solid #333',
                                                    padding: '14px 24px',
                                                    fontFamily: SANS,
                                                    fontWeight: 500,
                                                    fontSize: 14,
                                                    borderRadius: 2,
                                                    cursor: 'pointer'
                                                },
                                                children: "How it works"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/Landing.tsx",
                                                lineNumber: 167,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                        lineNumber: 163,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/Landing.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex relative items-center justify-center",
                                style: {
                                    width: 600,
                                    height: 560
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            fontFamily: MONO,
                                            fontSize: 10,
                                            color: '#5A5A5A',
                                            letterSpacing: '.14em'
                                        },
                                        children: "ENCRYPTED · ZK-RECEIPT"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                        lineNumber: 177,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: 14,
                                            height: 14,
                                            borderLeft: '1px solid #333',
                                            borderTop: '1px solid #333'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            top: 0,
                                            right: 0,
                                            width: 14,
                                            height: 14,
                                            borderRight: '1px solid #333',
                                            borderTop: '1px solid #333'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                        lineNumber: 179,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            width: 14,
                                            height: 14,
                                            borderLeft: '1px solid #333',
                                            borderBottom: '1px solid #333'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                        lineNumber: 180,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            bottom: 0,
                                            right: 0,
                                            width: 14,
                                            height: 14,
                                            borderRight: '1px solid #333',
                                            borderBottom: '1px solid #333'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                        lineNumber: 181,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CanvasDiamond$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        width: 540,
                                        height: 540
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                        lineNumber: 182,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            bottom: 0,
                                            right: 0,
                                            fontFamily: MONO,
                                            fontSize: 10,
                                            color: '#5A5A5A',
                                            letterSpacing: '.14em'
                                        },
                                        children: "SEAL VALID ✓"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                        lineNumber: 183,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/Landing.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/Landing.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex md:hidden justify-center relative px-5 pb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    top: 8,
                                    left: 20,
                                    fontFamily: MONO,
                                    fontSize: 9,
                                    color: '#5A5A5A',
                                    letterSpacing: '.12em'
                                },
                                children: "ENCRYPTED · ZK-RECEIPT"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/Landing.tsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CanvasDiamond$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                width: 300,
                                height: 300
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/Landing.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/Landing.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/Landing.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3 md:gap-[14px] px-5 md:px-12 py-[22px]",
                style: {
                    borderTop: '1px solid #242424'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: MONO,
                            fontSize: 11,
                            color: '#5A5A5A',
                            letterSpacing: '.14em',
                            textTransform: 'uppercase'
                        },
                        children: "Built on"
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/Landing.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this),
                    [
                        'Stellar',
                        'Soroban',
                        'RISC Zero',
                        'zero-knowledge'
                    ].map((t, i, a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                display: 'contents'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: MONO,
                                        fontSize: 12,
                                        color: '#8A8A8A'
                                    },
                                    children: t
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/Landing.tsx",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, this),
                                i < a.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: '#333'
                                    },
                                    children: "·"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/Landing.tsx",
                                    lineNumber: 202,
                                    columnNumber: 34
                                }, this)
                            ]
                        }, t, true, {
                            fileName: "[project]/src/components/screens/Landing.tsx",
                            lineNumber: 200,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/Landing.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "features",
                style: {
                    scrollMarginTop: 64,
                    borderTop: '1px solid #242424'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'relative',
                            overflow: 'hidden',
                            borderBottom: '1px solid #242424'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CanvasBurst$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/components/screens/Landing.tsx",
                                lineNumber: 211,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'radial-gradient(ellipse 72% 88% at 50% 50%,transparent 22%,#0A0A0A 78%)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/Landing.tsx",
                                lineNumber: 212,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "relative text-center max-w-[840px] mx-auto px-5 md:px-10 py-12 md:py-[80px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-flex items-center gap-2 mb-6",
                                        style: {
                                            border: '1px solid #242424',
                                            background: 'rgba(10,10,10,.5)',
                                            padding: '6px 12px',
                                            borderRadius: 2
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    width: 5,
                                                    height: 5,
                                                    background: '#14B88A',
                                                    display: 'inline-block'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/Landing.tsx",
                                                lineNumber: 217,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: MONO,
                                                    fontSize: 11,
                                                    color: '#8A8A8A',
                                                    letterSpacing: '.14em',
                                                    textTransform: 'uppercase'
                                                },
                                                children: "Features"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/Landing.tsx",
                                                lineNumber: 218,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                        lineNumber: 214,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[38px] md:text-[62px] mb-5 md:mb-6",
                                        style: {
                                            fontFamily: SERIF,
                                            fontWeight: 400,
                                            lineHeight: 1.02,
                                            letterSpacing: '-.01em',
                                            color: '#EDEDED',
                                            margin: 0
                                        },
                                        children: [
                                            "Everything the proof needs.",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/components/screens/Landing.tsx",
                                                lineNumber: 223,
                                                columnNumber: 42
                                            }, this),
                                            "Nothing it doesn't."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                        lineNumber: 220,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[15px] md:text-[17px] max-w-[560px] mx-auto",
                                        style: {
                                            lineHeight: 1.6,
                                            color: '#8A8A8A',
                                            fontFamily: SANS
                                        },
                                        children: "Veil turns a private exploit into an on-chain payout — without the vulnerability ever leaving the hunter's machine."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                        lineNumber: 225,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/Landing.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/Landing.tsx",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-[1100px] mx-auto px-5 md:px-10 py-10 md:py-14 pb-16 md:pb-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5",
                            children: FEATURES.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    delay: i % 2 * 90,
                                    className: "h-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "vcard flex flex-col h-full p-6 md:p-8",
                                        style: {
                                            background: '#111111',
                                            border: '1px solid #242424',
                                            borderRadius: 12
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: MONO,
                                                            fontSize: 15,
                                                            color: '#14B88A',
                                                            flexShrink: 0
                                                        },
                                                        children: "<>"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[22px] md:text-[26px]",
                                                        style: {
                                                            fontFamily: SERIF,
                                                            fontWeight: 400,
                                                            color: '#EDEDED',
                                                            lineHeight: 1.1
                                                        },
                                                        children: f.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                                        lineNumber: 244,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/Landing.tsx",
                                                lineNumber: 242,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[13px] md:text-[14px] mb-5",
                                                style: {
                                                    lineHeight: 1.65,
                                                    color: '#8A8A8A',
                                                    margin: '0 0 20px',
                                                    fontFamily: SANS
                                                },
                                                children: f.desc
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/Landing.tsx",
                                                lineNumber: 248,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-auto",
                                                style: {
                                                    background: '#0D0D0D',
                                                    border: '1px solid #1c1c1c',
                                                    borderRadius: 8,
                                                    overflow: 'hidden'
                                                },
                                                children: [
                                                    i === 0 && /* ZK proof: secret → zkVM → receipt */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-[1fr_44px_1fr] items-center gap-0 p-4 md:p-5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    border: '1px solid rgba(20,184,138,.28)',
                                                                    borderRadius: 6,
                                                                    padding: '14px 12px',
                                                                    background: 'rgba(20,184,138,.04)'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontFamily: MONO,
                                                                            fontSize: 9,
                                                                            color: '#14B88A',
                                                                            letterSpacing: '.1em',
                                                                            marginBottom: 10
                                                                        },
                                                                        children: "SECRET INPUT"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                                                        lineNumber: 257,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontFamily: MONO,
                                                                            fontSize: 14,
                                                                            color: '#EDEDED',
                                                                            marginBottom: 5
                                                                        },
                                                                        children: [
                                                                            "a = ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: '#3A3A3A'
                                                                                },
                                                                                children: "████"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/screens/Landing.tsx",
                                                                                lineNumber: 258,
                                                                                columnNumber: 112
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                                                        lineNumber: 258,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontFamily: MONO,
                                                                            fontSize: 14,
                                                                            color: '#EDEDED',
                                                                            marginBottom: 10
                                                                        },
                                                                        children: [
                                                                            "b = ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: '#3A3A3A'
                                                                                },
                                                                                children: "████"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/screens/Landing.tsx",
                                                                                lineNumber: 259,
                                                                                columnNumber: 113
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                                                        lineNumber: 259,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontFamily: MONO,
                                                                            fontSize: 9,
                                                                            color: '#4A4A4A'
                                                                        },
                                                                        children: "never transmitted"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                                                        lineNumber: 260,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/screens/Landing.tsx",
                                                                lineNumber: 256,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col items-center justify-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontFamily: MONO,
                                                                            fontSize: 9,
                                                                            color: '#4A4A4A'
                                                                        },
                                                                        children: "zkVM"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                                                        lineNumber: 263,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            color: '#333',
                                                                            fontSize: 16
                                                                        },
                                                                        children: "→"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                                                        lineNumber: 264,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/screens/Landing.tsx",
                                                                lineNumber: 262,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    border: '1px solid #242424',
                                                                    borderRadius: 6,
                                                                    padding: '14px 12px',
                                                                    background: '#161616'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontFamily: MONO,
                                                                            fontSize: 9,
                                                                            color: '#5A5A5A',
                                                                            letterSpacing: '.1em',
                                                                            marginBottom: 10
                                                                        },
                                                                        children: "RECEIPT"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                                                        lineNumber: 267,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontFamily: MONO,
                                                                            fontSize: 12,
                                                                            color: '#EDEDED',
                                                                            marginBottom: 6
                                                                        },
                                                                        children: [
                                                                            "journal  ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: '#14B88A'
                                                                                },
                                                                                children: "✓"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/screens/Landing.tsx",
                                                                                lineNumber: 268,
                                                                                columnNumber: 127
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                                                        lineNumber: 268,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontFamily: MONO,
                                                                            fontSize: 12,
                                                                            color: '#EDEDED',
                                                                            marginBottom: 10
                                                                        },
                                                                        children: [
                                                                            "seal     ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: '#14B88A'
                                                                                },
                                                                                children: "✓"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/screens/Landing.tsx",
                                                                                lineNumber: 269,
                                                                                columnNumber: 143
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                                                        lineNumber: 269,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontFamily: MONO,
                                                                            fontSize: 9,
                                                                            color: '#4A4A4A'
                                                                        },
                                                                        children: "submitted on-chain"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                                                        lineNumber: 270,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/screens/Landing.tsx",
                                                                lineNumber: 266,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                                        lineNumber: 255,
                                                        columnNumber: 21
                                                    }, this),
                                                    i === 1 && /* On-chain verification: contract call result */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-4 md:p-5",
                                                        style: {
                                                            fontFamily: MONO
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 10,
                                                                    color: '#4A4A4A',
                                                                    marginBottom: 14,
                                                                    letterSpacing: '.06em'
                                                                },
                                                                children: "bounty-verifier.claim()"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/screens/Landing.tsx",
                                                                lineNumber: 277,
                                                                columnNumber: 23
                                                            }, this),
                                                            [
                                                                {
                                                                    k: 'image_id',
                                                                    v: '0x9a3f…bc1d'
                                                                },
                                                                {
                                                                    k: 'victim_id',
                                                                    v: 'CA4F…9XQ2'
                                                                },
                                                                {
                                                                    k: 'not claimed',
                                                                    v: 'true'
                                                                }
                                                            ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between py-2",
                                                                    style: {
                                                                        borderBottom: '1px solid #1a1a1a',
                                                                        fontSize: 11.5
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                color: '#5A5A5A'
                                                                            },
                                                                            children: r.k
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/screens/Landing.tsx",
                                                                            lineNumber: 284,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                color: '#EDEDED'
                                                                            },
                                                                            children: [
                                                                                r.v,
                                                                                " ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        color: '#14B88A'
                                                                                    },
                                                                                    children: "✓"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/screens/Landing.tsx",
                                                                                    lineNumber: 285,
                                                                                    columnNumber: 73
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/screens/Landing.tsx",
                                                                            lineNumber: 285,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, r.k, true, {
                                                                    fileName: "[project]/src/components/screens/Landing.tsx",
                                                                    lineNumber: 283,
                                                                    columnNumber: 25
                                                                }, this)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 px-3 py-2",
                                                                style: {
                                                                    background: 'rgba(20,184,138,.07)',
                                                                    border: '1px solid rgba(20,184,138,.25)',
                                                                    borderRadius: 4,
                                                                    fontSize: 11,
                                                                    color: '#14B88A'
                                                                },
                                                                children: "PROOF VALID → transfer 2,500 XLM"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/screens/Landing.tsx",
                                                                lineNumber: 288,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                                        lineNumber: 276,
                                                        columnNumber: 21
                                                    }, this),
                                                    i === 2 && /* Automatic payout: wallet tx */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-4 md:p-5",
                                                        style: {
                                                            fontFamily: MONO
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 mb-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            width: 7,
                                                                            height: 7,
                                                                            borderRadius: '50%',
                                                                            background: '#14B88A',
                                                                            display: 'inline-block'
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                                                        lineNumber: 297,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontSize: 10,
                                                                            color: '#14B88A'
                                                                        },
                                                                        children: "confirmed · block #8,247,391"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                                                        lineNumber: 298,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/screens/Landing.tsx",
                                                                lineNumber: 296,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 28,
                                                                    color: '#EDEDED',
                                                                    fontWeight: 600,
                                                                    letterSpacing: '-.01em',
                                                                    marginBottom: 3
                                                                },
                                                                children: "+2,500 XLM"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/screens/Landing.tsx",
                                                                lineNumber: 300,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 11,
                                                                    color: '#4A4A4A',
                                                                    marginBottom: 16
                                                                },
                                                                children: "≈ $412.50 USD"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/screens/Landing.tsx",
                                                                lineNumber: 301,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 11,
                                                                    color: '#5A5A5A'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            marginBottom: 5
                                                                        },
                                                                        children: "From: bounty-verifier CA4F…"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                                                        lineNumber: 303,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: "To:   GD7X…K2P9"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                                                        lineNumber: 304,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/screens/Landing.tsx",
                                                                lineNumber: 302,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                                        lineNumber: 295,
                                                        columnNumber: 21
                                                    }, this),
                                                    i === 3 && /* Open-source rules: code block */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-4 md:p-5",
                                                        children: [
                                                            [
                                                                [
                                                                    '1',
                                                                    'fn is_broken(',
                                                                    '#8A8A8A'
                                                                ],
                                                                [
                                                                    '2',
                                                                    '  a: u128, b: u128,',
                                                                    '#8A8A8A'
                                                                ],
                                                                [
                                                                    '3',
                                                                    '  target: u128) -> bool {',
                                                                    '#8A8A8A'
                                                                ],
                                                                [
                                                                    '4',
                                                                    '  a * b == target',
                                                                    '#EDEDED'
                                                                ],
                                                                [
                                                                    '5',
                                                                    '  && a != 1 && b != 1',
                                                                    '#EDEDED'
                                                                ],
                                                                [
                                                                    '6',
                                                                    '}',
                                                                    '#8A8A8A'
                                                                ]
                                                            ].map(([n, code, clr])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex gap-4",
                                                                    style: {
                                                                        fontFamily: MONO,
                                                                        fontSize: 11.5,
                                                                        lineHeight: 1.85
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                color: '#333',
                                                                                width: 12,
                                                                                flexShrink: 0
                                                                            },
                                                                            children: n
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/screens/Landing.tsx",
                                                                            lineNumber: 320,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                color: clr
                                                                            },
                                                                            children: code
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/screens/Landing.tsx",
                                                                            lineNumber: 321,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, n, true, {
                                                                    fileName: "[project]/src/components/screens/Landing.tsx",
                                                                    lineNumber: 319,
                                                                    columnNumber: 25
                                                                }, this)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 px-3 py-2",
                                                                style: {
                                                                    background: '#161616',
                                                                    border: '1px solid #1c1c1c',
                                                                    borderRadius: 4,
                                                                    fontFamily: MONO,
                                                                    fontSize: 10.5,
                                                                    color: '#5A5A5A'
                                                                },
                                                                children: [
                                                                    "image_id: ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            color: '#EDEDED'
                                                                        },
                                                                        children: "0x9a3f…bc1d"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                                                        lineNumber: 325,
                                                                        columnNumber: 35
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/screens/Landing.tsx",
                                                                lineNumber: 324,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                                        lineNumber: 310,
                                                        columnNumber: 21
                                                    }, this),
                                                    i === 4 && /* No disclosure risk: hunter vs chain view */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-2 gap-3 p-4 md:p-5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    border: '1px solid rgba(20,184,138,.22)',
                                                                    borderRadius: 6,
                                                                    padding: '12px 11px',
                                                                    background: 'rgba(20,184,138,.03)'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontFamily: MONO,
                                                                            fontSize: 9,
                                                                            color: '#14B88A',
                                                                            letterSpacing: '.1em',
                                                                            marginBottom: 10
                                                                        },
                                                                        children: "HUNTER (LOCAL)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                                                        lineNumber: 333,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    [
                                                                        'a = 1000',
                                                                        'b = 1000',
                                                                        't = 1_000_000'
                                                                    ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                fontFamily: MONO,
                                                                                fontSize: 11.5,
                                                                                color: '#EDEDED',
                                                                                marginBottom: 5
                                                                            },
                                                                            children: l
                                                                        }, l, false, {
                                                                            fileName: "[project]/src/components/screens/Landing.tsx",
                                                                            lineNumber: 335,
                                                                            columnNumber: 27
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/screens/Landing.tsx",
                                                                lineNumber: 332,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    border: '1px solid #1c1c1c',
                                                                    borderRadius: 6,
                                                                    padding: '12px 11px',
                                                                    background: '#161616'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontFamily: MONO,
                                                                            fontSize: 9,
                                                                            color: '#4A4A4A',
                                                                            letterSpacing: '.1em',
                                                                            marginBottom: 10
                                                                        },
                                                                        children: "CHAIN SEES"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                                                        lineNumber: 339,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    [
                                                                        'a = [hidden]',
                                                                        'b = [hidden]'
                                                                    ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                fontFamily: MONO,
                                                                                fontSize: 11.5,
                                                                                color: '#2E2E2E',
                                                                                marginBottom: 5
                                                                            },
                                                                            children: l
                                                                        }, l, false, {
                                                                            fileName: "[project]/src/components/screens/Landing.tsx",
                                                                            lineNumber: 341,
                                                                            columnNumber: 27
                                                                        }, this)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontFamily: MONO,
                                                                            fontSize: 11.5,
                                                                            color: '#14B88A',
                                                                            marginBottom: 5
                                                                        },
                                                                        children: "valid = true ✓"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                                                        lineNumber: 343,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/screens/Landing.tsx",
                                                                lineNumber: 338,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                                        lineNumber: 331,
                                                        columnNumber: 21
                                                    }, this),
                                                    i === 5 && /* Permissionless: open access table */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-4 md:p-5",
                                                        style: {
                                                            fontFamily: MONO
                                                        },
                                                        children: [
                                                            [
                                                                {
                                                                    role: 'Creator ',
                                                                    action: 'fund(reward)',
                                                                    teal: false
                                                                },
                                                                {
                                                                    role: 'Hunter  ',
                                                                    action: 'submit(receipt)',
                                                                    teal: false
                                                                },
                                                                {
                                                                    role: 'Contract',
                                                                    action: 'verify() → pay()',
                                                                    teal: true
                                                                }
                                                            ].map((r, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between py-3",
                                                                    style: {
                                                                        borderBottom: j < 2 ? '1px solid #1a1a1a' : 'none',
                                                                        fontSize: 11.5
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                color: '#5A5A5A'
                                                                            },
                                                                            children: r.role
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/screens/Landing.tsx",
                                                                            lineNumber: 358,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                color: '#333',
                                                                                fontSize: 11
                                                                            },
                                                                            children: "→"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/screens/Landing.tsx",
                                                                            lineNumber: 359,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                color: r.teal ? '#14B88A' : '#EDEDED'
                                                                            },
                                                                            children: r.action
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/screens/Landing.tsx",
                                                                            lineNumber: 360,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, j, true, {
                                                                    fileName: "[project]/src/components/screens/Landing.tsx",
                                                                    lineNumber: 355,
                                                                    columnNumber: 25
                                                                }, this)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3",
                                                                style: {
                                                                    fontSize: 9,
                                                                    color: '#383838',
                                                                    letterSpacing: '.12em'
                                                                },
                                                                children: "NO KYC · NO APPROVAL · NO TRUST REQUIRED"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/screens/Landing.tsx",
                                                                lineNumber: 363,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                                        lineNumber: 349,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/Landing.tsx",
                                                lineNumber: 252,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                        lineNumber: 238,
                                        columnNumber: 15
                                    }, this)
                                }, f.title, false, {
                                    fileName: "[project]/src/components/screens/Landing.tsx",
                                    lineNumber: 237,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/screens/Landing.tsx",
                            lineNumber: 235,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/Landing.tsx",
                        lineNumber: 234,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/Landing.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "howitworks",
                style: {
                    scrollMarginTop: 64,
                    borderTop: '1px solid #242424'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'relative',
                            overflow: 'hidden',
                            borderBottom: '1px solid #242424'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CanvasBurst$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/components/screens/Landing.tsx",
                                lineNumber: 380,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'radial-gradient(ellipse 72% 88% at 50% 50%,transparent 22%,#0A0A0A 78%)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/Landing.tsx",
                                lineNumber: 381,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "relative text-center max-w-[840px] mx-auto px-5 md:px-10 py-12 md:py-[80px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-flex items-center gap-2 mb-6",
                                        style: {
                                            border: '1px solid #242424',
                                            background: 'rgba(10,10,10,.5)',
                                            padding: '6px 12px',
                                            borderRadius: 2
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    width: 5,
                                                    height: 5,
                                                    background: '#14B88A',
                                                    display: 'inline-block'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/Landing.tsx",
                                                lineNumber: 386,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: MONO,
                                                    fontSize: 11,
                                                    color: '#8A8A8A',
                                                    letterSpacing: '.14em',
                                                    textTransform: 'uppercase'
                                                },
                                                children: "How it works"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/Landing.tsx",
                                                lineNumber: 387,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                        lineNumber: 383,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[36px] md:text-[58px] mb-7",
                                        style: {
                                            fontFamily: SERIF,
                                            fontWeight: 400,
                                            lineHeight: 1.02,
                                            letterSpacing: '-.01em',
                                            color: '#EDEDED',
                                            margin: 0
                                        },
                                        children: [
                                            "From exploit to payout,",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/components/screens/Landing.tsx",
                                                lineNumber: 392,
                                                columnNumber: 38
                                            }, this),
                                            "in five steps."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                        lineNumber: 389,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center justify-center gap-2 md:gap-3 mt-6",
                                        children: [
                                            {
                                                label: 'secret input',
                                                teal: true
                                            },
                                            {
                                                label: '→',
                                                arrow: true
                                            },
                                            {
                                                label: 'zk proof',
                                                teal: false
                                            },
                                            {
                                                label: '→',
                                                arrow: true
                                            },
                                            {
                                                label: 'receipt',
                                                teal: false
                                            },
                                            {
                                                label: '→',
                                                arrow: true
                                            },
                                            {
                                                label: 'on-chain verify',
                                                teal: false
                                            },
                                            {
                                                label: '→',
                                                arrow: true
                                            },
                                            {
                                                label: 'payout',
                                                teal: true
                                            }
                                        ].map((item, i)=>item.arrow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: '#5A5A5A',
                                                    fontFamily: 'monospace',
                                                    fontSize: 13
                                                },
                                                children: "→"
                                            }, i, false, {
                                                fileName: "[project]/src/components/screens/Landing.tsx",
                                                lineNumber: 408,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[9px] md:text-[11px] px-2 py-1 md:px-3 md:py-1.5",
                                                style: {
                                                    fontFamily: MONO,
                                                    color: item.teal ? '#14B88A' : '#8A8A8A',
                                                    border: `1px solid ${item.teal ? 'rgba(20,184,138,.35)' : '#242424'}`,
                                                    background: item.teal ? 'rgba(20,184,138,.06)' : 'transparent',
                                                    borderRadius: 2
                                                },
                                                children: item.label
                                            }, i, false, {
                                                fileName: "[project]/src/components/screens/Landing.tsx",
                                                lineNumber: 409,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                        lineNumber: 395,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/Landing.tsx",
                                lineNumber: 382,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/Landing.tsx",
                        lineNumber: 379,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-[820px] mx-auto px-5 md:px-10 py-6 pb-16 md:py-8 md:pb-20",
                        children: STEPS.map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                delay: i * 70,
                                y: 14,
                                className: "grid grid-cols-[46px_1fr] md:grid-cols-[72px_1fr] gap-4 md:gap-7 py-5 md:py-[30px]",
                                style: {
                                    borderBottom: i < STEPS.length - 1 ? '1px solid #1c1c1c' : 'none'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[32px] md:text-[42px]",
                                        style: {
                                            fontFamily: SERIF,
                                            color: '#14B88A',
                                            lineHeight: 1
                                        },
                                        children: step.n
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                        lineNumber: 431,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[15px] md:text-[19px] mb-1.5 md:mb-2",
                                                style: {
                                                    fontFamily: SANS,
                                                    fontWeight: 600,
                                                    color: '#EDEDED'
                                                },
                                                children: step.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/Landing.tsx",
                                                lineNumber: 435,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[12.5px] md:text-[14.5px]",
                                                style: {
                                                    lineHeight: 1.6,
                                                    color: '#8A8A8A',
                                                    margin: 0,
                                                    fontFamily: SANS
                                                },
                                                children: step.body
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/Landing.tsx",
                                                lineNumber: 438,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                        lineNumber: 434,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, step.n, true, {
                                fileName: "[project]/src/components/screens/Landing.tsx",
                                lineNumber: 427,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/Landing.tsx",
                        lineNumber: 425,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/Landing.tsx",
                lineNumber: 377,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    overflow: 'hidden',
                    borderTop: '1px solid #242424'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CanvasDiagGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/components/screens/Landing.tsx",
                        lineNumber: 449,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            inset: 0,
                            background: 'radial-gradient(ellipse 55% 75% at 50% 50%, rgba(10,10,10,.72) 0%, rgba(10,10,10,.18) 62%, transparent 100%)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/Landing.tsx",
                        lineNumber: 451,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "relative text-center px-5 md:px-10 py-20 md:py-32",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[32px] md:text-[58px]",
                                style: {
                                    fontFamily: SANS,
                                    fontWeight: 800,
                                    lineHeight: 1.05,
                                    color: '#FFFFFF',
                                    margin: 0,
                                    letterSpacing: '-.02em'
                                },
                                children: [
                                    "Prove the exploit.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                        lineNumber: 456,
                                        columnNumber: 31
                                    }, this),
                                    "Reveal nothing."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/Landing.tsx",
                                lineNumber: 453,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[14px] md:text-[16px] max-w-[460px] mx-auto",
                                style: {
                                    lineHeight: 1.65,
                                    color: 'rgba(255,255,255,.48)',
                                    fontFamily: SANS,
                                    margin: '18px auto 36px'
                                },
                                children: "ZK proof on your machine. Stellar escrow. Automatic payout when the contract verifies."
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/Landing.tsx",
                                lineNumber: 458,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>go('hunt'),
                                        className: "vbtn w-full sm:w-auto",
                                        style: {
                                            background: '#EDEDED',
                                            color: '#0A0A0A',
                                            border: 'none',
                                            padding: '14px 36px',
                                            fontFamily: SANS,
                                            fontWeight: 600,
                                            fontSize: 15,
                                            borderRadius: 9999,
                                            cursor: 'pointer'
                                        },
                                        children: "Explore bounties"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                        lineNumber: 464,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>go('create'),
                                        className: "vbtn vbtn-ghost w-full sm:w-auto",
                                        style: {
                                            background: 'transparent',
                                            color: '#EDEDED',
                                            border: '1px solid rgba(237,237,237,.32)',
                                            padding: '14px 36px',
                                            fontFamily: SANS,
                                            fontWeight: 500,
                                            fontSize: 15,
                                            borderRadius: 9999,
                                            cursor: 'pointer'
                                        },
                                        children: "Open a bounty"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                        lineNumber: 468,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/Landing.tsx",
                                lineNumber: 463,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/Landing.tsx",
                        lineNumber: 452,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/Landing.tsx",
                lineNumber: 448,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                style: {
                    borderTop: '1px solid #1c1c1c',
                    background: '#080808'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "max-w-[1240px] mx-auto px-5 md:px-12 py-12 md:py-16",
                    y: 12,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-24 items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontFamily: MONO,
                                                fontWeight: 700,
                                                fontSize: 16,
                                                letterSpacing: '.34em',
                                                color: '#EDEDED',
                                                marginBottom: 14
                                            },
                                            children: "VEIL"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/Landing.tsx",
                                            lineNumber: 483,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: SANS,
                                                fontSize: 13,
                                                color: '#5A5A5A',
                                                lineHeight: 1.65,
                                                maxWidth: 300,
                                                margin: 0
                                            },
                                            children: [
                                                "Trustless proof-of-exploit on Stellar.",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/screens/Landing.tsx",
                                                    lineNumber: 485,
                                                    columnNumber: 55
                                                }, this),
                                                "Zero-knowledge proofs. Automatic payout."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/screens/Landing.tsx",
                                            lineNumber: 484,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/Landing.tsx",
                                    lineNumber: 482,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-14",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontFamily: SANS,
                                                        fontWeight: 600,
                                                        fontSize: 13,
                                                        color: '#EDEDED',
                                                        marginBottom: 18
                                                    },
                                                    children: "Navigate"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/screens/Landing.tsx",
                                                    lineNumber: 494,
                                                    columnNumber: 17
                                                }, this),
                                                [
                                                    {
                                                        label: 'Features',
                                                        fn: ()=>scrollTo('features')
                                                    },
                                                    {
                                                        label: 'How it works',
                                                        fn: ()=>scrollTo('howitworks')
                                                    },
                                                    {
                                                        label: 'Bounties',
                                                        fn: ()=>go('hunt')
                                                    },
                                                    {
                                                        label: 'Create bounty',
                                                        fn: ()=>go('create')
                                                    }
                                                ].map(({ label, fn })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        onClick: fn,
                                                        className: "vlink w-fit",
                                                        style: {
                                                            fontFamily: SANS,
                                                            fontSize: 13,
                                                            color: '#5A5A5A',
                                                            marginBottom: 12,
                                                            cursor: 'pointer',
                                                            lineHeight: 1
                                                        },
                                                        children: label
                                                    }, label, false, {
                                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                                        lineNumber: 501,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/screens/Landing.tsx",
                                            lineNumber: 493,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontFamily: SANS,
                                                        fontWeight: 600,
                                                        fontSize: 13,
                                                        color: '#EDEDED',
                                                        marginBottom: 18
                                                    },
                                                    children: "Social"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/screens/Landing.tsx",
                                                    lineNumber: 509,
                                                    columnNumber: 17
                                                }, this),
                                                [
                                                    'GitHub',
                                                    'Twitter / X',
                                                    'Discord'
                                                ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "vlink w-fit",
                                                        style: {
                                                            fontFamily: SANS,
                                                            fontSize: 13,
                                                            color: '#5A5A5A',
                                                            marginBottom: 12,
                                                            cursor: 'pointer',
                                                            lineHeight: 1
                                                        },
                                                        children: l
                                                    }, l, false, {
                                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                                        lineNumber: 511,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/screens/Landing.tsx",
                                            lineNumber: 508,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontFamily: SANS,
                                                        fontWeight: 600,
                                                        fontSize: 13,
                                                        color: '#EDEDED',
                                                        marginBottom: 18
                                                    },
                                                    children: "Legal"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/screens/Landing.tsx",
                                                    lineNumber: 517,
                                                    columnNumber: 17
                                                }, this),
                                                [
                                                    'MIT License',
                                                    'Open source'
                                                ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "vlink w-fit",
                                                        style: {
                                                            fontFamily: SANS,
                                                            fontSize: 13,
                                                            color: '#5A5A5A',
                                                            marginBottom: 12,
                                                            cursor: 'pointer',
                                                            lineHeight: 1
                                                        },
                                                        children: l
                                                    }, l, false, {
                                                        fileName: "[project]/src/components/screens/Landing.tsx",
                                                        lineNumber: 519,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/screens/Landing.tsx",
                                            lineNumber: 516,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/Landing.tsx",
                                    lineNumber: 491,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/screens/Landing.tsx",
                            lineNumber: 479,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-12 pt-6",
                            style: {
                                borderTop: '1px solid #1c1c1c'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontFamily: MONO,
                                        fontSize: 11,
                                        color: '#383838',
                                        letterSpacing: '.02em'
                                    },
                                    children: "© 2025 Veil · Stellar Hackathon"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/Landing.tsx",
                                    lineNumber: 529,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontFamily: MONO,
                                        fontSize: 11,
                                        color: '#383838',
                                        letterSpacing: '.02em'
                                    },
                                    children: "RISC Zero · Soroban · ZK"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/Landing.tsx",
                                    lineNumber: 530,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/screens/Landing.tsx",
                            lineNumber: 526,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/screens/Landing.tsx",
                    lineNumber: 478,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/screens/Landing.tsx",
                lineNumber: 477,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/screens/Landing.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_s(Landing, "4bM3+5ktmJOz0s2HoSxAd/wvEVc=");
_c = Landing;
var _c;
__turbopack_context__.k.register(_c, "Landing");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const MONO = "var(--font-mono,'JetBrains Mono',monospace)";
function Nav({ active, go, connectWallet }) {
    const link = (label, target)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            onClick: ()=>go(target),
            style: {
                font: `13px/1 ${MONO}`,
                letterSpacing: '.02em',
                cursor: 'pointer',
                color: active === target ? '#EDEDED' : '#8A8A8A'
            },
            children: label
        }, void 0, false, {
            fileName: "[project]/src/components/Nav.tsx",
            lineNumber: 15,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'relative',
            zIndex: 5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '22px 48px',
            borderBottom: '1px solid #242424'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 48
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>go('landing'),
                        style: {
                            font: `700 18px ${MONO}`,
                            letterSpacing: '.34em',
                            cursor: 'pointer',
                            color: '#EDEDED'
                        },
                        children: "VEIL"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Nav.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 30
                        },
                        children: [
                            link('Features', 'features'),
                            link('How it works', 'howitworks'),
                            link('Bounties', 'hunt'),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    font: `13px ${MONO}`,
                                    color: '#8A8A8A',
                                    letterSpacing: '.02em',
                                    cursor: 'pointer'
                                },
                                children: "Docs"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Nav.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Nav.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Nav.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: connectWallet,
                style: {
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    background: 'transparent',
                    color: '#EDEDED',
                    border: '1px solid #333',
                    padding: '10px 18px',
                    font: `13px ${MONO}`,
                    letterSpacing: '.02em',
                    borderRadius: 2,
                    cursor: 'pointer',
                    fontFamily: MONO
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            background: '#14B88A',
                            display: 'inline-block'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/Nav.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    "Connect wallet"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Nav.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Nav.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c = Nav;
var _c;
__turbopack_context__.k.register(_c, "Nav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/screens/Features.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Features
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Nav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CanvasBurst$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CanvasBurst.tsx [app-client] (ecmascript)");
'use client';
;
;
;
const MONO = "var(--font-mono,'JetBrains Mono',monospace)";
const SERIF = "var(--font-serif,'Instrument Serif',serif)";
const SANS = "var(--font-sans,'Inter',sans-serif)";
const FEATURES = [
    {
        title: 'Zero-knowledge proofs',
        desc: "Prove the exploit is real without revealing a single byte of how you did it."
    },
    {
        title: 'On-chain verification',
        desc: "RISC Zero receipts are verified inside the Soroban contract — no trusted middleman."
    },
    {
        title: 'Automatic payout',
        desc: "A valid proof releases the escrow in the same transaction. No negotiation, no delay."
    },
    {
        title: 'Open-source rules',
        desc: "Each bounty's ImageID pins the exact guest program that defines a valid break."
    },
    {
        title: 'No disclosure risk',
        desc: "The vulnerability is proven, not published. Nothing leaks to the contract or the chain."
    },
    {
        title: 'Permissionless',
        desc: "Anyone can open a bounty or claim one. The contract is the only arbiter."
    }
];
function Features({ go, connectWallet }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                active: "features",
                go: go,
                connectWallet: connectWallet
            }, void 0, false, {
                fileName: "[project]/src/components/screens/Features.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    overflow: 'hidden',
                    borderBottom: '1px solid #242424'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CanvasBurst$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/components/screens/Features.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            inset: 0,
                            background: 'radial-gradient(ellipse 72% 88% at 50% 50%,transparent 22%,#0A0A0A 78%)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/Features.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'relative',
                            textAlign: 'center',
                            maxWidth: 840,
                            margin: '0 auto',
                            padding: '94px 40px 82px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 9,
                                    border: '1px solid #242424',
                                    background: 'rgba(10,10,10,.5)',
                                    padding: '6px 12px',
                                    borderRadius: 2,
                                    marginBottom: 26
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            width: 5,
                                            height: 5,
                                            background: '#14B88A',
                                            display: 'inline-block'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/Features.tsx",
                                        lineNumber: 36,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            font: `11px ${MONO}`,
                                            color: '#8A8A8A',
                                            letterSpacing: '.14em',
                                            textTransform: 'uppercase',
                                            fontFamily: MONO
                                        },
                                        children: "Features"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/Features.tsx",
                                        lineNumber: 37,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/Features.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontFamily: SERIF,
                                    fontWeight: 400,
                                    fontSize: 62,
                                    lineHeight: 1.02,
                                    letterSpacing: '-.01em',
                                    margin: '0 0 22px',
                                    color: '#EDEDED'
                                },
                                children: [
                                    "Everything the proof needs.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/screens/Features.tsx",
                                        lineNumber: 40,
                                        columnNumber: 40
                                    }, this),
                                    "Nothing it doesn't."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/Features.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: 17,
                                    lineHeight: 1.6,
                                    color: '#8A8A8A',
                                    maxWidth: 560,
                                    margin: '0 auto',
                                    fontFamily: SANS
                                },
                                children: "Veil turns a private exploit into an on-chain payout — without the vulnerability ever leaving the hunter's machine."
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/Features.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/Features.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/Features.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1240,
                    margin: '0 auto',
                    padding: '0 40px 94px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3,1fr)',
                        gap: 1,
                        background: '#242424',
                        border: '1px solid #242424',
                        borderTop: 'none'
                    },
                    children: FEATURES.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: '#0A0A0A',
                                padding: '38px 30px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: 34,
                                        height: 34,
                                        border: '1px solid #242424',
                                        borderRadius: 2,
                                        marginBottom: 22
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            font: `13px ${MONO}`,
                                            color: '#14B88A',
                                            fontFamily: MONO
                                        },
                                        children: "<>"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/Features.tsx",
                                        lineNumber: 54,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/Features.tsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        font: `600 18px ${SANS}`,
                                        marginBottom: 10,
                                        fontFamily: SANS,
                                        color: '#EDEDED'
                                    },
                                    children: f.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/Features.tsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: 14,
                                        lineHeight: 1.6,
                                        color: '#8A8A8A',
                                        margin: 0,
                                        fontFamily: SANS
                                    },
                                    children: f.desc
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/Features.tsx",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, f.title, true, {
                            fileName: "[project]/src/components/screens/Features.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/screens/Features.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/screens/Features.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    overflow: 'hidden',
                    borderTop: '1px solid #242424'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CanvasBurst$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/components/screens/Features.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            inset: 0,
                            background: 'radial-gradient(ellipse 70% 90% at 50% 50%,transparent 18%,#0A0A0A 76%)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/Features.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'relative',
                            textAlign: 'center',
                            padding: '100px 40px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontFamily: SERIF,
                                    fontWeight: 400,
                                    fontSize: 52,
                                    lineHeight: 1.02,
                                    margin: '0 0 30px',
                                    color: '#EDEDED'
                                },
                                children: "Prove the exploit. Reveal nothing."
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/Features.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: 14,
                                    justifyContent: 'center'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>go('hunt'),
                                        style: {
                                            background: '#EDEDED',
                                            color: '#0A0A0A',
                                            border: 'none',
                                            padding: '14px 24px',
                                            font: `600 14px ${SANS}`,
                                            borderRadius: 2,
                                            cursor: 'pointer',
                                            fontFamily: SANS
                                        },
                                        children: "Explore bounties"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/Features.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>go('howitworks'),
                                        style: {
                                            background: 'transparent',
                                            color: '#EDEDED',
                                            border: '1px solid #333',
                                            padding: '14px 24px',
                                            font: `500 14px ${SANS}`,
                                            borderRadius: 2,
                                            cursor: 'pointer',
                                            fontFamily: SANS
                                        },
                                        children: "How it works"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/Features.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/Features.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/Features.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/Features.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/screens/Features.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c = Features;
var _c;
__turbopack_context__.k.register(_c, "Features");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/screens/HowItWorks.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HowItWorks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Nav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CanvasBurst$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CanvasBurst.tsx [app-client] (ecmascript)");
'use client';
;
;
;
const MONO = "var(--font-mono,'JetBrains Mono',monospace)";
const SERIF = "var(--font-serif,'Instrument Serif',serif)";
const SANS = "var(--font-sans,'Inter',sans-serif)";
const STEPS = [
    {
        n: '01',
        title: 'Open a bounty',
        body: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                "A creator locks a reward against a deployed contract and publishes the guest ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        fontFamily: MONO,
                        color: '#EDEDED'
                    },
                    children: "ImageID"
                }, void 0, false, {
                    fileName: "[project]/src/components/screens/HowItWorks.tsx",
                    lineNumber: 12,
                    columnNumber: 125
                }, ("TURBOPACK compile-time value", void 0)),
                " that defines a valid break."
            ]
        }, void 0, true)
    },
    {
        n: '02',
        title: 'Break it locally',
        body: "A hunter finds the exploit and runs the open-source guest program on their own machine — the secret input never leaves it."
    },
    {
        n: '03',
        title: 'Generate a proof',
        body: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                "RISC Zero produces a receipt — a ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        fontFamily: MONO,
                        color: '#EDEDED'
                    },
                    children: "journal + seal"
                }, void 0, false, {
                    fileName: "[project]/src/components/screens/HowItWorks.tsx",
                    lineNumber: 14,
                    columnNumber: 82
                }, ("TURBOPACK compile-time value", void 0)),
                " — that proves the break happened, with nothing about how."
            ]
        }, void 0, true)
    },
    {
        n: '04',
        title: 'Verify on-chain',
        body: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                "The hunter submits the receipt; the Soroban contract verifies it against the ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        fontFamily: MONO,
                        color: '#EDEDED'
                    },
                    children: "ImageID"
                }, void 0, false, {
                    fileName: "[project]/src/components/screens/HowItWorks.tsx",
                    lineNumber: 15,
                    columnNumber: 126
                }, ("TURBOPACK compile-time value", void 0)),
                " and the victim binding."
            ]
        }, void 0, true)
    },
    {
        n: '05',
        title: 'Get paid',
        body: "On a valid proof, the contract releases the escrow to the hunter automatically — in the same transaction."
    }
];
function HowItWorks({ go, connectWallet }) {
    const pill = (label, teal)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: {
                font: `11px ${MONO}`,
                color: teal ? '#14B88A' : '#8A8A8A',
                border: `1px solid ${teal ? 'rgba(20,184,138,.35)' : '#242424'}`,
                background: teal ? 'rgba(20,184,138,.06)' : 'transparent',
                padding: '6px 11px',
                borderRadius: 2,
                fontFamily: MONO
            },
            children: label
        }, label, false, {
            fileName: "[project]/src/components/screens/HowItWorks.tsx",
            lineNumber: 26,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                active: "howitworks",
                go: go,
                connectWallet: connectWallet
            }, void 0, false, {
                fileName: "[project]/src/components/screens/HowItWorks.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    overflow: 'hidden',
                    borderBottom: '1px solid #242424'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CanvasBurst$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/components/screens/HowItWorks.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            inset: 0,
                            background: 'radial-gradient(ellipse 72% 88% at 50% 50%,transparent 22%,#0A0A0A 78%)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/HowItWorks.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'relative',
                            textAlign: 'center',
                            maxWidth: 840,
                            margin: '0 auto',
                            padding: '84px 40px 58px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 9,
                                    border: '1px solid #242424',
                                    background: 'rgba(10,10,10,.5)',
                                    padding: '6px 12px',
                                    borderRadius: 2,
                                    marginBottom: 26
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            width: 5,
                                            height: 5,
                                            background: '#14B88A',
                                            display: 'inline-block'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/HowItWorks.tsx",
                                        lineNumber: 46,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            font: `11px ${MONO}`,
                                            color: '#8A8A8A',
                                            letterSpacing: '.14em',
                                            textTransform: 'uppercase',
                                            fontFamily: MONO
                                        },
                                        children: "How it works"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/HowItWorks.tsx",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/HowItWorks.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontFamily: SERIF,
                                    fontWeight: 400,
                                    fontSize: 58,
                                    lineHeight: 1.02,
                                    letterSpacing: '-.01em',
                                    margin: '0 0 30px',
                                    color: '#EDEDED'
                                },
                                children: [
                                    "From exploit to payout,",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/screens/HowItWorks.tsx",
                                        lineNumber: 50,
                                        columnNumber: 36
                                    }, this),
                                    "in five steps."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/HowItWorks.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 12,
                                    flexWrap: 'wrap'
                                },
                                children: [
                                    pill('secret input', true),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#5A5A5A',
                                            font: '13px monospace'
                                        },
                                        children: "→"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/HowItWorks.tsx",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, this),
                                    pill('zk proof', false),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#5A5A5A',
                                            font: '13px monospace'
                                        },
                                        children: "→"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/HowItWorks.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    pill('receipt', false),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#5A5A5A',
                                            font: '13px monospace'
                                        },
                                        children: "→"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/HowItWorks.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    pill('on-chain verify', false),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#5A5A5A',
                                            font: '13px monospace'
                                        },
                                        children: "→"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/HowItWorks.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this),
                                    pill('payout', true)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/HowItWorks.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/HowItWorks.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/HowItWorks.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 820,
                    margin: '0 auto',
                    padding: '30px 40px 90px'
                },
                children: STEPS.map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '72px 1fr',
                            gap: 28,
                            padding: '30px 0',
                            borderBottom: i < STEPS.length - 1 ? '1px solid #1c1c1c' : 'none'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: SERIF,
                                    fontSize: 42,
                                    color: '#14B88A',
                                    lineHeight: 1
                                },
                                children: step.n
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/HowItWorks.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            font: `600 19px ${SANS}`,
                                            marginBottom: 8,
                                            fontFamily: SANS,
                                            color: '#EDEDED'
                                        },
                                        children: step.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/HowItWorks.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: 14.5,
                                            lineHeight: 1.6,
                                            color: '#8A8A8A',
                                            margin: 0,
                                            fontFamily: SANS
                                        },
                                        children: step.body
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/HowItWorks.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/HowItWorks.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, step.n, true, {
                        fileName: "[project]/src/components/screens/HowItWorks.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/screens/HowItWorks.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    overflow: 'hidden',
                    borderTop: '1px solid #242424'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CanvasBurst$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/components/screens/HowItWorks.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            inset: 0,
                            background: 'radial-gradient(ellipse 70% 90% at 50% 50%,transparent 18%,#0A0A0A 76%)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/HowItWorks.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'relative',
                            textAlign: 'center',
                            padding: '100px 40px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontFamily: SERIF,
                                    fontWeight: 400,
                                    fontSize: 52,
                                    lineHeight: 1.02,
                                    margin: '0 0 30px',
                                    color: '#EDEDED'
                                },
                                children: "Ready to break something?"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/HowItWorks.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: 14,
                                    justifyContent: 'center'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>go('hunt'),
                                        style: {
                                            background: '#EDEDED',
                                            color: '#0A0A0A',
                                            border: 'none',
                                            padding: '14px 24px',
                                            font: `600 14px ${SANS}`,
                                            borderRadius: 2,
                                            cursor: 'pointer',
                                            fontFamily: SANS
                                        },
                                        children: "Explore bounties"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/HowItWorks.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>go('create'),
                                        style: {
                                            background: 'transparent',
                                            color: '#EDEDED',
                                            border: '1px solid #333',
                                            padding: '14px 24px',
                                            font: `500 14px ${SANS}`,
                                            borderRadius: 2,
                                            cursor: 'pointer',
                                            fontFamily: SANS
                                        },
                                        children: "Open a bounty"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/HowItWorks.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/HowItWorks.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/HowItWorks.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/HowItWorks.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/screens/HowItWorks.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c = HowItWorks;
var _c;
__turbopack_context__.k.register(_c, "HowItWorks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/screens/Hunt.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hunt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const MONO = "var(--font-mono,'JetBrains Mono',monospace)";
const SERIF = "var(--font-serif,'Instrument Serif',serif)";
const SANS = "var(--font-sans,'Inter',sans-serif)";
function Hunt({ bounties, openCount, totalPool, filter, search, onFilter, onSearch, onSubmit, onDetail }) {
    const filterBg = (f)=>filter === f ? 'rgba(20,184,138,.1)' : 'transparent';
    const filterClr = (f)=>filter === f ? '#14B88A' : '#8A8A8A';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-[1240px] mx-auto px-5 md:px-10 pt-10 md:pt-14 pb-16 md:pb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row md:items-end md:justify-between gap-3 md:gap-0 pb-6 md:pb-7 mb-6 md:mb-7",
                style: {
                    borderBottom: '1px solid #242424'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-[40px] md:text-[52px] mb-2",
                                style: {
                                    fontFamily: SERIF,
                                    fontWeight: 400,
                                    lineHeight: 1,
                                    color: '#EDEDED',
                                    margin: 0
                                },
                                children: "Open bounties"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/Hunt.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: MONO,
                                    fontSize: 13,
                                    color: '#8A8A8A',
                                    margin: 0,
                                    letterSpacing: '.01em'
                                },
                                children: "Find a contract, break it privately, claim the reward."
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/Hunt.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/Hunt.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-right",
                        style: {
                            fontFamily: MONO,
                            fontSize: 11,
                            color: '#5A5A5A',
                            letterSpacing: '.12em',
                            textTransform: 'uppercase'
                        },
                        children: [
                            openCount,
                            " open · ",
                            totalPool,
                            " XLM pooled"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/Hunt.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/Hunt.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            'all',
                            'open',
                            'claimed'
                        ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                onClick: ()=>onFilter(f),
                                className: "vlink text-[11px] md:text-[12px] px-3 md:px-4 py-2",
                                style: {
                                    fontFamily: MONO,
                                    letterSpacing: '.02em',
                                    border: '1px solid #242424',
                                    borderRadius: 2,
                                    cursor: 'pointer',
                                    background: filterBg(f),
                                    color: filterClr(f),
                                    textTransform: 'capitalize'
                                },
                                children: f.charAt(0).toUpperCase() + f.slice(1)
                            }, f, false, {
                                fileName: "[project]/src/components/screens/Hunt.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/Hunt.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "vinput flex items-center gap-2 w-full sm:w-[280px] md:w-[300px]",
                        style: {
                            border: '1px solid #242424',
                            borderRadius: 2,
                            padding: '9px 14px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#5A5A5A',
                                    fontFamily: MONO,
                                    fontSize: 13
                                },
                                children: "⌕"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/Hunt.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: search,
                                onChange: (e)=>onSearch(e.target.value),
                                placeholder: "search by contract…",
                                className: "w-full",
                                style: {
                                    background: 'transparent',
                                    border: 'none',
                                    color: '#EDEDED',
                                    fontFamily: MONO,
                                    fontSize: 13
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/Hunt.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/Hunt.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/Hunt.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            bounties.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center text-center",
                style: {
                    border: '1px dashed #242424',
                    borderRadius: 4,
                    padding: '64px 20px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 26,
                            color: '#333',
                            marginBottom: 14
                        },
                        children: "⌕"
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/Hunt.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: SANS,
                            fontWeight: 600,
                            fontSize: 16,
                            color: '#EDEDED',
                            marginBottom: 6
                        },
                        children: "No bounties found"
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/Hunt.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: MONO,
                            fontSize: 12,
                            color: '#5A5A5A',
                            margin: 0
                        },
                        children: search.trim() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Nothing matches “",
                                search.trim(),
                                "”. Try another contract or filter."
                            ]
                        }, void 0, true) : 'No bounties in this filter yet.'
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/Hunt.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/Hunt.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
                style: {
                    gap: 1,
                    background: '#242424',
                    border: '1px solid #242424'
                },
                children: bounties.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "vcard p-4 md:p-6 flex flex-col",
                        style: {
                            background: '#111111',
                            minHeight: 200
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between mb-4 md:mb-5",
                                children: [
                                    b.isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: MONO,
                                            fontSize: 10,
                                            letterSpacing: '.12em',
                                            padding: '4px 9px',
                                            borderRadius: 2,
                                            background: 'rgba(20,184,138,.08)',
                                            border: '1px solid rgba(20,184,138,.35)',
                                            color: '#14B88A'
                                        },
                                        children: "OPEN"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/Hunt.tsx",
                                        lineNumber: 89,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: MONO,
                                            fontSize: 10,
                                            letterSpacing: '.12em',
                                            padding: '4px 9px',
                                            borderRadius: 2,
                                            background: 'transparent',
                                            border: '1px solid #242424',
                                            color: '#5A8A75'
                                        },
                                        children: "CLAIMED"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/Hunt.tsx",
                                        lineNumber: 90,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: MONO,
                                            fontWeight: 600,
                                            fontSize: 20,
                                            color: '#EDEDED'
                                        },
                                        children: b.reward
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/Hunt.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/Hunt.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: SANS,
                                    fontWeight: 600,
                                    fontSize: 16,
                                    color: '#EDEDED',
                                    marginBottom: 6
                                },
                                children: b.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/Hunt.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: 13,
                                    lineHeight: 1.5,
                                    color: '#8A8A8A',
                                    margin: '0 0 14px',
                                    fontFamily: SANS
                                },
                                children: b.desc
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/Hunt.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-auto pt-3 mb-3",
                                style: {
                                    fontFamily: MONO,
                                    fontSize: 11,
                                    color: '#5A5A5A',
                                    letterSpacing: '.02em',
                                    borderTop: '1px solid #1c1c1c'
                                },
                                children: [
                                    "victim: ",
                                    b.victim
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/Hunt.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this),
                            b.isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onSubmit(b.id),
                                className: "vbtn vbtn-ghost",
                                style: {
                                    width: '100%',
                                    background: 'transparent',
                                    color: '#EDEDED',
                                    border: '1px solid #333',
                                    padding: '10px',
                                    fontFamily: SANS,
                                    fontWeight: 500,
                                    fontSize: 13,
                                    borderRadius: 2,
                                    cursor: 'pointer'
                                },
                                children: "Submit proof →"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/Hunt.tsx",
                                lineNumber: 100,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onDetail(b.id),
                                className: "vbtn vbtn-ghost",
                                style: {
                                    width: '100%',
                                    background: 'transparent',
                                    color: '#5A8A75',
                                    border: '1px solid #242424',
                                    padding: '10px',
                                    fontFamily: SANS,
                                    fontWeight: 500,
                                    fontSize: 13,
                                    borderRadius: 2,
                                    cursor: 'pointer'
                                },
                                children: "View details →"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/Hunt.tsx",
                                lineNumber: 101,
                                columnNumber: 17
                            }, this)
                        ]
                    }, b.id, true, {
                        fileName: "[project]/src/components/screens/Hunt.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/screens/Hunt.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/screens/Hunt.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = Hunt;
var _c;
__turbopack_context__.k.register(_c, "Hunt");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/screens/Submit.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Submit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const MONO = "var(--font-mono,'JetBrains Mono',monospace)";
const SERIF = "var(--font-serif,'Instrument Serif',serif)";
const SANS = "var(--font-sans,'Inter',sans-serif)";
function Submit({ bounty, fileLoaded, fileName, dragging, go, onPickFile, onDragOver, onDragLeave, onDrop, onPick, startVerify }) {
    const btnBg = fileLoaded ? '#14B88A' : '#1c1c1c';
    const btnClr = fileLoaded ? '#06241B' : '#5A5A5A';
    const dropBorder = dragging ? '#14B88A' : '#333';
    const dropBg = dragging ? 'rgba(20,184,138,.05)' : 'transparent';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-[880px] mx-auto px-5 md:px-10 pt-8 md:pt-10 pb-16 md:pb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>go('hunt'),
                className: "vlink inline-block",
                style: {
                    fontFamily: MONO,
                    fontSize: 12,
                    color: '#8A8A8A',
                    cursor: 'pointer',
                    marginBottom: 20
                },
                children: "← back to bounties"
            }, void 0, false, {
                fileName: "[project]/src/components/screens/Submit.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: '#111111',
                    border: '1px solid #242424'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between px-5 md:px-8 py-5 md:py-7",
                        style: {
                            borderBottom: '1px solid #242424'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: MONO,
                                            fontSize: 11,
                                            color: '#5A5A5A',
                                            letterSpacing: '.12em',
                                            textTransform: 'uppercase',
                                            marginBottom: 8
                                        },
                                        children: "Submit proof"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/Submit.tsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-[28px] md:text-[38px]",
                                        style: {
                                            fontFamily: SERIF,
                                            fontWeight: 400,
                                            lineHeight: 1,
                                            color: '#EDEDED',
                                            margin: 0
                                        },
                                        children: bounty.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/Submit.tsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/Submit.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-right ml-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: MONO,
                                            fontSize: 10,
                                            color: '#5A5A5A',
                                            letterSpacing: '.12em',
                                            textTransform: 'uppercase',
                                            marginBottom: 6
                                        },
                                        children: "Reward"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/Submit.tsx",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: MONO,
                                            fontWeight: 600,
                                            fontSize: 22,
                                            color: '#14B88A'
                                        },
                                        children: bounty.reward
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/Submit.tsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/Submit.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/Submit.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-5 md:px-8 py-5 md:py-8",
                        style: {
                            borderBottom: '1px solid #242424'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:grid md:grid-cols-[1fr_56px_1fr] items-stretch",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            border: '1px solid rgba(20,184,138,.35)',
                                            background: 'rgba(20,184,138,.04)',
                                            padding: '22px 24px',
                                            borderRadius: 2
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 14,
                                                            color: '#14B88A'
                                                        },
                                                        children: "⊘"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/Submit.tsx",
                                                        lineNumber: 58,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: MONO,
                                                            fontSize: 10,
                                                            color: '#14B88A',
                                                            letterSpacing: '.12em'
                                                        },
                                                        children: "YOUR SECRET INPUT"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/Submit.tsx",
                                                        lineNumber: 59,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/Submit.tsx",
                                                lineNumber: 57,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: MONO,
                                                    fontWeight: 600,
                                                    fontSize: 24,
                                                    color: '#EDEDED',
                                                    letterSpacing: '.04em',
                                                    marginBottom: 6
                                                },
                                                children: "a = •••   b = •••"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/Submit.tsx",
                                                lineNumber: 61,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: MONO,
                                                    fontSize: 11,
                                                    color: '#8A8A8A'
                                                },
                                                children: "never leaves your machine"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/Submit.tsx",
                                                lineNumber: 62,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/Submit.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center justify-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: MONO,
                                                    fontSize: 13,
                                                    color: '#5A5A5A'
                                                },
                                                children: "zk"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/Submit.tsx",
                                                lineNumber: 65,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: MONO,
                                                    fontSize: 18,
                                                    color: '#8A8A8A'
                                                },
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/Submit.tsx",
                                                lineNumber: 66,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/Submit.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            border: '1px solid #242424',
                                            background: '#161616',
                                            padding: '22px 24px',
                                            borderRadius: 2
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 14,
                                                            color: '#8A8A8A'
                                                        },
                                                        children: "◳"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/Submit.tsx",
                                                        lineNumber: 70,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: MONO,
                                                            fontSize: 10,
                                                            color: '#8A8A8A',
                                                            letterSpacing: '.12em'
                                                        },
                                                        children: "RECEIPT (PUBLIC)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/Submit.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/Submit.tsx",
                                                lineNumber: 69,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: MONO,
                                                    fontWeight: 600,
                                                    fontSize: 19,
                                                    color: '#EDEDED',
                                                    marginBottom: 6
                                                },
                                                children: "journal + seal"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/Submit.tsx",
                                                lineNumber: 73,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: MONO,
                                                    fontSize: 11,
                                                    color: '#8A8A8A'
                                                },
                                                children: "this is what gets uploaded"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/Submit.tsx",
                                                lineNumber: 74,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/Submit.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/Submit.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2 md:hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            border: '1px solid rgba(20,184,138,.35)',
                                            background: 'rgba(20,184,138,.04)',
                                            padding: '18px',
                                            borderRadius: 2
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: '#14B88A'
                                                        },
                                                        children: "⊘"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/Submit.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: MONO,
                                                            fontSize: 9,
                                                            color: '#14B88A',
                                                            letterSpacing: '.12em'
                                                        },
                                                        children: "YOUR SECRET INPUT"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/Submit.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/Submit.tsx",
                                                lineNumber: 81,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: MONO,
                                                    fontWeight: 600,
                                                    fontSize: 20,
                                                    color: '#EDEDED',
                                                    marginBottom: 5
                                                },
                                                children: "a = •••  b = •••"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/Submit.tsx",
                                                lineNumber: 85,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: MONO,
                                                    fontSize: 10,
                                                    color: '#8A8A8A'
                                                },
                                                children: "never leaves your machine"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/Submit.tsx",
                                                lineNumber: 86,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/Submit.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center py-1",
                                        style: {
                                            fontFamily: MONO,
                                            fontSize: 14,
                                            color: '#8A8A8A'
                                        },
                                        children: [
                                            "↓ ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 10,
                                                    color: '#5A5A5A'
                                                },
                                                children: "zk"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/Submit.tsx",
                                                lineNumber: 88,
                                                columnNumber: 110
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/Submit.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            border: '1px solid #242424',
                                            background: '#161616',
                                            padding: '18px',
                                            borderRadius: 2
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: '#8A8A8A'
                                                        },
                                                        children: "◳"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/Submit.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: MONO,
                                                            fontSize: 9,
                                                            color: '#8A8A8A',
                                                            letterSpacing: '.12em'
                                                        },
                                                        children: "RECEIPT (PUBLIC)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/Submit.tsx",
                                                        lineNumber: 92,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/Submit.tsx",
                                                lineNumber: 90,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: MONO,
                                                    fontWeight: 600,
                                                    fontSize: 16,
                                                    color: '#EDEDED',
                                                    marginBottom: 5
                                                },
                                                children: "journal + seal"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/Submit.tsx",
                                                lineNumber: 94,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: MONO,
                                                    fontSize: 10,
                                                    color: '#8A8A8A'
                                                },
                                                children: "this is what gets uploaded"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/Submit.tsx",
                                                lineNumber: 95,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/Submit.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/Submit.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/Submit.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-5 md:px-8 py-5 md:py-8",
                        style: {
                            borderBottom: '1px solid #242424'
                        },
                        children: [
                            !fileLoaded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: onPickFile,
                                onDragOver: onDragOver,
                                onDragLeave: onDragLeave,
                                onDrop: onDrop,
                                className: "vinput text-center cursor-pointer py-8 md:py-10 px-5",
                                style: {
                                    border: `1px dashed ${dropBorder}`,
                                    background: dropBg,
                                    borderRadius: 2
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 22,
                                            color: '#5A5A5A',
                                            marginBottom: 12
                                        },
                                        children: "⤓"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/Submit.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: MONO,
                                            fontSize: 14,
                                            color: '#EDEDED',
                                            marginBottom: 6
                                        },
                                        children: [
                                            "drop ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: '#14B88A'
                                                },
                                                children: "proof.json"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/Submit.tsx",
                                                lineNumber: 109,
                                                columnNumber: 22
                                            }, this),
                                            " or click to browse"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/Submit.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: MONO,
                                            fontSize: 11,
                                            color: '#5A5A5A'
                                        },
                                        children: "RISC Zero proof · journal + seal"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/Submit.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/Submit.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between px-4 md:px-5 py-4",
                                style: {
                                    border: '1px solid rgba(20,184,138,.35)',
                                    background: 'rgba(20,184,138,.04)',
                                    borderRadius: 2
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 16,
                                                    color: '#14B88A'
                                                },
                                                children: "◳"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/Submit.tsx",
                                                lineNumber: 118,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontFamily: MONO,
                                                            fontSize: 13,
                                                            color: '#EDEDED'
                                                        },
                                                        children: fileName
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/Submit.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontFamily: MONO,
                                                            fontSize: 11,
                                                            color: '#8A8A8A'
                                                        },
                                                        children: "2.4 MB · loaded locally"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/screens/Submit.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/Submit.tsx",
                                                lineNumber: 119,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/Submit.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        onClick: onPickFile,
                                        style: {
                                            fontFamily: MONO,
                                            fontSize: 11,
                                            color: '#8A8A8A',
                                            cursor: 'pointer',
                                            textDecoration: 'underline'
                                        },
                                        children: "replace"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/Submit.tsx",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/Submit.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "veil-file",
                                type: "file",
                                onChange: onPick,
                                style: {
                                    display: 'none'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/Submit.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/Submit.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-5 md:px-8 py-5 md:py-7",
                        style: {
                            borderBottom: '1px solid #242424'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: MONO,
                                    fontSize: 10,
                                    color: '#5A5A5A',
                                    letterSpacing: '.12em',
                                    textTransform: 'uppercase',
                                    marginBottom: 14
                                },
                                children: "The contract will check"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/Submit.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2 md:gap-3",
                                children: [
                                    [
                                        'proof valid against ',
                                        'image_id'
                                    ],
                                    [
                                        'journal binds to ',
                                        'victim_id'
                                    ],
                                    [
                                        'bounty not yet claimed',
                                        null
                                    ]
                                ].map(([prefix, code])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 md:gap-3",
                                        style: {
                                            fontFamily: MONO,
                                            fontSize: 13,
                                            color: '#8A8A8A'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: '#5A5A5A'
                                                },
                                                children: "○"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/Submit.tsx",
                                                lineNumber: 142,
                                                columnNumber: 17
                                            }, this),
                                            prefix,
                                            code && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: '#EDEDED'
                                                },
                                                children: code
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/Submit.tsx",
                                                lineNumber: 144,
                                                columnNumber: 26
                                            }, this)
                                        ]
                                    }, String(prefix), true, {
                                        fileName: "[project]/src/components/screens/Submit.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/Submit.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/Submit.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-5 md:px-8 py-5 md:py-7",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: startVerify,
                                disabled: !fileLoaded,
                                className: fileLoaded ? 'vbtn' : '',
                                style: {
                                    width: '100%',
                                    background: btnBg,
                                    color: btnClr,
                                    border: 'none',
                                    padding: '16px',
                                    fontFamily: SANS,
                                    fontWeight: 600,
                                    fontSize: 15,
                                    borderRadius: 2,
                                    cursor: fileLoaded ? 'pointer' : 'not-allowed',
                                    opacity: fileLoaded ? 1 : 0.55
                                },
                                children: "Verify & claim reward"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/Submit.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mt-4",
                                style: {
                                    fontFamily: MONO,
                                    fontSize: 11,
                                    color: '#5A5A5A'
                                },
                                children: "Proving runs locally on your machine. Your inputs are never transmitted."
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/Submit.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/Submit.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/Submit.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/screens/Submit.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = Submit;
var _c;
__turbopack_context__.k.register(_c, "Submit");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/stellar.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONTRACTS_CONFIGURED",
    ()=>CONTRACTS_CONFIGURED,
    "DEMO_BOUNTY_ID",
    ()=>DEMO_BOUNTY_ID,
    "HORIZON_URL",
    ()=>HORIZON_URL,
    "NETWORK_PASSPHRASE",
    ()=>NETWORK_PASSPHRASE,
    "RPC_URL",
    ()=>RPC_URL,
    "TOKEN_ID",
    ()=>TOKEN_ID,
    "VERIFIER_ID",
    ()=>VERIFIER_ID,
    "claim",
    ()=>claim,
    "createBounty",
    ()=>createBounty,
    "explorerTxUrl",
    ()=>explorerTxUrl,
    "fundBounty",
    ()=>fundBounty,
    "getBounty",
    ()=>getBounty,
    "getCount",
    ()=>getCount,
    "getXlmBalance",
    ()=>getXlmBalance,
    "hexToBytes",
    ()=>hexToBytes,
    "listBounties",
    ()=>listBounties,
    "withdraw",
    ()=>withdraw
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// Stellar / Soroban plumbing untuk REGISTRY (Pola B).
// Contract IDs dari NEXT_PUBLIC_*. Kalau VERIFIER_ID kosong → CONTRACTS_CONFIGURED
// false dan UI jatuh ke mode demo lokal.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$rpc$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__rpc$3e$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/rpc/index.js [app-client] (ecmascript) <export * as rpc>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/base/network.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/base/contract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/base/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/base/account.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$keypair$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/base/keypair.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$transaction_builder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/base/transaction_builder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$horizon$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Horizon$3e$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/horizon/index.js [app-client] (ecmascript) <export * as Horizon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$scval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/stellar-sdk/lib/esm/base/scval.js [app-client] (ecmascript)");
;
const RPC_URL = ("TURBOPACK compile-time value", "https://soroban-testnet.stellar.org") || 'https://soroban-testnet.stellar.org';
const HORIZON_URL = ("TURBOPACK compile-time value", "https://horizon-testnet.stellar.org") || 'https://horizon-testnet.stellar.org';
const NETWORK_PASSPHRASE = ("TURBOPACK compile-time value", "Test SDF Network ; September 2015") || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Networks"].TESTNET;
const VERIFIER_ID = ("TURBOPACK compile-time value", "CAM7PP6DK3EYDTPOYNUUZIJ7WU6OGQTGQD3IPQ7OUZEEYE4K7NPSNM7W") || '';
const TOKEN_ID = ("TURBOPACK compile-time value", "CDLZFC3SYJYDZT7K67VZ75HPJVIEUVNIXF47ZG2FB2RMQQVU2HHGCYSC") || '';
const CONTRACTS_CONFIGURED = Boolean(VERIFIER_ID);
_c = CONTRACTS_CONFIGURED;
const DEMO_BOUNTY_ID = Number(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_DEMO_BOUNTY_ID || '0');
const server = ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$rpc$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__rpc$3e$__["rpc"].Server(RPC_URL, {
        allowHttp: RPC_URL.startsWith('http://')
    });
function hexToBytes(hex) {
    const clean = hex.trim().replace(/^0x/, '');
    const out = new Uint8Array(clean.length / 2);
    for(let i = 0; i < out.length; i++)out[i] = parseInt(clean.substr(i * 2, 2), 16);
    return out;
}
async function getXlmBalance(address) {
    try {
        const horizon = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$horizon$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Horizon$3e$__["Horizon"].Server(HORIZON_URL);
        const acct = await horizon.loadAccount(address);
        const native = acct.balances.find((b)=>b.asset_type === 'native');
        return native ? Math.floor(parseFloat(native.balance)) : 0;
    } catch  {
        return 0;
    }
}
/** build → simulate → sign → submit invokasi kontrak (write). */ async function invoke(contractId, method, args, caller, sign) {
    const srv = server();
    const source = await srv.getAccount(caller);
    const built = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$transaction_builder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionBuilder"](source, {
        fee: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$transaction_builder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_FEE"],
        networkPassphrase: NETWORK_PASSPHRASE
    }).addOperation(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Contract"](contractId).call(method, ...args)).setTimeout(60).build();
    const prepared = await srv.prepareTransaction(built);
    const signedXdr = await sign(prepared.toXDR(), NETWORK_PASSPHRASE);
    const signed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$transaction_builder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionBuilder"].fromXDR(signedXdr, NETWORK_PASSPHRASE);
    const sent = await srv.sendTransaction(signed);
    if (sent.status === 'ERROR') {
        throw new Error('Transaction submission failed: ' + JSON.stringify(sent.errorResult));
    }
    let got = await srv.getTransaction(sent.hash);
    for(let i = 0; i < 30 && got.status === 'NOT_FOUND'; i++){
        await new Promise((r)=>setTimeout(r, 1000));
        got = await srv.getTransaction(sent.hash);
    }
    if (got.status !== 'SUCCESS') {
        throw new Error('Transaction did not succeed: ' + got.status);
    }
    const result = got.returnValue ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$scval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scValToNative"])(got.returnValue) : null;
    return {
        result,
        hash: sent.hash
    };
}
/** Read-only: simulasi tanpa tanda tangan (pakai akun acak sebagai source). */ async function simulateRead(contractId, method, args) {
    const srv = server();
    const source = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Account"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$keypair$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keypair"].random().publicKey(), '0');
    const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$transaction_builder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionBuilder"](source, {
        fee: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$transaction_builder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_FEE"],
        networkPassphrase: NETWORK_PASSPHRASE
    }).addOperation(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Contract"](contractId).call(method, ...args)).setTimeout(60).build();
    const sim = await srv.simulateTransaction(tx);
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$rpc$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__rpc$3e$__["rpc"].Api.isSimulationError(sim)) throw new Error(sim.error);
    const retval = sim.result?.retval;
    return retval ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$scval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scValToNative"])(retval) : null;
}
async function getCount() {
    if (!CONTRACTS_CONFIGURED) return 0;
    return await simulateRead(VERIFIER_ID, 'count', []);
}
async function getBounty(id) {
    return await simulateRead(VERIFIER_ID, 'get_bounty', [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$scval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nativeToScVal"])(id, {
            type: 'u32'
        })
    ]);
}
async function createBounty(creator, victimId, imageIdHex, sign, expiry = 0) {
    if (!CONTRACTS_CONFIGURED) throw new Error('Registry belum dikonfigurasi (NEXT_PUBLIC_VERIFIER_ID).');
    const { result } = await invoke(VERIFIER_ID, 'create_bounty', [
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Address"](creator).toScVal(),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Address"](TOKEN_ID).toScVal(),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Address"](victimId).toScVal(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$scval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nativeToScVal"])(hexToBytes(imageIdHex), {
            type: 'bytes'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$scval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nativeToScVal"])(BigInt(expiry), {
            type: 'u64'
        })
    ], creator, sign);
    return result;
}
async function withdraw(bountyId, creator, sign) {
    if (!CONTRACTS_CONFIGURED) throw new Error('Registry belum dikonfigurasi (NEXT_PUBLIC_VERIFIER_ID).');
    return invoke(VERIFIER_ID, 'withdraw', [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$scval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nativeToScVal"])(bountyId, {
            type: 'u32'
        })
    ], creator, sign);
}
async function fundBounty(bountyId, from, amount, sign) {
    if (!CONTRACTS_CONFIGURED) throw new Error('Registry belum dikonfigurasi (NEXT_PUBLIC_VERIFIER_ID).');
    return invoke(VERIFIER_ID, 'fund', [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$scval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nativeToScVal"])(bountyId, {
            type: 'u32'
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Address"](from).toScVal(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$scval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nativeToScVal"])(amount, {
            type: 'i128'
        })
    ], from, sign);
}
function toHex(b) {
    return Array.from(b).map((x)=>x.toString(16).padStart(2, '0')).join('');
}
const shortC = (a)=>a.length > 9 ? `${a.slice(0, 4)}…${a.slice(-4)}` : a;
// Judul/desk ramah per image_id (on-chain nggak nyimpan teks). Fallback generik.
const TITLES = {
    '2faaf29ce60a8d2087e5f7e5337b491d619f10dfcfd619376c4d0c377a78b8da': {
        title: 'Factoring guard',
        desc: 'Break the multiplication invariant without revealing the factors.'
    }
};
async function listBounties() {
    const n = await getCount();
    const out = [];
    for(let i = 0; i < n; i++){
        const b = await getBounty(i);
        const imgHex = toHex(new Uint8Array(b.image_id));
        const meta = TITLES[imgHex] ?? {
            title: `ZK Bounty #${i}`,
            desc: 'Submit a valid RISC Zero proof to claim the reward.'
        };
        const rewardNum = Number(b.amount) / 1e7;
        out.push({
            id: String(i),
            status: b.claimed ? 'claimed' : 'open',
            reward: `${rewardNum.toLocaleString('en-US')} XLM`,
            rewardNum,
            title: meta.title,
            desc: meta.desc,
            victim: shortC(b.victim_id),
            creator: b.creator,
            claimer: b.claimer ?? null
        });
    }
    return out;
}
async function claim(bountyId, hunter, journal, seal, sign) {
    if (!CONTRACTS_CONFIGURED) throw new Error('Registry belum dikonfigurasi (NEXT_PUBLIC_VERIFIER_ID).');
    const { hash } = await invoke(VERIFIER_ID, 'claim', [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$scval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nativeToScVal"])(bountyId, {
            type: 'u32'
        }),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Address"](hunter).toScVal(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$scval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nativeToScVal"])(journal, {
            type: 'bytes'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$stellar$2d$sdk$2f$lib$2f$esm$2f$base$2f$scval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nativeToScVal"])(seal, {
            type: 'bytes'
        })
    ], hunter, sign);
    return hash;
}
function explorerTxUrl(hash) {
    const net = NETWORK_PASSPHRASE.includes('Public') ? 'public' : 'testnet';
    return `https://stellar.expert/explorer/${net}/tx/${hash}`;
}
var _c;
__turbopack_context__.k.register(_c, "CONTRACTS_CONFIGURED");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/wallet.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "connect",
    ()=>connect,
    "freighterInstalled",
    ()=>freighterInstalled,
    "getConnected",
    ()=>getConnected,
    "shortAddr",
    ()=>shortAddr,
    "sign",
    ()=>sign
]);
// Thin wrapper around @stellar/freighter-api (v6, object-return shape).
// All calls are browser-only; guard with isBrowser before use.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$freighter$2d$api$2f$build$2f$index$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stellar/freighter-api/build/index.min.js [app-client] (ecmascript)");
;
async function freighterInstalled() {
    try {
        const r = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$freighter$2d$api$2f$build$2f$index$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isConnected"])();
        return !!r.isConnected;
    } catch  {
        return false;
    }
}
async function getConnected() {
    try {
        if (!await freighterInstalled()) return null;
        const allowed = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$freighter$2d$api$2f$build$2f$index$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAllowed"])();
        if (!allowed.isAllowed) return null;
        const addr = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$freighter$2d$api$2f$build$2f$index$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])();
        if (addr.error || !addr.address) return null;
        const net = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$freighter$2d$api$2f$build$2f$index$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNetwork"])();
        return {
            address: addr.address,
            network: net.network ?? 'TESTNET',
            networkPassphrase: net.networkPassphrase ?? ''
        };
    } catch  {
        return null;
    }
}
async function connect() {
    if (!await freighterInstalled()) {
        throw new Error('Freighter not detected. Install the Freighter extension to connect.');
    }
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$freighter$2d$api$2f$build$2f$index$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setAllowed"])();
    const access = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$freighter$2d$api$2f$build$2f$index$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestAccess"])();
    if (access.error || !access.address) {
        throw new Error(access.error || 'Connection rejected in Freighter.');
    }
    const net = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$freighter$2d$api$2f$build$2f$index$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNetwork"])();
    return {
        address: access.address,
        network: net.network ?? 'TESTNET',
        networkPassphrase: net.networkPassphrase ?? ''
    };
}
async function sign(xdr, networkPassphrase) {
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stellar$2f$freighter$2d$api$2f$build$2f$index$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signTransaction"])(xdr, {
        networkPassphrase
    });
    if (res.error || !res.signedTxXdr) {
        throw new Error(res.error || 'Signing rejected in Freighter.');
    }
    return res.signedTxXdr;
}
function shortAddr(a) {
    return a.length > 9 ? `${a.slice(0, 4)}…${a.slice(-4)}` : a;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/screens/Verify.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Verify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stellar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stellar.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/wallet.ts [app-client] (ecmascript)");
'use client';
;
;
;
const MONO = "var(--font-mono,'JetBrains Mono',monospace)";
const SERIF = "var(--font-serif,'Instrument Serif',serif)";
const SANS = "var(--font-sans,'Inter',sans-serif)";
function Verify({ bounty, steps, verified, balanceStr, backToBounties, hunterAddr, txHash }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-[720px] mx-auto px-5 md:px-10 pt-10 md:pt-14 pb-16 md:pb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5 md:p-8",
                style: {
                    background: '#111111',
                    border: '1px solid #242424'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-6 md:mb-7",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: MONO,
                                    fontSize: 11,
                                    color: '#5A5A5A',
                                    letterSpacing: '.12em',
                                    textTransform: 'uppercase'
                                },
                                children: "On-chain verification"
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/Verify.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: MONO,
                                    fontSize: 11,
                                    color: '#8A8A8A'
                                },
                                children: bounty.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/Verify.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/Verify.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-0.5",
                        children: steps.map((st, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 md:gap-4 py-4",
                                style: {
                                    borderBottom: i < steps.length - 1 ? '1px solid #1c1c1c' : 'none'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden md:inline",
                                        style: {
                                            fontFamily: MONO,
                                            fontSize: 11,
                                            color: '#5A5A5A',
                                            width: 20
                                        },
                                        children: st.idx
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/Verify.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            width: 18,
                                            height: 18,
                                            borderRadius: '50%',
                                            flexShrink: 0,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            border: `1px solid ${st.dotBorder}`,
                                            background: st.dotBg,
                                            color: '#06241B',
                                            fontSize: 11
                                        },
                                        children: st.glyph
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/Verify.tsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[12px] md:text-[13.5px]",
                                        style: {
                                            fontFamily: MONO,
                                            color: st.labelColor,
                                            letterSpacing: '.01em'
                                        },
                                        children: st.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/Verify.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-auto text-[9px] md:text-[10px]",
                                        style: {
                                            fontFamily: MONO,
                                            letterSpacing: '.1em',
                                            textTransform: 'uppercase',
                                            color: st.tagColor
                                        },
                                        children: st.tag
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/Verify.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, st.idx, true, {
                                fileName: "[project]/src/components/screens/Verify.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/Verify.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/Verify.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            verified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 md:mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: '#111111',
                            border: '1px solid rgba(20,184,138,.4)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center px-5 md:px-8 py-8 md:py-10",
                                style: {
                                    borderBottom: '1px solid #242424'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center mx-auto mb-5 md:mb-6",
                                        style: {
                                            width: 56,
                                            height: 56,
                                            borderRadius: '50%',
                                            border: '1px solid rgba(20,184,138,.4)',
                                            background: 'rgba(20,184,138,.08)'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 24,
                                                color: '#14B88A'
                                            },
                                            children: "✓"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/Verify.tsx",
                                            lineNumber: 67,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/Verify.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[28px] md:text-[40px] mb-2 md:mb-3",
                                        style: {
                                            fontFamily: SERIF,
                                            fontWeight: 400,
                                            lineHeight: 1.05,
                                            color: '#EDEDED',
                                            margin: 0
                                        },
                                        children: "Proof valid — reward released"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/Verify.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: MONO,
                                            fontSize: 13,
                                            color: '#8A8A8A',
                                            margin: 0
                                        },
                                        children: "The contract verified your receipt and paid out automatically."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/screens/Verify.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/Verify.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-5 md:px-8 py-5 md:py-7",
                                children: [
                                    [
                                        [
                                            'Bounty',
                                            bounty.title,
                                            '#EDEDED'
                                        ],
                                        [
                                            'Reward',
                                            bounty.reward,
                                            '#14B88A'
                                        ],
                                        [
                                            'To',
                                            hunterAddr ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shortAddr"])(hunterAddr) : 'GD7X…K2P9',
                                            '#EDEDED'
                                        ]
                                    ].map(([k, v, c])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between py-3",
                                            style: {
                                                borderBottom: '1px solid #1c1c1c'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: MONO,
                                                        fontSize: 12,
                                                        color: '#5A5A5A'
                                                    },
                                                    children: k
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/screens/Verify.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: MONO,
                                                        fontSize: 12,
                                                        color: c
                                                    },
                                                    children: v
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/screens/Verify.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, k, true, {
                                            fileName: "[project]/src/components/screens/Verify.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between py-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: MONO,
                                                    fontSize: 12,
                                                    color: '#5A5A5A'
                                                },
                                                children: "Tx"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/Verify.tsx",
                                                lineNumber: 89,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: MONO,
                                                    fontSize: 12,
                                                    color: '#EDEDED'
                                                },
                                                children: txHash ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shortAddr"])(txHash),
                                                        ' ',
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stellar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["explorerTxUrl"])(txHash),
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            style: {
                                                                color: '#14B88A',
                                                                cursor: 'pointer'
                                                            },
                                                            children: "view on explorer ↗"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/screens/Verify.tsx",
                                                            lineNumber: 94,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: '#5A5A5A'
                                                    },
                                                    children: "demo — connect wallet for on-chain tx"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/screens/Verify.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/Verify.tsx",
                                                lineNumber: 90,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/Verify.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/Verify.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2",
                                style: {
                                    borderTop: '1px solid #242424'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-5 md:px-8 py-4 md:py-5",
                                        style: {
                                            borderRight: '1px solid #242424'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: MONO,
                                                    fontSize: 10,
                                                    color: '#5A5A5A',
                                                    letterSpacing: '.1em',
                                                    textTransform: 'uppercase',
                                                    marginBottom: 8
                                                },
                                                children: "Wallet balance"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/Verify.tsx",
                                                lineNumber: 106,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: MONO,
                                                    fontWeight: 600,
                                                    fontSize: 18,
                                                    color: '#EDEDED'
                                                },
                                                children: [
                                                    balanceStr,
                                                    " XLM"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/screens/Verify.tsx",
                                                lineNumber: 107,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/Verify.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-5 md:px-8 py-4 md:py-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: MONO,
                                                    fontSize: 10,
                                                    color: '#5A5A5A',
                                                    letterSpacing: '.1em',
                                                    textTransform: 'uppercase',
                                                    marginBottom: 8
                                                },
                                                children: "Bounty status"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/Verify.tsx",
                                                lineNumber: 110,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: MONO,
                                                    fontSize: 10,
                                                    letterSpacing: '.12em',
                                                    padding: '4px 9px',
                                                    borderRadius: 2,
                                                    border: '1px solid #242424',
                                                    color: '#5A8A75'
                                                },
                                                children: "CLAIMED"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/screens/Verify.tsx",
                                                lineNumber: 111,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/screens/Verify.tsx",
                                        lineNumber: 109,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/Verify.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/Verify.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: backToBounties,
                        className: "vbtn vbtn-ghost mt-4 md:mt-5",
                        style: {
                            background: 'transparent',
                            color: '#EDEDED',
                            border: '1px solid #333',
                            padding: '13px 24px',
                            fontFamily: SANS,
                            fontWeight: 500,
                            fontSize: 14,
                            borderRadius: 2,
                            cursor: 'pointer'
                        },
                        children: "← Back to bounties"
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/Verify.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/Verify.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/screens/Verify.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c = Verify;
var _c;
__turbopack_context__.k.register(_c, "Verify");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/screens/Create.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Create
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const MONO = "var(--font-mono,'JetBrains Mono',monospace)";
const SERIF = "var(--font-serif,'Instrument Serif',serif)";
const SANS = "var(--font-sans,'Inter',sans-serif)";
// Template guest default (logika faktorisasi) — titik awal buat creator edit.
const DEFAULT_GUEST = `use risc0_zkvm::guest::env;

fn main() {
    // input RAHASIA (tidak di-commit → tetap rahasia)
    let a: u128 = env::read();
    let b: u128 = env::read();
    // input PUBLIK
    let target: u128 = env::read();
    let victim_id: [u8; 32] = env::read();

    // aturan "bobol" — ubah sesuai invariant kontrakmu:
    assert!(a.checked_mul(b) == Some(target), "a*b != target");
    assert!(a != 1 && b != 1, "faktorisasi trivial");
    assert!(a != target && b != target, "faktorisasi trivial");

    // commit PUBLIK saja (tanpa a,b)
    env::commit(&(victim_id, target));
}
`;
function Create({ form, go: _go, onAddrChange, onImageChange, onRewardChange, onToken, onSubmit, busy }) {
    _s();
    const tokenBg = (t)=>form.token === t ? '#1c1c1c' : 'transparent';
    const tokenClr = (t)=>form.token === t ? '#EDEDED' : '#8A8A8A';
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('paste');
    const [src, setSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_GUEST);
    const [compiling, setCompiling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [compileMsg, setCompileMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [aiDesc, setAiDesc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [generating, setGenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [genMsg, setGenMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const onGenerate = async ()=>{
        if (!aiDesc.trim()) {
            setGenMsg('✗ describe the contract first');
            return;
        }
        setGenerating(true);
        setGenMsg('AI is drafting the guest… (a few seconds)');
        try {
            const description = `Contract address: ${form.addr || '(not given)'}\n\n${aiDesc}`;
            const r = await fetch('/api/generate-guest', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    description
                })
            });
            const j = await r.json();
            if (!r.ok || j.error) throw new Error(j.error || 'generate failed');
            setSrc(j.code);
            setGenMsg('✓ Draft ready — review/edit below, then Compile');
        } catch (e) {
            setGenMsg('✗ ' + (e instanceof Error ? e.message : 'generate failed'));
        } finally{
            setGenerating(false);
        }
    };
    const onCompile = async ()=>{
        setCompiling(true);
        setCompileMsg('Compiling on server… (first build can take a few minutes)');
        try {
            // default: API route bawaan Next (/api/compile). Kalau backend dipisah
            // (mis. di WSL), set NEXT_PUBLIC_COMPILE_URL=http://localhost:3001/compile
            const url = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_COMPILE_URL || '/api/compile';
            const r = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    guestSource: src
                })
            });
            const j = await r.json();
            if (!r.ok || j.error) throw new Error(j.error || 'compile failed');
            onImageChange(j.imageId);
            setCompileMsg('✓ Compiled — ImageID filled below');
        } catch (e) {
            setCompileMsg('✗ ' + (e instanceof Error ? e.message : 'compile failed'));
        } finally{
            setCompiling(false);
        }
    };
    const inputCls = "vinput w-full";
    const inputSty = {
        width: '100%',
        background: '#0A0A0A',
        border: '1px solid #242424',
        color: '#EDEDED',
        fontFamily: MONO,
        fontSize: 13,
        padding: '13px 14px',
        borderRadius: 2
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-[600px] mx-auto px-5 md:px-10 pt-10 md:pt-14 pb-16 md:pb-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 md:p-10",
            style: {
                background: '#111111',
                border: '1px solid #242424'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-[34px] md:text-[42px] mb-3",
                    style: {
                        fontFamily: SERIF,
                        fontWeight: 400,
                        lineHeight: 1,
                        color: '#EDEDED',
                        margin: 0
                    },
                    children: "Open a bounty"
                }, void 0, false, {
                    fileName: "[project]/src/components/screens/Create.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[13px] md:text-[14px] mb-7 md:mb-9",
                    style: {
                        lineHeight: 1.55,
                        color: '#8A8A8A',
                        fontFamily: SANS,
                        margin: 0
                    },
                    children: "Lock a reward against a contract. Hunters prove the exploit privately; the contract pays out automatically."
                }, void 0, false, {
                    fileName: "[project]/src/components/screens/Create.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-5 md:mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            style: {
                                display: 'block',
                                fontFamily: SANS,
                                fontWeight: 500,
                                fontSize: 13,
                                color: '#EDEDED',
                                marginBottom: 8
                            },
                            children: "Victim contract address"
                        }, void 0, false, {
                            fileName: "[project]/src/components/screens/Create.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: inputCls,
                            value: form.addr,
                            onChange: (e)=>onAddrChange(e.target.value),
                            placeholder: "CA4F…9XQ2",
                            style: inputSty
                        }, void 0, false, {
                            fileName: "[project]/src/components/screens/Create.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontFamily: SANS,
                                fontSize: 11,
                                color: '#5A5A5A',
                                marginTop: 7
                            },
                            children: "the deployed contract being tested"
                        }, void 0, false, {
                            fileName: "[project]/src/components/screens/Create.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/screens/Create.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 mb-3",
                    children: [
                        'paste',
                        'compile'
                    ].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            onClick: ()=>setMode(m),
                            className: "vlink text-[11px] px-3 py-2",
                            style: {
                                fontFamily: MONO,
                                border: '1px solid #242424',
                                borderRadius: 2,
                                cursor: 'pointer',
                                background: mode === m ? 'rgba(20,184,138,.1)' : 'transparent',
                                color: mode === m ? '#14B88A' : '#8A8A8A'
                            },
                            children: m === 'paste' ? 'Paste ImageID' : 'Compile in browser'
                        }, m, false, {
                            fileName: "[project]/src/components/screens/Create.tsx",
                            lineNumber: 128,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/screens/Create.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this),
                mode === 'compile' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-5 md:mb-6",
                    style: {
                        border: '1px solid #242424',
                        borderRadius: 2,
                        padding: 14,
                        background: '#0d0d0d'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            style: {
                                display: 'block',
                                fontFamily: SANS,
                                fontWeight: 500,
                                fontSize: 13,
                                color: '#EDEDED',
                                marginBottom: 4
                            },
                            children: [
                                "Guest logic ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: '#14B88A',
                                        fontSize: 11
                                    },
                                    children: "· compile (no install)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/Create.tsx",
                                    lineNumber: 140,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/screens/Create.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontFamily: SANS,
                                fontSize: 11,
                                color: '#5A5A5A',
                                marginBottom: 8
                            },
                            children: "edit the rule that defines a valid exploit — our server compiles it & fills the ImageID"
                        }, void 0, false, {
                            fileName: "[project]/src/components/screens/Create.tsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                border: '1px solid #1f2f29',
                                background: '#0c1411',
                                borderRadius: 2,
                                padding: 10,
                                marginBottom: 10
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontFamily: SANS,
                                        fontSize: 12,
                                        color: '#14B88A',
                                        marginBottom: 6
                                    },
                                    children: "✨ Generate with AI"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/Create.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: aiDesc,
                                    onChange: (e)=>setAiDesc(e.target.value),
                                    rows: 3,
                                    placeholder: "Describe the contract & its invariant — e.g. 'a vault that assumes a*b can never equal target=1,000,000 with non-trivial a,b'…",
                                    style: {
                                        ...inputSty,
                                        fontSize: 12,
                                        lineHeight: 1.5,
                                        resize: 'vertical'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/Create.tsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: onGenerate,
                                            disabled: generating,
                                            style: {
                                                background: 'transparent',
                                                color: '#14B88A',
                                                border: '1px solid #14B88A',
                                                padding: '8px 14px',
                                                fontFamily: SANS,
                                                fontWeight: 600,
                                                fontSize: 12,
                                                borderRadius: 2,
                                                cursor: generating ? 'not-allowed' : 'pointer'
                                            },
                                            children: generating ? 'Generating…' : 'Generate with AI →'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/Create.tsx",
                                            lineNumber: 152,
                                            columnNumber: 15
                                        }, this),
                                        genMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: MONO,
                                                fontSize: 11,
                                                color: genMsg.startsWith('✗') ? '#E06A6A' : '#8A8A8A'
                                            },
                                            children: genMsg
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/Create.tsx",
                                            lineNumber: 156,
                                            columnNumber: 26
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/screens/Create.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontFamily: SANS,
                                        fontSize: 10,
                                        color: '#5A5A5A',
                                        marginTop: 6
                                    },
                                    children: "AI writes a draft — review/edit before compiling."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/Create.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/screens/Create.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            value: src,
                            onChange: (e)=>setSrc(e.target.value),
                            spellCheck: false,
                            rows: 12,
                            style: {
                                ...inputSty,
                                fontSize: 11.5,
                                lineHeight: 1.5,
                                resize: 'vertical',
                                whiteSpace: 'pre',
                                overflowWrap: 'normal',
                                overflowX: 'auto'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/screens/Create.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onCompile,
                                    disabled: compiling,
                                    style: {
                                        background: compiling ? '#5A5A5A' : '#14B88A',
                                        color: '#06241B',
                                        border: 'none',
                                        padding: '9px 16px',
                                        fontFamily: SANS,
                                        fontWeight: 600,
                                        fontSize: 13,
                                        borderRadius: 2,
                                        cursor: compiling ? 'not-allowed' : 'pointer'
                                    },
                                    children: compiling ? 'Compiling…' : 'Compile guest →'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/Create.tsx",
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, this),
                                compileMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: MONO,
                                        fontSize: 11,
                                        color: compileMsg.startsWith('✗') ? '#E06A6A' : '#8A8A8A'
                                    },
                                    children: compileMsg
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/Create.tsx",
                                    lineNumber: 173,
                                    columnNumber: 28
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/screens/Create.tsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/screens/Create.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-5 md:mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            style: {
                                display: 'block',
                                fontFamily: SANS,
                                fontWeight: 500,
                                fontSize: 13,
                                color: '#EDEDED',
                                marginBottom: 8
                            },
                            children: "Guest ImageID"
                        }, void 0, false, {
                            fileName: "[project]/src/components/screens/Create.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: inputCls,
                            value: form.imageId,
                            onChange: (e)=>onImageChange(e.target.value),
                            placeholder: "2faaf29c… (64 hex)",
                            style: inputSty
                        }, void 0, false, {
                            fileName: "[project]/src/components/screens/Create.tsx",
                            lineNumber: 182,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontFamily: SANS,
                                fontSize: 11,
                                color: '#5A5A5A',
                                marginTop: 7
                            },
                            children: "hash of the open-source rule that defines a valid exploit"
                        }, void 0, false, {
                            fileName: "[project]/src/components/screens/Create.tsx",
                            lineNumber: 183,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/screens/Create.tsx",
                    lineNumber: 178,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-7",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            style: {
                                display: 'block',
                                fontFamily: SANS,
                                fontWeight: 500,
                                fontSize: 13,
                                color: '#EDEDED',
                                marginBottom: 8
                            },
                            children: "Reward"
                        }, void 0, false, {
                            fileName: "[project]/src/components/screens/Create.tsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 md:gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: "vinput",
                                    value: form.reward,
                                    onChange: (e)=>onRewardChange(e.target.value),
                                    placeholder: "500",
                                    style: {
                                        ...inputSty,
                                        flex: 1,
                                        width: 'auto'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/Create.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex",
                                    style: {
                                        border: '1px solid #242424',
                                        borderRadius: 2,
                                        overflow: 'hidden'
                                    },
                                    children: [
                                        'XLM',
                                        'USDC'
                                    ].map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            onClick: ()=>onToken(t),
                                            className: "vlink text-[11px] md:text-[12px] px-3 md:px-4 py-3 cursor-pointer",
                                            style: {
                                                fontFamily: MONO,
                                                background: tokenBg(t),
                                                color: tokenClr(t),
                                                borderLeft: i > 0 ? '1px solid #242424' : 'none'
                                            },
                                            children: t
                                        }, t, false, {
                                            fileName: "[project]/src/components/screens/Create.tsx",
                                            lineNumber: 195,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/Create.tsx",
                                    lineNumber: 193,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/screens/Create.tsx",
                            lineNumber: 190,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontFamily: SANS,
                                fontSize: 11,
                                color: '#5A5A5A',
                                marginTop: 7
                            },
                            children: "locked in escrow until a valid proof is submitted"
                        }, void 0, false, {
                            fileName: "[project]/src/components/screens/Create.tsx",
                            lineNumber: 205,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/screens/Create.tsx",
                    lineNumber: 186,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3 items-start mb-7 p-4",
                    style: {
                        border: '1px solid #242424',
                        background: '#161616',
                        borderRadius: 2
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: 13,
                                color: '#8A8A8A',
                                marginTop: 1
                            },
                            children: "ⓘ"
                        }, void 0, false, {
                            fileName: "[project]/src/components/screens/Create.tsx",
                            lineNumber: 211,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontFamily: MONO,
                                fontSize: 12,
                                color: '#8A8A8A',
                                lineHeight: 1.55
                            },
                            children: [
                                "Opening calls ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: '#EDEDED'
                                    },
                                    children: "create_bounty()"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/Create.tsx",
                                    lineNumber: 213,
                                    columnNumber: 27
                                }, this),
                                " then ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: '#EDEDED'
                                    },
                                    children: "fund()"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/screens/Create.tsx",
                                    lineNumber: 213,
                                    columnNumber: 90
                                }, this),
                                " via your wallet — two signatures."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/screens/Create.tsx",
                            lineNumber: 212,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/screens/Create.tsx",
                    lineNumber: 208,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onSubmit,
                    disabled: busy,
                    className: "vbtn",
                    style: {
                        width: '100%',
                        background: busy ? '#5A5A5A' : '#EDEDED',
                        color: '#0A0A0A',
                        border: 'none',
                        padding: 16,
                        fontFamily: SANS,
                        fontWeight: 600,
                        fontSize: 15,
                        borderRadius: 2,
                        cursor: busy ? 'not-allowed' : 'pointer'
                    },
                    children: busy ? 'Opening…' : 'Open bounty & lock reward'
                }, void 0, false, {
                    fileName: "[project]/src/components/screens/Create.tsx",
                    lineNumber: 217,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mt-4 md:mt-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "vlink",
                        style: {
                            fontFamily: MONO,
                            fontSize: 12,
                            color: '#5A5A5A',
                            cursor: 'pointer',
                            textDecoration: 'underline'
                        },
                        children: "Advanced / how guests work ↓"
                    }, void 0, false, {
                        fileName: "[project]/src/components/screens/Create.tsx",
                        lineNumber: 221,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/screens/Create.tsx",
                    lineNumber: 220,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/screens/Create.tsx",
            lineNumber: 107,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/screens/Create.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
_s(Create, "PLhab8Q7ufqTyS8WM+3bV67kKhk=");
_c = Create;
var _c;
__turbopack_context__.k.register(_c, "Create");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/screens/Detail.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Detail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/wallet.ts [app-client] (ecmascript)");
'use client';
;
;
const MONO = "var(--font-mono,'JetBrains Mono',monospace)";
const SERIF = "var(--font-serif,'Instrument Serif',serif)";
const SANS = "var(--font-sans,'Inter',sans-serif)";
function Detail({ bounty, backToBounties }) {
    const claimed = bounty.status === 'claimed';
    const rows = [
        [
            'Status',
            claimed ? 'CLAIMED' : 'OPEN',
            claimed ? '#5A8A75' : '#14B88A'
        ],
        [
            'Reward',
            bounty.reward,
            '#14B88A'
        ],
        [
            'Victim contract',
            bounty.victim,
            '#EDEDED'
        ],
        [
            'Created by',
            bounty.creator ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shortAddr"])(bounty.creator) : '—',
            '#EDEDED'
        ],
        [
            'Claimed by',
            bounty.claimer ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shortAddr"])(bounty.claimer) : '— (not yet claimed)',
            claimed ? '#EDEDED' : '#5A5A5A'
        ]
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-[720px] mx-auto px-5 md:px-10 pt-10 md:pt-14 pb-16 md:pb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: '#111111',
                    border: '1px solid #242424'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-5 md:px-8 py-7 md:py-9",
                        style: {
                            borderBottom: '1px solid #242424'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: MONO,
                                    fontSize: 11,
                                    color: '#5A5A5A',
                                    letterSpacing: '.12em',
                                    textTransform: 'uppercase',
                                    marginBottom: 10
                                },
                                children: [
                                    "Bounty #",
                                    bounty.id
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/screens/Detail.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[28px] md:text-[40px]",
                                style: {
                                    fontFamily: SERIF,
                                    fontWeight: 400,
                                    lineHeight: 1.05,
                                    color: '#EDEDED',
                                    margin: 0
                                },
                                children: bounty.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/Detail.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: SANS,
                                    fontSize: 14,
                                    color: '#8A8A8A',
                                    margin: '10px 0 0'
                                },
                                children: bounty.desc
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/Detail.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/Detail.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-5 md:px-8 py-5 md:py-7",
                        children: [
                            rows.map(([k, v, c])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between py-3 gap-4",
                                    style: {
                                        borderBottom: '1px solid #1c1c1c'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: MONO,
                                                fontSize: 12,
                                                color: '#5A5A5A'
                                            },
                                            children: k
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/Detail.tsx",
                                            lineNumber: 41,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: MONO,
                                                fontSize: 12,
                                                color: c,
                                                textAlign: 'right',
                                                wordBreak: 'break-all'
                                            },
                                            children: v
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/screens/Detail.tsx",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, k, true, {
                                    fileName: "[project]/src/components/screens/Detail.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: MONO,
                                    fontSize: 11,
                                    color: '#5A5A5A',
                                    margin: '14px 0 0',
                                    lineHeight: 1.6
                                },
                                children: claimed ? 'The hunter proved the exploit in zero-knowledge — the secret input was never revealed. The contract verified the proof on-chain and released the reward automatically.' : 'Bounty is still open. A hunter can submit a valid proof to claim the reward.'
                            }, void 0, false, {
                                fileName: "[project]/src/components/screens/Detail.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/screens/Detail.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/screens/Detail.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: backToBounties,
                className: "vbtn vbtn-ghost mt-4 md:mt-5",
                style: {
                    background: 'transparent',
                    color: '#EDEDED',
                    border: '1px solid #333',
                    padding: '13px 24px',
                    fontFamily: SANS,
                    fontWeight: 500,
                    fontSize: 14,
                    borderRadius: 2,
                    cursor: 'pointer'
                },
                children: "← Back to bounties"
            }, void 0, false, {
                fileName: "[project]/src/components/screens/Detail.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/screens/Detail.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = Detail;
var _c;
__turbopack_context__.k.register(_c, "Detail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/AppNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/wallet.ts [app-client] (ecmascript)");
'use client';
;
;
const MONO = "var(--font-mono,'JetBrains Mono',monospace)";
const SANS = "var(--font-sans,'Inter',sans-serif)";
function AppNav({ go, huntActive, createActive, balanceStr, connected, connecting, address, onConnect, onDisconnect, onSwitch }) {
    const tabBg = (on)=>on ? '#1c1c1c' : 'transparent';
    const tabClr = (on)=>on ? '#EDEDED' : '#8A8A8A';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between px-5 md:px-10 py-[14px] md:py-[18px]",
        style: {
            borderBottom: '1px solid #242424',
            position: 'sticky',
            top: 0,
            background: '#0A0A0A',
            zIndex: 20
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-5 md:gap-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>go('landing'),
                        className: "vbtn",
                        style: {
                            fontFamily: MONO,
                            fontWeight: 700,
                            fontSize: 17,
                            letterSpacing: '.34em',
                            cursor: 'pointer',
                            color: '#EDEDED'
                        },
                        children: "VEIL"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AppNav.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-[3px] md:gap-[6px]",
                        style: {
                            border: '1px solid #242424',
                            borderRadius: 2,
                            padding: 3
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                onClick: ()=>go('hunt'),
                                className: "vlink text-[11px] md:text-[12px] px-3 md:px-[14px] py-[6px] md:py-[7px]",
                                style: {
                                    fontFamily: MONO,
                                    letterSpacing: '.02em',
                                    borderRadius: 1,
                                    cursor: 'pointer',
                                    background: tabBg(huntActive),
                                    color: tabClr(huntActive)
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline",
                                        children: "Hunt bounties"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AppNav.tsx",
                                        lineNumber: 43,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline sm:hidden",
                                        children: "Hunt"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AppNav.tsx",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AppNav.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                onClick: ()=>go('create'),
                                className: "vlink text-[11px] md:text-[12px] px-3 md:px-[14px] py-[6px] md:py-[7px]",
                                style: {
                                    fontFamily: MONO,
                                    letterSpacing: '.02em',
                                    borderRadius: 1,
                                    cursor: 'pointer',
                                    background: tabBg(createActive),
                                    color: tabClr(createActive)
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline",
                                        children: "Create bounty"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AppNav.tsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline sm:hidden",
                                        children: "Create"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AppNav.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AppNav.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AppNav.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AppNav.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            connected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 md:gap-[9px] px-3 md:px-[14px] py-2 md:py-[8px]",
                style: {
                    border: '1px solid #242424',
                    borderRadius: 2
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            width: 7,
                            height: 7,
                            borderRadius: '50%',
                            background: '#14B88A',
                            display: 'inline-block',
                            boxShadow: '0 0 0 3px rgba(20,184,138,.12)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/AppNav.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onSwitch,
                        title: "Switch account",
                        "aria-label": "Switch account",
                        className: "vlink hidden sm:inline",
                        style: {
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            fontFamily: MONO,
                            fontSize: 12,
                            color: '#EDEDED',
                            letterSpacing: '.02em',
                            padding: 0
                        },
                        children: address ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shortAddr"])(address) : '—'
                    }, void 0, false, {
                        fileName: "[project]/src/components/AppNav.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hidden sm:inline",
                        style: {
                            fontFamily: MONO,
                            fontSize: 12,
                            color: '#5A5A5A'
                        },
                        children: "·"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AppNav.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: MONO,
                            fontSize: 12,
                            color: '#8A8A8A'
                        },
                        children: [
                            balanceStr,
                            " XLM"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AppNav.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            width: 1,
                            height: 14,
                            background: '#242424',
                            display: 'inline-block',
                            margin: '0 2px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/AppNav.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onDisconnect,
                        title: "Disconnect wallet",
                        "aria-label": "Disconnect wallet",
                        className: "vlink flex items-center",
                        style: {
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            color: '#14B88A',
                            padding: 0,
                            lineHeight: 0
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "15",
                            height: "15",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M9 17H7A5 5 0 0 1 7 7"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AppNav.tsx",
                                    lineNumber: 74,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M15 7h2a5 5 0 0 1 4 7.54"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AppNav.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "8",
                                    y1: "12",
                                    x2: "12",
                                    y2: "12"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AppNav.tsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "2",
                                    y1: "2",
                                    x2: "22",
                                    y2: "22"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AppNav.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AppNav.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/AppNav.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AppNav.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onConnect,
                disabled: connecting,
                className: "vbtn vbtn-ghost flex items-center gap-2 px-3 md:px-[14px] py-2 md:py-[8px]",
                style: {
                    background: 'transparent',
                    border: '1px solid #333',
                    borderRadius: 2,
                    cursor: connecting ? 'wait' : 'pointer',
                    fontFamily: MONO,
                    fontSize: 12,
                    color: '#EDEDED',
                    letterSpacing: '.02em'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            background: '#14B88A',
                            display: 'inline-block'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/AppNav.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this),
                    connecting ? 'Connecting…' : 'Connect wallet'
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AppNav.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AppNav.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c = AppNav;
var _c;
__turbopack_context__.k.register(_c, "AppNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Toast.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Toast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function Toast({ message }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            bottom: 80,
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#161616',
            border: '1px solid rgba(20,184,138,.4)',
            borderRadius: 2,
            padding: '13px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            zIndex: 60,
            animation: 'veilup .4s ease both'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    color: '#14B88A',
                    font: '14px monospace'
                },
                children: "✓"
            }, void 0, false, {
                fileName: "[project]/src/components/Toast.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    font: "12px 'JetBrains Mono',monospace",
                    color: '#EDEDED',
                    fontFamily: "var(--font-mono,'JetBrains Mono',monospace)"
                },
                children: message
            }, void 0, false, {
                fileName: "[project]/src/components/Toast.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Toast.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Toast;
var _c;
__turbopack_context__.k.register(_c, "Toast");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/IntroOverlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IntroOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/motion.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const easeInOutCubic = (x)=>x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
const easeOutCubic = (x)=>1 - Math.pow(1 - x, 3);
const clamp01 = (x)=>x < 0 ? 0 : x > 1 ? 1 : x;
// timeline (seconds)
const T_ASSEMBLE = 0.55;
const T_MORPH = 1.25;
const T_HOLD = 0.65;
const T_SHATTER = 1.05;
const T_END = T_ASSEMBLE + T_MORPH + T_HOLD + T_SHATTER // ≈ 3.5s
;
function IntroOverlay({ onDone, word = 'VEIL' }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [leaving, setLeaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const doneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IntroOverlay.useEffect": ()=>{
            // honour reduced-motion: skip the whole intro, reveal landing immediately
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefersReducedMotion"])()) {
                doneRef.current = true;
                setLeaving(true);
                const tm = setTimeout(onDone, 120);
                return ({
                    "IntroOverlay.useEffect": ()=>clearTimeout(tm)
                })["IntroOverlay.useEffect"];
            }
            const cv = ref.current;
            if (!cv) return;
            const ctx = cv.getContext('2d');
            if (!ctx) return;
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            let w = 0, h = 0, cx = 0, cy = 0;
            let diamond = [];
            let text = [];
            let particles = [];
            const build = {
                "IntroOverlay.useEffect.build": ()=>{
                    w = window.innerWidth;
                    h = window.innerHeight;
                    cv.width = w * dpr;
                    cv.height = h * dpr;
                    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
                    cx = w / 2;
                    cy = h / 2;
                    const S = Math.min(w, h) // stage size
                    ;
                    const gap = Math.max(8, Math.round(S / 42));
                    const R = S * 0.34;
                    // diamond home points
                    diamond = [];
                    for(let y = cy - R - gap; y <= cy + R + gap; y += gap){
                        for(let x = cx - R - gap; x <= cx + R + gap; x += gap){
                            const man = Math.abs(x - cx) + Math.abs(y - cy);
                            if (man > R) continue;
                            diamond.push({
                                x,
                                y,
                                nd: man / R
                            });
                        }
                    }
                    // VEIL target points
                    text = [];
                    const off = document.createElement('canvas');
                    off.width = w;
                    off.height = h;
                    const octx = off.getContext('2d');
                    const fs = Math.round(S * 0.26);
                    octx.fillStyle = '#fff';
                    octx.textAlign = 'center';
                    octx.textBaseline = 'middle';
                    octx.font = `700 ${fs}px Inter, system-ui, sans-serif`;
                    try {
                        octx.letterSpacing = `${Math.round(S * 0.016)}px`;
                    } catch  {}
                    octx.fillText(word, cx, cy);
                    const tstep = Math.max(5, Math.round(S / 82));
                    const img = octx.getImageData(0, 0, w, h).data;
                    for(let y = 0; y < h; y += tstep){
                        for(let x = 0; x < w; x += tstep){
                            if (img[(y * w + x) * 4 + 3] > 120) text.push({
                                x,
                                y
                            });
                        }
                    }
                    // particle pool
                    const n = Math.max(diamond.length, text.length || 1);
                    particles = [];
                    for(let i = 0; i < n; i++){
                        const d = diamond[i % diamond.length];
                        const tp = text.length ? text[i % text.length] : d;
                        // shatter velocity: radial from center + jitter
                        const ang = Math.atan2(tp.y - cy, tp.x - cx) + (Math.random() - 0.5) * 0.8;
                        const spd = S * (1.0 + Math.random() * 1.4);
                        particles.push({
                            hx: d.x,
                            hy: d.y,
                            tx: tp.x,
                            ty: tp.y,
                            nd: d.nd,
                            seed: Math.random(),
                            vx: Math.cos(ang) * spd,
                            vy: Math.sin(ang) * spd - S * 0.15
                        });
                    }
                }
            }["IntroOverlay.useEffect.build"];
            build();
            const start = performance.now();
            let raf = 0;
            const draw = {
                "IntroOverlay.useEffect.draw": (now)=>{
                    const time = (now - start) / 1000;
                    ctx.clearRect(0, 0, w, h);
                    // phase progress
                    const inShatter = time > T_ASSEMBLE + T_MORPH + T_HOLD;
                    const shatterT = clamp01((time - (T_ASSEMBLE + T_MORPH + T_HOLD)) / T_SHATTER);
                    // background: opaque until shatter, then fade to reveal landing
                    const bgAlpha = inShatter ? 1 - easeOutCubic(clamp01((shatterT - 0.05) / 0.85)) : 1;
                    ctx.fillStyle = `rgba(10,10,10,${bgAlpha.toFixed(3)})`;
                    ctx.fillRect(0, 0, w, h);
                    // morph 0→1 (diamond → text)
                    const m = clamp01((time - T_ASSEMBLE) / T_MORPH);
                    // assemble fade-in
                    const appear = clamp01(time / T_ASSEMBLE);
                    for(let i = 0; i < particles.length; i++){
                        const p = particles[i];
                        const er = clamp01((m - p.seed * 0.22) / (1 - 0.22));
                        const e = easeInOutCubic(er);
                        // base interpolated position diamond→text
                        let x = p.hx + (p.tx - p.hx) * e;
                        let y = p.hy + (p.ty - p.hy) * e;
                        // colour: white near edge, teal toward center / in VEIL
                        const tealT = p.seed < 0.5;
                        const wave = Math.sin(p.nd * 8 - time * 2);
                        const tealD = p.nd < 0.36 && wave > 0.4;
                        const cD = tealD ? [
                            20,
                            184,
                            138
                        ] : [
                            237,
                            237,
                            237
                        ];
                        const cT = tealT ? [
                            20,
                            184,
                            138
                        ] : [
                            237,
                            237,
                            237
                        ];
                        const r = Math.round(cD[0] + (cT[0] - cD[0]) * e);
                        const g = Math.round(cD[1] + (cT[1] - cD[1]) * e);
                        const b = Math.round(cD[2] + (cT[2] - cD[2]) * e);
                        let size = 1.4 + e * 1.2;
                        let alpha = (0.35 + 0.5 * e) * appear;
                        // shatter: fling outward + fade
                        if (inShatter) {
                            const st = easeOutCubic(shatterT);
                            x += p.vx * st * 0.5;
                            y += p.vy * st * 0.5;
                            y += 240 * st * st * p.seed; // slight downward gravity drift
                            size *= 1 + st * 1.2;
                            alpha *= 1 - shatterT;
                        }
                        if (alpha < 0.03) continue;
                        ctx.fillStyle = `rgba(${r},${g},${b},${alpha.toFixed(3)})`;
                        ctx.fillRect(x - size / 2, y - size / 2, size, size);
                    }
                    if (time >= T_END) {
                        if (!doneRef.current) {
                            doneRef.current = true;
                            setLeaving(true);
                            setTimeout(onDone, 380);
                        }
                        return;
                    }
                    raf = requestAnimationFrame(draw);
                }
            }["IntroOverlay.useEffect.draw"];
            raf = requestAnimationFrame(draw);
            const onResize = {
                "IntroOverlay.useEffect.onResize": ()=>build()
            }["IntroOverlay.useEffect.onResize"];
            window.addEventListener('resize', onResize);
            return ({
                "IntroOverlay.useEffect": ()=>{
                    cancelAnimationFrame(raf);
                    window.removeEventListener('resize', onResize);
                }
            })["IntroOverlay.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["IntroOverlay.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            pointerEvents: leaving ? 'none' : 'auto',
            opacity: leaving ? 0 : 1,
            transition: 'opacity .38s ease'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: ref,
            style: {
                width: '100%',
                height: '100%',
                display: 'block'
            }
        }, void 0, false, {
            fileName: "[project]/src/components/IntroOverlay.tsx",
            lineNumber: 202,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/IntroOverlay.tsx",
        lineNumber: 194,
        columnNumber: 5
    }, this);
}
_s(IntroOverlay, "uDGwHVblzuYmoLwR9EGeDeS6cIM=");
_c = IntroOverlay;
var _c;
__turbopack_context__.k.register(_c, "IntroOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useWallet.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWallet",
    ()=>useWallet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/wallet.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stellar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stellar.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function useWallet() {
    _s();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [info, setInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [balance, setBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const mounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const loadBalance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWallet.useCallback[loadBalance]": async (addr)=>{
            const bal = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stellar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getXlmBalance"])(addr);
            if (mounted.current) setBalance(bal);
        }
    }["useWallet.useCallback[loadBalance]"], []);
    // re-attach on mount if the site is already authorised
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useWallet.useEffect": ()=>{
            mounted.current = true;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConnected"])().then({
                "useWallet.useEffect": (w)=>{
                    if (!mounted.current || !w) return;
                    setInfo(w);
                    setStatus('connected');
                    loadBalance(w.address);
                }
            }["useWallet.useEffect"]);
            return ({
                "useWallet.useEffect": ()=>{
                    mounted.current = false;
                }
            })["useWallet.useEffect"];
        }
    }["useWallet.useEffect"], [
        loadBalance
    ]);
    const connect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWallet.useCallback[connect]": async ()=>{
            setError(null);
            setStatus('connecting');
            try {
                const w = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connect"])();
                if (mounted.current) {
                    setInfo(w);
                    setStatus('connected');
                    loadBalance(w.address);
                }
                return w;
            } catch (e) {
                if (mounted.current) {
                    setStatus('idle');
                    setError(e instanceof Error ? e.message : 'Failed to connect wallet.');
                }
                throw e;
            }
        }
    }["useWallet.useCallback[connect]"], [
        loadBalance
    ]);
    const disconnect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWallet.useCallback[disconnect]": ()=>{
            setInfo(null);
            setStatus('idle');
            setBalance(0);
            setError(null);
        }
    }["useWallet.useCallback[disconnect]"], []);
    const refreshBalance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWallet.useCallback[refreshBalance]": ()=>{
            if (info?.address) loadBalance(info.address);
        }
    }["useWallet.useCallback[refreshBalance]"], [
        info,
        loadBalance
    ]);
    return {
        status,
        address: info?.address ?? null,
        network: info?.network ?? null,
        balance,
        error,
        connect,
        disconnect,
        refreshBalance,
        sign: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sign"]
    };
}
_s(useWallet, "FlTAX1d8tkkkoxZ0vYRbi47lyKU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/VeilApp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VeilApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$Landing$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/screens/Landing.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$Features$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/screens/Features.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$HowItWorks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/screens/HowItWorks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$Hunt$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/screens/Hunt.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$Submit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/screens/Submit.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$Verify$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/screens/Verify.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$Create$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/screens/Create.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$Detail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/screens/Detail.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AppNav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$IntroOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/IntroOverlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useWallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useWallet.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/wallet.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stellar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stellar.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function VeilApp() {
    _s();
    const [s, setS] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_STATE"]);
    const [intro, setIntro] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showTop, setShowTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const timers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const proofRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useWallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"])();
    const connected = wallet.status === 'connected';
    const [chainBounties, setChainBounties] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [claimTx, setClaimTx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Direct-fetch daftar bounty dari registry (kalau kontrak dikonfigurasi).
    const loadBounties = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VeilApp.useCallback[loadBounties]": async ()=>{
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stellar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTRACTS_CONFIGURED"]) return;
            try {
                setChainBounties(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stellar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listBounties"])());
            } catch  {}
        }
    }["VeilApp.useCallback[loadBounties]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VeilApp.useEffect": ()=>{
            loadBounties();
        }
    }["VeilApp.useEffect"], [
        loadBounties
    ]);
    const addTimer = (t)=>{
        timers.current.push(t);
    };
    const clearTimers = ()=>{
        timers.current.forEach(clearTimeout);
        timers.current = [];
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VeilApp.useEffect": ()=>({
                "VeilApp.useEffect": ()=>clearTimers()
            })["VeilApp.useEffect"]
    }["VeilApp.useEffect"], []);
    // Esc → step back one level
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VeilApp.useEffect": ()=>{
            const onKey = {
                "VeilApp.useEffect.onKey": (e)=>{
                    if (e.key !== 'Escape') return;
                    setS({
                        "VeilApp.useEffect.onKey": (prev)=>{
                            if (prev.screen === 'submit' || prev.screen === 'verify') return {
                                ...prev,
                                screen: 'hunt'
                            };
                            if (prev.screen === 'landing') return prev;
                            return {
                                ...prev,
                                screen: 'landing'
                            };
                        }
                    }["VeilApp.useEffect.onKey"]);
                }
            }["VeilApp.useEffect.onKey"];
            window.addEventListener('keydown', onKey);
            return ({
                "VeilApp.useEffect": ()=>window.removeEventListener('keydown', onKey)
            })["VeilApp.useEffect"];
        }
    }["VeilApp.useEffect"], []);
    // scroll-to-top button visibility
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VeilApp.useEffect": ()=>{
            const onScroll = {
                "VeilApp.useEffect.onScroll": ()=>setShowTop(window.scrollY > 600)
            }["VeilApp.useEffect.onScroll"];
            window.addEventListener('scroll', onScroll, {
                passive: true
            });
            onScroll();
            return ({
                "VeilApp.useEffect": ()=>window.removeEventListener('scroll', onScroll)
            })["VeilApp.useEffect"];
        }
    }["VeilApp.useEffect"], []);
    const go = (screen)=>{
        setS((prev)=>({
                ...prev,
                screen
            }));
        try {
            window.scrollTo(0, 0);
        } catch (_) {}
    };
    const showToast = (msg, ms = 3200)=>{
        setS((prev)=>({
                ...prev,
                toast: msg
            }));
        addTimer(setTimeout(()=>setS((prev)=>({
                    ...prev,
                    toast: null
                })), ms));
    };
    const connectWallet = async ()=>{
        try {
            const w = await wallet.connect();
            showToast('Wallet connected · ' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shortAddr"])(w.address));
        } catch (e) {
            showToast(e instanceof Error ? e.message : 'Could not connect — exploring in demo mode', 4200);
        }
        go('hunt');
    };
    const openSubmit = (id)=>{
        clearTimers();
        setClaimTx(null);
        setS((prev)=>({
                ...prev,
                screen: 'submit',
                activeId: id,
                fileLoaded: false,
                fileName: '',
                verifyStep: 0,
                verified: false
            }));
        try {
            window.scrollTo(0, 0);
        } catch (_) {}
    };
    const openDetail = (id)=>{
        clearTimers();
        setS((prev)=>({
                ...prev,
                screen: 'detail',
                activeId: id
            }));
        try {
            window.scrollTo(0, 0);
        } catch (_) {}
    };
    const loadFile = (name)=>{
        setS((prev)=>({
                ...prev,
                fileLoaded: true,
                fileName: name || 'proof.json',
                dragging: false
            }));
    };
    // capture proof.json { journal, seal } (hex) → bytes, untuk claim on-chain
    const captureFile = async (file)=>{
        if (!file) {
            proofRef.current = null;
            loadFile('proof.json');
            return;
        }
        try {
            const txt = await file.text();
            const j = JSON.parse(txt);
            proofRef.current = {
                journal: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stellar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(j.journal),
                seal: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stellar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(j.seal)
            };
        } catch  {
            proofRef.current = null;
        }
        loadFile(file.name);
    };
    const startVerify = async ()=>{
        if (!s.fileLoaded) return;
        clearTimers();
        const activeId = s.activeId;
        // ── real on-chain claim (only when a verifier contract + wallet exist) ──
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stellar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTRACTS_CONFIGURED"] && wallet.address && proofRef.current) {
            setS((prev)=>({
                    ...prev,
                    screen: 'verify',
                    verifyStep: 1,
                    verified: false
                }));
            try {
                window.scrollTo(0, 0);
            } catch (_) {}
            try {
                // bounty_id = id asli on-chain; kirim journal + seal dari proof.json.
                const { journal, seal } = proofRef.current;
                const hash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stellar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["claim"])(Number(activeId), wallet.address, journal, seal, wallet.sign);
                setClaimTx(hash);
                setS((st)=>({
                        ...st,
                        verifyStep: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STEPS"].length,
                        verified: true,
                        claimed: {
                            ...st.claimed,
                            [activeId]: true
                        }
                    }));
                wallet.refreshBalance();
                loadBounties();
                showToast('Proof valid · reward released on-chain', 4200);
            } catch (e) {
                setS((st)=>({
                        ...st,
                        verifyStep: 0,
                        screen: 'submit'
                    }));
                showToast(e instanceof Error ? e.message : 'Claim failed on-chain', 5000);
            }
            return;
        }
        // ── demo flow (no contract configured) ──
        let step = 0;
        const tick = ()=>{
            step++;
            setS((st)=>({
                    ...st,
                    verifyStep: step
                }));
            if (step < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STEPS"].length) {
                addTimer(setTimeout(tick, 1150));
            } else {
                setS((st)=>({
                        ...st,
                        verified: true,
                        claimed: {
                            ...st.claimed,
                            [activeId]: true
                        }
                    }));
                tickBalance(activeId);
                showToast('Proof valid · reward released to your wallet', 4000);
            }
        };
        setS((prev)=>({
                ...prev,
                screen: 'verify',
                verifyStep: 0,
                verified: false
            }));
        addTimer(setTimeout(tick, 900));
        try {
            window.scrollTo(0, 0);
        } catch (_) {}
    };
    const tickBalance = (activeId)=>{
        const bounty = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOUNTIES"].find((b)=>b.id === activeId);
        const total = bounty?.rewardNum ?? 500;
        const inc = Math.ceil(total / 22);
        let remaining = total;
        const step = ()=>{
            const toAdd = Math.min(inc, remaining);
            remaining -= toAdd;
            setS((st)=>({
                    ...st,
                    balance: st.balance + toAdd
                }));
            if (remaining > 0) addTimer(setTimeout(step, 32));
        };
        step();
    };
    const backToBounties = ()=>{
        clearTimers();
        setS((prev)=>({
                ...prev,
                screen: 'hunt',
                verifyStep: 0,
                verified: false
            }));
        try {
            window.scrollTo(0, 0);
        } catch (_) {}
    };
    const submitCreate = async ()=>{
        const f = s.form;
        // demo fallback kalau kontrak / wallet belum siap
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stellar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTRACTS_CONFIGURED"] || !wallet.address) {
            showToast('Bounty opened (demo) — connect wallet for on-chain', 3600);
            go('hunt');
            return;
        }
        if (!f.addr || !f.imageId || !f.reward) {
            showToast('Fill all fields (contract, ImageID, reward)');
            return;
        }
        setBusy(true);
        try {
            showToast('Opening bounty… approve 2 signatures in Freighter', 8000);
            const id = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stellar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBounty"])(wallet.address, f.addr, f.imageId, wallet.sign);
            const amount = BigInt(Math.round(Number(f.reward) * 1e7));
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stellar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fundBounty"])(id, wallet.address, amount, wallet.sign);
            await loadBounties();
            wallet.refreshBalance();
            showToast(`Bounty #${id} opened — ${f.reward} XLM locked`, 4200);
            go('hunt');
        } catch (e) {
            showToast(e instanceof Error ? e.message : 'Open bounty failed', 5000);
        } finally{
            setBusy(false);
        }
    };
    // Derived — pakai bounty on-chain kalau ada, kalau tidak fallback ke mock.
    const baseBounties = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stellar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTRACTS_CONFIGURED"] && chainBounties ? chainBounties : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOUNTIES"];
    const allBounties = baseBounties.map((b)=>({
            ...b,
            isOpen: b.status === 'open' && !s.claimed[b.id],
            isClaimed: b.status === 'claimed' || !!s.claimed[b.id]
        }));
    let filtered = allBounties;
    if (s.filter === 'open') filtered = allBounties.filter((b)=>b.isOpen);
    if (s.filter === 'claimed') filtered = allBounties.filter((b)=>b.isClaimed);
    if (s.search.trim()) {
        const q = s.search.trim().toLowerCase();
        filtered = filtered.filter((b)=>b.title.toLowerCase().includes(q) || b.victim.toLowerCase().includes(q));
    }
    const openCount = allBounties.filter((b)=>b.isOpen).length;
    const totalPool = allBounties.filter((b)=>b.isOpen).reduce((a, b)=>a + b.rewardNum, 0).toLocaleString('en-US');
    const activeBounty = allBounties.find((b)=>b.id === s.activeId) ?? allBounties[0];
    const steps = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STEPS"].map((label, i)=>{
        const done = s.verifyStep > i;
        const active = s.verifyStep === i && !s.verified;
        return {
            label,
            idx: String(i + 1).padStart(2, '0'),
            glyph: done ? '✓' : '',
            dotBorder: done ? 'rgba(20,184,138,.5)' : active ? '#14B88A' : '#242424',
            dotBg: done ? '#14B88A' : active ? 'rgba(20,184,138,.15)' : 'transparent',
            labelColor: done || active ? '#EDEDED' : '#5A5A5A',
            tag: done ? 'done' : active ? 'verifying' : 'pending',
            tagColor: done ? '#4ADE9E' : active ? '#14B88A' : '#5A5A5A'
        };
    });
    const isApp = [
        'hunt',
        'submit',
        'verify',
        'create',
        'detail'
    ].includes(s.screen);
    const huntActive = [
        'hunt',
        'submit',
        'verify'
    ].includes(s.screen);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: '100vh',
            background: '#0A0A0A',
            color: '#EDEDED',
            position: 'relative'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "screen-enter",
                children: [
                    s.screen === 'landing' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$Landing$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        go: go,
                        connectWallet: connectWallet
                    }, void 0, false, {
                        fileName: "[project]/src/components/VeilApp.tsx",
                        lineNumber: 250,
                        columnNumber: 37
                    }, this),
                    s.screen === 'features' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$Features$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        go: go,
                        connectWallet: connectWallet
                    }, void 0, false, {
                        fileName: "[project]/src/components/VeilApp.tsx",
                        lineNumber: 251,
                        columnNumber: 37
                    }, this),
                    s.screen === 'howitworks' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$HowItWorks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        go: go,
                        connectWallet: connectWallet
                    }, void 0, false, {
                        fileName: "[project]/src/components/VeilApp.tsx",
                        lineNumber: 252,
                        columnNumber: 37
                    }, this),
                    isApp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                go: go,
                                huntActive: huntActive,
                                createActive: s.screen === 'create',
                                connected: connected,
                                address: wallet.address,
                                connecting: wallet.status === 'connecting',
                                onConnect: connectWallet,
                                onDisconnect: ()=>{
                                    wallet.disconnect();
                                    showToast('Wallet disconnected');
                                },
                                onSwitch: async ()=>{
                                    try {
                                        const w = await wallet.connect();
                                        showToast('Account · ' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$wallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shortAddr"])(w.address));
                                    } catch (e) {
                                        showToast(e instanceof Error ? e.message : 'Switch account cancelled');
                                    }
                                },
                                balanceStr: (connected ? wallet.balance : s.balance).toLocaleString('en-US')
                            }, void 0, false, {
                                fileName: "[project]/src/components/VeilApp.tsx",
                                lineNumber: 256,
                                columnNumber: 11
                            }, this),
                            s.screen === 'hunt' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$Hunt$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                bounties: filtered,
                                openCount: openCount,
                                totalPool: totalPool,
                                filter: s.filter,
                                search: s.search,
                                onFilter: (f)=>setS((prev)=>({
                                            ...prev,
                                            filter: f
                                        })),
                                onSearch: (q)=>setS((prev)=>({
                                            ...prev,
                                            search: q
                                        })),
                                onSubmit: openSubmit,
                                onDetail: openDetail
                            }, void 0, false, {
                                fileName: "[project]/src/components/VeilApp.tsx",
                                lineNumber: 273,
                                columnNumber: 13
                            }, this),
                            s.screen === 'submit' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$Submit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                bounty: activeBounty,
                                fileLoaded: s.fileLoaded,
                                fileName: s.fileName,
                                dragging: s.dragging,
                                go: go,
                                onPickFile: ()=>document.getElementById('veil-file')?.click(),
                                onDragOver: (e)=>{
                                    e.preventDefault();
                                    if (!s.dragging) setS((prev)=>({
                                            ...prev,
                                            dragging: true
                                        }));
                                },
                                onDragLeave: (e)=>{
                                    e.preventDefault();
                                    setS((prev)=>({
                                            ...prev,
                                            dragging: false
                                        }));
                                },
                                onDrop: (e)=>{
                                    e.preventDefault();
                                    captureFile(e.dataTransfer?.files?.[0]);
                                },
                                onPick: (e)=>captureFile(e.target.files?.[0] ?? undefined),
                                startVerify: startVerify
                            }, void 0, false, {
                                fileName: "[project]/src/components/VeilApp.tsx",
                                lineNumber: 287,
                                columnNumber: 13
                            }, this),
                            s.screen === 'verify' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$Verify$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                bounty: activeBounty,
                                steps: steps,
                                verified: s.verified,
                                balanceStr: (connected ? wallet.balance : s.balance).toLocaleString('en-US'),
                                backToBounties: backToBounties,
                                hunterAddr: wallet.address,
                                txHash: claimTx
                            }, void 0, false, {
                                fileName: "[project]/src/components/VeilApp.tsx",
                                lineNumber: 303,
                                columnNumber: 13
                            }, this),
                            s.screen === 'detail' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$Detail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                bounty: activeBounty,
                                backToBounties: backToBounties
                            }, void 0, false, {
                                fileName: "[project]/src/components/VeilApp.tsx",
                                lineNumber: 315,
                                columnNumber: 13
                            }, this),
                            s.screen === 'create' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$screens$2f$Create$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                form: s.form,
                                go: go,
                                onAddrChange: (v)=>setS((prev)=>({
                                            ...prev,
                                            form: {
                                                ...prev.form,
                                                addr: v
                                            }
                                        })),
                                onImageChange: (v)=>setS((prev)=>({
                                            ...prev,
                                            form: {
                                                ...prev.form,
                                                imageId: v
                                            }
                                        })),
                                onRewardChange: (v)=>setS((prev)=>({
                                            ...prev,
                                            form: {
                                                ...prev.form,
                                                reward: v
                                            }
                                        })),
                                onToken: (t)=>setS((prev)=>({
                                            ...prev,
                                            form: {
                                                ...prev.form,
                                                token: t
                                            }
                                        })),
                                onSubmit: submitCreate,
                                busy: busy
                            }, void 0, false, {
                                fileName: "[project]/src/components/VeilApp.tsx",
                                lineNumber: 319,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, s.screen, true, {
                fileName: "[project]/src/components/VeilApp.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, this),
            s.toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                message: s.toast
            }, void 0, false, {
                fileName: "[project]/src/components/VeilApp.tsx",
                lineNumber: 334,
                columnNumber: 19
            }, this),
            showTop && !intro && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    }),
                className: "vbtn",
                "aria-label": "Scroll to top",
                style: {
                    position: 'fixed',
                    right: 22,
                    bottom: 22,
                    zIndex: 40,
                    width: 42,
                    height: 42,
                    borderRadius: '50%',
                    background: '#161616',
                    color: '#EDEDED',
                    border: '1px solid #2e2e2e',
                    cursor: 'pointer',
                    fontSize: 16,
                    lineHeight: 1,
                    boxShadow: '0 8px 24px -10px rgba(0,0,0,.7)'
                },
                children: "↑"
            }, void 0, false, {
                fileName: "[project]/src/components/VeilApp.tsx",
                lineNumber: 337,
                columnNumber: 9
            }, this),
            intro && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$IntroOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onDone: ()=>setIntro(false)
            }, void 0, false, {
                fileName: "[project]/src/components/VeilApp.tsx",
                lineNumber: 352,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/VeilApp.tsx",
        lineNumber: 248,
        columnNumber: 5
    }, this);
}
_s(VeilApp, "pXWaqI4GaceQmJ5pAximd8pTW40=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useWallet$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWallet"]
    ];
});
_c = VeilApp;
var _c;
__turbopack_context__.k.register(_c, "VeilApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0veztjk._.js.map