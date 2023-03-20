<Navbar class="scrollheader headers">
    <div class="container">
        <div class="row">
            <nav class="classy-navbar justify-content-between" id="roamingnav">
              
                <!-- Logo -->
                <a class="nav-brand mainlogo" href="{{$site_logo->logo_link[0]}}"><img src="{{$site_logo->logo[0]}}" class="web-logo" alt="  {{ $site_logo->logo[0]->alt }}"></a>

                <!-- Mobile Serach and Country -->
                <div class="menu-btnarea d-none">
                    <button class="btn btn-main">
                        <span><i class="fa-sharp fa-solid fa-earth-americas"></i> <i
                                class="fa-solid fa-caret-down"></i></span>
                    </button>
                </div>
                <!-- Mobile Serach and Country -->

                <!-- Navbar Toggler -->
                <div class="classy-navbar-toggler">
                    <span class="navbarToggler"><span></span><span></span><span></span></span>
                </div>
                <!-- Menu -->
                <div class="classy-menu">
                    <!-- Nav Start -->
                    <div class="classynav">
                       
                        <a class="mobile-logo" href="{{$mobile_logo->logo_link[0]}}"><img src="{{$mobile_logo->logo[0]}}" class="web-logo" alt="  {{ $mobile_logo->logo[0]->alt }}">
                        </a>
                        <ul id="nav">
                           
                            
                            @foreach (Statamic::tag('nav:group_main_menu') as $navItem)
                           
                            <li><a class="page-list-title {{ (Request::path() == $navItem['url']) ? 'active' : '' }}" href="{{$navItem['permalink']}}">{{$navItem['title']}}</a>
                                @if (count($navItem['children']) > 0)

                                <ul class="megamenu--mega dropdown">
                                    @foreach ($navItem['children'] as $item)
                                    <li><a class="page-list-title" href="{{$item['permalink']}}">{{$item['title']}}</a></li>
                                    @endforeach
                                    
                                </ul>
                                    
                                @endif
                                
                            </li>
                            @endforeach
                           
                        </ul>

                        <div class="menu-btnarea">
                            <a class="btn btn-main search" href="">
                                <span><i class="fa-sharp fa-solid fa-magnifying-glass"></i>Search</span>
                            </a>
                            <button class="btn btn-main country-desktop">
                                <span>Choose your country <i class="fa-sharp fa-solid fa-earth-americas"></i> <i
                                        class="fa-solid fa-caret-down"></i></span>
                            </button>
                        </div>
                    </div>
                    <!-- Nav End -->
                </div>
              
            </nav>
            

        </div>
    </div>
</Navbar>
