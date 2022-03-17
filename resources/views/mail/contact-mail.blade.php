@component('mail::subcopy')

    <style>
        .linked {
        text-decoration: none;
        color:aqua;
        }
    </style>
<div style="margin:0;padding:0;table-layout: fixed;background-color:rgba(0,0,0,0)">
    <center bgcolor="#000000" style="margin:0;padding:0;background-color:rgba(0,0,0,0)">
        <table bgcolor="#15171e" style="background-color: #15171e;color:white;padding: 5px">
            <tbody style="text-align: center">
                <h1 style="font-size: 36px;color:white;text-align: center">Zapytanie z formularza kontaktowego</h1>
                <h2 style="text-align: center;font-size:18px">Mail od:</h2>
                <p style="text-align: center;font-size:18px">{{ $content['from'] }}<br>
                    <span style="font-size:14px;transform: translateY(-5px)">
                        <a href="mailto:{{ $content['fromEmail'] }}" class="linked">{{ $content['fromEmail'] }}</a><br>
                        <a href="tel:{{ $content['phone'] }}" class="linked">{{ $content['phone'] }}</a>
                    </span>
                </p>
                <h2 style="text-align: center;font-size:18px">Treść:</h2>
                <p style="text-align: center">{{ $content['message'] }}</p>
                <p style="text-align: center;font-size: 10px;color: rgba(255,255,255,0.4)">Wiadomość wysłana dnia {{ $content['sent'] }} o godz. {{ $content['sent_hr'] }} @ <a href="https://anmar-meble.com" class="linked">anmar-meble.com</a></p>
            </tbody>
        </table>
    </center>
</div>

@endcomponent
