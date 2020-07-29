import React, {Component} from 'react';
import swissArmyStyles from './swiss-army.module.css';

export default class SwissArmy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stages: ['start', 'blade', 'saw', 'corkscrew', 'open'],
            scale: 1
        };
        this.scrolling = false;
    }
    
    scrollFliptools(e) {
        e.preventDefault();
        
        if (this.scrolling === false) {
            // TODO: symbol on tool

            const closedToolIndex = this.findClosedToolIndex();
            const openedToolIndex = closedToolIndex > 0 ? closedToolIndex-1 : closedToolIndex;

            if(openedToolIndex >= 0) {
                if(e.deltaY < 0) {
                    this.tools[openedToolIndex].classList.remove(swissArmyStyles.open);
                }
                else {
                    this.tools[closedToolIndex].classList.add(swissArmyStyles.open);
                }
            }
            else if(e.deltaY < 0) {
                this.tools[this.tools.length-1].classList.remove(swissArmyStyles.open);
            }
            this.scrolling = true;
            setTimeout(() => {
                this.scrolling = false;
            }, 750);
        }
    }

    clickFliptools(e) {
        const closedToolIndex = this.findClosedToolIndex();
        if(closedToolIndex >= 0) {
            this.tools.forEach((t) => t.classList.add(swissArmyStyles.open));    
        }
        else {
            this.tools.forEach((t) => t.classList.remove(swissArmyStyles.open));
        }
    }

    
    findClosedToolIndex = () => {
        return this.tools.indexOf(this.tools.find(b => [...b.classList].indexOf(swissArmyStyles.open) < 0));
    };
    
    componentDidMount() {
        const content = document.querySelector('main');
        this.tools = [...document.querySelectorAll(`.${swissArmyStyles.fliptool}`)];
        content.addEventListener('wheel', (e) => this.scrollFliptools(e, this.state));
    }

    render() {
        return(
            <section className={swissArmyStyles.larger}>
                <div className={swissArmyStyles.container}>
                    {/* <!-- Red base --> */}
                    <button type="button" className={swissArmyStyles.base} onClick={(e) => this.clickFliptools(e)}></button>
                    {/* <!--  symbol --> */}
                    <div className={swissArmyStyles.plus}></div>
                    {/* <!--  Blade --> */}
                    <a href="https://vuejs.org/" className={`${swissArmyStyles.blade} ${swissArmyStyles.fliptool}`}>
                        <img className={`${swissArmyStyles.fliptoolImage} ${swissArmyStyles.fliptoolImageVue}`} src="/vue-282497.png" />
                    </a>
                    {/* <!-- saw --> */}
                    <a href="https://reactjs.org/" className={`${swissArmyStyles.saw} ${swissArmyStyles.fliptool}`}>
                        <div className={swissArmyStyles.sawTooth}></div>
                        <img className={`${swissArmyStyles.fliptoolImage} ${swissArmyStyles.fliptoolImageReact}`} src="/react.svg" />
                    </a>
                    {/* <!-- cork screw --> */}
                    <a href="https://graphql.org/" className={`${swissArmyStyles.corkScrew} ${swissArmyStyles.fliptool}`}>
                        <div className={swissArmyStyles.corkScrewCurl}></div>
                        <div className={swissArmyStyles.corkScrewTip}></div>
                        <img className={`${swissArmyStyles.fliptoolImage} ${swissArmyStyles.fliptoolImageGraphQl}`} src="/graphql.svg" />
                    </a>
                </div>
            </section>
        );
    }
}