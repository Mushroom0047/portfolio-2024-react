import { Button, Drawer, IconButton } from "@material-tailwind/react"
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
 
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <div className="bg-black w-full px-6 py-4 flex items-center">
      <div className='w-1/2'>
        <h2 className="text-white font-medium text-xl oswald">HÉCTOR VALDÉS M.</h2>
      </div>
      <div className='w-1/2 flex justify-end'>
        <img className='img-drawer' onClick={openDrawer} width="25" height="25" src="https://img.icons8.com/ios/25/ffffff/menu--v1.png" alt="menu--v1"/>
      <Drawer open={open} onClose={closeDrawer} className="p-4" placement='right'>
        <div className="mb-6 flex items-center justify-between">          
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="outlined">
            Documentation
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </Drawer>
      </div>
    </div>
  )
}

export default Header