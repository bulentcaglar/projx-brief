<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Category extends Model
{
  use HasFactory;

  protected $guarded = [];

  // each category belongs to many products
  public function products()
  {
    return $this->belongsToMany(Product::class);
  }
}
