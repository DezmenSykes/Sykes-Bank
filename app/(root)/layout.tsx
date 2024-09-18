import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const user = await getLoggedInUser();
  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={user}/>

        <div className="flex size-full flex-col">
            <div className="root-layout">
                <Image src="/icons/logo.svg" width={30} height={30} alt="menu icon" />
                <div>
                     <MobileNav user={user}/>
                </div>
            </div>
            {children} 
        </div>

    </main>
  );
}
