import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Persona } from './models/persona';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  usuarios: Persona[]=[]

  tomarDatos(){

    const datos = 'https://randomuser.me/api/';

    axios.get(datos)
    .then( (response) => {
      const res = response.data.results;
      for (let items of res) {
        this.usuarios.push(
          {
            id: items.login.salt,
            nombre: items.name.first,
            edad: items.dob.age,
            correo: items.email,
            genero: items.gender,
            ciudad: items.location.city,
            usuario: items.login.username,
            celular: items.cell,
            imagen: items.picture.large
          }
        )
      }
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }

}
