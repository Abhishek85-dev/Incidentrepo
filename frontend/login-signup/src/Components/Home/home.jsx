import React, { useEffect } from 'react';
import './Dashboard.css'; 
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();
    useEffect(() => {
        const sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');
        sideLinks.forEach(item => {
            item.addEventListener('click', () => {
                sideLinks.forEach(i => {
                    i.parentElement.classList.remove('active');
                })
                item.parentElement.classList.add('active');
            });
        });
        
        const menuBar = document.querySelector('.content nav .bx.bx-menu');
        const sideBar = document.querySelector('.sidebar');
        menuBar.addEventListener('click', () => {
            sideBar.classList.toggle('close');
        });

        const searchBtn = document.querySelector('.content nav form .form-input button');
        const searchBtnIcon = document.querySelector('.content nav form .form-input button .bx');
        const searchForm = document.querySelector('.content nav form');
        searchBtn.addEventListener('click', (e) => {
            if (window.innerWidth < 576) {
                e.preventDefault();
                searchForm.classList.toggle('show');
                if (searchForm.classList.contains('show')) {
                    searchBtnIcon.classList.replace('bx-search', 'bx-x');
                } else {
                    searchBtnIcon.classList.replace('bx-x', 'bx-search');
                }
            }
        });

        // Resize event handling
        const handleResize = () => {
            if (window.innerWidth < 768) {
                sideBar.classList.add('close');
            } else {
                sideBar.classList.remove('close');
            }
            if (window.innerWidth > 576) {
                searchBtnIcon.classList.replace('bx-x', 'bx-search');
                searchForm.classList.remove('show');
            }
        };

        window.addEventListener('resize', handleResize);

        // Theme toggle
        const toggler = document.getElementById('theme-toggle');
        toggler.addEventListener('change', function () {
            if (this.checked) {
                document.body.classList.add('dark');
            } else {
                document.body.classList.remove('dark');
            }
        });

        // Cleanup on unmount (equivalent to componentWillUnmount)
        return () => {
            sideLinks.forEach(item => {
                item.removeEventListener('click', () => {
                    sideLinks.forEach(i => {
                        i.parentElement.classList.remove('active');
                    });
                    item.parentElement.classList.add('active');
                });
            });
            menuBar.removeEventListener('click', () => {
                sideBar.classList.toggle('close');
            });
            searchBtn.addEventListener('click', (event) => {
              if (window.innerWidth < 576) {
                  event.preventDefault();
                  searchForm.classList.toggle('show');
                  if (searchForm.classList.contains('show')) {
                      searchBtnIcon.classList.replace('bx-search', 'bx-x');
                  } else {
                      searchBtnIcon.classList.replace('bx-x', 'bx-search');
                  }
              }
          });
          
            window.removeEventListener('resize', handleResize);
            toggler.removeEventListener('change', function () {
                if (this.checked) {
                    document.body.classList.add('dark');
                } else {
                    document.body.classList.remove('dark');
                }
            });
        };
    }, []); 
    return (
        <div>
            <div className="sidebar">
                <a href="#" className="logo">
                    <i className='bx bx-code-alt'></i>
                    <div className="logo-name"><span>Ticket</span>Management</div>
                </a>
                <ul className="side-menu">
                    <li><a href="#"><i className='bx bxs-dashboard'></i>Dashboard</a></li>
                    <li><a href="#"><i className='bx bx-message-square-dots'></i>Register Tickets</a></li>
                    <li><a href="#"><i className='bx bx-group'></i>Update Profile</a></li>
                </ul>
                <ul className="side-menu">
                    <li>
                        <a href="/" className="logout" onClick={navigate('/')}>
                            <i className='bx bx-log-out-circle'></i>
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
           

           
            <div className="content">
                {/* Navbar */}
                <nav>
                    <i className='bx bx-menu'></i>
                    <form action="#">
                        <div className="form-input">
                            <input type="search" placeholder="Search..." />
                            <button className="search-btn" type="submit"><i className='bx bx-search'></i></button>
                        </div>
                    </form>
                    <input type="checkbox" id="theme-toggle" hidden />
                    <label htmlFor="theme-toggle" className="theme-toggle"></label>
                    <a href="#" className="notif">
                        <i className='bx bx-bell'></i>
                        <span className="count">12</span>
                    </a>
                    <a href="#" className="profile">
                        <img src="images/logo.png" alt="Profile" />
                    </a>
                </nav>

                {/* Main */}
                <main>
                   

                    <ul className="insights">
                        <li>
                            <i className='bx bx-calendar-check'></i>
                            <span className="info">
                                <h3>HR</h3>
                                
                            </span>
                        </li>
                        <li>
                            <i className='bx bx-show-alt'></i>
                            <span className="info">
                                <h3>FINANCE</h3>
                               
                            </span>
                        </li>
                        <li>
                            <i className='bx bx-line-chart'></i>
                            <span className="info">
                                <h3>BUSINESS</h3>
                              
                            </span>
                        </li>
                        <li>
                            <i className='bx bx-dollar-circle'></i>
                            <span className="info">
                                <h3>SERVICE</h3>
                               
                            </span>
                        </li>
                    </ul>

                    <div className="bottom-data">
                       

                        
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Home;
