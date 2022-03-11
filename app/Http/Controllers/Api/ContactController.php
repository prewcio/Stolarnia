<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function sendMail(){
        $content = [
            'id' => 69,
            'from' => 'test@test.pl',
            'title' => 'Test',
            'message' => 'Test Message'
        ];
        Mail::to('prewcioyt@gmail.com')
            ->send(new ContactMail($content));
    }
}
