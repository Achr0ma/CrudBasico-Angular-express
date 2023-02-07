import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  private API_URL = 'http://localhost:3000/api/mascotas';

  constructor(private http: HttpClient) { }

  listarMascotas() {
    return this.http.get(this.API_URL);
  }

  ingresarMascota(mascota:any) {
    return this.http.post(this.API_URL, mascota);
  }

  actualizarMascota(id:any, mascota:any) {
    return this.http.put(`${this.API_URL}/${id}`, mascota);
  }

  eliminarMascota(id:any) {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
}
