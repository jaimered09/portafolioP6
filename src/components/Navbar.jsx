import { Navbar, NavbarBrand, NavbarItem, Link, Button } from "@nextui-org/react";
import { FaTwitter, FaLinkedin, FaGithub, FaPinterest } from 'react-icons/fa';
import {User} from "@nextui-org/react";



export const NavbarNEXTUI = () => {
  return (
    
    <Navbar isBordered>
      <NavbarBrand>
        <Link href="/">
        <Button color="primary" variant="ghost">
        Jaime Jaramillo 
      </Button>
        </Link>
      </NavbarBrand>
      <User   
      name="Diseñador Web Full Stack"
      avatarProps={{
        src: "https://avatars.githubusercontent.com/jaimered09"
      }}
    />
      <NavbarItem className="hover:bg-gray-200">
        <Link href="/">Home</Link>
      </NavbarItem>
      <NavbarItem className="hover:bg-gray-200">
        <Link href="about">Sobre mí</Link>
      </NavbarItem>
      <NavbarItem className="hover:bg-gray-200">
        <Link href="proyectos">Proyectos</Link>
      </NavbarItem>
      <NavbarItem className="hover:bg-gray-200">
        <Link href="posts">Publicaciones</Link>
      </NavbarItem>
      <NavbarItem className="hover:bg-gray-200"> 
        <Button as={Link} color="secondary" href="contactame" variant="flat">
          CONTACTAME
        </Button>
      </NavbarItem>
      <NavbarItem className="hover:bg-gray-200">
        <Link href="https://twitter.com/Jaime_Jaramillo" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={25} />
        </Link>
      </NavbarItem>
      <NavbarItem className="hover:bg-gray-200">
        <Link href="https://github.com/jaimered09" target="_blank" rel="noopener noreferrer">
          <FaGithub size={25} />
        </Link>
      </NavbarItem>
      <NavbarItem className="hover:bg-gray-200">
        <Link href="https://www.linkedin.com/in/jaimejaramillo1" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={25} />
        </Link>
      </NavbarItem>
      <NavbarItem className="hover:bg-gray-200">
        <Link href="https://www.pinterest.cl/" target="_blank" rel="noopener noreferrer">
          <FaPinterest size={25} />
        </Link>
      </NavbarItem>
    </Navbar>
  );
};



// import Link from 'next/link'
// import './Navbar.css'

// const Navbar = () => {
//     return (
//         <>
//           <nav className='navbar py-4'>
//           <ul>
//             <li>
//               <Link href='/'>
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link href='/about'>
//                 Sobre Mí
//               </Link>
//             </li>
//             <li>
//               <Link href='/proyectos'>
//                 Proyectos
//               </Link>
//             </li>

//             <li>
//               <Link href='/posts'>
//                 Publicaciones
//               </Link>
//             </li>
//           </ul>
//           <h3 className='text-4xl font-bold text-yellow-400 text-center'>[ ME - YO ]</h3>
//         </nav>
        
//         </>
//     )
// }

// export default Navbar+


<Link href="https://www.linkedin.com/in/jaimejaramillo1/" target="_blank" rel="noopener noreferrer">
</Link>