import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { NavLink } from 'react-router-dom';// Importing icons for edit and delete

const Users = () => {
    return (
        <div className="wrapper">
            {/* Sidebar */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <a href="#" className="brand-link">
                    <span className="brand-text font-weight-light" style={{ marginLeft: '35px' }}>
                        Admin Panel
                    </span>
                </a>
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
                <div className="container-fluid">
                    <section className="content-header">
                        <h1>Users</h1>
                        <p>Manage your users here. You can edit or delete users as needed.</p>
                    </section>

                    <section className="content">
                        <div className="box">
                            <div className="box-header with-border">
                                <h3 className="box-title">User List</h3>
                            </div>
                            <div className="box-body">
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Role</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>John Doe</td>
                                            <td>johndoe@example.com</td>
                                            <td>Admin</td>
                                            <td>
                                                <button className="btn btn-primary btn-sm">
                                                    <FaEdit /> Edit
                                                </button>
                                                <button className="btn btn-danger btn-sm">
                                                    <FaTrash /> Delete
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Jane Smith</td>
                                            <td>janesmith@example.com</td>
                                            <td>User</td>
                                            <td>
                                                <button className="btn btn-primary btn-sm">
                                                    <FaEdit /> Edit
                                                </button>
                                                <button className="btn btn-danger btn-sm">
                                                    <FaTrash /> Delete
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </div>
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

export default Users;
