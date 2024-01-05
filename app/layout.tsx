import Image from "next/image";
import Link from "next/link";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div>
        <h1>Carolene's Blog</h1>
        <p>Welcome to my blog 💻</p>
        <br />
      </div>
    </header>
  );
  const footer = (
    <header>
      <div>
        <br />
        <p>Developed by Carolene</p>
      </div>
    </header>
  );
  return(
    
    <html>
      <head />
      <body>
        {header}
        {children}
        
        {footer}
      </body>
    </html>
  )
}