@extends('layout')

@section('meta')
    <meta name="test" description="test">
   {{-- @include('partials.meta') --}}

@endsection

@section('content')

@php
    $pages = \Statamic\Facades\Entry::query()->where('collection', 'pages')->where('status', 'published')->get();

@endphp

@foreach ($pages as $page)


@if(count($page->sections) > 0) 

    @foreach($page->sections as $section)

  

        @if($section->enabled)
            
            @include('partials.'.$section->section_name->slug)
        @endif

    @endforeach
@endif

   
@endforeach


@endsection