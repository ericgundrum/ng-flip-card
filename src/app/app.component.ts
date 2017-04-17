import { Component } from '@angular/core'
import { AfterViewInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'flip card'
  flipped = false
  width: number
  @ViewChild('front') front: ElementRef

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.width = this.front.nativeElement.offsetWidth
    this.cdr.detectChanges()
  }

  flip(): void {
    this.flipped = !this.flipped
  }
}
