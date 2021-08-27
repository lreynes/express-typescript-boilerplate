interface User {
  id: number;
  name: string;
  email: string;
  firebaseUID: string;
  mbtiCategory?: number;
  currentTheme?: number;
  username?: string;
  age?: string;
  gender?: number;
  situation?: number;
  createdAt: Date;
  updatedAt: Date;
}

export default User;
