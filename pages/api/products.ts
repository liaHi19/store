import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const query = groq`*[_type == "product"]{
  _id,
  ...
}`;

type Data = {
  products: IProduct[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const products: IProduct[] = await sanityClient.fetch(query);
  res.status(200).json({ products });
}
