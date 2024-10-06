// pages/api/checkout.js
import fetch from 'node-fetch';
import { db } from '../../lib/firebase'; // Importa tu configuración de Firebase
import { collection, addDoc } from "firebase/firestore"; // Importa Firestore

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, cardNumber, expiryDate, cvv } = req.body;

    const url = 'https://api.lemonsqueezy.com/v1/checkout'; 
    const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NGQ1OWNlZi1kYmI4LTRlYTUtYjE3OC1kMjU0MGZjZDY5MTkiLCJqdGkiOiI4ZGRmODVmYWUwZDQ5NWU1N2IzNDYyNDk2MjRhYmE4MWY5ODcwOGJiZDE5NTQ1MGY0NDk3ZjEzNDJhZjllNTUxZDRjMWZlNzg1NzMyMmE2MiIsImlhdCI6MTcyODI0NzgyMS42NDczNjYsIm5iZiI6MTcyODI0NzgyMS42NDczNjksImV4cCI6MjA0Mzc4MDYyMS42MTQ1MDMsInN1YiI6IjMzNjQ3OTQiLCJzY29wZXMiOltdfQ.Jc_dNom1JpPPHLZTZc43xCYr-_yagVc5_FAqwDzi5P8ksdGTJsaPlOnXZV3aZBJlTeylH895TSwD4iJnyiY4seRw9UR3irrh3yF9BFZIRkNt1F9yzWQCnX-KG7lHfcx4pd_qSXOAp1Vi0XsLtF7XxBlOrhpH9MY2Kzp-aG9kTTKMhf4vr_udrzfQUwfmqQhu-xUZF0lG13DSJaW31oHJjfBcK-aFEMnlZIT5WtDFSr1F8_PDnXQN3XDcE1M1bFGeK8wMjV0wjgi_Cf7V3OmVupg77MGTRKQEgHIIh8G7kUQxg1HPyQ9coUIzlgV1GN9-V0QNWBPIWMRcJ8gBNdb42tp_aChoX8rF1BjvDjVUD_mh5Wg90ObdD6NrD4RDUTcunrnkszh1XC-_yk2dp_mjd2iLIE_Le3LvfeVyjhPK9I7BTigpgebRjHqDLLDoBD3v5bDbxgNlFuRDJLTG0ymBX7gMVsh6LpOCEU6c-0zCXDS3XtxycEkmCWmF5_a3WnSx';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          card_number: cardNumber,
          expiry_date: expiryDate,
          cvv,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error de la API:', errorText);
        return res.status(response.status).json({ error: 'Error en la respuesta de la API' });
      }

      const data = await response.json();

      // Guardar los datos en Firestore
      await addDoc(collection(db, "users"), {
        email: email,
        cardNumber: cardNumber,
        createdAt: new Date(),
      });

      return res.status(200).json(data);
    } catch (error) {
      console.error('Error al procesar el pago:', error);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
  } else {
    return res.status(405).json({ error: 'Método no permitido' });
  }
}
