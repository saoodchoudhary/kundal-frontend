import React, { useEffect, useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  
  
  Accordion,
  AccordionHeader,
  AccordionBody,
  
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  
  PowerIcon,
  PlusIcon
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { MdCategory, MdNote } from "react-icons/md";
 
const AdminSidebarComp = () => {
    const [open, setOpen] = useState(0);
   
    const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
    };
    const [openh, setOpenh] = useState(false); // State to track sidebar visibility
    const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Track window width
  
    // Function to update window width on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 1024) {
        setOpenh(true); // Show sidebar if window width is 800px or more
      } else {
        setOpenh(false); // Hide sidebar if window width is less than 800px
      }
    };
  
    // Event listener for window resize
    window.addEventListener("resize", handleResize);
  
    // Function to toggle sidebar visibility
    const toggleSidebar = () => {
      setOpenh(!openh);
    };
  useEffect(()=>{
    // handleResize()
  },[openh])
  return (
    <div>
    {/* Hamburger menu button */}
    {windowWidth < 1024 && (
      <div className="flex items-center">
  <button  onClick={toggleSidebar} className="text-gray-600 focus:outline-none lg:hidden">
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
  </button>
</div>
    )}

    {/* Sidebar */}
    <Card
      className={`min-h-[calc(100vh)] w-full min-w-[280px] max-w-[280px] p-4 shadow-xl overflow-y-auto fixed top-22 left-0 shadow-blue-gray-900/5 ${
        windowWidth < 1024 && !openh ? "hidden" : "" // Hide sidebar when width is less than 1000px and it's closed
      }`}
    >
      <div className="mb-2 flex items-center gap-4 p-4">
        <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="brand" className="h-8 w-8" />
        <Typography variant="h5" color="blue-gray">
          Admin Panel
        </Typography>
      </div>
      <List>
        <Accordion  open={open === 1}>
          <Link to="/admin">
        <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>

              <Typography color="blue-gray" className="mr-auto font-normal">
                Dashboard
              </Typography>
            </AccordionHeader>
          </ListItem>
       </Link>
        </Accordion>

        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                E-Commerce
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              
            <Link to="/admin/order">
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Orders
              </ListItem>
              </Link>
              
              <Link to="/admin/product">
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Products
              </ListItem>
                </Link>
            </List>
          </AccordionBody>
        </Accordion>
        <hr className="my-2 border-blue-gray-50" />
        <Link to="add/product">
        <ListItem>
          <ListItemPrefix>
            <PlusIcon className="h-5 w-5" />
          </ListItemPrefix>
          Add Product
        </ListItem>
        </Link>
        <Link to="/admin/category">
          
        <ListItem>
          <ListItemPrefix>
            <MdCategory className="h-5 w-5" />
          </ListItemPrefix>
          Category
        </ListItem>
        </Link>

        <Link to="/admin/productSurvey">
        <ListItem>
          <ListItemPrefix>
            <MdNote className="h-5 w-5" />
          </ListItemPrefix>
          Add Product Survey
        </ListItem>
        </Link>

        <Link to="/admin/survey">
        <ListItem>
          <ListItemPrefix>
            <MdNote className="h-5 w-5" />
          </ListItemPrefix>
          Survey
        </ListItem>
        </Link>


        <Link to="/admin/usermanagment">
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Admin User
        </ListItem>
        </Link>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>







    </div>
  );
};

export default AdminSidebarComp;
