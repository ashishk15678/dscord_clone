import NavigationSideBar from "@/components/navigation-side-bar";
const MainLayout = async ({ children }) => {
  return (
    <div className="h-full">
      <div className="hidden md:flex h-full w-[72px] z-30 flex-col fxed inset-y-0">
        <NavigationSideBar />
        <main className="md:pl-[72px] h-full">{children}</main>
      </div>
    </div>
  );
};
export default MainLayout;
