@component('mail::subcopy')
<style>
    .message {
        width: auto;
        height: auto;
        border: 1px solid #000;
        flex-direction: column;
    }
    .main {
        padding-left: 500px;
        padding-right: 500px;
        position: relative;
        display: flex;
        align-content: center;
        justify-content: center;
    }
</style>
<div class="main">
    <div class="message">
        <h1 style="font-size: 36px">Zapytanie z formularza kontaktowego</h1>
        <h2>Mail od: {{ $content['from'] }}</h2>
        <h2>[<a href="mailto:{{ $content['fromEmail'] }}">{{ $content['fromEmail'] }}</a>]</h2>
        <h2>Treść:</h2>
        <p>{{ $content['message'] }}</p>
        <div>
            <p>Wiadomość wysłana dnia {{ $content['sent'] }} o godz. {{ $content['sent_hr'] }}</p>
        </div>
    </div>
</div>
@endcomponent
