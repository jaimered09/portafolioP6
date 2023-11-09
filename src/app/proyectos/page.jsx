import Image from 'next/image'
import { Button } from '@nextui-org/react';
import fondo1 from 'public/fondo1.jpg'
import {User, Link} from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";


export default function page() {
  return (
    <>
    <div>
      <Image
        alt="Bingwall"
        src={fondo1}
        placeholder="blur"
        quality={100}
        cover
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
      />
      </div>
    </>
  )
} 