<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
  use HasFactory;

  protected $guarded = [];

  // each product belongs to many categories
  public function categories()
  {
    return $this->belongsToMany(Category::class);
  }

  // each product belongs to many orders
  public function orders()
  {
    return $this->belongsToMany(Order::class);
  }
}
