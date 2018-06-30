import { h } from 'hyperapp'


export const Settings = ()  => 
    <nav class="settings">
        <ul>
            <li>
                <button class="accordion">Maximum Speed</button>
                <div class="panel">
                    <div id="setting-menu-grid">
                        <div id="setting-menu-grid-element-left">
                            <p>Left Front</p>
                        </div>
                        <div id="setting-menu-grid-element-right">
                            {/* <input id="left-front-wheel" type="number" max="1" min="-1" width="6" step="0.1" value="1" style="background-color: gray"/> */}
                        </div>
                        <div id="clear"></div>
                    </div>

                    <div id="setting-menu-grid">
                        <div id="setting-menu-grid-element-left">
                            <p>Right Front</p>
                        </div>
                        <div id="setting-menu-grid-element-right">
                            {/* <input id="right-front-wheel" type="number" max="1" min="-1" width="6" step="0.1" value="1" style="background-color: gray"/> */}
                        </div>
                        <div id="clear"></div>
                    </div>

                    <div id="setting-menu-grid">
                        <div id="setting-menu-grid-element-left">
                            <p>Left Rear</p>
                        </div>
                        <div id="setting-menu-grid-element-right">
                            {/* <input id="left-rear-wheel" type="number" max="1" min="-1" width="6" step="0.1" value="1" style="background-color: gray"/> */}
                        </div>
                        <div id="clear"></div>
                    </div>

                    <div id="setting-menu-grid">
                        <div id="setting-menu-grid-element-left">
                            <p>Right Rear</p>
                        </div>
                        <div id="setting-menu-grid-element-right">
                            {/* <input id="right-rear-wheel" type="number" max="1" min="-1" width="6" step="0.1" value="1" style="background-color: gray"/> */}
                        </div>
                        <div id="clear"></div>
                    </div>
                </div>
            </li>

            <li>
                <button class="accordion">Manipulator</button>
                <div class="panel">
                    <div id="setting-menu-grid">
                        <div id="setting-menu-grid-element-left">
                            <p>Axis 1
                                </p>
                        </div>
                        <div id="setting-menu-grid-element-right">
                            {/* <input id="mani-axis-1" type="number" max="4800" min="2400" width="6" step="50" value="3600" style="background-color: gray"/> */}
                        </div>
                        <div id="clear"></div>
                    </div>
                    <div id="setting-menu-grid">
                        <div id="setting-menu-grid-element-left">
                            <p>Axis 2
                                </p>
                        </div>
                        <div id="setting-menu-grid-element-right">
                            {/* <input id="mani-axis-2" type="number" max="4800" min="2400" width="6" step="50" value="3600" style="background-color: gray"/> */}
                        </div>
                        <div id="clear"></div>
                    </div>
                    <div id="setting-menu-grid">
                        <div id="setting-menu-grid-element-left">
                            <p>Gripper
                                </p>
                        </div>
                        <div id="setting-menu-grid-element-right">
                            {/* <input id="mani-gripper" type="number" max="4800" min="2400" width="6" step="50" value="3600" style="background-color: gray"/> */}
                        </div>
                        <div id="clear"></div>
                    </div>
                    <div id="setting-menu-grid">
                        <div id="setting-menu-grid-element-left">
                            <p>X
                                </p>
                        </div>
                        <div id="setting-menu-grid-element-right">
                            {/* <input id="mani-x" type="number" max="249" min="0" width="2" step="1" value="0" style="background-color: gray"/> */}
                        </div>
                        <div id="clear"></div>
                    </div>
                    <div id="setting-menu-grid">
                        <div id="setting-menu-grid-element-left">
                            <p>Y
                                </p>
                        </div>
                        <div id="setting-menu-grid-element-right">
                            {/* <input id="mani-y" type="number" max="249" min="0" width="2" step="1" value="180" style="background-color: gray"/> */}
                        </div>
                        <div id="clear"></div>
                    </div>
                </div>
            </li>


            <li>
                <button class="accordion">camera settings</button>
                <div class="panel">
                    <div class="flat-slider-wrapper">
                        <div class="flat-slider-description">
                            <p>brightness</p>
                        </div>
                        {/* <div class="flat-slider" id="brightness-slider"><input type="range" class="flat-slider-horizontal" id="brightness-slider-input" max="64" min="-64" step="1" value="0" /></div> */}
                        <div id="clear"></div>
                    </div>
                    <div class="flat-slider-wrapper">
                        <div class="flat-slider-description">
                            <p>contrast</p>
                        </div>
                        {/* <div class="flat-slider" id="contrast-slider"><input type="range" class="flat-slider-horizontal" id="contrast-slider-input" max="64" min="0" step="1" value="32" /></div> */}
                        <div id="clear"></div>
                    </div>
                    <div class="flat-slider-wrapper">
                        <div class="flat-slider-description">
                            <p>saturation</p>
                        </div>
                        {/* <div class="flat-slider" id="saturation-slider"><input type="range" class="flat-slider-horizontal" id="saturation-slider-input" max="128" min="0" step="1" value="60" /></div> */}
                        <div id="clear"></div>
                    </div>
                    <div class="flat-slider-wrapper">
                        <div class="flat-slider-description">
                            <p>hue</p>
                        </div>
                        {/* <div class="flat-slider" id="hue-slider"><input type="range" class="flat-slider-horizontal" id="hue-slider-input" max="40" min="-40" step="1" value="0" /></div> */}
                        <div id="clear"></div>
                    </div>
                    <div class="flat-slider-wrapper">
                        <div class="flat-slider-description">
                            <p>gamma</p>
                        </div>
                        {/* <div class="flat-slider" id="gamma-slider"><input type="range" class="flat-slider-horizontal" id="gamma-slider-input" max="500" min="72" step="1" value="100" /></div> */}
                        <div id="clear"></div>
                    </div>
                    <div class="flat-slider-wrapper">
                        <div class="flat-slider-description">
                            <p>gain</p>
                        </div>
                        {/* <div class="flat-slider" id="gain-slider"><input type="range" class="flat-slider-horizontal" id="gain-slider-input" max="100" min="0" step="1" value="0" /></div> */}
                        <div id="clear"></div>
                    </div>
                    <div class="flat-slider-wrapper">
                        <div class="flat-slider-description">
                            <p>sharpness</p>
                        </div>
                        {/* <div class="flat-slider" id="sharpness-slider"><input type="range" class="flat-slider-horizontal" id="sharpness-slider-input" max="6" min="0" step="1" value="2" /></div> */}
                        <div id="clear"></div>
                    </div>
                </div>
            </li>


            <li>
                <button class="accordion">Language</button>
                <div class="panel">
                    <form>
                        <div class="form-group">
                            <div class="flagstrap" id="languageSelector" data-input-name="country" data-selected-country="US">
                            </div>
                        </div>
                    </form>
                </div>
            </li>

            <li>
                <button class="accordion">Advanced Interface</button>
                <div class="panel">
                    <div class="tg-list-description">
                        <p id="settings.advanced-interface" class="localised">Advanced Interface</p>
                    </div>
                    <div class="tg-list-button">
                        <input id="advanced-interface-button" type="checkbox" class="tgl tgl-flat" />
                        <label for="advanced-interface-button" class="tgl-btn"></label>
                    </div>
                </div>
            </li>

            <li>
                <button class="accordion">Photography</button>
                <div class="panel">
                    <div class="tg-list-description">
                        <p id="settings.photography" class="localised">Photography</p>
                    </div>
                    <div class="tg-list-button">
                        <input id="photography-button" type="checkbox" class="tgl tgl-flat" />
                        <label for="photography-button" class="tgl-btn"></label>
                    </div>
                </div>
            </li>

            <li>
                <button class="accordion">Console</button>
                <div class="panel">
                    <button id="open-console-button">open console</button>
                </div>
            </li>

            <li>
                <button class="accordion">About</button>
                <div class="panel">
                    <p>something about us</p>
                </div>
            </li>
        </ul>
    </nav>

