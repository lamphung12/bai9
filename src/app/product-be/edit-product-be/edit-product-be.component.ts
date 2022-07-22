import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductBeService} from "../../service/product-be.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/Category";
import {finalize} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Component({
  selector: 'app-edit-product-be',
  templateUrl: './edit-product-be.component.html',
  styleUrls: ['./edit-product-be.component.css']
})
export class EditProductBeComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    price : new FormControl(''),
    categoryId: new FormControl(''),
    image: new FormControl('')
  })

  obj: any;
  listCategory: Category[] = [];
   id: any ;

  constructor(private productBeService: ProductBeService,
              private activatedRoute: ActivatedRoute,
              // ActivatedRoute lấy dữ liệu trên đường dẫn) { }
              private categoryService: CategoryService,
              private router: Router,private storage: AngularFireStorage){
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    });
  }
  ngOnInit(): void {
    this.categoryService.findAll().subscribe((data) => {
      this.listCategory = data;
    });

  }

  private getProduct(id: number) {
    return this.productBeService.getById(id).subscribe(data => {
      this.form = new FormGroup({
        name: new FormControl(data.name),
        price: new FormControl(data.price),
        categoryId: new FormControl(data.category.id),
        image: new FormControl(data.image)
      })
      this.fb = data.image
    });

  }
  edit(id:number){
    this.obj={
      name: this.form.value.name,
      price: this.form.value.price,
      category: {
        id:this.form.value.categoryId
      },
      image: this.fb
    };
    console.log(this.obj)
    this.productBeService.edit(id, this.obj).subscribe(() => {
      this.router.navigate(['/product-be']);
    }, error => {
      console.log(error);
    });
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
