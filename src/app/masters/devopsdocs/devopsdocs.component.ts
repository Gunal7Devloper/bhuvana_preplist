import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DockerComponent } from '../docker/docker.component';

@Component({
  selector: 'app-devopsdocs',
  standalone: true,
  templateUrl: './devopsdocs.component.html',
  styleUrls: ['./devopsdocs.component.scss'],
  imports: [
      CommonModule,
      FormsModule,
      DockerComponent
    ],
    encapsulation: ViewEncapsulation.None
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
