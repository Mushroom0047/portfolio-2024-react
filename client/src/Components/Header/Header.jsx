import { Drawer, IconButton, List, ListItem } from "@material-tailwind/react"
import Icons from '../SocialIcons/Icons';
import logo from '/Logo-Mushroom.svg';
import { useState } from "react";


const Header = () => {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const menuList = [
    { link: '/#inicio', menu: 'Inicio'},
    { link: '/#sobre-mi', menu: 'Sobre Mí'},
    { link: '/#habilidades', menu: 'Habilidades'},
    { link: '/#conocimientos', menu: 'Conocimientos'},
    { link: '/#experiencia', menu: 'Experiencia'},
    { link: '/#educacion', menu: 'Educación'},
    { link: '/#portafolio', menu: 'Portafolio'},
    { link: '/#contacto', menu: 'Contacto'}
  ];

  return (
    <header className='bg-black w-full px-6 py-4 flex items-center'>
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
        <img className='hover:cursor-pointer' onClick={openDrawer} width="25" height="25" src="https://img.icons8.com/ios/25/ffffff/menu--v1.png" alt="menu--v1" />
        <Drawer overlay={false} open={open} onClose={closeDrawer} className="p-4" placement='right'>
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
              {
                menuList.map(({link, menu}, index)=>(
                  <a href={link} key={index} onClick={closeDrawer}>
                    <ListItem className="hover:bg-border-dfac hover:text-white">                                        
                        {menu}
                    </ListItem>
                  </a>              
                ))
              }
            </List>
          </div>
          <div className="absolute bottom-5 flex justify-center w-full">
            <Icons color='dfac13' size='35' filled/>
          </div>
        </Drawer>
      </div>
    </header>
  )
}

export default Header