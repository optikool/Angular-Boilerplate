import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[descriptionAnimationDirective]'
})
export class DescriptionAnimationDirective {
  modalDesc: ElementRef;

  @HostListener('mouseover') public onMouseOver() {
    console.log('Entered content area');
    this.showDescription(true);
  }

  @HostListener('mouseout') public onMouseOut() {
    console.log('Left content area');
    this.showDescription(false);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.modalDesc = this.el.nativeElement.getElementById('modal-description');
  }

  private showDescription(shouldShow: boolean) {
    if (shouldShow) {
      this.renderer.addClass(this.modalDesc, 'show');
    } else {
      this.renderer.removeClass(this.modalDesc, 'show');
    }
  }
}