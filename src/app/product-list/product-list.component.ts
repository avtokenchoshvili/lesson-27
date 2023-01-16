import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Product {
  id: string | number;
  title: string;
  descr: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [
    { id: 1, descr: `descr 1`, title: `title 1` },
    { id: 2, descr: `descr 2`, title: `title 2` },
    { id: 3, descr: `descr 3`, title: `title 3` },
  ]

  constructor(
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.queryParamMap);
    this.route.queryParamMap.subscribe(
      params => {
        console.log(params);
      }
    );
  }

}
