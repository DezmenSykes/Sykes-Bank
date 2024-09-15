import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const user = {firstName: "Dezmen", lastName: "Sykes"}
  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={user}/>
        {children} 
    </main>
  );
}
