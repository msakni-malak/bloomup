import SideBar from "./SideBar";
import BottomNav from "./BottomNav";
const MainLayout = ({ children, noPadding = false }) => {
  return (
    <div className="flex flex-row min-h-screen bg-[#EFEBCE]">
      <SideBar />
      <div className={`flex-1 overflow-y-auto pb-24 md:pb-10 flex flex-col ${noPadding ? "" : "p-10"}`}>
        {children}
      </div>
      <BottomNav />
    </div>
  );
};

export default MainLayout;