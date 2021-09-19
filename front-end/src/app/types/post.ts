export interface Post {
  id: number,
  title: string,
  content: string,
  public: string,
  category?: string,
  author_id: number,
  createdAt?: string,
  updatedAt?: string
}
