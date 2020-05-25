import React, { Component, Suspense } from 'react';
// import axios from 'axios';
import './Blog.css';
import Posts from './Posts/Posts';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
const Newpost = React.lazy(()=>{ return import('./NewPost/NewPost')});

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts/" >Posts</NavLink></li>
                            <li><NavLink to={{pathname : '/new-post', hash:'#submit', search:"?quick-submit=true"}}>New Post</NavLink></li>
                        </ul>       
                    </nav>
                </header>
                <Switch>        
                    <Route path="/new-post"  render={ () => {return <Suspense fallback="<div>Loading....</div>"><Newpost/></Suspense>}} />
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to="/posts" />
                </Switch>
            </div>
        );
    }
}

export default Blog;