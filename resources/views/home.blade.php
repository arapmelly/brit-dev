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
    @if($page->slug == 'home-page')
    
        {{-- include banners --}}
        @php
            $banners = $page->banners;
        @endphp
        @include('partials.banner')

        {{-- include stat cards --}}
        @php
            $stats = $page->stats;
            $stat_title = $page->stats_title;
        @endphp
        @include('partials.stat_cards')

        {{-- include discover image cards --}}
        @php
            $cards = $page->discoveries;
            $discover_title = $page->discover_title;
        @endphp
        @include('partials.content_cards.image_card')
       

    @endif
@endforeach


@endsection