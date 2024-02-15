import { Drawer, IconButton, List, ListItem } from "@material-tailwind/react"
import Icons from '../SocialIcons/Icons';
import { useState } from "react";
import logo from '../../../public/Logo-Mushroom.svg';

const Header = () => {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <div className="bg-black w-full px-6 py-4 flex items-center">
      <div className='w-1/2 flex flex-row gap-2'>
        <img 
         src={logo}
         alt="logo icon" 
         width='30'
         height='auto'
         />
        <h2 className="text-white font-medium text-xl oswald">HÉCTOR VALDÉS M.</h2>
      </div>
      <div className='w-1/2 flex justify-end'>
        <img className='img-drawer' onClick={openDrawer} width="25" height="25" src="https://img.icons8.com/ios/25/ffffff/menu--v1.png" alt="menu--v1" />
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
            <List>
              <ListItem>Inicio</ListItem>
              <ListItem>Sobre Mí</ListItem>
              <ListItem>Habilidades</ListItem>
              <ListItem>Conocimientos</ListItem>
              <ListItem>Experiencia</ListItem>
              <ListItem>Educación</ListItem>
              <ListItem>Portafolio</ListItem>
              <ListItem>Contacto</ListItem>
            </List>
          </div>
          <div className="absolute bottom-5 flex justify-center w-full">
            <Icons color='dfac13' size='35' filled/>
          </div>
        </Drawer>
      </div>
    </div>
  )
}

export default Header