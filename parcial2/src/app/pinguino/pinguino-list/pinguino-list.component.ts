import { Component, OnInit } from '@angular/core';
import { Pinguino } from '../pinguino';
import { PinguinoService } from '../pinguino.service';

@Component({
  selector: 'app-pinguino-list',
  templateUrl: './pinguino-list.component.html',
  styleUrls: ['./pinguino-list.component.css']
})
export class PinguinoListComponent implements OnInit {
  pinguinos: Array<Pinguino> = [];
  selectedPinguino!: Pinguino;
  selected = false;

  constructor(private pinguinoService: PinguinoService) { }
  getPinguinos(): void {
    this.pinguinoService.getPinguinos().subscribe((pinguinos) => {
      this.pinguinos = pinguinos;
    });
  }

  mayorDistribucion(pinguinos: Pinguino[]): string {
    let conteo: number = 0;
    pinguinos.forEach((pinguino) => conteo = conteo + 1);
    let mayor: string = "Chinstrap penguin";
    return mayor;
      } 

  onSelected(pinguino: Pinguino): void {
    this.selected = true;
    this.selectedPinguino = pinguino;
  }

  ngOnInit() {
    this.getPinguinos();
  }

}
