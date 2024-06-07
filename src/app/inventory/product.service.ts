import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';

export interface Product {
  uuid?: string;
  name?: string;
  barcode?: number;
  company?: string;
  cost_price?: number;
  selling_price?: number;
  quantity?: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private item$: Observable<Product[]>;
  private firestore: Firestore = inject(Firestore);

  constructor() {
    // const collectionName = 'drugs';
    // const itemCollection = collection(this.firestore, collectionName);
    // this.item$ = collectionData<Product>(itemCollection, collectionName);
    this.item$ = this.getItems$();
  }

  public getItems$(): Observable<Product[]> {
    // return this.item$;
    return of([
      {
        name: 'Acamol',
        selling_price: 10,
        uuid: "1234",
        barcode: 1234,
        company: 'TEVA'
      },
      {
        name: 'Panadol',
        selling_price: 15,
        uuid: "12348539",
        barcode: 12348539,
        company: 'Swaileh'
      }
    ])
  }
}
