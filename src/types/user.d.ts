export interface User {
  id: string;
  name: string;
  email: string;
  banner: string;
  role: string;
  image: string;
  verified: boolean;
  postCount?: number;
}