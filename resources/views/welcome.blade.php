<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        @include('includes/header')
    </head>
    <body>
        <div id="app">
            <div class="container">
                <navi></navi>
                <inx></inx>
                <ftr></ftr>
            </div>
        </div>
        <footer>
            @include('includes/footer')
        </footer>
    </body>
</html>
