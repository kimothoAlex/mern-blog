import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import { HiArrowSmRight, HiDocumentText, HiOutlineUserGroup, HiUser } from "react-icons/hi";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOutSuccess } from "../redux/user/userSlice";
const DashSidebar = () => {
  const {currentUser} = useSelector((state)=>state.user);
  const location = useLocation();
  const dispatch = useDispatch();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signOutSuccess());
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Sidebar className="w-full md:w-56 flex flex-col gap-2">
      <SidebarItems>
        <SidebarItemGroup>
          <Link to="/dashboard?tab=profile">
            <SidebarItem
              active={tab === "profile"}
              icon={HiUser}
              label={currentUser.isAdmin ? "Admin" : "User"}
              labelColor="dark"
              as="div"
            >
              Profile
            </SidebarItem>
          </Link>
          {
            currentUser.isAdmin && (
              <Link to="/dashboard?tab=posts">
              <SidebarItem
                active={tab === "posts"}
                icon={HiDocumentText}
                as="div"
              >
                Posts
              </SidebarItem>
            </Link>
            )
          }
           {currentUser.isAdmin && (
            <>
              <Link to='/dashboard?tab=users'>
                <Sidebar.Item
                  active={tab === 'users'}
                  icon={HiOutlineUserGroup}
                  as='div'
                >
                  Users
                </Sidebar.Item>
              </Link>
              
            </>
          )}
          <SidebarItem
            onClick={handleSignout}
            className="cursor-pointer"
            icon={HiArrowSmRight}
          >
            Sign Out
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
};

export default DashSidebar;
