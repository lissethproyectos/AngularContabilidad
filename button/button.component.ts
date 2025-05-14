// button.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button 
      [class]="'btn-' + type"
      [class.btn-sm]="size === 'sm'"
      [class.w-100]="fullWidth"
      [type]="htmlType"
    >
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
    .btn-primary { background-color: #0d6efd; color: white; }
    .btn-secondary { background-color: #6c757d; color: white; }
    .btn-success { background-color: #198754; color: white; }
    .btn-danger-outline { border: 1px solid #dc3545; color: #dc3545; background: transparent; }
    .btn-primary-outline { border: 1px solid #0d6efd; color: #0d6efd; background: transparent; }
  `]
})
export class ButtonComponent {
  @Input() type: 'primary' | 'secondary' | 'success' | 'danger-outline' | 'primary-outline' = 'primary';
  @Input() size: 'sm' | 'md' = 'md';
  @Input() fullWidth = false;
  @Input() htmlType: 'button' | 'submit' = 'button';
}