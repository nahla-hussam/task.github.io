import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropDownsModule, AutoCompleteModule } from '@progress/kendo-angular-dropdowns';
import { PopupModule } from '@progress/kendo-angular-popup';
import { Http } from '@angular/http';
import { DataService } from './data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService]
})
export class AppComponent {
  listItems: any;
  listBrowsers: any;
  listStatus: any;

  
  constructor(private dataservice: DataService ){
    
    this.dataservice.getCountries()
                    .subscribe(
                      data =>{
                        this.listItems = data;
                      }
                    );

    this.dataservice.getBrowsers()
                    .subscribe(
                      data =>{
                        this.listBrowsers = data;
                      }
                    )

    this.dataservice.getStatus()
                    .subscribe(
                      data => {
                        this.listStatus = data;
                      }
                    )
  }
  

  isCollapsed = true;
  isCollapsed1 = true;
  isCollapsed2 = true;

  }
