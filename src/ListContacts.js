import React from "react";
import Button from "react-bootstrap/lib/Button";
class ListContacts extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
            return(
                <div className="container">
                <ul className="list-group">
                    {this.props.contacts.map((item,index)=>{
                        return <li className="list-group-item" key={item.id}>
                                <div className="row">
                                    <div className="col-sm-1">
                                    <img src={item.avatarURL} className="iconImage" alt="Cinque Terre"/></div>
                                    <div className="col-sm-9">
                                        <p>{item.name}</p>
                                        <p>{item.email}</p>
                                    </div>
                                    <div className="col-sm-2">
                                     <Button onClick={()=>this.props.handleRemove(item)}>Remove</Button>
                                    </div>
                                </div>
                            </li>
                    })}
                </ul>
                </div>
            );
        }
}

export default ListContacts;