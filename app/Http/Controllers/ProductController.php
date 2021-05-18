<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProductController extends Controller
{
  public function index()
  {
    return Product::with('categories:id,name')
      ->get();
  }

  public function show(Product $product)
  {
    $product->load('categories:id,name');

    return $product;
  }
}
