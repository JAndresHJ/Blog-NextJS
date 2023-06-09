// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient, ObjectId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  response: string;
  message?: {
    [key: string]: string | ObjectId;
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ response: 'Invalid input.' });
      return;
    }

    const newMessage: Data['message'] = {
      email,
      name,
      message,
    };

    let client;
    // Store in DB
    const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.mongodb_clustername}.iqoj3zx.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ response: 'Could not connect to database' });
      return;
    }

    const db = client.db();
    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ response: 'Storing message failed' });
      return;
    }

    client.close();
    console.log('New message: ', newMessage);

    res
      .status(201)
      .json({ response: 'Succesfully stored message!', message: newMessage });
  }
}
