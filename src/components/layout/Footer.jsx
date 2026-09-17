export default function Footer() {
  return (
    <footer className="w-full max-w-[1680px] mx-auto px-4 py-6 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200/80 mt-12 z-10">
      <span>© {new Date().getFullYear()} KliSus Intelligence Systems. All rights reserved.</span>
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        <a href="#the-shift" className="hover:text-slate-900 transition">The Shift</a>
        <a href="#impact" className="hover:text-slate-900 transition">Destinations</a>
        <a href="#intelligence" className="hover:text-slate-900 transition">Privacy Policy</a>
        <a href="#innovation" className="hover:text-slate-900 transition">Terms</a>
      </div>
    </footer>
  );
}
