import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductListServiceService {
  productList: Product[] = [
    {
      id: 1,
      name: "Name of Product",
      category: "Category Description and tags",
      sellingPrice: 34.55,
      MRPPrice: 60,
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      imageAlt: "Photo of a Shiba Inu",
    },
    {
      id: 2,
      name: "Name of Product",
      category: "Category Description and tags",
      sellingPrice: 34.55,
      MRPPrice: 60,
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      imageAlt: "Photo of a Shiba Inu",
    },
    {
      id: 3,
      name: "Name of Product",
      category: "Category Description and tags",
      sellingPrice: 34.55,
      MRPPrice: 60,
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      imageAlt: "Photo of a Shiba Inu",
    },
    {
      id: 4,
      name: "Name of Product",
      category: "Category Description and tags",
      sellingPrice: 34.55,
      MRPPrice: 60,
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      imageAlt: "Photo of a Shiba Inu",
    },
    {
      id: 5,
      name: "Name of Product",
      category: "Category Description and tags",
      sellingPrice: 34.55,
      MRPPrice: 60,
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      imageAlt: "Photo of a Shiba Inu",
    },
    {
      id: 6,
      name: "Name of Product",
      category: "Category Description and tags",
      sellingPrice: 34.55,
      MRPPrice: 60,
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      imageAlt: "Photo of a Shiba Inu",
    },
    {
      id: 7,
      name: "Name of Product",
      category: "Category Description and tags",
      sellingPrice: 34.55,
      MRPPrice: 60,
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      imageAlt: "Photo of a Shiba Inu",
    },
    {
      id: 8,
      name: "Name of Product",
      category: "Category Description and tags",
      sellingPrice: 34.55,
      MRPPrice: 60,
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      imageAlt: "Photo of a Shiba Inu",
    },
    {
      id: 1,
      name: "Name of Product",
      category: "Category Description and tags",
      sellingPrice: 34.55,
      MRPPrice: 60,
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      imageAlt: "Photo of a Shiba Inu",
    },
    {
      id: 2,
      name: "Name of Product",
      category: "Category Description and tags",
      sellingPrice: 34.55,
      MRPPrice: 60,
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      imageAlt: "Photo of a Shiba Inu",
    },
    {
      id: 3,
      name: "Name of Product",
      category: "Category Description and tags",
      sellingPrice: 34.55,
      MRPPrice: 60,
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      imageAlt: "Photo of a Shiba Inu",
    },
    {
      id: 4,
      name: "Name of Product",
      category: "Category Description and tags",
      sellingPrice: 34.55,
      MRPPrice: 60,
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      imageAlt: "Photo of a Shiba Inu",
    },
    {
      id: 5,
      name: "Name of Product",
      category: "Category Description and tags",
      sellingPrice: 34.55,
      MRPPrice: 60,
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      imageAlt: "Photo of a Shiba Inu",
    },
    {
      id: 6,
      name: "Name of Product",
      category: "Category Description and tags",
      sellingPrice: 34.55,
      MRPPrice: 60,
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      imageAlt: "Photo of a Shiba Inu",
    },
    {
      id: 7,
      name: "Name of Product",
      category: "Category Description and tags",
      sellingPrice: 34.55,
      MRPPrice: 60,
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      imageAlt: "Photo of a Shiba Inu",
    },
    {
      id: 8,
      name: "Name of Product",
      category: "Category Description and tags",
      sellingPrice: 34.55,
      MRPPrice: 60,
      image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      imageAlt: "Photo of a Shiba Inu",
    },
  ];

  getAllProducts() {
    return this.productList;
  }

  constructor() {}
}