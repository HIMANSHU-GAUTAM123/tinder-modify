
import '../assets/css/style.css';
import 'swiper/css/bundle';
import { Link } from 'react-router-dom';
import React from 'react';
import '../assets/css/style.css';
import $ from 'jquery';
import jQuery from 'jquery';

const Settings = () => {
  const changetheme=(()=>{
    jQuery('.theme-btn').on('click',function(){
      jQuery('body').toggleClass('theme-dark');
      jQuery('.theme-btn').toggleClass('active');
  var logoSrc = $(".app-logo").attr("src");
      
      
  });
  })
  return (
    <div>
     
    <div class="dark-overlay"></div>
	<div class="sidebar">
		<div class="inner-sidebar">

			<ul class="nav navbar-nav">	
				<li>
					<Link to="/" class="nav-link active" >
						<span class="dz-icon">
							<i class="icon feather icon-home"></i>
						</span>
						<span>Home</span>
					</Link>
				</li>
				
				<li>
					<Link to={"/quotes-collections/categories"} class="nav-link" >
						<span class="dz-icon">
							<i class="icon feather icon-grid"></i>
						</span>
						<span>Components</span>
					</Link>
				</li>
				</ul>
			<div class="sidebar-bottom">
				<ul class="app-setting">
					<li>
						<div class="mode">
							<span class="dz-icon">                        
								<i class="icon feather icon-moon"></i>
							</span>					
							<span>Dark Mode</span>
							<div class="custom-switch" onClick={changetheme}>
								<input type="checkbox" class="switch-input theme-btn" id="toggle-dark-menu"/>
								<label class="custom-switch-label" for="toggle-dark-menu"></label>
							</div>					
						</div>
					</li>
				</ul>
				<div class="app-info">
					<h6 class="name">W3Dating - Dating App</h6>
					<span class="ver-info">App Version 1.1</span>
				</div>
			</div>
		</div>
	</div>
    
      
    </div>
  )
}

export default Settings
