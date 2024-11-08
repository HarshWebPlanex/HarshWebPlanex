import React from "react";
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="wrapper">
            {/* Sidebar */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <a href="#" className="brand-link">
                    {/* <img
                        src="https://www.google.com/imgres?q=webplanex&imgurl=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1676173069847793664%2FUoEXJXT3_400x400.png&imgrefurl=https%3A%2F%2Ftwitter.com%2Fwebplanex&docid=s0dNbBo2-NMdzM&tbnid=K3r7s702-ZiVZM&vet=12ahUKEwifpfyT08eJAxUfS2wGHWGOD-oQM3oECGcQAA..i&w=400&h=400&hcb=2&ved=2ahUKEwifpfyT08eJAxUfS2wGHWGOD-oQM3oECGcQAA"
                        alt="AdminLTE Logo"
                        className="brand-image img-circle elevation-3"
                        style={{ opacity: ".8" }}
                    /> */}
                    <span className="brand-text font-weight-light" style={{ marginLeft: '60px' }}>
                        Admin Panel
                    </span>
                </a>

                {/* Sidebar Menu */}
                <div className="sidebar">
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            {/* Dashboard Link */}
                            <li className="nav-item">
                                <NavLink
                                    to="/dashboard"
                                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} // Dynamically adds 'active' class based on route
                                >
                                    <i className="nav-icon fa fa-tachometer"></i>
                                    <p>Dashboard</p>
                                </NavLink>
                            </li>

                            {/* Users Link */}
                            <li className="nav-item">
                                <NavLink
                                    to="/users"
                                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} // Dynamically adds 'active' class based on route
                                >
                                    <i className="nav-icon fa fa-users"></i>
                                    <p>Users</p>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>

            {/* Content Wrapper */}
            <div className="content-wrapper">
                {/* Main content */}
                <section className="content">
                    <div className="container-fluid">
                        <h1 className="m-0 text-dark text-center">Dashboard</h1>
                        <p className="lead text-center">Welcome to your dashboard! This page is only accessible to logged-in users.</p>

                        <div className="row">
                            {/* Statistics Card */}
                            <div className="col-lg-4 col-12">
                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">Statistics</h3>
                                    </div>
                                    <div className="card-body">
                                        View your latest statistics here.
                                    </div>
                                </div>
                            </div>

                            {/* Settings Card */}
                            <div className="col-lg-4 col-12">
                                <div className="card card-warning">
                                    <div className="card-header">
                                        <h3 className="card-title">Settings</h3>
                                    </div>
                                    <div className="card-body">
                                        Access your account settings.
                                    </div>
                                </div>
                            </div>

                            {/* Reports Card */}
                            <div className="col-lg-4 col-12">
                                <div className="card card-success">
                                    <div className="card-header">
                                        <h3 className="card-title">Reports</h3>
                                    </div>
                                    <div className="card-body">
                                        Generate and download reports.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Main Footer */}
            <footer className="main-footer">
                <div className="float-right d-none d-sm-block">
                    <b>Version</b> 3.0.0
                </div>
                <strong>Admin Panel &copy; 2024</strong>
            </footer>
        </div>
    );
};

export default Dashboard;
