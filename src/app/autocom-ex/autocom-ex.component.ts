import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Queue } from './queue';

@Component({
  selector: 'app-autocom-ex',
  templateUrl: './autocom-ex.component.html',
  styleUrls: ['./autocom-ex.component.css']
})
export class AutocomExComponent implements OnInit {

  exForm: FormGroup;
  previousOptions: Observable<string[]>;
  searchKeywords: string[] = [];
  testQueue: Queue<string>;

  constructor(public fb: FormBuilder) {
    // considered queue size as 8, it represents the max search history to be shown in auto complete 
    this.testQueue = new Queue<string>(7);
  }

  ngOnInit(): void {
    // Initializing new form
    this.exForm = this.fb.group({
      myControl: ['']
    });
    // getting search history on page load
    this.getSearchHistory();
    //filter for autocomplete textbox
    this.previousOptions = this.exForm.controls['myControl'].valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  onSubmit() {
    let val: string = this.exForm.get('myControl')?.value;
    this.testQueue.enqueue(val);
    // set search history
    this.setSearchHistory();
    // get updated search history after setting
    this.getSearchHistory();
    //Clearing the value to default value
    this.exForm.get('myControl')?.setValue('');
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.searchKeywords.filter(option => option.toLowerCase().includes(filterValue));
  }

  private getSearchHistory() {
    this.searchKeywords = [];
    // get search history from local storage
    let searchHistory: any = localStorage.getItem('searchHistory');
    if (searchHistory) {
      this.searchKeywords = JSON.parse(searchHistory) as string[];
    }
    this.searchKeywords.forEach(x=> this.testQueue.enqueue(x));
  }

  private setSearchHistory() {
    this.searchKeywords = [];
    // dequeuing queue before updating the local storage and generating string array out of it
    while(this.testQueue.size() != 0) {
      const deq: string | undefined = this.testQueue.dequeue();
      if(deq) {
        this.searchKeywords.push(deq);
      }
    }
    console.log(this.searchKeywords);
    // set search history to local storage
    if(this.searchKeywords.length > 0) {
      localStorage.setItem('searchHistory', JSON.stringify(this.searchKeywords));
    }
  }
}
