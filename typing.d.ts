interface ICategory {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "category";
  title: string;
  slug: {
    _type: "slug";
    current: string;
  };
}
interface IMage {
  _id: string;
  _type: "image";
  asset: {
    url: string;
  };
}
interface IProduct {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "product";
  title: string;
  price: number;
  slug: {
    _type: "slug";
    current: string;
  };
  description: string;
  category: {
    _type: "reference";
    _ref: string;
  };
  image: IMage[];
}
