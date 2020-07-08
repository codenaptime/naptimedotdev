import React, {Component} from 'react';
import swissArmyStyles from './swiss-army.module.css';

export default class SwissArmy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stages: ['start', 'blade', 'saw', 'corkscrew', 'open'],
            scale: 1
        };
        // this.content = document.querySelector('main');
        this.scrolling = false;
    }
    
    scrollFliptools(e) {
        e.preventDefault();
        // this.setState((state) => ({...state, scale: state.scale += e.deltaY * -0.01}));
        console.info(e.deltaY);
        // this.setState((state) => ({...state, scale: Math.min(Math.max(.125, state.scale), 4)}));
        e.target.style.transform = `scale(${this.state.scale})`;
        
        if (this.scrolling === false) {
            // relative to section header and top
            // sticky header
            // symbol on tool
            // let closedTool = undefined;
            // closedTool = this.tools.reverse().find(b => [...b.classList].indexOf(swissArmyStyles.open) < 0);
            
            // const closedTool = this.tools.find(b => [...b.classList].indexOf(swissArmyStyles.open) < 0);
            const closedToolIndex = this.findClosedToolIndex();
            // const closedToolIndex = this.tools.indexOf(this.tools.find(b => [...b.classList].indexOf(swissArmyStyles.open) < 0));
            const openedToolIndex = closedToolIndex > 0 ? closedToolIndex-1 : closedToolIndex;
            console.log(openedToolIndex, openedToolIndex >= 0);
            if(openedToolIndex >= 0) {
                if(e.deltaY < 0) {
                    this.tools[openedToolIndex].classList.remove(swissArmyStyles.open);
                }
                else {
                    this.tools[closedToolIndex].classList.add(swissArmyStyles.open);
                }
            }
            this.scrolling = true;
            setTimeout(() => {
                this.scrolling = false;
            }, 500);
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

    findClosedToolIndex = () => this.tools.indexOf(this.tools.find(b => [...b.classList].indexOf(swissArmyStyles.open) < 0));
    
    componentDidMount() {
        const content = document.querySelector('main');
        this.tools = [...document.querySelectorAll(`.${swissArmyStyles.fliptool}`)];
        // const tools = [...document.querySelectorAll(`.${swissArmyStyles.fliptool}`)];
        // var scrolling = false;
        content.addEventListener('wheel', (e) => this.scrollFliptools(e, this.state));

        // const base = document.querySelector(`.${swissArmyStyles.base}`);
        // base.addEventListener('click', (e) => this.clickFliptools(e));

    }

    render() {
        return(
            <section className={swissArmyStyles.larger}>
                <div className={swissArmyStyles.container} onClick={(e) => this.clickFliptools(e)}>
                    {/* <!-- Red base --> */}
                    <div className={swissArmyStyles.base}></div>
                    {/* <!--  symbol --> */}
                    <div className={swissArmyStyles.plus}></div>
                    {/* <!--  Blade --> */}
                    <div className={`${swissArmyStyles.blade} ${swissArmyStyles.fliptool}`}></div>
                    {/* <!-- saw --> */}
                    <div className={`${swissArmyStyles.saw} ${swissArmyStyles.fliptool}`}>
                        <div className={swissArmyStyles.sawTooth}></div>
                    </div>
                    {/* <!-- cork screw --> */}
                    <div className={`${swissArmyStyles.corkScrew} ${swissArmyStyles.fliptool}`}>
                        <div className={swissArmyStyles.corkScrewCurl}></div>
                        <div className={swissArmyStyles.corkScrewTip}></div>
                    </div>
                </div>
            </section>
        );
    }
}