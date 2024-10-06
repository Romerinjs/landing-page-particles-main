// server.js
const express = require('express');
const fetch = global.fetch;
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

const LEMON_API_KEY = process.env.LEMON_API_KEY;

// Endpoint para crear un checkout
app.post('/api/checkout', async (req, res) => {
  const { email } = req.body;

  try {
    // Solicitud a la API de Lemon Squeezy para crear un checkout
    const response = await fetch('https://api.lemonsqueezy.com/v1/checkouts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LEMON_API_KEY}`, // Tu clave API de Lemon Squeezy
      },
      body: JSON.stringify({
        checkout: {
          email: email,              // Email del cliente
          product_id: 'your-product-id',  // Reemplaza con el ID del producto real
          custom_amount: 5000,        // Precio en centavos (50.00 USD)
        },
      }),
    });

    const data = await response.json();

    if (response.ok) {
      // Responde con la URL del checkout para redirigir al cliente
      res.status(200).json({ url: "https://boostyourbusinessn.lemonsqueezy.com/checkout" });
    } else {
      // Si hay algún error, envíalo como respuesta
      res.status(400).json({ error: data.error });
    }

  } catch (error) {
    console.error('Error al crear el checkout:', error);
    res.status(500).json({ error: 'Error al procesar el pago.' });
  }
});

// Inicia el servidor en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
