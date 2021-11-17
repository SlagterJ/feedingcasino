<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Chip;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

/**
 * Class ChipController
 *
 * @package App\Http\Controllers\Api
 *
 * @author: Joost Raemakers <jraemakers@freedom.nl>
 */
class ChipController extends Controller
{
    /**
     * Gives a user chips.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function set(Request $request)
    {
        $rules = [
            'chips' => 'required | integer',
        ];

        $validator = Validator::make($request->all(), $rules);

        if($validator->fails())
        {
            return response(['message' => $validator->errors()]);
        }

        $user = $request->user('api');
        $chip = Chip::find($user->id);

        if($chip === null)
        {
            $chip = Chip::create([
                'user_id' => $user->id,
                'chips' => $request->chips,
            ]);

            return response(['message' => $chip]);
        }

        $chip->update([
            'chips' => $chip->chips + $request->chips,
            'updated_at' => Carbon::now(),
        ]);

        return response(['message' => $chip]);
    }

    /**
     * Retrieves the chips data from the user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function get(Request $request)
    {
        $user = $request->user('api');

        $chip = Chip::find($user->id);

        return response(['message' => $chip]);
    }
}
