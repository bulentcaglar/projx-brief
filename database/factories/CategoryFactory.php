<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class CategoryFactory extends Factory
{
  /**
   * The name of the factory's corresponding model.
   *
   * @var string
   */
  protected $model = Category::class;

  /**
   * Define the model's default state.
   *
   * @return array
   */
  public function definition()
  {
    $ProductSuffixes = [
      'Yemek Takımları', 'Pasta Takımları', 'Çay & Kahve', 'El Dekoru', 'Çeyiz Paketleri', 'Bayram Sofraları', 'Gastro Studio',
      'Yıldızlı Ürünler'
    ];

    $name = $this->faker->unique()->numberBetween(10, 90) . ' ' . Arr::random($ProductSuffixes);

    return [
      'name' => $name,
      'slug' => Str::slug($name)
    ];
  }
}
