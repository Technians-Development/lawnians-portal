<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Corprofile;

class CorprofileController extends Controller
{
    public function showForm()
    {
        return view('corporate-profile-form');
    }

    public function index(Request $request)
    {
        $perPage = $request->input('perPage', 10);
        $corprofiles = Corprofile::paginate($perPage);

        return response()->json($corprofiles);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'tagline' => 'required|string',
            'profession' => 'required|string',
            'location' => 'required|string',
            'image' => 'image|mimes:jpeg,png,jpg,gif|max:2048', 
        ]);

        $data = $request->except('image');

        // Handle image upload
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('public/images');
            $data['image'] = str_replace('public/', '', $imagePath);
        }

        Corprofile::create($data);

        return redirect()->route('dashboard')->with('success', 'Corporate profile created successfully.');
    }
}
