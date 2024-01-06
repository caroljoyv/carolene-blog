import Image from "next/image";
import Link from "next/link";
import "../styles/global.css";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header >
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
      <Link href="/">
        <Image src="/logo.png" width={400} height={400} alt={"hello"} className="mx-auto" />
        
        {/* <h1 className="text-3xl text-white font-bold">Carolene's Blog</h1> */}
        </Link>        
        <p className="text-slate-300">Welcome to my tech blog 💻</p>
      </div>
    </header>
  );
  const footer = (
    <header>
      <div className="border-t border-slate-500 mt-6 py-6 text-center text-slate-400">
        <br />
        <p>Developed by Carolene</p>
      </div>
    </header>
  );
  return(
    
    <html>
      <head />
      <body>
        <div className="mx-auto max-w-2xl px-6">
          {header}
          {children}        
          {footer}
        </div>
      </body>
    </html>
  )
}