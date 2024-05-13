import type { NextApiRequest } from 'next';

export async function GET(_req: NextApiRequest) {
  return Response.json({ message: 'Hello from Next.js!' });
}
