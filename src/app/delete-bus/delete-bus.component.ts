import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { DeleteBus } from '../models/deleteBus';
import { UpdateBus } from '../models/UpdateBus';

@Component({
  selector: 'app-delete-bus',
  templateUrl: './delete-bus.component.html',
  styleUrls: ['./delete-bus.component.css']
})
export class DeleteBusComponent implements OnInit {

  delBus : DeleteBus = new DeleteBus();
  constructor(private adminService : AdminServiceService) { }

  ngOnInit() {
  }

  deleteBus(){
    alert(JSON.stringify(this.delBus));
    this.adminService.deleteBus(this.delBus).subscribe(response =>{
      alert(JSON.stringify(response));
    })
  }

}
