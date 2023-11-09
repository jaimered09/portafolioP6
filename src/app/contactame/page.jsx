import Image from 'next/image'
import { Button } from '@nextui-org/react';
import BingWallpaper from 'public/BingWallpaper.jpg'
import {User, Link} from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";


export default function page() {
  return (
    <>
    <div>
      <Image
        alt="Bingwall"
        src={BingWallpaper}
        placeholder="blur"
        quality={100}
        cover
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
      />
      </div>
      <div
        style={{
          fontSize: '20px',
          position: 'absolute',
          top: '30%', 
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '10px',
          color: 'white',
        }}
      >
        Hablemos sobre tus proyectos, expectativas y necesidades, estaría encantado de escucharte y proponerte algo novedoso y que funcione, contactame y conversemos.
        <hr />
        <br />
        <Button color="primary" variant="faded" style={{ display: 'block', margin: '0 auto' }} >
          Hablemos
        </Button>
        <User   
      name="Jaime Jaramillo S."
      description={(
        <Link href="https://github.com/jaimered09" size="sm" isExternal>
          @jaimered09
        </Link>
      )}
      avatarProps={{
        src: "https://avatars.githubusercontent.com/jaimered09"
      }}
    />
      </div>
    </>
  )
}