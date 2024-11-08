import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert

const Users = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({
        name: '',
        email: ''
    });
    const [editIndex, setEditIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Load users from localStorage
    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(storedUsers);
    }, []);

    // Save users to localStorage
    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleAddUser = () => {
        if (!newUser.name || !newUser.email) {
            Swal.fire('Error', 'Please fill out all fields.', 'error');
            return;
        }

        const newUsersList = [...users, { ...newUser, id: Date.now() }];
        setUsers(newUsersList);
        setNewUser({ name: '', email: '' });
        setIsModalOpen(false);
        Swal.fire('Success', 'User added successfully!', 'success');
    };

    const handleDeleteUser = (userId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                const filteredUsers = users.filter(user => user.id !== userId);
                setUsers(filteredUsers);
                Swal.fire('Deleted!', 'User has been deleted.', 'success');
            }
        });
    };

    const handleEditUser = (userIndex) => {
        setEditIndex(userIndex);
        const userToEdit = users[userIndex];
        setNewUser({ ...userToEdit });
        setIsModalOpen(true);
    };

    const handleUpdateUser = () => {
        const updatedUsers = [...users];
        updatedUsers[editIndex] = { ...newUser, id: updatedUsers[editIndex].id };
        setUsers(updatedUsers);
        setEditIndex(null);
        setNewUser({ name: '', email: '' });
        setIsModalOpen(false);
        Swal.fire('Success', 'User updated successfully!', 'success');
    };

    const openAddModal = () => {
        setIsModalOpen(true);
        setNewUser({ name: '', email: '' });
    };

    return (
        <div className="wrapper">
            {/* Sidebar */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <a href="#" className="brand-link">
                    <span className="brand-text font-weight-light" style={{ marginLeft: '60px', textDecoration: 'none' }}>
                        Admin Panel
                    </span>
                </a>
                <div className="sidebar">
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item">
                                <NavLink to="/dashboard" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                                    <i className="nav-icon fa fa-tachometer"></i>
                                    <p>Dashboard</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/users" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
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
                                <button className="btn btn-success mb-2" onClick={openAddModal}>Add User</button>
                            </div>
                            <div className="box-body">
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((user, index) => (
                                            <tr key={user.id}>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>
                                                    <button className="btn btn-primary btn-sm " onClick={() => handleEditUser(index)}>
                                                        <FaEdit />
                                                    </button>
                                                    <button className="btn btn-danger btn-sm ms-1" onClick={() => handleDeleteUser(user.id)}>
                                                        <FaTrash />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* User Modal */}
            {isModalOpen && (
                <div className="modal-backdrop" style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1050,
                }} onClick={() => setIsModalOpen(false)}></div>
            )}

            {isModalOpen && (
                <div className="modal fade show" style={{
                    display: 'block',
                    zIndex: 1060,
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }} aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{editIndex !== null ? 'Edit User' : 'Add User'}</h5>
                                <button type="button" className="close" onClick={() => setIsModalOpen(false)} aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            value={newUser.name}
                                            onChange={handleInputChange}
                                            placeholder="Enter name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            value={newUser.email}
                                            onChange={handleInputChange}
                                            placeholder="Enter email"
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={editIndex !== null ? handleUpdateUser : handleAddUser}
                                    >
                                        {editIndex !== null ? 'Update User' : 'Add User'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}

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
