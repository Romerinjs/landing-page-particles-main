// app/success.tsx

'use client';

// app/success.tsx

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; // Asegúrate de haber configurado Firebase

interface SuccessParams {
  email: string;
}

export default function Success({ params }: { params: SuccessParams }) {
  const router = useRouter();
  const { email } = params;

  useEffect(() => {
    const timer = setTimeout(() => {
      // Guardar en Firebase
      const auth = getAuth();
      const password = "yourGeneratedPassword"; // Genera una contraseña o pídela al usuario

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log('Usuario creado:', userCredential.user);
          router.push('/introduction'); // Redirigir después de guardar
        })
        .catch((error) => {
          console.error('Error al crear el usuario:', error);
        });
    }, 5000);

    return () => clearTimeout(timer);
  }, [router, email]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">¡Pago exitoso!</h1>
      <p>Tu pago ha sido procesado correctamente.</p>
      <p>Correo electrónico: {email}</p>
      <p>Serás redirigido a la página de inicio de sesión en 5 segundos...</p>
    </div>
  );
}

