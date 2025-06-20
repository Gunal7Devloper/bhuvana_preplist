import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devopsdocs',
  standalone: false,
  templateUrl: './devopsdocs.component.html',
  styleUrl: './devopsdocs.component.scss'
})
export class DevopsdocsComponent implements OnInit {
 

  public selectedTab:any = 'D';

   ngOnInit(): void {
    this.selectedTab = 'D';
  }
  opencontent(page:any) {
    this.selectedTab = page;
  }
}
