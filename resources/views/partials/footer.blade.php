<footer class="main-footer pt-5 pb-5">
    <div class="container">
        <div class="row">
           
            <div class="col-12 social-icons text-center">
                <ul class="d-flex align-items-center justify-content-center">
                     
                    @foreach ($social_links->links as $link )
                        
                        <li><a href="{{$link->link}}"><i class="{{$link->icon_class}}"></i></a></li>
  
                    @endforeach
                
                    
                </ul>
            </div>
            <div class="row footer-last">
                <div class="col-12 copyright text-center">

                    
                    <ul>
                        @foreach (Statamic::tag('nav:group_footer_menu') as $navItem)
                        <li><a href="{{$navItem['permalink']}}">{{$navItem['title']}}</a></li>
                        @endforeach
                       
                    </ul>
                </div>
            </div>
        </div>
        <span class="footer-line"></span>
        <div class="row pt-4 footer-last">
            <div class="col-12">
                <ul class="d-flex align-items-center justify-content-between">
                    <li>© {{date('Y')}} Britam. All Rights Reserved.</li>
                    <li>Regulated by the Insurance Regulatory Authority</li>
                </ul>
            </div>
        </div>
    </div>
</footer>