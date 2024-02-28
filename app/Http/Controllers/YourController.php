<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\YourModel;

class YourController extends Controller
{
    public function storeStaticValue()
    {
        $staticValue = 'Ayush'; // Replace this with your actual static value

        // Save the static value to the database
        YourModel::create([
            'column_name' => $staticValue, // Replace 'column_name' with the actual column name in your database
            // Add more columns as needed
        ]);

        return response()->json(['message' => 'Static value stored successfully']);
    }
}
