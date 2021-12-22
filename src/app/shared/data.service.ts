import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataList: any[] = [
    {title: "Homem Aranha", description: "Qual quer coisa"},
    {title: "Vingadores", description: "Qual quer coisa"},
    {title: "Batman", description: "Qual quer coisa"},
    {title: "Aladin e os 40 ladrões", description: "Qual quer coisa"},
    {title: "Pokemon", description: "Qual quer coisa"}
  ];

  constructor() { }
}
