// app/api/checkout/route.js

export async function POST(request) {
    try {
      const { email } = await request.json();
  
      // Aquí puedes agregar la lógica para procesar el pago
      // Por ejemplo, comunicarte con Lemon Squeezy
  
      return new Response(JSON.stringify({ message: 'Pago procesado', email }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error('Error al procesar el pago:', error);
      return new Response(JSON.stringify({ error: 'Error al procesar el pago' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }
  