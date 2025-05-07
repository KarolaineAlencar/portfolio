import { Component, signal } from '@angular/core';

// Importando o arquivo de interface IKnowledge
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true, // se o componente for standalone
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss'] // note o nome correto: styleUrls (com "s")
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/java.svg',
      alt: 'ícone de conhecimento de java',
    },
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'ícone de conhecimento de html5',
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'ícone de conhecimento de css3',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'ícone de conhecimento de javascript',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'ícone de conhecimento de angular',
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'ícone de conhecimento de nodejs',
    },
  ]);
}
