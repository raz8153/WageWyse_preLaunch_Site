/**
 * v0 by Vercel.
 * @see https://v0.dev/t/mQb20hbQnZ4
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Input } from "../src/components/ui/input"
import { Button } from "../src/components/ui/button"

interface MountainIconProps {
  // Define the type for any props you expect to receive
  // For example, if you expect className, width, height, etc.
  // you can define their types here.
  className?: string;
  width?: number;
  height?: number;
  // Add more props as needed
}

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#128f8b] text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="h-6 w-6 text-white" />
          <span className="sr-only">WageWyse</span>
        </Link>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Streamline Your Workforce Management
              </h1>
              <p className="mx-auto max-w-[700px] text-[#5fb2b0]">
                WageWyse is an all-in-one employee management platform that simplifies payroll, time tracking, and HR
                tasks.
              </p>
              <div className="flex justify-center gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-lg flex-1 bg-[#5fb2b0] text-[#128f8b] placeholder:text-[#128f8b] p-[0.5vw]"
                />
                <Button type="submit" className="bg-[#5fb2b0] text-[#128f8b] hover:bg-[#5fb2b0]/90 p-[0.5vw]">
                  Get Updates
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white text-[#128f8b]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Key Features</h2>
                <p className="max-w-[900px] text-[#5fb2b0] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  WageWyse offers a comprehensive suite of tools to streamline your workforce management.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Payroll Management</h3>
                <p className="text-sm text-[#5fb2b0]">
                  Automate payroll processing and ensure accurate and timely payments.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Time Tracking</h3>
                <p className="text-sm text-[#5fb2b0]">Streamline time and attendance tracking for your workforce.</p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">HR Management</h3>
                <p className="text-sm text-[#5fb2b0]">Manage employee records, benefits, and compliance with ease.</p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Analytics and Reporting</h3>
                <p className="text-sm text-[#5fb2b0]">
                  Gain valuable insights into your workforce with advanced analytics.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Compliance Tracking</h3>
                <p className="text-sm text-[#5fb2b0]">
                  Stay on top of labor laws and regulations with our compliance tools.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Employee Self-Service</h3>
                <p className="text-sm text-[#5fb2b0]">
                  Empower your employees with self-service tools for time-off requests, payslips, and more.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#128f8b]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16">
              <div className="space-y-4">
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  About WageWyse
                </h2>
                <p className="max-w-[700px] text-[#5fb2b0] md:text-xl/relaxed">
                  WageWyse is a leading employee management platform that simplifies payroll, time tracking, and HR
                  tasks for businesses of all sizes. Our mission is to empower organizations to focus on their core
                  operations by streamlining workforce management.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-[#5fb2b0] px-4 py-2 text-sm font-medium text-[#128f8b] shadow transition-colors hover:bg-[#5fb2b0]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Early Access
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-[#5fb2b0]">
        <p className="text-xs text-[#5fb2b0]">&copy; 2024 WageWyse. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-[#5fb2b0]" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-[#5fb2b0]" prefetch={false}>
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function MountainIcon(props:MountainIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}