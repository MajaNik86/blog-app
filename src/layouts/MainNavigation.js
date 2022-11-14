import React from "react";
import classes from './MainNavigation.module.css';
import { NavLink } from "react-router-dom";

export default function MainNavigation() {
    return (
        <header className={classes.header}>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to='/posts' activeClassName={classes.active}>AppPosts</NavLink>
                    </li>
                    <li>
                        <NavLink to='/add' activeClassName={classes.active}>Add Post</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}