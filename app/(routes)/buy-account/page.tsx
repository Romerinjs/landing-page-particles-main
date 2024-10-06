'use client';

import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { CoverParticles } from '@/components/cover-particles'; // Asegúrate de que CoverParticles esté bien implementado
import TransitionPage from '@/components/transition-page';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function BuyAccount() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Procesando pago...');
    
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          card_number: cardNumber,
          expiry_date: expiryDate,
          cvv,
        }),
      });
    
      const data = await response.json();
    
      if (response.ok) {
        // Redirige al cliente a la URL del checkout
        window.location.href = data.url;
  
        // Agrega el setTimeout para redirigir a la página de inicio después de 5 segundos
        setTimeout(() => {
          router.push('/'); // Cambia '/' por la ruta que quieras
        }, 5000);
      } else {
        console.error('Error en el procesamiento del pago:', data.error);
        alert('Error al procesar el pago. Por favor, intenta de nuevo.');
      }
    } catch (error) {
      console.error('Error de red:', error);
      alert('Ocurrió un error al procesar el pago. Por favor, intenta de nuevo.');
    }
  };
  
  
  return (
    <div className="relative w-full min-h-screen bg-darkBg/60">
      <TransitionPage />
      <div className="absolute top-4 right-4">
        <Link href="/">
          <Button variant="outline">Volver al inicio</Button>
        </Link>
      </div>
      <div className="grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
        <Image src="/home-4.png" priority={true} width={800} height={800} alt="Avatar" className="mb-10" />

        <div className="flex flex-col justify-center max-w-md mx-auto md:col-start-2">
          <h1 className="mb-10 text-2xl leading-tight md:py-5 text-center md:text-left md:text-4xl">
            Compra tu cuenta y <br />
            <TypeAnimation
              sequence={[
                'potencia tu negocio',
                600,
                'aumenta tus ventas',
                600,
                'mejora tu productividad',
                600,
                'simplifica tus procesos',
                600,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold text-secondary"
            />
          </h1>
          <Card>
            <CardHeader>
              <CardTitle>Comprar cuenta</CardTitle>
              <CardDescription>Ingresa tus datos para procesar el pago</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    label={''}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    label={''}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Número de tarjeta</Label>
                  <Input
                    id="cardNumber"
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
                    label={''}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiryDate">Fecha de expiración</Label>
                    <Input
                      id="expiryDate"
                      type="text"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      placeholder="MM/AA"
                      required
                      label={''}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      type="text"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      required
                      label={''}
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full">Procesar pago</Button>
              </form>
            </CardContent>
            <CardFooter children={undefined}>
              {/* El botón de envío ahora está dentro del formulario */}
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
