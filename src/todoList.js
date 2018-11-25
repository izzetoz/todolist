import React, { Component } from 'react';

export class TodoList extends Component {


    render (){
        const myList = ["ders 1", "ders 2"];
        return (
            <div>Ders
                <li>
                    {myList[0]} 
                </li>

                <li>
                    {myList[1]}
                </li>

            </div>
            

        );
    } 
        

}