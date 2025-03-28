import { inject, Injectable, NgZone } from '@angular/core';
import {doc, Firestore, getDoc,setDoc } from '@angular/fire/firestore';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }
  
  private readonly firestore = inject(Firestore);
  private readonly ngZone = inject(NgZone);

  async addFavorites(movies: Movie[]): Promise<void> {
    const favRef = doc(this.firestore, `favorites/test`);
    await this.ngZone.run(() => setDoc(favRef, {movies}));
  }

  async getFavorites(): Promise<Movie[]> {
    const favRef = doc(this.firestore, 'favorites/test');
    return await this.ngZone.run(async () => {
      const snapshot = await getDoc(favRef);
      return snapshot.data()?.['movies'] ?? [];
    });
  }

  // async removeFavorite(movie:Movie): Promise<void> {
  //   const favRef = doc(this.firestore, `favorites/test`);
  //   await deleteDoc(favRef);
  // }

}
