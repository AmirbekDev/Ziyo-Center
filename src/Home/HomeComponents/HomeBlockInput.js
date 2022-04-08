import React from 'react';

function HomeBlockInput(props) {
    return (
        <div className="home_block-input">
            <div className="home_block-input_start">
                <div className="home_input-start">
                    <div className="home_input-text">
                        <p>What Our Students Say</p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat <br/> mauris non dictumst in leo. Lorem ipsum dolor sit amet.</span>
                    </div>
                    <div className="home_input">
                        <input type="email" placeholder="Enter your email......"/>
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default HomeBlockInput;