import React, {Component} from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import {fetchEachFarmer} from '../actions';
import {connect} from 'react-redux';

class EachFarmer extends Component{
    constructor(props){
        super(props);
        this.state={
            search: "",
        }
    }

    componentDidMount(){
        console.log('ID in Dashboard:',this.props.match.params.id);
        console.log('Courses in state:',this.state.courses);
        console.log('&&&&Courses in Store in Dashboard:',this.props.courses);
        this.props.fetchEachFarmer()
    }

    onSearchTextChange = (e) => {
        this.setState({search:e.target.value})
    }

    render(){
        console.log('PROPS in Dashboard:',this.props);
        console.log('COURSES IN STATE:->',this.props);

        let filteredFarmers = this.state.search!==""
          ? this.props.farmers.filter(u => u.firstName.match(new RegExp(this.state.search)))
          : this.props.farmers;

        //console.log('Filtered Courses:', filteredCourses);

        let props = {
            userid:this.props.match.params.id,
            is_faculty:this.props.is_faculty
        }
        
        // let farmerItems = filteredFarmers.map(eachFarmer=>{
        //     return(
        //         <div>
        //             <div className="row">
        //                 {/* <div class="card" style="width: 18rem;">
        //                     <img class="card-img-top" src="..." alt="Card image cap"/>
        //                     <div class="card-body">
        //                         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //                     </div>
        //                 </div> */}
        //                     <div className="col-md-1">
        //                     </div>
        //                     <div className="col-md-5 mycard">
        //                         <div className="card" style={{width: "22"+"rem"}}>
        //                             <img src={eachFarmer.img} className="card-img-top"/>
        //                             <div className="card-body">
        //                                 {/* <h5 className="card-title myCardTitle">{eachFarmer.username}</h5> */}
        //                                  <p className="card-text mycard"><b>{eachFarmer.firstName}</b></p>
        //                                  {/* <p className="card-text mycard"><b>{eachFarmer.email}</b></p> */}
        //                             </div>
        //                         </div>
        //                     </div>
        //             </div><br/>
        //         </div>
        //     )
        // });
        return(
            <div>
                <Sidebar {...props}/>
                <div className="dashboard-container container">
                    <div className="row">
                        <div className="col-md-2">
                        </div>
                        <div className="col-md-4">
                            <img src="https://previews.123rf.com/images/hermandesign2015/hermandesign20151706/hermandesign2015170600062/79452046-cartoon-young-farmer-holding-rake.jpg" width="300" height="300"/>
                        </div>
                        <div className="col-md-3">
                            <h4>First Name: Harry</h4> <br/>
                            <h4>Last Name: Peterson</h4><br/>
                            <h4>Email: user1@smartag</h4><br/>
                            <h4>City: Fairfield</h4><br/>
                            <h4>State: California</h4><br/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    eachFarmer:state.eachFarmer,
});

export default connect(mapStateToProps, {fetchEachFarmer})(EachFarmer);