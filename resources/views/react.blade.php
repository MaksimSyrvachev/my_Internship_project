<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Laravel React</title>
</head>
<body>
    {{-- ID app is essential, will be passed to app.js and then App.js. This div will be filled with the React Frontend --}}
    <div id="app"></div>
    
    <script defer src="{{ asset('js/app.js') }}"></script>
</body>
</html>
