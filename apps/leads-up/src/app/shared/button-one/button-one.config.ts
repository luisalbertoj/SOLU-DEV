import { Directive, EventEmitter, Input, Output } from '@angular/core';

@Directive()
export class ButtonOneConfig {
  /**
   * Name of button
   */
  @Input() key?: string;

  /**
   * Color of button
   * success
   *
   */
  @Input() color?: 'success' | 'primary';

  /**
   * Text of button
   *
   */
  @Input() textContent!: string;

  /**
   * Type of button
   *
   */
  @Input() type?: 'submit' | 'reset' | 'button' = 'button';

  /**
   * Button is disabled
   *
   */
  @Input() disabled?: boolean;

  /**
   * Button is load
   *
   */
  @Input() loading?: boolean;

  /**
   * Event output of button
   */
  @Output() clickButton = new EventEmitter<unknown>();

  /**
   * Event click of button
   */
  @Input() handleClick = ($event: unknown) => {
    this.clickButton.emit({ button: this.key, color: this.color, $event });
    console.log(`Button ${this.key} is clicked`);
  };
}
