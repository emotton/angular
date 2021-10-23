import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { Images } from '../../models/placeholder.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  images: Images;
  erro: any;

  constructor(private crudService: CrudService) {
    this.getter();
  }

  ngOnInit() {
  }

  getter(){
    this.crudService.getFotos().subscribe((data: Images) => {
      this.images = data;
      console.log("data", data);
      console.log("images", this.images);
    }, (error: any) => {
      this.erro = error;
      console.error(error);
    });
  }

}
