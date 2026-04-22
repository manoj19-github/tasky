import { FC } from "react";
import TaskyLogo from "../TaskyLogo";

const LoginLeftPannel: FC = () => (
  <div className="hidden lg:flex flex-col justify-between relative overflow-hidden rounded-l-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 p-10 text-white min-h-full">
    {/* Animated blobs */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/10 animate-blob" />
      <div className="absolute top-1/2 -right-16 w-56 h-56 rounded-full bg-white/10 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-16 left-1/3 w-64 h-64 rounded-full bg-white/10 animate-blob animation-delay-4000" />
    </div>

    {/* Grid pattern overlay */}
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    />

    {/* Logo */}
    <div className="relative flex items-center gap-3 z-10">
      <TaskyLogo size={42} />
      <span className="text-2xl font-extrabold tracking-tight" style={{ }}>
        tasky
      </span>
    </div>

    {/* Feature cards */}
    <div className="relative z-10 space-y-4">
      {[
        { icon: "✅", title: "Smart Task Management", desc: "Organize your work with intelligent priority sorting." },
        { icon: "⚡", title: "Lightning Fast", desc: "Real-time sync keeps your team always in the loop." },
        { icon: "🎯", title: "Focus Mode", desc: "Block distractions and hit your goals every day." },
      ].map((f, i) => (
        <div
          key={i}
          className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
          style={{ animationDelay: `${i * 150}ms` }}
        >
          <span className="text-2xl mt-0.5">{f.icon}</span>
          <div>
            <p className="font-semibold text-sm">{f.title}</p>
            <p className="text-white/70 text-xs mt-0.5">{f.desc}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Bottom tag */}
    <p className="relative z-10 text-xs text-white/50">
      © {new Date().getFullYear()} Tasky · Built for makers
    </p>
  </div>
);


export default LoginLeftPannel;