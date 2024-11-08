import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder  } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import {RestaurentData} from './restaurent.model';
import { Router,ActivatedRoute ,ParamMap} from '@angular/router';

@Component({
  selector: 'app-restaurent-dash',
  templateUrl: './restaurent-dash.component.html',
  styleUrls: ['./restaurent-dash.component.css']
})

export class RestaurentDashComponent implements OnInit {

  formValue!:FormGroup
  formValue2!:FormGroup
  restaurentModelObj : RestaurentData = new RestaurentData;
  allRestaurentData: any;
  showAdd!:boolean;
  showBtn!:boolean;
  public selectedName: string = "";
  public SearchName : string = "";

  constructor(private formbuilder : FormBuilder, private api: ApiService, private _router: Router,
              private _route: ActivatedRoute ) { }

  ngOnInit() {

    this.formValue = this.formbuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
      services: [''],
    })
    
    this.getAllData();

    this._route.paramMap.subscribe((params: ParamMap) => {
      let name = (params.get('name')!);
      this.selectedName = name;
    });
   
  }


  clickAddResto()
  {
    this.formValue.reset();
    this.showAdd = true;
    this.showBtn = false;
  }
  
  clickShowMenu(showmenu : any)
  {
    console.log("IN clickShowMenu ");
    this._router.navigate(['/showmenu',showmenu.name], { relativeTo: this._route });
  }



  addRestaurent()
  {
    this.restaurentModelObj.id = this.formValue.value.id;
    this.restaurentModelObj.name = this.formValue.value.name;
    this.restaurentModelObj.email = this.formValue.value.email;
    this.restaurentModelObj.mobile = this.formValue.value.mobile;
    this.restaurentModelObj.address = this.formValue.value.address;
    this.restaurentModelObj.services = this.formValue.value.services;

    this.api.addRestaurent(this.restaurentModelObj).subscribe(res => {
      console.log(res);
      alert("Restaurent Added Successfully");
      this.formValue.reset();

      let ref= document.getElementById('close');
      ref?.click();

      this.getAllData();

    }, 
    err=>
    {
      console.log(err);
      alert("Restaurent Added Failed!");
    })


    
  }

  getAllData()
  {
    this.api.getRestaurent().subscribe(res => {
      this.allRestaurentData= res;
    }, err=>{
      console.log(err);
    })
  }

  deleteResto(data: any)
  {
    this.api.deleteRestaurant(data).subscribe((res: any) => {
      console.log(res);
      alert("Restaurent Deleted Successfully");
      this.getAllData();
    })
  }

  onEditResto(data: any)
  {
    this.showAdd = false;
    this.showBtn = true;  
    
    this.restaurentModelObj.id = data.id;
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['mobile'].setValue(data.mobile);
    this.formValue.controls['address'].setValue(data.address);
    this.formValue.controls['services'].setValue(data.services);

 
  }
  updateResto()
  {
    this.restaurentModelObj.name = this.formValue.value.name;
    this.restaurentModelObj.email = this.formValue.value.email;
    this.restaurentModelObj.mobile = this.formValue.value.mobile;
    this.restaurentModelObj.address = this.formValue.value.address;
    this.restaurentModelObj.services = this.formValue.value.services;

    this.api.updateRestaurant(this.restaurentModelObj.id,this.restaurentModelObj).subscribe((res: any) => {
      alert("Restaurent Updated Successfully");
      this.formValue.reset();

      let ref= document.getElementById('close');
      ref?.click();

      this.getAllData();



    })
    
  }

  getSpecificHotelName(data : any)
  {
    // console.log("In  service");
    this.api.SpecificRestaurant(data).subscribe(res => {
      console.log("SpecificRestaurant data function");
      console.log(res);
      this.allRestaurentData = res;
      
    }, err=>{
      console.log(err);
    })
  }

  
}
