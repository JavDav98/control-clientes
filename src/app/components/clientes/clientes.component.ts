import { Component, OnInit } from '@angular/core';
import {ClienteService} from "../../servicios/cliente.service";
import {ClienteModel} from "../../models/cliente.model";
import {FlashMessagesService} from "flash-messages-angular";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  //@ts-ignore
  clientes: ClienteModel[];
  cliente: ClienteModel = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0
  }
  constructor(private clientesService: ClienteService,
              private flashMesages: FlashMessagesService) { }

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

  agregar(form: NgForm){
    if (!form.valid){
      this.flashMesages.show('Por favor llena el formulario correctamente', {
        cssClass: 'alert-danger', timeout: 4000
      })
    }else{

    }

  }

}
