import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent {
  mascotas:any = []
  mascota:any = {
    nombre:'',
    raza:'',
    tipo:''
  };
  id:number = 0;
  

  constructor(private httpClient: HttpClient) { }

  ngOnInit(){
    this.httpClient.get('http://localhost:8888/mascotas').subscribe(res=>{
      this.mascotas = res;
      console.log(this.mascotas);
    })
  }

  ingresarMascota() {
    this.httpClient.post('http://localhost:8888/mascota', this.mascota).subscribe((res:any)=>{
      console.log(res);
      this.mascotas.push(res.mascotaGuardada);
    })
  }

  eliminarmascota(i:number){
    this.httpClient.delete('http://localhost:8888/mascota/${i}', this.mascota).subscribe((res:any)=>{
      console.log(res);
      if(res.codigo == 1)
      {
        this.mascotas.splice(i,1);
      }
    })

  }

  editarmascota(mascota:any, i:number){
    this.mascota.nombre = mascota.nombre
    this.mascota.raza = mascota.raza
    this.mascota.tipo = mascota.tipo
    this.id = i
  }

  ActualizarMascota(id:number){
    console.log(id);
    this.httpClient.put('http://localhost:8888/mascota/${i}', this.mascota).subscribe((res:any)=>{
      console.log(res);
      this.mascotas[id] = this.mascota
    })
  }
}
