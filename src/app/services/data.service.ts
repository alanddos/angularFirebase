import { Injectable } from '@angular/core';
//firebase
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  items: Observable<any[]>;
  productsCollection: AngularFirestoreCollection<[]>;
  products: Observable<[]>;
  productDoc: AngularFirestoreDocument<any>;

  constructor(db: AngularFirestore,) { 
    this.items = db.collection('cities').valueChanges();
    // this.items.forEach(a => {
    //   console.log(a)
    // })
    console.log(this.items)
        //var citiesRef = db.collection("cities");

    // citiesRef.doc("SF").set({
    //   name: "San Francisco", state: "CA", country: "USA",
    //   capital: false, population: 860000,
    //   regions: ["west_coast", "norcal"]
    // });
    // citiesRef.doc("LA").set({
    //   name: "Los Angeles", state: "CA", country: "USA",
    //   capital: false, population: 3900000,
    //   regions: ["west_coast", "socal"]
    // });
    // citiesRef.doc("DC").set({
    //   name: "Washington, D.C.", state: null, country: "USA",
    //   capital: true, population: 680000,
    //   regions: ["east_coast"]
    // });
    // citiesRef.doc("TOK").set({
    //   name: "Tokyo", state: null, country: "Japan",
    //   capital: true, population: 9000000,
    //   regions: ["kanto", "honshu"]
    // });
    // citiesRef.doc("BJ").set({
    //   name: "Beijing", state: null, country: "China",
    //   capital: true, population: 21500000,
    //   regions: ["jingjinji", "hebei"]
    // });

  }
}
