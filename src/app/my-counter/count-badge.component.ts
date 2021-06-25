import { Component, Input } from '@angular/core';

@Component({
  selector: 'counter-badge',
  templateUrl: './count-badge.component.html',
  styleUrls: ['./count-badge.component.scss']
})
export class CountBadgeComponent {
  @Input() count: number;
}
