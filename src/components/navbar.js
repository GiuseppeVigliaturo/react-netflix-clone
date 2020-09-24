import React from 'react';
import Menubar from './menubar';
import SearchBar from './searchbar';

export default function Navbar({onSearchTerm}) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <button className="navbar-brand active">Navbar</button>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <Menubar/>
               
            </div>
            < SearchBar onSearchTerm={onSearchTerm}/>
</nav>
    )
    }