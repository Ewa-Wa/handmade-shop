import { ComponentFactoryResolver, Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit{
    @Input() defaultColor: string = 'transparent';
    @Input() highlightColor: string = '#d5c7bc';
    @HostBinding('style.backgroundColor') backgroundColor: string;

    constructor(private elementRef: ElementRef, private renderer: Renderer2){}

    ngOnInit(){
        this.backgroundColor = this.defaultColor;
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'pink')
    }

    @HostListener('mouseenter') mouseenter(eventData:Event){
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#d5c7bc');
        this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave') mouseleave(eventData:Event){
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
        this.backgroundColor = this.defaultColor;
    }









    // ------------basic way to create directive------------
    // constructor(private elementRef: ElementRef){
        
    // }
    // ngOnInit(){
    //     this.elementRef.nativeElement.style.backgroundColor = 'blue';
    // }
    
}