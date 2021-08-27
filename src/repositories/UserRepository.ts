import { Knex } from 'knex';
import User from '../models/users/User';

interface UserRow {
  id: number;
  name: string;
  email: string;
  firebase_uid: string;
  mbti_category?: number;
  current_theme?: number;
  username?: string;
  age?: string;
  gender?: number;
  situation?: number;
  created_at: Date;
  updated_at: Date;
}

class UserRepository {
  private db: Knex;

  constructor(db: Knex) {
    this.db = db;
  }

  async listUsers(): Promise<User[]> {
    return this.db<UserRow>('user').then((result: UserRow[]) =>
      result.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        firebaseUID: user.firebase_uid,
        mbtiCategory: user.mbti_category ?? undefined,
        currentTheme: user.current_theme ?? undefined,
        username: user.username ?? undefined,
        age: user.age ?? undefined,
        gender: user.gender ?? undefined,
        situation: user.situation ?? undefined,
        createdAt: user.created_at,
        updatedAt: user.updated_at
      }))
    );
  }
}

export default UserRepository;
