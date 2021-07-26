import React from "react";
import ReactLove from './img/reactlove.svg';
import './styles/Credits.scss';

function Credits(props) {
    return (
        <>
            <div className={'overlay'}>

            </div>
        <div className={'credits'}>
            <div className={'heading'}>Made With <img src={ReactLove}/></div>
            <div className={'sub-heading'}>By &nbsp;<a href={'https://github.com/untitled-team-101'}>@untitledteam</a></div>
            <div className={'memberlist'}>
                <ul>
                    <li>
                        <a href={'https://github.com/Ayan-Dhara'} >Ayan-Dhara</a>
                    </li>
                    <li>
                        <a href={'https://github.com/tanmayVaish'}>Tanmay</a>
                    </li>
                    <li>
                        <a href={'https://github.com/dhruvgarg02'}>Dhruv</a>
                    </li>
                    <li>
                        <a href={'https://github.com/sarveshspatil111'}>Sarvesh</a>
                    </li>
                    <li>
                        <a href={'https://github.com/dpatel-8112'}>Devarshi</a>
                    </li>
                    <li>
                        <a href={'https://github.com/anjaligoswami'}>Anjali</a>
                    </li>
                    <li>
                        <a href={'https://github.com/grawish'}>Goblin</a>
                    </li>
                </ul>
            </div>
        </div>
            </>
    );
}

export default Credits;