import React from 'react';
import ReactDOM from 'react-dom';
import { Blurhash } from "react-blurhash";
import './index.css';
const discoveries = require("./discovery_page.json");

class NavBar extends React.Component {
    render() {
        const heading = 'Wolt Frontend';

        return (
            <div className="navBar">
                <h1>{heading}</h1>
            </div>
        );
    }
}

class Restaurant extends React.Component {
    render() {
        return (
            <div className="restaurant">
                <div className="blurhash">
                    <Blurhash
                        hash={this.props.restaurant.blurhash}
                        width={200}
                        height={200}
                    />
                    <figcaption>{this.props.restaurant.online ? 'Online' : 'Offline'}</figcaption>
                </div>
                <h3>{this.props.name}</h3>
            </div>
        );
    }
}

class Section extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            check: false,
            disBtn: this.props.restaurants.length <= 3
        }
    }

    renderRestaurants() {
        return (
            <div className="sectionContainer" id={this.props.id}>
                {this.props.restaurants.map((element, index) => (
                    <Restaurant
                        name={element.name}
                        restaurant={element}
                        key={index}
                    />
                ))}
            </div>
        );
    }

    handleClick(right, id) {
        if(right){
            document.getElementById(id).scrollLeft += 220;
            if(document.getElementById(id).scrollLeft >= document.getElementById(id).scrollWidth - document.getElementById(id).clientWidth){
                if(this.check){
                    document.getElementById(id).scrollLeft -= 9000;
                    this.check = !this.check;
                }else{ this.check = !this.check; }
            }
        }else{
            document.getElementById(id).scrollLeft -= 220;
            if(document.getElementById(id).scrollLeft <= 0){
                if(this.check){
                    document.getElementById(id).scrollLeft += 9000;
                    this.check = !this.check;
                }else{ this.check = !this.check; }
            }
        }
    }

    render() {
        return (
            <div className="section">
                <div className="headAndBtns">
                    <button
                        onClick={() => this.handleClick(false, this.props.id)}
                        className={this.state.disBtn ? 'disable' : 'enable'}
                    >
                        &lt;
                    </button>
                    <h2>{this.props.name}</h2>
                    <button
                        onClick={() => this.handleClick(true, this.props.id)}
                        className={this.state.disBtn ? 'disable' : 'enable'}
                    >
                        &gt;
                    </button>
                </div>
                 {this.renderRestaurants()}
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <Section
                    name={discoveries.sections[0].title}
                    restaurants={discoveries.sections[0].restaurants}
                    id={0}
                />
                <Section
                    name={discoveries.sections[1].title}
                    restaurants={discoveries.sections[1].restaurants}
                    id={1}
                />
                <Section
                    name={discoveries.sections[2].title}
                    restaurants={discoveries.sections[2].restaurants}
                    id={2}
                />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);