import Image from 'next/image';
import { Button } from '@nextui-org/react';
import fondo2 from 'public/fondo2.jpeg';
import {User, Link} from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";
import git from 'public/git.png';


export default function page() {
  return (
    <>
    <div>
      <Image
        alt="fondo2"
        src={fondo2}
        quality={100}
       fill
        sizes="100vw"
        style={{
          objectFit: 'contain',
        }}
      />
      <Image
          alt="git"
          src={git}
          style={{
            objectFit: 'contain',
            position: 'absolute',
            bottom: 50,
            left: 570,
            width: '40%',
          }}
        />
      </div>
    </>
  )
}








// style={{
//   fontSize: '20px',
//   position: 'absolute',
//   top: '80%', 
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   backgroundColor: 'rgba(0, 0, 0, 1)',
//   padding: '10px',
//   color: 'white',
// }}