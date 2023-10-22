import { redirect } from "next/navigation";

const NavigationSideBar = () => {
  const profile = { id: 1 };
  if (!profile.id) redirect("/");
  return (
    <>
      <div className="space-y-4 flex-col flex items-center h-full text-primar y w-full dark:bg-[#1E1F22]"></div>
    </>
  );
};
export default NavigationSideBar;
