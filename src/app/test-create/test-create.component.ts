import { Component, OnInit } from '@angular/core';
declare var $ : any;
@Component({
  selector: 'app-test-create',
  templateUrl: './test-create.component.html',
  styleUrls: ['./test-create.component.css']
})
export class TestCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  deleteTest = function() {
    $("#deleteConfirm").modal();
  }
}
