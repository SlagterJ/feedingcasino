<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Chip;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class GameController extends Controller
{
    public function start(Request $request)
    {
        $rules = [
            'color' => 'required | string',
            'chips' => 'required | integer',
        ];


        $validator = Validator::make($request->all(), $rules);

        if($validator->fails())
        {
            return response(['message' => $validator->errors()]);
        }

        $number = rand(1,38);
        $winningColor;

        if ($number == 37 || $number == 38) 
        {
            $winningColor = "green";
        }else if ($number % 2 == 0) 
        {
            $winningColor = "red";
        } else {
            $winningColor = "black";
        }

        $user = $request->user('api');
        $chip = Chip::where('user_id',$user->id) -> first();

        if($chip === null)
        {
            $chip = Chip::create([
                'user_id' => $user->id,
                'chips' => -0,
            ]);
        }

        if ($request->color == $winningColor) {
            $chip->update([
                'chips' => $chip->chips + $request->chips*2,
                'updated_at' => Carbon::now(),
            ]);

            return response(['message' => $chip]);
        }

        $chip->update([
            'chips' => $chip->chips - $request->chips,
            'updated_at' => Carbon::now(),
        ]);

        return response(['message' => $chip]);
    }
}
