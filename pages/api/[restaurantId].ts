// pages/api/[restaurantId].ts
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { restaurantId } = req.query;

    ///api/[restaurantId] 
    //ถ้า fetch สำเร็จให้ส่ง response กลับมาเป็น json 
    //ถ้าไม่สำเร็จ ขึ้น Error 
    //Handle Api request จาก dynamic routes
  try {
    const jsonUrl = `https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/${restaurantId}.json`;
    const response = await axios.get(jsonUrl);
    const jsonData = response.data;

    res.status(200).json(jsonData);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error ' });
  }
}
