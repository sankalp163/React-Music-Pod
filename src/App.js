import React from 'react';
import './App.css';
import Buttons from './Buttons';
import Screen from './Screen';
import ZingTouch from 'zingtouch';
import 'lodash';
import $ from 'jquery';

class App extends React.Component
{
    constructor()
    {
        super();
        this.temp_change_in_angle = 0;
        this.temp_selected = 0;
        this.state = {
            options: ['Games', 'Music', 'Settings', 'CoverFlow'],
            change_in_angle: 0,
            selected: 0,
            showPage: -1,
            general_menu: ['Games', 'Music', 'Settings', 'Cover Flow'],
            songs_sub_menu: ['Play Song', 'Artists', 'Albums'],
            current_music_selection: 0,
            song_index: -1,
            
        }
    }

    componentDidMount()
    {
        var zingt = new ZingTouch.Region(document.getElementsByClassName('buttons-container')[0]);
        zingt.bind(document.getElementsByClassName('buttons-container')[0], 'rotate', (event) =>
        {
            //zing touch feature is only working while the side bar is visible
            if (document.getElementsByClassName('screen-menu')[0].classList.contains('width-70'))
            {
                let dist = event.detail.distanceFromLast;
                this.temp_change_in_angle += dist;
                if (this.temp_change_in_angle > 60)
                {
                    this.temp_selected++;
                    this.temp_selected = this.temp_selected % this.state.options.length;
                    this.setState({
                        selected: this.temp_selected,
                       
                    });

                    this.temp_change_in_angle = 0;
                }
                else if (this.temp_change_in_angle < -60)
                {
                    this.temp_selected--;
                    if (this.temp_selected === -1)
                        this.temp_selected = this.state.options.length - 1;

                    this.temp_selected = this.temp_selected % this.state.options.length;
                    this.setState({
                        selected: this.temp_selected,
                      
                    });
                    this.temp_change_in_angle = 0;
                }
            }

        });
    }

    menuButtonClicked = () =>
    {

        let screenMenuClassList = document.getElementsByClassName('screen-menu')[0].classList;
        if (screenMenuClassList.contains('width-70'))
        {
            $('.screen-menu').removeClass('width-70');//hide menu
        }
        else
        {
            $('.screen-menu').addClass('width-70');//show menu
        }
    }

    selectButtonClicked = () =>
    {
        //This button has selection purposes.
    
        if (this.state.selected === 1 && this.state.options.length === 4)
        {
            this.setState(
                {
                    options: this.state.songs_sub_menu,
                    selected: 0,
                    showPage: -1,
                    //No song played
                    song_index: -1,
                }
            );
            this.temp_selected = 0;
            return;
        }
        
        this.setState({
            showPage: this.state.selected,
            //No song played
            song_index: -1,
            selected: 0,
        });
        this.temp_selected = 0;
        this.menuButtonClicked();
       
    }


    leftButtonClicked = () =>
    {
        

        if (this.state.options.length === 3 && document.getElementsByClassName('screen-menu')[0].classList.contains('width-70'))//if the menu is open and it is on the songs page only then if the left button clicked, menu will be changed to general options
            this.setState(
                {
                    options: this.state.general_menu,
                    song_index: -1,
                    selected: 0
                }
            );
    }

    rightButtonClicked = () => //Unless music is being played in the app, the right button will not have any role
    {
    
    }

  
    render()
    {
        return (
            <div className="App">
                <Screen
                    selectedOption={this.state.selected}
                    showPage={this.state.showPage}
                    optionsInMenu={this.state.options}
                    currentMusicSelection={this.state.current_music_selection}
                    
                    

                />
                <Buttons
                    check={this.checker}
                    centerButton={this.centerButton}
                    menuButtonClicked={this.menuButtonClicked}
                    selectButtonClicked={this.selectButtonClicked}
                    leftButtonClicked={this.leftButtonClicked}
                    rightButtonClicked={this.rightButtonClicked}
                    playPauseButtonClicked={this.playPauseButtonClicked}
                />
                
            </div>
        );
    }

}

export default App;

