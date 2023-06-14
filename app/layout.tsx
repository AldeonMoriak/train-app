import MenuItem from "@/components/MenuItem/MenuItem";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Train App",
  description: "Make the training app you always wanted",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="h-[calc(100vh_-_5rem)] max-w-2xl mx-auto overflow-y-auto p-2 relative">
          {children}
        </main>
        <nav className="flex fixed bg-white drop-shadow w-full h-20 justify-around items-center border-t border-t-gray-300">
          <MenuItem to="/exercises" title="Exercises" Icon='BiCycling' />
          <MenuItem to="/" title="Plan" Icon='BiCalendar' />
          <MenuItem to="/workouts" title="Workouts" Icon='BiAlarm' />
        </nav>
      </body>
    </html>
  );
}
