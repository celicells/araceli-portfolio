import React, { Component } from "react";
import { nav } from "react-bootstrap";
import './Navbar.css'


function Navbar() {
    return (
        <body>
            <nav class="navbar navbar-expand-sm navbar-light bg-light">
                <a href="#" class="navabr-brand">Profile</a>
                <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarMenu">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a href="#" class="nav-link">About Me</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </body>
    )
}

export default Navbar;