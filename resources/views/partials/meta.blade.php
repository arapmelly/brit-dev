@foreach (\Statamic\Facades\Entry::query()->where('collection', 'seo_tags')->where('status', 'published')->get() as $entry)

@php
    $uri = (Request::path() == '/') ? 'home' : Request::path();
    
    
@endphp
    @if($entry->page_url == $uri)
            @section('title', $entry->seo_title)
            @foreach ($entry->seo_meta_tags as $tag )           
                <meta name="{{$tag->meta_name}}" content="{{ $tag->meta_content }}">
            @endforeach
        
    @endif
   
@endforeach


