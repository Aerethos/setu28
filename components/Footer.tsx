export default function Footer() {
  return (
    <footer className="relative z-10 w-full px-6 py-16 md:px-12">
      <div className="rule mb-12" />
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <span className="font-display text-2xl font-normal text-tungsten">
          SETU BALL 2028
        </span>
        <span className="font-body text-[0.65rem] font-light tracking-widest2 text-tungsten">
          WATERFORD, IRELAND / JULY 1, 2028
        </span>
        <span className="font-body text-[0.65rem] font-light tracking-widest2 text-tungsten">
          HELLO@SETU28.COM
        </span>
      </div>
      <div className="mt-16">
        <span className="font-body text-[0.6rem] font-light tracking-widest2 text-tungsten opacity-30">
          © 2026 SETU BALL COMMITTEE. ALL RIGHTS RESERVED.
        </span>
      </div>
    </footer>
  );
}
