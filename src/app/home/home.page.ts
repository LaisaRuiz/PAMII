import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private router: Router) {}
  peso: number;
  altura: number;
  nome: string;
  valorImc: number;

  getValores(){
    console.log(this.altura);
    console.log(this.peso);
    console.log(this.nome);
  }

   enviar(){
     let navigationExtras:
     NavigationExtras = {
       state: {
         altura:this.altura,
         peso: this.peso,
         nome: this.nome
        }
      }
 this.router.navigate(['/imc'], navigationExtras)
    }

    imc(){
      this.router.navigate(['/imc'])
    }
  }



