import { Component } from '@angular/core';

@Component({
  selector: 'app-devopsdocs',
  standalone: false,
  templateUrl: './devopsdocs.component.html',
  styleUrl: './devopsdocs.component.scss'
})
export class DevopsdocsComponent {

  public selectedTab:any = 'D';

  opencontent(page:any) {
    alert(page)
    this.selectedTab = page;
  }
}
