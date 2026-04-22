"use client";
import React, { FC, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { Form, FormControl, FormLabel, FormField, FormMessage, FormItem } from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, CheckSquare, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { FaGithub } from "react-icons/fa";
import LoginLeftPannel from './LoginLeftPannel';
import TaskyLogo from '../TaskyLogo';
import { authClient } from '@/lib/auth-client';
type LoginFormProps = {}

const loginSchema = z.object({
  email: z.string().email("Invalid email address").toLowerCase().trim(),
  password: z.string().min(4, "Password must be at least 4 characters").trim(),
});
type LoginFormValues = z.infer<typeof loginSchema>;

// ── Tasky SVG Logo ──────────────────────────────────────────────

// ── Left decorative panel ────────────────────────────────────────

// ── Main LoginForm ───────────────────────────────────────────────
const LoginForm: FC<LoginFormProps> = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [showPw, setShowPw] = useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' }
  });
  const { handleSubmit, formState: { isSubmitting } } = form;

  const onSubmit = (data: LoginFormValues) => {
    authClient.signIn.email(
     {
      email: data.email,
      password: data.password,
      callbackURL: '/'
     },
     {
      onSuccess:()=>{
        router.push('/')
      },
      onError:()=>{
        router.push('/login')
      }
     }
    )
  };

  return (
    <>
      {/* Syne font */}
      <style>{`
        

        @keyframes blob {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(20px,-20px) scale(1.08); }
          66%      { transform: translate(-15px,15px) scale(0.94); }
        }
        .animate-blob { animation: blob 8s infinite ease-in-out; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp .5s ease both; }
        .fade-up-1 { animation-delay: .05s; }
        .fade-up-2 { animation-delay: .12s; }
        .fade-up-3 { animation-delay: .19s; }
        .fade-up-4 { animation-delay: .26s; }
        .fade-up-5 { animation-delay: .33s; }
        .fade-up-6 { animation-delay: .40s; }

        .tasky-input {
          transition: box-shadow .2s, border-color .2s;
        }
        .tasky-input:focus-within {
          box-shadow: 0 0 0 3px rgba(99,102,241,.25);
        }
      `}</style>

      <div
        className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-[#0f0f13] p-4 transition-colors duration-500"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <div className="w-full max-w-4xl grid lg:grid-cols-2 shadow-2xl rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10">
          {/* Left panel */}
          <LoginLeftPannel />

          {/* Right: form */}
          <div className="bg-white dark:bg-[#18181f] flex flex-col justify-center px-8 py-12 relative">
            {/* Theme toggle */}
            {/* <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button> */}

            {/* Logo (mobile) */}
            <div className="flex lg:hidden items-center gap-2 mb-8 fade-up">
              <TaskyLogo size={32} />
              <span className="text-xl font-extrabold text-indigo-600 dark:text-indigo-400" style={{ }}>
                tasky
              </span>
            </div>

            {/* Header */}
            <div className="mb-8 fade-up fade-up-1">
              <h1
                className="text-3xl font-extrabold text-slate-900 dark:text-white mb-1"
                style={{ }}
              >
                Welcome back 👋
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Sign in to continue crushing your tasks
              </p>
            </div>

            {/* OAuth buttons */}
            <div className="grid grid-cols-2 gap-3 mb-6 fade-up fade-up-2">
              <Button type="button" variant="outline" className="w-full flex items-center gap-2 text-sm dark:border-white/10 dark:text-white dark:hover:bg-white/10">
                <FaGithub size={16} />
                GitHub
              </Button>
              <Button type="button" variant="outline" className="w-full flex items-center gap-2 text-sm dark:border-white/10 dark:text-white dark:hover:bg-white/10">
                <svg width="16" height="16" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                Google
              </Button>
            </div>

            {/* Divider */}
            <div className="relative mb-6 fade-up fade-up-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200 dark:border-white/10" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white dark:bg-[#18181f] px-3 text-xs text-slate-400">or continue with email</span>
              </div>
            </div>

            <Form {...form}>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Email */}
                <div className="fade-up fade-up-3">
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700 dark:text-slate-300 text-sm font-medium">
                        Email address <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <div className="tasky-input rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 focus-within:border-indigo-400 dark:focus-within:border-indigo-500">
                          <Input
                            type="email"
                            placeholder="you@example.com"
                            className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 dark:text-white dark:placeholder:text-slate-500"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )} />
                </div>

                {/* Password */}
                <div className="fade-up fade-up-4">
                  <FormField control={form.control} name="password" render={({ field }) => (
                    <FormItem>
                      <div className="flex justify-between items-center">
                        <FormLabel className="text-slate-700 dark:text-slate-300 text-sm font-medium">
                          Password <span className="text-red-500">*</span>
                        </FormLabel>
                        <Link href="/forgot-password" className="text-xs text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 transition-colors">
                          Forgot password?
                        </Link>
                      </div>
                      <FormControl>
                        <div className="tasky-input rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 focus-within:border-indigo-400 dark:focus-within:border-indigo-500 flex items-center pr-3">
                          <Input
                            type={showPw ? "text" : "password"}
                            placeholder="••••••••"
                            className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 dark:text-white dark:placeholder:text-slate-500"
                            {...field}
                          />
                          <button type="button" onClick={() => setShowPw(v => !v)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors ml-1">
                            {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )} />
                </div>

                {/* Submit */}
                <div className="pt-2 fade-up fade-up-5">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-11 bg-gradient-to-r !cursor-pointer from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold rounded-lg shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                        </svg>
                        Signing in…
                      </span>
                    ) : "Sign in to Tasky →"}
                  </Button>
                </div>

                {/* Sign up link */}
                <p className="text-center text-sm text-slate-500 dark:text-slate-400 fade-up fade-up-6">
                  New here?{" "}
                  <Link href="/signup" className="text-indigo-500 dark:text-indigo-400 font-semibold hover:underline underline-offset-2 transition-colors">
                    Create a free account
                  </Link>
                </p>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;