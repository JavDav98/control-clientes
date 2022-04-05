import { Component, OnInit } from '@angular/core';
import {ClienteService} from "../../servicios/cliente.service";
import {ClienteModel} from "../../models/cliente.model";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  //@ts-ignore
  clientes: ClienteModel[];
  constructor(private clientesService: ClienteService) { }

  ngOnInit(): void {
    this.clientesService.getClientes().subscribe(
      clientes => {
        this.clientes = clientes;
      }
    )
  }

  getSaldoTotal(){
    let saldoTotal: number = 0;
    if (this.clientes != null){
      this.clientes.forEach( c => {
        saldoTotal += c.saldo!;
      })
    }
    return saldoTotal;
  }

}
