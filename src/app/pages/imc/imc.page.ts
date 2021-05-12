import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.page.html',
  styleUrls: ['./imc.page.scss'],
})
export class ImcPage {
  peso: number;
  altura: number;
  valorImc: number;
  classificacao: string;
  grauobe: string;
  nome: string;
  aviso:string;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      let state = this.router.getCurrentNavigation().extras.state;
      if (state) {

    this.valorImc = (state.peso / (state.altura * state.altura));
    this.nome = state.nome;

      if (this.valorImc <= 18.5){
        this.classificacao ="Abaixo do Peso";
        this.grauobe ="0";
      }
      else if (this.valorImc > 19 && this.valorImc < 24.9){
        this.classificacao = "Peso Normal";
        this.grauobe ="0";
      } else if (this.valorImc > 25 && this.valorImc < 29.9){
        this.classificacao ="Sobrepeso"
        this.grauobe ="0.5";
      } else if (this.valorImc > 30 && this.valorImc < 34.9){
        this.classificacao = "Obesidade";
        this.grauobe ="1";
        this.aviso = "Procure um médico ou nutricionista";
      } else if (this.valorImc > 35 && this.valorImc < 39.9){
        this.classificacao = "Obesidade ";
        this.grauobe ="2";
        this.aviso = "Procure um médico ou nutricionista";
      } else {
        this.classificacao = "Obesidade Mórbida";
        this.grauobe ="3";
        this.aviso = "Procure um médico ou nutricionista"; }
   } } )}; }
