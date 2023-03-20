<section class="main-banner careers-banner">
    @foreach($banners as $banner)
    <div class="main-banner-full owl-carousel owl-theme h-100">
        <div class="container-fluid image-holder h-100" style="background: url('{{ $banner->image }}') no-repeat center center">
            <div class="container h-100 p-0">
                <div class="row align-items-center h-100">
                    <div class="col-12 col-md-6 p-0 content-banner-holder">
                        <h1>{!! $banner->headline_text !!}</h1>
                        <p>{!! $banner->text !!}</p>
                        <a href="{{$banner->cta_link}}" class="btn btn-main btn-red"><span>{!! $banner->cta_text !!}<i class="fas fa-long-arrow-up"></i></span></a>                   
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    {{-- @if($entry->banner_type == 'video')
    <div class="video-background">
        <!-- Note: iFrame has to be higher than the actual wrapper -->
        <iframe width="1920" height="1080"
            src="{{$entry->banner_video_url}}"
            frameborder="0" allow="autoplay; encrypted-media" data-scaling="true" data-format="16:9"></iframe>
    </div>
    @endif --}}
    @endforeach

</section>