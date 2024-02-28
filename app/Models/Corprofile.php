<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Corprofile extends Model 
{
    // app/Models/Corprofile.php

    
    use HasFactory;
    protected $fillable = ['name', 'email', 'tagline','profession','location','image'];
}
