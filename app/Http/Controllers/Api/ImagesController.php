<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;


class ImagesController extends Controller
{
    public function getImages(){
        $folders = array_map('basename', File::directories(public_path('img/')));
        $dirImgs = [];
        $images = [];

        foreach($folders as $folder) {
            $files = File::files(public_path('img/'.$folder));
            foreach ($files as $file) {
                if (($file->getExtension() == "png") || ($file->getExtension() == "jpg") || ($file->getExtension() == "jpeg")) {
                    $images[] = $file->getRelativePathname();
                }
            }

            $dirImgs[] = [
                'realisation' => $folder,
                'images' => $images
            ];
            $images = [];
        }
        return response()->json([
            'data'=>$dirImgs
        ]);
    }
}
