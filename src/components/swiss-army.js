import React, {Component} from 'react';
import swissArmyStyles from './swiss-army.module.css';

export default class SwissArmy extends Component {
    contructor() {
        this.state = {
            stages: ['start', 'blade', 'saw', 'corkscrew', 'open']
        };
    }

    componentDidMount() {
        const content = document.querySelector('main');
        const tools = [...document.querySelectorAll(`.${swissArmyStyles.fliptool}`)];
        var scrolling = false;
        content.addEventListener("wheel", (e) => {
            if (scrolling === false) {
                // relative to section header and top
                // sticky header
                // symbol on tool
                const closedTool = tools.find(b => [...b.classList].indexOf(swissArmyStyles.open) < 0);
                if(closedTool) {
                    closedTool.classList.add(swissArmyStyles.open);
                }
                scrolling = true;
                setTimeout(() => {
                scrolling = false;
                }, 500);
            }
        });

    }

    render() {
        return(
            <section className={swissArmyStyles.larger}>
                <div className={swissArmyStyles.container}>
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