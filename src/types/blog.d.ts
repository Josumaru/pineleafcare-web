export interface Blog {
  id: string;
  title: string;
  content: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  category: string;
  author: {
    name: string;
    image: string;
  };
}
