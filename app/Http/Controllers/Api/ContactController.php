<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\ContactMail;
use App\Models\Message;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function sendMessage(Request $request){
        $name = $request->input('name');
        $token = $request->input('token');
        $email = $request->input('email');
        $phoneNumber = $request->input('phoneNumber');
        $message = $request->input('message');
        $msg = new Message();
        $msg->name = $name;
        $msg->email = $email;
        $msg->phoneNumber = $phoneNumber;
        $msg->message = $message;
        $msg->save();
        $id = $msg->id;
        $sent = now()->format('d.m.Y');
        $sent_hr = now()->addHour()->format(' H:i');
        $content = [
            'id' => $id,
            'from' => $name,
            'fromEmail' => $email,
            'message' => $message,
            'sent' => $sent,
            'sent_hr' => $sent_hr
        ];
        Mail::to('prewcioyt@gmail.com')
            ->send(new ContactMail($content));
        return response()->json([
            'sent'=>1
        ]);
    }
}
