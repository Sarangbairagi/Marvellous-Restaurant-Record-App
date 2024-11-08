import { Component } from '@angular/core';
import { Router ,ActivatedRoute, ParamMap} from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';
import { OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Menulist } from './Menulist.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit
{

  formValue2!:FormGroup;
  public RestaurentName : string = "";
  public AllMenuList :any ;
  AddMenuList : Menulist = new Menulist;
  Menu_showAdd!:boolean;
  Menu_showBtn!:boolean;

  constructor( private _route : ActivatedRoute, private _formbuilder: FormBuilder,
              private _api: ApiService) { }
  
  ngOnInit() 
  {
    // Add Menu Form
    this.formValue2 = this._formbuilder.group({
      dishname:[''],
      price:[''],
    });

    this._route.paramMap.subscribe((params: ParamMap) => {
      let name = (params.get('name')!);
      this.RestaurentName = name;
    });
    
    

    this.AllMenuData(this.RestaurentName);

    console.log(this.AllMenuList);

  }
 
  AllMenuData(HotelName : string)
  {
    // console.log("In AllMenuData service");
    this._api.getMenuData(HotelName).subscribe(res => {
      console.log("AllMenu data function");
      console.log(res);
      this.AllMenuList = res;
      
    }, err=>{
      console.log(err);
    })
  }

  Menu_Edit(data: any)
  {
    this.Menu_showAdd = false;
    this.Menu_showBtn = true;

    console.log("in Menu_Edit")
    console.log(data);
    
    this.AddMenuList.id = data.id;
    this.AddMenuList.name = data.name;
    this.formValue2.controls['dishname'].setValue(data.dishname);
    this.formValue2.controls['price'].setValue(data.price);
  }

  Update_Menu()
  {
    this.Menu_showAdd = true;
    this.Menu_showBtn = true;
 

    // console.log("in Update_Menu")
    // console.log(this.formValue2.value)

    this.AddMenuList.dishname = this.formValue2.value.dishname;  
    this.AddMenuList.price = this.formValue2.value.price;  

    
    // console.log("in Update_Menu")
    // console.log(this.AddMenuList)

    this._api.updatemenu(this.AddMenuList.id,this.AddMenuList).subscribe((res: any) => {
      alert("Restaurent Updated Successfully");
      this.formValue2.reset();

      let ref= document.getElementById('close');
      ref?.click();

      this.AllMenuData(this.RestaurentName);
    })
  }

  Delete_Menu(data: any)
  {
    this._api.deletemenu(data).subscribe((res: any) => {
      console.log(res);
      alert("Restaurent Deleted Successfully");
      this.AllMenuData(this.RestaurentName);
    })
  }

  
  clickAddDish()
  {
    this.formValue2.reset();
    this.Menu_showAdd = true;
    this.Menu_showBtn = false;
  }

  AddMenu()
  {
    this.AddMenuList.id = this.formValue2.value.id;
    this.AddMenuList.name = this.RestaurentName;
    this.AddMenuList.dishname = this.formValue2.value.dishname;
    this.AddMenuList.price = this.formValue2.value.price;

    this._api.add_dishmenu(this.AddMenuList).subscribe(res => 
    {
      console.log(res);
      alert("Restaurent Dish Menu Added Successfully");
      this.formValue2.reset();

      let ref= document.getElementById('close');
      ref?.click();
      
      
      this.AllMenuData(this.RestaurentName);
    }
  )}

}
