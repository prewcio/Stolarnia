<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    @include('includes/header')
</head>
<body>
<div id="app">
    <navi></navi>
    <about></about>
    <socials></socials>
    <ftr></ftr>
</div>
<footer>
    @include('includes/footer')
</footer>
</body>
</html>
