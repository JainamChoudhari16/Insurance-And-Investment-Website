import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiUser } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { signoutSuccess } from "../redux/user/userSlice";

function DashSidebar() {
  const { currentUser } = useSelector((state) => state.user);
  const [tab, setTab] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const api = "http://localhost:8080";
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  const handleSignOut = async () => {
    try {
      const res = await fetch(`${api}/auth/logout`, {
        method: 'POST',
      });
      const data = await res.json();
      console.log(data)
      if (!res.ok) {
        console.log(data.message);
        console.log("Logout failed");
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Sidebar className="w-full md:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to="/dashboard?tab=profile">
            <Sidebar.Item
              active={tab === "profile"}
              icon={HiUser}
              label={
                currentUser.roles[0].name === "ROLE_USER" ? "User" : "Admin"
              }
              labelColor="dark"
            >
              Profile
            </Sidebar.Item>
          </Link>
          
          {currentUser.roles[0].name === "ROLE_ADMIN" && (
            <>
          <Link to='/dashboard?tab=life'>
          <Sidebar.Item className="cursor-pointer" active={tab === "life" }>
            LIFE INSURANCE
          </Sidebar.Item>
          </Link>
                    
          <Link to='/dashboard?tab=health'>
          <Sidebar.Item className="cursor-pointer" active={tab === "health"}>
            HEALTH INSURANCE
          </Sidebar.Item>
          </Link>
        
          <Link to='/dashboard?tab=home'>
          <Sidebar.Item className="cursor-pointer" active={tab === "home"}>
            HOME INSURANCE
          </Sidebar.Item>
          </Link>

          <Link to='/dashboard?tab=users'>
          <Sidebar.Item className="cursor-pointer" active={tab === "users"}>
            USERS
          </Sidebar.Item>
          </Link>
          </>
          )}
          <Sidebar.Item icon={HiArrowSmRight} className="cursor-pointer" onClick={handleSignOut}>
            Sign Out
          </Sidebar.Item>

        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default DashSidebar;
