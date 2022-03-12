@component('mail::subcopy')
<style>
    .centr {
        text-align: center;
    }
</style>
<div class="container centr">
    <h1 style="font-size: 36px">Zapytanie z formularza kontaktowego</h1>
    <h2>Mail od: <a href="mailto:{{ $content['from'] }}">{{ $content['from'] }}</a></h2>
    <h2>Tytuł: {{ $content['title'] }}</h2>
    <h2>Treść:</h2>
    {{ $content['message'] }}
</div>
@endcomponent
