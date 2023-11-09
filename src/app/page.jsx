import { Button } from '@nextui-org/react';
import Image from 'next/image';
import world from 'public/world.jpg';
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/react';
import {User, Link} from "@nextui-org/react";

export default function Home() {
  return (
    <div style={{ position: 'relative' }}>
      <Image
        alt="world"
        src={world}
        placeholder="blur"
        quality={100}
        cover
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
      />
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
        ¡Destaca en línea con un sitio web espectacular! No dejes pasar la oportunidad de impresionar a tus visitantes y convertir esas visitas en compras y/o suscriptores. ¡Juntos podemos hacerlo realidad!
        <hr />
        <br />
        <Button color="primary" variant="faded" style={{ display: 'block', margin: '0 auto' }} >
          Hablemos
        </Button>
        <Button color="primary" variant="light" style={{ display: 'block', margin: '0 auto' }} >
          CV Profesional
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
    </div>
  );
}
