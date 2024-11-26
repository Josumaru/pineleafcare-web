// Blog model

export interface BlogModel {
  id: string;
  title: string;
  cover: string; // direct upload to blob storage
  author: string;
  category: any;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}