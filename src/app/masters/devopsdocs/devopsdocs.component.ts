import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-devopsdocs',
  standalone: true,
  templateUrl: './devopsdocs.component.html',
  styleUrls: ['./devopsdocs.component.scss'],
  imports: [
      CommonModule,
      FormsModule
    ]
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
