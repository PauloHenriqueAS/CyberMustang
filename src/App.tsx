import { Mustang4 } from './components/Mustang4';
import { Heading } from './components/Heading';
import { Button } from './components/Button';
import { Text } from './components/Text';
import { Card } from './components/Card';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import './styles/global.css';

export function App() {
  return (
    <div className='w-screen h-screen bg-white  flex-col items-center justify-center text-gray-100 relative overflow-y-scroll'>
      <div className='bg-bgMustang h-[772px] w-full flex flex-row rounded-b-[10vw] bg-cover bg-no-repeat overflow-hidden '>
        <header className='flex flex-row bg-transparent w-screen text-black top-0 left-0 text-3xl fixed'>
          <Icon className='ml-6 text-white' icon="carbon:logo-delicious" />
          <Text.Root asChild size="md">
            <a href="" className='text-white top-0 font-medium mr-40 ml-40'>Home</a>
          </Text.Root>
          <Text.Root asChild size="md">
            <a href="" className='text-white font-medium  mr-40'>Sobre</a>
          </Text.Root>
          <Text.Root asChild size="md">
            <a href="" className='text-white font-medium  mr-40'>Tabela</a>
          </Text.Root>
          <Text.Root asChild size="md">
            <a href="" className='text-white font-medium  mr-40'>Fale Conosco</a>
          </Text.Root>
          <Text.Root asChild size="md" className='mr-4'>
            <a href="" className='text-white font-medium'>Entrar</a>
          </Text.Root>
          <Icon className='ml-0 text-white' icon="ant-design:user-outlined" />
        </header>
        <Heading size='lg' className='flex flex-row font-bold text-xxl mb-40 ml-60'>
          MUSTANG
        </Heading>
      </div>

      <div className='ml-60 mt-20 flex flex-row items-center gap-20 w-screen'>
        <div>
          <img src="./image 11.png" alt="" className='ml-6' />
          <Card className='mt-0 pt-0 static '>
            <Heading size="md" className='ml-8 mt-3 mb-4 text-primary font-normal'> Mustang </Heading>
            <Text.Root size='md' className='text-black'>
              <Text.Icon>
                <Icon icon="bi:calendar2-date" />
              </Text.Icon>
              <Text.Text>2015</Text.Text>
            </Text.Root>
            <Text.Root size='md' className='text-black'>
              <Text.Icon>
                <Icon icon="fluent:top-speed-20-regular" />
              </Text.Icon>
              <Text.Text>180 Km/h</Text.Text>
            </Text.Root>
            <Text.Root size='md' className='text-black'>
              <Text.Icon>
                <Icon icon="simple-line-icons:energy" />
              </Text.Icon>
              <Text.Text>9/10</Text.Text>
            </Text.Root>
            <Text.Root size='md' className='text-black'>
              <Text.Icon>
                <Icon icon="fluent:people-20-regular" />
              </Text.Icon>
              <Text.Text>8/10</Text.Text>
            </Text.Root>
            <Button.Root className=' ml-5 mt-4'>
              <Button.Button> Ver carro</Button.Button>
            </Button.Root>
          </Card>
        </div>
        <div>
          <img src="./image 16.png" alt="" className='ml-8' />
          <Card className='mt-0 pt-0 static '>
            <Heading size="md" className='ml-8 mt-3 mb-4 text-primary font-normal'> Mustang </Heading>
            <Text.Root size='md' className='text-black'>
              <Text.Icon>
                <Icon icon="bi:calendar2-date" />
              </Text.Icon>
              <Text.Text>2015</Text.Text>
            </Text.Root>
            <Text.Root size='md' className='text-black'>
              <Text.Icon>
                <Icon icon="fluent:top-speed-20-regular" />
              </Text.Icon>
              <Text.Text>180 Km/h</Text.Text>
            </Text.Root>
            <Text.Root size='md' className='text-black'>
              <Text.Icon>
                <Icon icon="simple-line-icons:energy" />
              </Text.Icon>
              <Text.Text>9/10</Text.Text>
            </Text.Root>
            <Text.Root size='md' className='text-black'>
              <Text.Icon>
                <Icon icon="fluent:people-20-regular" />
              </Text.Icon>
              <Text.Text>8/10</Text.Text>
            </Text.Root>
            <Button.Root className=' ml-5 mt-4'>
              <Button.Button> Ver carro</Button.Button>
            </Button.Root>
          </Card>
        </div>
        <div>
          <Mustang4 className=' mb-0 p-0 ml-6 '></Mustang4>
          <Card className='mt-0 pt-0 static '>
            <Heading size="md" className='ml-8 mt-3 mb-4 text-primary font-normal'> Mustang </Heading>
            <Text.Root size='md' className='text-black'>
              <Text.Icon>
                <Icon icon="bi:calendar2-date" />
              </Text.Icon>
              <Text.Text>2015</Text.Text>
            </Text.Root>
            <Text.Root size='md' className='text-black'>
              <Text.Icon>
                <Icon icon="fluent:top-speed-20-regular" />
              </Text.Icon>
              <Text.Text>180 Km/h</Text.Text>
            </Text.Root>
            <Text.Root size='md' className='text-black'>
              <Text.Icon>
                <Icon icon="simple-line-icons:energy" />
              </Text.Icon>
              <Text.Text>9/10</Text.Text>
            </Text.Root>
            <Text.Root size='md' className='text-black'>
              <Text.Icon>
                <Icon icon="fluent:people-20-regular" />
              </Text.Icon>
              <Text.Text>8/10</Text.Text>
            </Text.Root>
            <Button.Root className=' ml-5 mt-4'>
              <Button.Button> Ver carro</Button.Button>
            </Button.Root>
          </Card>
        </div>
      </div>

      <div className='mt-24 bg-bgMustang2 w-full bg-cover bg-no-repeat overflow-hidden relative h-[544px]'>
        <aside className='flex flex-col items-center right-0 mt-20 mr-0 ml-80 text-white '>
          <Heading size='lg' className='flex flex-col items-end font-normal ml-80'>Mustang</Heading>
          <Text.Root size='md' asChild className='font-light'>
            <p className='flex flex-col ml-80 right-0'>
              O Ford Mustang é um automóvel desportivo produzido pela <br />
              Ford Motor Company. carro foi apresentado ao público em <br />
              17 de abril de 1964 durante a New York World's Fair. O <br />
              Mustang, apesar de ter sofrido grandes alterações ao longo <br />
              dos anos é a mais antiga linha de automóveis da Ford.
            </p>
          </Text.Root>
          <Button.Root className='mt-8 ml-80 rounded w-62 h-12 bg-transparent text-white border-white bg-primary'>
            <Button.Button className='text-white'> Ver carro</Button.Button>
          </Button.Root>
        </aside>
      </div>
    </div>
  )
}