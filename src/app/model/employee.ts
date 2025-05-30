export class employeeModel{
  empId: number;
  name: string;
  city: string;
  state: string;
  email: string;
  contactNO: number;
  address: string;

  constructor() {
    this.empId = 0;
    this.name = '';
    this.city = '';
    this.state = '';
    this.email = '';
    this.contactNO = 0;
    this.address = '';
  } 
}