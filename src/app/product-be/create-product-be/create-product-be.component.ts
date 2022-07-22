import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ProductBeService} from "../../service/product-be.service";
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/Category";
import {finalize} from "rxjs";
// @ts-ignore
import {AngularFireStorage} from "@angular/fire/compat/storage";
@Component({
  selector: 'app-create-product-be',
  templateUrl: './create-product-be.component.html',
  styleUrls: ['./create-product-be.component.css']
})
export class CreateProductBeComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(''),
    price : new FormControl(''),
    category: new FormControl(''),
    image: new FormControl('')
  })
  obj: any;
  listCategory : Category[]=[];


  constructor(private httpCline: HttpClient, private router: Router,
              private productBeService: ProductBeService,
              private categoryService: CategoryService,
              private storage: AngularFireStorage) { }

  ngOnInit(): void {
    this.categoryService.findAll().subscribe((data) => {
      this.listCategory = data;
    });
  }

  add(){
    this.obj ={
      name : this.form.value.name,
      price : this.form.value.price,
      image: this.fb,
      category:{
        id:this.form.value.category
      },
    }
    this.productBeService.save(this.obj).subscribe((data)=>{
      console.log(this.obj)
      alert('Thành công')
      this.obj = data;

      this.router.navigate(['product-be'])
      // @ts-ignore
        $('#exampleModal').model('hide');
    }, error => {
      alert('Lỗi')
    })
  }


  ////uploadfise
  title = "cloudsSorage";
  selectedFile: any;
  fb:any
  downloadURL: any;
  onFileSelected(event: any) {
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe((url: any) => {
            if (url) {
              this.fb = url;
            }
            console.log(this.fb);
          });
        })
      )
      .subscribe((url:any) => {
        if (url) {
          console.log(url);
        }
      });
  }

}
