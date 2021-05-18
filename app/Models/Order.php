<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
  use HasFactory;

  protected $guarded = [];

  // each order belongs to user
  public function user()
  {
    return $this->belongsTo(User::class);
  }

  // each order belongs to many products
  // withPivot:
  // this means that when the product's relationship is called from order model
  // that extra column that we added in the order_product pivot table will be attached
  // and included in the return.
  public function products()
  {
    return $this->belongsToMany(Product::class)
      ->withPivot('quantity');
  }
}
