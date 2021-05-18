<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
  /**
   * Seed the application's database.
   *
   * @return void
   */
  public function run()
  {
    Product::factory(20)->create();
    Category::factory(5)->create();
    $categories = Category::all();
    Product::all()->each(function ($product) use ($categories) {
      $product->categories()->attach(
        $categories->random(1)->pluck('id')->toArray()
      );
    });
  }
}
