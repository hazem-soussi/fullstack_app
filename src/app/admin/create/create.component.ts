import { Component, OnInit } from '@angular/core';
import { Proprety } from 'src/app/modal/Modal';
import { PropretyService } from './../../service/Proprety.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  Proprety : Proprety = new Proprety();
  selected : string = '';

  constructor(private PropretyService: PropretyService) { }
  ngOnInit(): void {
  }
  create(){
    console.log(this.Proprety);
    this.PropretyService.addProperty(this.Proprety).subscribe();

  }

}
