import { Component, NgModule, OnInit } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  imports:[
    MatPaginatorModule
  ]
})

export class NewItem {
  icon:string;
  header: string;
  title: string;
  person: string;
  created: string;
  text: string;
  showFullText?: boolean = true;
  text1?: string;
  text1img?: string;

}

@Component({
  selector: 'fcp-release-notes',
  templateUrl: './release-notes.component.html',
  styleUrls: ['./release-notes.component.scss']
})
export class ReleaseNotesComponent implements OnInit {
  constructor() { }

  newItemList: NewItem[] = [
    {
      icon:'https://d1icd6shlvmxi6.cloudfront.net/gsc/UAWRVF/43/d5/cd/43d5cd73a1354f1e8155824bdce9ecfa/images/what_s_new_/u42.svg?pageId=a168d095-7682-482e-9451-8c8d0945eb63',
      header: 'Container',
      title: 'Container1',
      person: 'Adam Smith',
      created: '1 day ago',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tincidunt vitae semper quis lectus nulla. Vel pretium lectus quam id leo in vitae. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Gravida dictum fusce ut placerat.',
    },
    {
      icon: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/UAWRVF/43/d5/cd/43d5cd73a1354f1e8155824bdce9ecfa/images/what_s_new_/u35.svg?pageId=a168d095-7682-482e-9451-8c8d0945eb63',
      header: 'Container',
      title: 'Container1',
      person: 'Jane Doe',
      created: '1 week ago',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tincidunt vitae semper quis lectus nulla. Vel pretium lectus quam id leo in vitae. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Gravida dictum fusce ut placerat.'
    },
    {
      icon: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/UAWRVF/43/d5/cd/43d5cd73a1354f1e8155824bdce9ecfa/images/what_s_new_/u42.svg?pageId=a168d095-7682-482e-9451-8c8d0945eb63',
      header: 'Container',
      title: 'Container1',
      person: 'Adam Smith',
      created: '1 month ago',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      showFullText: true
    },
    {
      icon: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/UAWRVF/43/d5/cd/43d5cd73a1354f1e8155824bdce9ecfa/images/what_s_new_/u42.svg?pageId=a168d095-7682-482e-9451-8c8d0945eb63',
      header: 'Container',
      title: 'Container1',
      person: 'Jane Doe',
      created: '2 months ago',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      showFullText: true
    },
  ]

  ngOnInit(): void {

  }

  readMore(newItem: NewItem) {
    newItem.showFullText = !newItem.showFullText;
  }
}
