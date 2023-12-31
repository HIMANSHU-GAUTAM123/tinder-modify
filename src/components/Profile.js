import React from 'react';
import '../assets/css/style.css';
import $ from 'jquery';
import jQuery from 'jquery';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import {useEffect,useState,useRef} from 'react';
import {Link} from 'react-router-dom';
import axios from '../api/axios';
import Loader from './Loader';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import {  setAndOpenImage } from '../store/categorySlice';
import { useNavigate } from 'react-router-dom';


const Profile = () => {
	const[detail,setDetail]=useState(null);
	useEffect(() => {
		const fetchData = async () => {
		  try {
			const response = await axios.post('/get-post-details',
			{
			  post_id:1
			});
			setDetail(response);
		  } catch (error) {
			console.error('Error fetching category details:', error);
		  }
		};
	
		// Fetch data when the component mounts
		fetchData();
	  },[]);

  return !detail?(<Loader/>): (
	detail &&
    <div >
      <div className="page-wrapper">
    
	{/* <!-- Preloader --> */}
	{/* <div id="preloader">
		<div className="loader">
			<div className="load-circle"><div></div><div></div></div>
		</div>
	</div> */}
    {/* <!-- Preloader end-->
	
	<!-- Header --> */}
		<header className="header header-fixed bg-white">
			<div className="container">
				<div className="header-content">
					<div className="left-content">
						<a href="javascript:void(0);" className="back-btn">
							<i className="icon feather icon-arrow-left"></i>
						</a>
						<h6 className="title">Back</h6>
					</div>
					<div className="mid-content header-logo">
					</div>
					<div className="right-content dz-meta">
					</div>
				</div>
			</div>
		</header>
	{/* <!-- Header -->
	
	<!-- Page Content Start --> */}
	<div className="page-content space-top p-b40">
		<div className="container">
			<div className="detail-area">
				<div className="dz-media-card style-2">
					<div className="dz-media">
						<img src={detail.data["image-url"]} alt=""/>
					</div>
					<div className="dz-content">
						<div className="left-content">
							<h4 className="title">Chelsea, 21</h4>
							<p className="mb-0"><i className="icon feather icon-map-pin"></i> 5 miles away</p>
						</div>
						<a href="javascript:void(0);" className="dz-icon"><i className="flaticon flaticon-star-1"></i></a>
					</div>
				</div>
				<div className="detail-bottom-area">
					<div className="about">
						<h6 className="title">Basic information</h6>
						<p className="para-text">Just moved back to jakarata after living at India for 10+ years. Di luar terlifiat cenger - center di dalam.</p>					
					</div>
					<div className="intrests mb-3">
						<h6 className="title">Intrests</h6>
						<ul className="dz-tag-list">
							<li> 
								<div className="dz-tag">
									<i className="icon feather icon-camera"></i>
									<span>Photography</span>
								</div>
							</li>
							<li> 
								<div className="dz-tag">
									<i className="icon feather icon-music"></i>
									<span>Music</span>
								</div>
							</li>
							<li> 
								<div className="dz-tag">
									<i className="icon feather icon-book"></i>
									<span>Study</span>
								</div>
							</li>
							<li> 
								<div className="dz-tag">
									<i className="icon feather icon-film"></i>
									<span>Movies</span>
								</div>
							</li>
							<li> 
								<div className="dz-tag">
									<i className="icon feather icon-instagram"></i>
									<span>Instagram</span>
								</div>
							</li>
							<li> 
								<div className="dz-tag">
									<i className="icon feather icon-map-pin"></i>
									<span>Travelling</span>
								</div>
							</li>
						</ul>
					</div>
					<div className="languages mb-3">
						<h6 className="title">Languages</h6>
						<ul className="dz-tag-list">
							<li> 
								<div className="dz-tag">
									<span>English</span>
								</div>
							</li>
							<li> 
								<div className="dz-tag">
									<span>Spanish</span>
								</div>
							</li>
							<li> 
								<div className="dz-tag">
									<span>German</span>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- Page Content End -->
	<!-- Menubar --> */}
	<div className="footer fixed">
		<div className="dz-icon-box">
			<Link to="/post" className="icon dz-flex-box dislike"><i className="flaticon flaticon-cross font-18"></i></Link>
			<Link to="/" className="icon dz-flex-box super-like"><i className="fa-solid fa-star"></i></Link>
			<Link to="/" className="icon dz-flex-box like"><i className="fa-solid fa-heart"></i></Link>
		</div>
	</div>
	{/* <!-- Menubar --> */}
</div>  



    </div>
  )
}

export default Profile
