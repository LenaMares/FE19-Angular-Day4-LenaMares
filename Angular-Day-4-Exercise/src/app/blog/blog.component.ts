import { Component } from '@angular/core';
import { Iblogs} from '../Iblogs'; 
import { entries } from '../entries'; 

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  entries: Iblogs[] = entries

}
