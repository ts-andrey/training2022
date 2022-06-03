import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  public links = ['All', 'Camping', 'Relax', 'Food', 'Travel', 'Heal'];
 
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.links, event.previousIndex, event.currentIndex);
  }
}