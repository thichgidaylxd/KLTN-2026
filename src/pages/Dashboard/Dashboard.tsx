// ============================================================
// FamerAI — Dashboard.tsx
// Vite + React + TailwindCSS + Lucide
// ============================================================
// Hai biến ảnh bạn tự gắn path:
const WEATHER_BG_URL = "src/assets/weather-bg.png";   // <-- thay path thật
const MAP_BG_URL = "src/assets/map.png";      // <-- thay path thật
// ============================================================

import { useState } from "react";
import {
  LayoutGrid,
  Wallet,
  Activity,
  Trees,
  GitFork,
  Star,
  LogOut,
  Wind,
  Droplets,
  Cloud,
  ChevronDown,
  Maximize2,
  RefreshCw,
  Plus,
  Minus,
  MoreHorizontal,
} from "lucide-react";

// ─── Sidebar ────────────────────────────────────────────────
const NAV_ICONS = [
  { icon: Wallet, key: "wallet" },
  { icon: Activity, key: "activity" },
  { icon: Trees, key: "trees" },
  { icon: GitFork, key: "gitfork" },
  { icon: Star, key: "star" },
];

function Sidebar() {
  const [active, setActive] = useState("dashboard");
  return (
    <aside className="flex flex-col items-center justify-between py-10 px-3 w-[72px] h-full bg-white shrink-0">
      {/* Top nav */}
      <div className="flex flex-col items-center gap-7">
        {/* Dashboard (active) */}
        <button
          onClick={() => setActive("dashboard")}
          className={`w-11 h-11 rounded-[14px] flex items-center justify-center transition-colors ${active === "dashboard" ? "bg-[#191C22]" : "hover:bg-gray-100"
            }`}
        >
          <LayoutGrid size={20} color={active === "dashboard" ? "#fff" : "#292D32"} />
        </button>

        {NAV_ICONS.map(({ icon: Icon, key }) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`w-11 h-10 rounded-full flex items-center justify-center transition-colors ${active === key ? "bg-[#191C22]" : "hover:bg-gray-100"
              }`}
          >
            <Icon size={22} color={active === key ? "#fff" : "#292D32"} />
          </button>
        ))}
      </div>

      {/* Logout */}
      <button className="w-11 h-11 flex items-center justify-center hover:bg-gray-100 rounded-xl transition-colors">
        <LogOut size={22} color="#292D32" />
      </button>
    </aside>
  );
}

// ─── Quick-stats card ───────────────────────────────────────
function StatCard({
  label,
  value,
  unit,
}: {
  label: string;
  value: string | number;
  unit: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col gap-2 flex-1 min-w-0 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-xs text-[#8D8D8D] font-medium">{label}</span>
        <MoreHorizontal size={16} className="text-gray-400 cursor-pointer" />
      </div>
      <div className="flex items-baseline gap-1.5 mt-1">
        <span className="text-[28px] font-bold text-[#1a1a1a] leading-none">{value}</span>
        <span className="text-sm text-[#8D8D8D]">{unit}</span>
      </div>
    </div>
  );
}

// ─── Weather card ────────────────────────────────────────────
function WeatherCard() {
  const temps = [
    { val: "27°", pos: "20%" },
    { val: "28°", pos: "38%" },
    { val: "30°", pos: "62%" },
    { val: "31°", pos: "82%" },
  ];

  return (
    <div
      className="relative rounded-2xl overflow-hidden flex-1 min-w-0 shadow-sm"
      style={{ minHeight: 160 }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${WEATHER_BG_URL})` }}
      />
      {/* Subtle overlay so text is readable */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 p-4 h-full flex flex-col justify-between">
        {/* Top row */}
        <div className="flex items-start justify-between">
          <span className="text-[#3A3A8C] font-semibold text-sm">Thời tiết</span>
          <div className="flex flex-col items-end gap-1 text-[#3A3A8C] text-xs font-medium">
            <span className="flex items-center gap-1"><Cloud size={13} /> Mây</span>
            <span className="flex items-center gap-1"><Wind size={13} /> Gió</span>
            <span className="flex items-center gap-1"><Droplets size={13} /> 62%</span>
          </div>
        </div>

        {/* Main temp */}
        <div className="text-center">
          <span className="text-4xl font-bold text-[#1a1a4e]">30°</span>
        </div>

        {/* Temp bar + labels */}
        <div className="relative">
          <div className="flex justify-between text-[11px] font-semibold text-[#3A3A8C] mb-1.5 px-2">
            {temps.map((t) => (
              <span key={t.val}>{t.val}</span>
            ))}
          </div>
          {/* Gradient bar */}
          <div className="h-5 rounded-full overflow-hidden"
            style={{
              background:
                "linear-gradient(to right, #22c55e 0%, #84cc16 30%, #eab308 55%, #f97316 80%, #ef4444 100%)",
            }}
          >
            {/* diagonal stripe overlay */}
            <div
              className="w-full h-full opacity-40"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(-45deg, transparent, transparent 4px, rgba(255,255,255,0.5) 4px, rgba(255,255,255,0.5) 6px)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── NPK chart (green panel) ────────────────────────────────
function NpkBar({
  label,
  value,
  maxPpm,
  pct,
}: {
  label: string;
  value: string;
  maxPpm: number;
  pct: number;
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-white/80 text-xs font-medium">{label}</span>
        <span className="text-white/80 text-xs">{value}</span>
      </div>
      <div className="relative h-5 bg-white/10 rounded-sm overflow-visible mb-1">
        {/* gradient fill */}
        <div
          className="absolute top-0 left-0 h-full rounded-sm"
          style={{
            width: `${pct}%`,
            background:
              "linear-gradient(to right, rgba(255,255,255,0.05), rgba(255,255,255,0.55))",
          }}
        />
        {/* marker line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-[#3B4EC8] rounded"
          style={{ left: `${pct}%` }}
        />
        {/* dotted track */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-end">
          <div
            className="w-full h-[3px]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, rgba(255,255,255,0.25) 0px, rgba(255,255,255,0.25) 3px, transparent 3px, transparent 6px)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function NpkPanel() {
  return (
    <div className="rounded-2xl p-5 flex flex-col justify-center gap-5"
      style={{ background: "#3D6B31", flex: "1 1 0" }}>
      <NpkBar label="Mức N" value="23 ppm" maxPpm={40} pct={58} />
      <NpkBar label="Mức P" value="9 ppm" maxPpm={40} pct={22} />
      <NpkBar label="Mức K" value="19 ppm" maxPpm={40} pct={47} />
    </div>
  );
}

// ─── Donut chart (farm performance) ─────────────────────────
function DonutChart({ pct = 72 }: { pct?: number }) {
  const r = 80;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - pct / 100);

  return (
    <div className="bg-[#f5f5f0] rounded-2xl flex flex-col items-center justify-center gap-3 p-5"
      style={{ flex: "1 1 0" }}>
      <p className="text-sm font-semibold text-[#3A3A8C]">Hiệu suất nông trại</p>
      <div className="relative w-[190px] h-[190px]">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
          {/* bg ring */}
          <circle cx="100" cy="100" r={r} fill="none" stroke="#C8E2C0" strokeWidth="28" />
          {/* progress ring */}
          <circle
            cx="100" cy="100" r={r}
            fill="none"
            stroke="#5A9A44"
            strokeWidth="28"
            strokeDasharray={circ}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
          {/* top-right accent */}
          <circle
            cx="100" cy="100" r={r}
            fill="none"
            stroke="#A8D49A"
            strokeWidth="28"
            strokeDasharray={`${circ * 0.07} ${circ * 0.93}`}
            strokeDashoffset={-circ * 0.72}
          />
        </svg>
        {/* Center label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[13px] text-[#8D8D8D]">Điểm</span>
          <span className="text-[26px] font-bold text-[#1a1a1a]">{pct}%</span>
        </div>
      </div>
    </div>
  );
}

// ─── Crop status cards ───────────────────────────────────────
const CROP_CARDS = [
  { bg: "#810E0E", hasToggle: true },
  { bg: "#502D2D", hasToggle: false },
  { bg: "#FF1919", hasToggle: false },
];

function CropStatusCards() {
  return (
    <div className="flex gap-2.5">
      {CROP_CARDS.map((c, i) => (
        <div
          key={i}
          className="flex-1 rounded-2xl h-[130px] relative overflow-hidden"
          style={{ background: c.bg }}
        >
          {c.hasToggle && (
            <div className="absolute top-2.5 left-5 bg-[#D9D9D9] rounded-[10px] px-2 h-6 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#679357] inline-block" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Map panel ───────────────────────────────────────────────
function MapPanel() {
  return (
    <div className="relative w-[600px] h-full rounded-[22px] overflow-hidden shrink-0 shadow-md">
      {/* Main map bg */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${MAP_BG_URL})` }}
      />

      {/* Map label */}
      <div className="absolute top-5 left-8 z-20 bg-white rounded-full px-4 py-1.5 flex items-center gap-1.5 shadow-sm">
        <span className="text-sm font-medium text-black">Map</span>
        <ChevronDown size={13} color="#000" />
      </div>

      {/* Maximize button */}
      <div className="absolute top-[22px] right-8 z-20 bg-white rounded-[10px] w-9 h-9 flex items-center justify-center shadow-sm cursor-pointer hover:bg-gray-50 transition-colors">
        <Maximize2 size={18} color="#292D32" />
      </div>

      {/* Zoom controls */}
      <div className="absolute bottom-[85px] right-8 z-20 bg-white rounded-[20px] w-9 h-[72px] flex flex-col items-center justify-center gap-2 shadow-sm">
        <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded transition-colors">
          <Plus size={16} color="#757D86" />
        </button>
        <div className="w-5 h-px bg-gray-200" />
        <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded transition-colors">
          <Minus size={16} color="#757D86" />
        </button>
      </div>

      {/* Mini-map */}
      <div className="absolute bottom-[38px] left-9 z-20 w-[149px] h-[149px] rounded-[22px] border-4 border-white overflow-hidden shadow-lg">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${MAP_BG_URL})` }}
        />
        {/* Refresh icon */}
        <div className="absolute bottom-3 left-[18px] z-30">
          <RefreshCw size={20} color="#EDEDED" />
        </div>
      </div>
    </div>
  );
}

// ─── Task bar ────────────────────────────────────────────────
function TaskBar() {
  return (
    <div className="flex items-center gap-2.5 w-full">
      {/* Completed */}
      <div className="flex items-center justify-between px-5 h-[46px] rounded-full flex-1"
        style={{ background: "linear-gradient(to right, #79C257, #4CAF30)" }}>
        <span className="text-white font-medium text-sm">Task completed</span>
        <span className="bg-white/30 text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center">
          10
        </span>
      </div>

      {/* Pending */}
      <div className="flex items-center justify-between px-5 h-[46px] rounded-full flex-1"
        style={{ background: "linear-gradient(135deg, #e8f0fe 0%, #dce8ff 100%)" }}>
        <span className="text-[#555] font-medium text-sm">Task pending</span>
        <span className="text-[#555] font-bold text-sm w-8 h-8 rounded-full bg-white/60 flex items-center justify-center">
          12
        </span>
      </div>

      {/* Add new task */}
      <button className="flex items-center gap-2 px-5 h-[46px] rounded-full bg-[#191C22] text-white font-medium text-sm hover:bg-[#2a2e38] transition-colors shrink-0">
        <Plus size={16} />
        Add new task
      </button>
    </div>
  );
}

// ─── Main Dashboard ──────────────────────────────────────────
export default function Dashboard() {
  return (
    <div className="w-screen h-screen bg-white flex flex-col overflow-hidden font-sans">
      {/* ── Header ── */}
      <header className="flex items-center px-6 py-3 h-[57px] bg-white shrink-0">
        <div className="flex items-center gap-2">
          {/* Logo placeholder — replace src with your logo */}
          <div className="w-10 h-10 rounded-full bg-[#e8f5e2] flex items-center justify-center">
            <Trees size={22} color="#3D6B31" />
          </div>
          <span
            className="text-[28px] font-extrabold leading-none"
            style={{ color: "#1F4418", fontFamily: "'Prompt', sans-serif" }}
          >
            FamerAI
          </span>
        </div>
      </header>

      {/* ── Body ── */}
      <div className="flex flex-1 overflow-hidden gap-2.5 px-2.5 pb-2.5">
        {/* Sidebar */}
        <Sidebar />

        {/* Center content */}
        <div className="flex flex-col flex-1 gap-2.5 min-w-0 overflow-hidden">
          {/* Task bar */}
          <TaskBar />

          {/* Row 1 – stats + weather */}
          <div className="flex gap-2.5">
            <div className="grid grid-cols-2 grid-rows-2 gap-2.5 flex-1 min-h-0">
              <StatCard label="Tổng lô đất" value="12" unit="Plots" />
              <StatCard label="Loại cây trồng" value="6" unit="Crops" />
              <StatCard label="Tổng diện tích" value="2.3" unit="Hectares" />
              <StatCard label="Tổng số cây" value="4K" unit="Plants" />
            </div>
            <WeatherCard />
          </div>

          {/* Row 2 – NPK + donut */}
          <div className="flex gap-2.5 flex-1 min-h-0">
            <NpkPanel />
            <DonutChart pct={72} />
          </div>
          <CropStatusCards />
        </div>

        {/* Map panel */}
        <MapPanel />
      </div>
    </div>
  );
}