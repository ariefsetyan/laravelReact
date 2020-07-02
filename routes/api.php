<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('contacts', 'ContactCoontroller@index');
Route::post('contacts/create', 'ContactCoontroller@store');
Route::get('contacts/{id}/edit', 'ContactCoontroller@edit');
Route::put('contacts/{id}/update', 'ContactCoontroller@update');
Route::delete('contacts/{id}/delete', 'ContactCoontroller@destroy');
