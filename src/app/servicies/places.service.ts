import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc ,collectionData} from '@angular/fire/firestore';
import Place from '../interface/place';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private firestore: Firestore) { }



//realizamos un metodo para que se pueda insertar en mi bd firebase
  async addPlace(place: Place) {
    try {
        const placeRef = collection(this.firestore, 'places');
        const docRef = await addDoc(placeRef, place);
        console.log("Document written with ID: ", docRef.id);
        return docRef;
    } catch (error) {
        console.error("Error adding document: ", error);
        throw error; // opcional: re-lanzar el error para manejarlo en el componente que llama a esta función
    }
}

getPlaces(): Observable<Place[]> {
  const placeRef = collection(this.firestore, 'places');
  return collectionData(placeRef, {idField:'id'}) as Observable<Place[]>;

}

}
