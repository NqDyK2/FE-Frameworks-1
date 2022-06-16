import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-mannager',
  templateUrl: './product-mannager.component.html',
  styleUrls: ['./product-mannager.component.scss']
})
export class ProductMannagerComponent implements OnInit {

  dropDownList: any;

  products!: IProduct[]
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // chạy
    this.getProductList();
  }

  // khai báo
  getProductList() {
    this.productService.getProductList().subscribe(data => {
      this.products = data;
    })
  }
  onHanldeRemove( id:number){
    this.productService.removeProduct(id).subscribe(() => {
      this.products = this.products.filter(item => item.id !== id)
    })
  }
}
