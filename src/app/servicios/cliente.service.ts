import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {ClienteModel} from "../models/cliente.model";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  clientesColeccion: AngularFirestoreCollection<ClienteModel>;
  clienteDoc!: AngularFirestoreDocument<ClienteModel>;
  clientes!: Observable<ClienteModel[]>
  cliente!: Observable<ClienteModel>;
  constructor(private db: AngularFirestore) {
    this.clientesColeccion = db.collection('clientes', ref => ref.orderBy('nombre', 'asc'));

  }

  getClientes(): Observable<ClienteModel[]>{
    this.clientes = this.clientesColeccion.snapshotChanges().pipe(
      map( cambios => {
        return cambios.map(
          action => {
            const datos = action.payload.doc.data() as ClienteModel;
            datos.id = action.payload.doc.id;
            return datos;
          }
        )
      })
    );
    return this.clientes;
  }
}
