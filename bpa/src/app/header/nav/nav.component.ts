import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  public links = ['all', 'camping', 'relax', 'food', 'travel', 'heal'];

  private ACTIVE_LINK_CLASS = 'header__nav-item_active';
  private currentLink?: HTMLElement;

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.links, event.previousIndex, event.currentIndex);
  }

  setActiveLink(event: Event) {
    const targetLink = <HTMLElement>event.target;
    if (targetLink.tagName === 'A') {
      if (this.currentLink) {
        this.currentLink.classList.remove(this.ACTIVE_LINK_CLASS);
      }
      targetLink.classList.add(this.ACTIVE_LINK_CLASS);
      this.currentLink = targetLink;
    }
  }
}
