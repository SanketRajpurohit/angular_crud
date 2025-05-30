import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { employeeModel } from './model/employee';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  employeeForm: FormGroup = new FormGroup({});
  employeeObj: employeeModel = new employeeModel();
  employeeList: employeeModel[]=[];

  constructor() {
    this.createForm()
    debugger;
    const od = localStorage.getItem("employeeData");
    if(od != null){
      const parseData= JSON.parse(od);
      this.employeeList=parseData;
    }
  }
  
  createForm(){
    this.employeeForm = new FormGroup({
    empid: new FormControl(this.employeeObj.empId),
    name: new FormControl(this.employeeObj.name),
    city: new FormControl(this.employeeObj.city),
    state: new FormControl(this.employeeObj.state),
    email: new FormControl(this.employeeObj.email),
    contact: new FormControl(this.employeeObj.contactNO),
    address: new FormControl(this.employeeObj.address),
    
    })
  }

  onSave() {
    debugger;
    const od = localStorage.getItem("employeeData");
    if(od != null){
      const parseData= JSON.parse(od);
      this.employeeForm.controls['empId'].setValue(parseData.length +1);
      this.employeeList.unshift(this.employeeForm.value);
    }else{
      this.employeeList.unshift(this.employeeForm.value);
    }
    }
}