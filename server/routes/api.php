<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ChipController;
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

Route::group(['prefix' => 'auth', 'middleware' => 'api'], function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/logout', [AuthController::class, 'logout']);
});

Route::group(['prefix' => 'chips', 'middleware' => ['api', 'auth:api']], function () {
    Route::post('/set', [ChipController::class, 'set']);
    Route::get('/get', [ChipController::class, 'get']);
});
