import { Component, OnInit } from '@angular/core';
declare var M: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'portfolio';
  active: string = "accueil";

  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', () => {
      var elems = document.querySelectorAll('.scrollspy');
      var instances = M.ScrollSpy.init(elems, {
        activeClass: "active",
        getActiveElement: (id: any) => {
          console.log('this is the element: a[href="#' + id + '"]');
          this.active = id;
          console.log(this.active);
        }
      });
    });
  }
}