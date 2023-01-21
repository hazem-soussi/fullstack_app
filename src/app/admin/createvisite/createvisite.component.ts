import { VisiteService } from './../../service/visite.service';
import { Category, Visite } from './../../modal/Modal';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-createvisite',
  templateUrl: './createvisite.component.html',
  styleUrls: ['./createvisite.component.scss']
})
export class CreatevisiteComponent implements OnInit {
  Visite : Visite = new Visite();

  constructor(private VisiteService: VisiteService) { }

  ngOnInit(): void {
  }
  createVisite(){
    console.log(this.Visite);
    this.VisiteService.addVisite(this.Visite).subscribe();

  }

}
