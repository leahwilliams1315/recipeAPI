import React, { Component } from 'react';


const RecipeCard = (props) =>
    <div>
        <h1>{props.data.title}</h1>
        <a href={props.data.source_url}>
            <img src={props.data.image_url} alt=""/>
        </a>
        <h3>Published by: {props.data.publisher}</h3>
    </div>;

export default RecipeCard;