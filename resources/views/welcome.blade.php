<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        @include('includes/header')
    </head>
    <body>
        <div id="app">
            <navi></navi>
            <inx></inx>
            <inx2></inx2>
            <inx3></inx3>
            <inx4></inx4>
            <inx5></inx5>
            <socials></socials>
            <ftr></ftr>
        </div>
        <footer>
            @include('includes/footer')
        </footer>
    </body>
</html>
