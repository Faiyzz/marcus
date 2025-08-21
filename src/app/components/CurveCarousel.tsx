"use client";


import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


export type CarouselItem = {
poster: string; // thumbnail image
src?: string; // optional video file (plays on hover)
alt?: string;
};


export default function CurveCarousel({
items = [],
visible = 9,
className = "",
autoplay = true,
autoplayMs = 3500,
}: {
items: CarouselItem[];
visible?: number; // how many to render around the focus
className?: string;
autoplay?: boolean;
autoplayMs?: number;
}) {
const [index, setIndex] = useState(0);
const [isHover, setIsHover] = useState(false);
const total = items.length;
const timer = useRef<ReturnType<typeof setInterval> | null>(null);


// Autoplay gently sweeps through items
useEffect(() => {
if (!autoplay || total <= 1) return;
if (timer.current) clearInterval(timer.current);
if (!isHover) {
timer.current = setInterval(() => setIndex((i) => (i + 1) % total), autoplayMs);
}
return () => {
if (timer.current) clearInterval(timer.current);
};
}, [autoplay, autoplayMs, isHover, total]);


// Support drag / swipe
const drag = useRef<{ x: number; dragging: boolean }>({ x: 0, dragging: false });
const onDown = (e: React.PointerEvent) => {
drag.current = { x: e.clientX, dragging: true };
(e.target as HTMLElement).setPointerCapture?.(e.pointerId);
};
const onMove = (e: React.PointerEvent) => {
if (!drag.current.dragging) return;
const dx = e.clientX - drag.current.x;
if (Math.abs(dx) > 60) {
setIndex((i) => (dx < 0 ? (i + 1) % total : (i - 1 + total) % total));
drag.current = { x: e.clientX, dragging: true };
}
};
const onUp = (e: React.PointerEvent) => {
drag.current.dragging = false;
(e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
};


const sequence = useMemo(() => {
// pick a window of items centered around index
const half = Math.floor(visible / 2);
const arr: { item: CarouselItem; idx: number }[] = [];
for (let o = -half; o <= half; o++) {
}