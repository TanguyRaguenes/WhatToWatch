import { inject, Injectable } from '@angular/core';
import { collection, deleteDoc, doc, Firestore, getDocs, setDoc } from '@angular/fire/firestore';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }

  private readonly firestore:Firestore=inject(Firestore)

  async addFavorites(movies: Movie[]): Promise<void> {
    const favRef = doc(this.firestore, `favorites/test`);
    await setDoc(favRef, {movies});
  }

  async getFavorites(): Promise<any[]> {
    const snapshot = await getDocs(collection(this.firestore, `favorites/test`));
    return snapshot.docs.map(doc => doc.data());
  }

  async removeFavorite(movieId: string): Promise<void> {
    const favRef = doc(this.firestore, `favorites/test`);
    await deleteDoc(favRef);
  }

}
