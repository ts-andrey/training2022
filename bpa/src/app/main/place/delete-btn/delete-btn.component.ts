import { DataService } from './../../../services/data.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-btn',
  templateUrl: './delete-btn.component.html',
  styleUrls: ['./delete-btn.component.scss'],
})
export class DeleteBtnComponent implements OnInit {
  @Input() id!: string;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  deletePlace() {
    this.dataService.deletePlace(this.id);
  }
}
