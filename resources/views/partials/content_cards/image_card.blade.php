<section class="news-stories pt-5 pb-3">
    <div class="container p-0">
        <div class="col-12 heading">
            <h2>{!! $discover_title !!}</h2>
        </div>
        <div class="row mt-3 mb-3">
            <div class="col-12 mx-auto mt-2">
                <div class="news-and-stories owl-carousel owl-theme">
                    @foreach ($cards as $card)
 
                
                    <div class="card p-0" style="background: url('{{ $card['image'] }}')">
                        <a href="{{ $card->cta_link }}">
                            <span class="read-more up-btn">
                                <i class="fas fa-arrow-up"></i>
                            </span>
                            <div class="content-area">
                                <h4>{!! $card->headline_text !!}</h4>
                                <p>{!! $card->text !!}</p>
                            </div>
                        </a>
                    </div>
                    @endforeach
                   

                </div>
            </div>
        </div>
    </div>
</section>