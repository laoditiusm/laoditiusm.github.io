import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  ngOnInit(): void {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger?.addEventListener('click', mobileMenu);

    function mobileMenu() {
      hamburger?.classList.toggle('active');
      navMenu?.classList.toggle('active');
    }

    window.addEventListener('scroll', function () {
      var header = document.querySelector('.navbar');
      header?.classList.toggle('sticky', window.scrollY > 0);
    });
  }
}
function forEach(arg0: any) {}
