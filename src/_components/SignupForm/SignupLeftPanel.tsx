import { Check } from "lucide-react";
import { FC } from "react";
import TaskyLogo from "../TaskyLogo";

const SignupLeftPanel: FC = () => {
  const steps = [
    { label: "Create your account", done: true },
    { label: "Set up your workspace", done: false },
    { label: "Invite your team", done: false },
    { label: "Start crushing tasks 🎯", done: false },
  ];

  return (
    <div className="hidden lg:flex flex-col justify-between relative overflow-hidden rounded-l-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 p-10 text-white min-h-full">
      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 animate-blob" />
        <div className="absolute top-1/2 -left-16 w-56 h-56 rounded-full bg-white/10 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-16 right-1/3 w-64 h-64 rounded-full bg-white/10 animate-blob animation-delay-4000" />
      </div>

      {/* Grid overlay */}
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
        <span className="text-2xl font-extrabold tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
          tasky
        </span>
      </div>

      {/* Onboarding steps */}
      <div className="relative z-10">
        <h2 className="text-xl font-bold mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
          Get started in minutes
        </h2>
        <p className="text-white/60 text-sm mb-6">Your productivity journey begins here.</p>
        <div className="space-y-3">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center border-2 shrink-0 transition-all ${
                s.done
                  ? "bg-white border-white"
                  : i === 1
                  ? "border-white/70 bg-white/20"
                  : "border-white/30 bg-transparent"
              }`}>
                {s.done
                  ? <Check size={14} className="text-indigo-600" strokeWidth={3} />
                  : <span className="text-[10px] font-bold text-white/80">{i + 1}</span>
                }
              </div>
              <span className={`text-sm font-medium ${s.done ? "text-white" : i === 1 ? "text-white/80" : "text-white/40"}`}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="relative z-10 grid grid-cols-3 gap-3">
        {[
          { v: "50K+", l: "Teams" },
          { v: "2M+", l: "Tasks done" },
          { v: "4.9★", l: "Rating" },
        ].map((s, i) => (
          <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20 text-center">
            <p className="text-lg font-extrabold" style={{ fontFamily: "'Syne', sans-serif" }}>{s.v}</p>
            <p className="text-white/60 text-xs mt-0.5">{s.l}</p>
          </div>
        ))}
      </div>

      <p className="relative z-10 text-xs text-white/50">© {new Date().getFullYear()} Tasky · Built for makers</p>
    </div>
  );
};


export default SignupLeftPanel;