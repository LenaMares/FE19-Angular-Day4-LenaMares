import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute, Params} from '@angular/router'; 
import { Iblogs} from '../Iblogs'; 
import { entries } from '../entries'; 

@Component({
  selector: 'app-entry-details',
  templateUrl: './entry-details.component.html',
  styleUrls: ['./entry-details.component.css']
})
export class EntryDetailsComponent {
  entry: Iblogs = {} as Iblogs
  index: number = 0

  constructor (private route: ActivatedRoute) { 

  } 
  
  ngOnInit(): void { 
  
  this.route.params.subscribe((params: Params) => { 
  
  this.index = +params['indexFromRouting']; 
  
  this.entry = entries[this.index]; 
  
  }); 
  
  } 

}
