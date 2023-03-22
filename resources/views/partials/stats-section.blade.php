<section class="bg-grey statistics pt-5 pb-3">
    <div class="container p-0">
        <div class="row">
            <div class="col-12 col-md-6 mx-auto text-center heading">
                <h2>{{$page->stats_title}}</h2>
            </div>
            <div class="col-12 mx-auto mt-3 p-0">

               
                <div class="five-cards icon-card-slider slidenav-left owl-carousel owl-theme text-center">
                    @foreach ($page->stats as $stat)
 
                    <div class="card">
                        <span class="icon">
                            
                            <img src="{{$stat->icon  }}" alt="Britam" />
                        </span>
                        <h3>{!! $stat->stats !!}</h3>
                        <p>{!! $stat->stats_description !!}</p>
                    </div>
                @endforeach
                    
                </div>
            </div>
        </div>
    </div>
</section>