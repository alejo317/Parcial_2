import { Component, OnInit } from '@angular/core';
import { Pinguino } from './pinguino';
import { PinguinoService } from './pinguino.service';

@Component({
  selector: 'app-pinguino',
  templateUrl: './pinguino.component.html',
  styleUrls: ['./pinguino.component.css']
})
export class PinguinoComponent implements OnInit {
  pinguinos: Array<Pinguino> = [];
  

  constructor(private pinguinoService: PinguinoService) { }
  getPinguinos() {
    this.pinguinoService.getPinguinos().subscribe(pinguinos => {
      this.pinguinos = pinguinos;
    });
}

  


  ngOnInit() {
    this.getPinguinos();
  }

}
