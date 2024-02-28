import { Component } from '@angular/core';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})
export class CompetenceComponent {

  competences = [
    { title: 'Html', icon: '../assets/html.svg', catergorie: 'code', note: 5 },
    { title: 'CSS', icon: '../assets/css.svg', catergorie: 'code', note: 4 },
    { title: 'TypeScript', icon: '../assets/ts.svg', catergorie: 'code', note: 4.5 },
    { title: 'Java', icon: '../assets/java.svg', catergorie: 'code', note: 3 },
    { title: 'Php', icon: '../assets/php.svg', catergorie: 'code', note: 3 },
    { title: 'Python', icon: '../assets/python.svg', catergorie: 'code', note: 2 },
    { title: 'Angular', icon: '../assets/angular.svg', catergorie: 'framework', note: 5 },
    { title: 'Ionic', icon: '../assets/ionic.svg', catergorie: 'framework', note: 5 },
    { title: 'Wordpress', icon: '../assets/wordpress.svg', catergorie: 'framework', note: 5 },
    { title: 'Woocommerce', icon: '../assets/woocommerce.svg', catergorie: 'framework', note: 5 },
    { title: 'Firebase', icon: '../assets/firebase.svg', catergorie: 'bdd', note: 5 },
    { title: 'Mysql', icon: '../assets/mysql.svg', catergorie: 'bdd', note: 4 }
    // Ajoutez autant de compétences que nécessaire
  ];

}
