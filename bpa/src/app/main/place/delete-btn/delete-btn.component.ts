import { DataService } from './../../../services/data.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-delete-btn',
  templateUrl: './delete-btn.component.html',
  styleUrls: ['./delete-btn.component.scss'],
})
export class DeleteBtnComponent {
  @Input() id!: string;
  constructor(private dataService: DataService) {}

  deletePlace() {
    this.dataService.deletePlace(this.id);
  }
}
