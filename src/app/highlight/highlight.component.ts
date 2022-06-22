import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit
} from "@angular/core";

@Directive({
  selector: "[highlight]"
  // method  1
  // host: {
  //   "(mouseover)": "onhover()",
  //   "(mouseout)" : "removeHover()"
  // }
})
export class Highlight implements OnInit {
  @Input() highlight;

  elementRef: ElementRef;

  constructor(elementRef: ElementRef) {
    this.elementRef = elementRef;
    console.log(this.highlight);
  }

  //  adds the initial highlight color
  ngOnInit() {
    this.changeHighlight(this.highlight);
  }

  // method 2
  @HostListener("mouseout")
  removeHover() {
    this.changeHighlight("black");
  }

  @HostListener("mouseover")
  onhover() {
    this.changeHighlight("red");
    console.log("mouse hovered");
  }

  private changeHighlight(color) {
    this.elementRef.nativeElement.style.color = color;
  }
}
