import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Cliente from './cliente';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

export class FormularioComponent implements OnInit {
  formCliente!: FormGroup;
  cliente!: Cliente;
  showResult: boolean = false;

  constructor() { }

  ngOnInit() {
    this.createForm(new Cliente());
  }

  createForm(cliente: Cliente) {
    this.formCliente = new FormGroup({
      nome: new FormControl(cliente.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(200)]),
      idade: new FormControl(cliente.idade, [Validators.required, Validators.min(1), Validators.max(120)]),
      telefone: new FormControl(cliente.telefone),
      email: new FormControl(cliente.email),
      endereco: new FormControl(cliente.endereco),
      numero: new FormControl(cliente.numero),
      bairro: new FormControl(cliente.bairro),
      cidade: new FormControl(cliente.cidade)
    });
  }

  get nome() {
    return this.formCliente.get("nome")!;
  }

  get idade() {
    return this.formCliente.get("idade")!;
  }

  onSubmit() {
    if (this.formCliente?.valid) {
      console.log(this.formCliente.value);
      this.cliente = this.formCliente.value;
      this.showResult = true;
      //this.formCliente.reset();
    } else {
      this.showResult = false;
    }
  }

  voltar() {
    this.showResult = false;
  }
}
