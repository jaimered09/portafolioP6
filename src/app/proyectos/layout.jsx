import { Card, CardHeader, CardFooter, Link, Button } from "@nextui-org/react";
import Image from 'next/image'
import pollos from 'public/pollos.png'
import pro from 'public/pro.png'
import cine from 'public/cine.png'
import crud from 'public/crud.png'

export default function App() {
  return (
    <div className="max-w-[1600px] mx-auto p-20 flex space-x-5">
      <Card isFooterBlurred className="w-full sm:w-1/4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny bg-black  text-white uppercase font-bold">Proyecto4</p>
          <h4 className="text-white bg-black  font-medium text-2xl">Los pollos hermanos restaurantes</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-110 -translate-y-7 object-cover"
          src={pollos}
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">Creacion de página web</p>
            <p className="text-black text-tiny">plataforma de reservas</p>
          </div>
          <Link href="https://github.com/jaimered09/Restaurant" target="_blank" rel="noopener noreferrer">
            <Button className="text-tiny" color="primary" radius="full" size="sm">
              Repositorio
            </Button>
          </Link>
          <Link href="https://lospolloshermanosrestaurante.netlify.app/" target="_blank" rel="noopener noreferrer">
            <Button className="text-tiny" color="secondary" radius="ghost" size="sm">
              Deploy
            </Button>
          </Link>
        </CardFooter>
      </Card>

      <Card isFooterBlurred className="w-full sm:w-1/4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny bg-black  text-white uppercase font-bold">Proyecto5</p>
          <h4 className="text-white  bg-black  font-medium text-2xl">Prophone</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src={pro}
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">Creación de página web</p>
            <p className="text-black text-tiny">implementación E-commerce</p>
          </div>
          <Link href="https://github.com/jaimered09/p5btcamp" target="_blank" rel="noopener noreferrer">
            <Button className="text-tiny" color="primary" radius="full" size="sm">
              Repositorio
            </Button>
          </Link>
          <Link href="https://legendary-praline-d7e867.netlify.app/" target="_blank" rel="noopener noreferrer">
            <Button className="text-tiny" color="secondary" radius="ghost" size="sm">
              Deploy
            </Button>
          </Link>
        </CardFooter>
      </Card>

      <Card isFooterBlurred className="w-full sm:w-1/4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny bg-black  text-white uppercase font-bold">proyecto3</p>
          <h4 className="text-white bg-black  font-medium text-2xl">TMDB cine</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src={cine}
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">Creación de página web</p>
            <p className="text-black text-tiny">uso de API</p>
          </div>
          <Link href="https://github.com/jaimered09/Api-TMDB/" target="_blank" rel="noopener noreferrer">
            <Button className="text-tiny" color="primary" radius="full" size="sm">
              Repositorio
            </Button>
          </Link>
          <Link href="https://jaimered09.github.io/Api-TMDB/" target="_blank" rel="noopener noreferrer">
            <Button className="text-tiny" color="secondary" radius="ghost" size="sm">
              Deploy
            </Button>
          </Link>
        </CardFooter>
      </Card>

      <Card isFooterBlurred className="w-full sm:w-1/4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white bg-black  uppercase font-bold">proyecto2</p>
          <h4 className="text-white bg-black  font-medium text-2xl">CRUD</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src={crud}
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">Creacion de página web</p>
            <p className="text-black text-tiny">registro de asistencia</p>
          </div>
          <Link href="https://github.com/jaimered09/CRUD" target="_blank" rel="noopener noreferrer">
            <Button className="text-tiny" color="primary" radius="full" size="sm">
              Repositorio
            </Button>
          </Link>
          <Link href="https://jaimered09.github.io/CRUD/" target="_blank" rel="noopener noreferrer">
            <Button className="text-tiny" color="secondary" radius="ghost" size="sm">
              Deploy
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
