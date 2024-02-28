<?php

use App\Http\Controllers\GoogleAuthController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\CorprofileController;


use App\Http\Controllers\CorporateProfileController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home', [
        
        
    ]);
});
Route::get('/about', function () {
    return Inertia::render('About', [
        
        
    ]);
});
Route::get('/single', function () {
    return Inertia::render('Single', [
        
        
    ]);
});
Route::get('/contact', function () {
    return Inertia::render('Contact', [
        
        
    ]);
});



Route::get('/form', function () {
    // retun view ('Contact'); --- >   this is for to show laravel contact.blade.php file
    return Inertia::render('Form');  // -- ->  this is for to show react contact.jsx file
})->middleware(['auth', 'verified'])->name('form');






Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::get('auth/google', [GoogleAuthController::class,'redirect'])->name('google-auth');
Route::get('/auth/google/call-back', [GoogleAuthController::class,'callbackGoogle']);

Route::middleware(['auth'])->group(function () {
    Route::get('/corporate-profile', [CorprofileController::class, 'showForm'])->name('corporate-profile.form');
    Route::post('/submit', [CorprofileController::class, 'store'])->name('corporate-profile.store');
});



require __DIR__.'/auth.php';



