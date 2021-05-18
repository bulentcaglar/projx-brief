<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
  /**
   * The name of the factory's corresponding model.
   *
   * @var string
   */
  protected $model = Product::class;

  /**
   * Define the model's default state.
   *
   * @return array
   */
  public function definition()
  {
    $ProductSuffixes = [
      'GÜRAL 85 PARÇA', 'GÜRAL AMETİS', 'GÜRAL CAROLİNE', 'GÜRAL BİLBAO', 'GÜRAL EL DEKORU', 'TATLI TELAŞ', 'İLK GÖRÜŞTE AŞK',
      'GÜRAL ARNİM'
    ];

    $name = $this->faker->unique()->numberBetween(10, 90) . ' ' . Arr::random($ProductSuffixes);

    return [
      'name' => $name,
      'slug' => Str::slug($name),
      'description' => $this->faker->realText(320),
      'star_rating'  => $this->faker->randomFloat($nbMaxDecimals = 2, $min = 2, $max = 5),
      'price' => $this->faker->numberBetween(10000, 100000)
    ];
  }
}
