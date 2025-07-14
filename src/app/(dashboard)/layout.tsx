import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import AdminPage from "./admin/page";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="h-screen flex">
        {/* left */}
        <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] ">
          <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
            <Image src="/logo.png" width={32} height={32} alt="Logo" className="mx-auto my-4" />
            <span className="hidden lg:block">School Lama</span>
          </Link>
          <Menu />
        </div>
        {/* right */}
        <div className="min-h-screen w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
        <Navbar />
        <AdminPage />

        </div>

      </div>
  );
}
