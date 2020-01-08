
// ///************** GOOD WORKING CODE ***************************//
// import React, { useState, useEffect, Component } from "react";
// import ReactMapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
// import * as parkDate from "../../data/skateboard-parks.json";
// import ControlPanel from './control-panel';

// const navStyle = {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     padding: '10px'
//   };

// export default class UberMap extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             viewport: {
//                 latitude: 45.4211,
//                 longitude: -75.6903,
//                 width: "100vw",
//                 height: "100vh",
//                 zoom: 10,
//                 bearing: 0,
//                 pitch: 0,
//                 selectedPark: null 
//             },
//             marker: {
//                 longitude: -75.3372987731628,
//                 latitude: 45.383321536272049
//               },
//             events: {}
//         }
//     }

//     setViewport = (viewport) => {
//         this.setState({
//             viewport:viewport
//         })
//     }

//     setSelectedPark1 = (park) => {
//         this.setState({
//             selectedPark: park
//         })
//     }

//     setSelectedPark = (e) => {
//         const listener = e => {
//             if (e.key === "Escape") {
//               this.setState({
//                   selectedPark: null
//               })
//             }
//         }
//         if (e.key === "Escape") {
//             this.setState({
//                 selectedPark: null
//             });
//           }
//           window.addEventListener("keydown", listener);
//           return () => {
//             window.removeEventListener("keydown", listener);
//           };
//     }

//   //DRAGGABLE EVENTS
//   _updateViewport = viewport => {
//     this.setState({viewport});
//   };

//   _logDragEvent = (name, event)  => {
//     this.setState({
//       events: {
//         ...this.state.events,
//         [name]: event.lngLat
//       }
//     });
//   }

//   _onMarkerDragStart = event => {
//     this._logDragEvent('onDragStart', event);
//   };

//   _onMarkerDrag = event => {
//     this._logDragEvent('onDrag', event);
//   };

//   _onMarkerDragEnd = event => {
//     this._logDragEvent('onDragEnd', event);
//     this.setState({
//       marker: {
//         longitude: event.lngLat[0],
//         latitude: event.lngLat[1]
//       }
//     });
//   };

//   render(){
//     const {viewport, marker} = this.state;
//     return (
//         <div>
//           <div
//                 class="container-fluid"
//                 id="ubermap"
//               >
//                 <ReactMapGL
//                   {...viewport}
//                   mapboxApiAccessToken="pk.eyJ1IjoibGFrc2htaTI4MTIiLCJhIjoiY2p3bnZsNjUyMGc0ZTQxbnN4cHNmZzMwbiJ9.lxhRlOKWiWXaHFz5UcKnrQ"
//                   mapStyle="mapbox://styles/lakshmi2812/cjwo328dn6hly1cqp70o8jnqw"
//                   onViewportChange={viewport => {
//                       this.setViewport(viewport);
//                   }}
//                   className="ubermapPosition"
//                 >
//             {parkDate.features.map(park => (
//             <Marker
//                 key={park.properties.PARK_ID}
//                 latitude={park.geometry.coordinates[1]}
//                 longitude={park.geometry.coordinates[0]}
//                 draggable
//                 onDragStart={this._onMarkerDragStart}
//                 onDrag={this._onMarkerDrag}
//                 onDragEnd={this._onMarkerDragEnd}
//             >
//                 <button
//                 className="marker-btn"
//                 onClick={e => {
//                     e.preventDefault();
//                     this.setSelectedPark1(park);
//                 }}
//                 >
//                 <img src="/3d-sensor.svg" alt="Skate Park Icon" />
//                 </button>
//             </Marker>
//             ))}
//              { <Marker
//                 key="960"
//                 latitude={marker.latitude}
//                 longitude={marker.longitude}
//                 draggable
//                 onDragStart={this._onMarkerDragStart}
//                 onDrag={this._onMarkerDrag}
//                 onDragEnd={this._onMarkerDragEnd}
//             >
//                 <button
//                 className="marker-btn"
//                 // onClick={e => {
//                 //     e.preventDefault();
//                 //     this.setSelectedPark1(park);
//                 //}}
//                 >
//                 <img src="/3d-sensor.svg" alt="Skate Park Icon" />
//                 </button>
//             </Marker> }
//             <div className="nav" style={navStyle}>
//                 <NavigationControl onViewportChange={this._updateViewport} />
//             </div>
//             {this.state.selectedPark ? (
//             <Popup
//                 latitude={this.state.selectedPark.geometry.coordinates[1]}
//                 longitude={this.state.selectedPark.geometry.coordinates[0]}
//                 onClose={() => {
//                 this.setSelectedPark1(null);
//                 }}
//             >
//                 <div>
//                 <h2>{this.state.selectedPark.properties.NAME}</h2>
//                 <p>{this.state.selectedPark.properties.DESCRIPTIO}</p>
//                 </div>
//             </Popup>
//             ) : null}
//             <ControlPanel
//             containerComponent={this.props.containerComponent}
//             events={this.state.events}
//             />
//         </ReactMapGL>
//               </div>
//             </div>
//         // </div>
//     );
//             }
// }

// //export default UberMap;


// // import React, {Component} from 'react';
// // import {render} from 'react-dom';
// // import MapGL, {Marker, NavigationControl} from 'react-map-gl';

// // import ControlPanel from './control-panel';
// // import Pin from './pin';

// // const TOKEN = ''; // Set your mapbox token here

// // const navStyle = {
// //   position: 'absolute',
// //   top: 0,
// //   left: 0,
// //   padding: '10px'
// // };

// // export default class UberMap extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       viewport: {
// //         latitude: 37.785164,
// //         longitude: -100,
// //         zoom: 3.5,
// //         bearing: 0,
// //         pitch: 0
// //       },
// //       marker: {
// //         latitude: 37.785164,
// //         longitude: -100
// //       },
// //       events: {}
// //     };
// //   }

// //   _updateViewport = viewport => {
// //     this.setState({viewport});
// //   };

// //   _logDragEvent(name, event) {
// //     this.setState({
// //       events: {
// //         ...this.state.events,
// //         [name]: event.lngLat
// //       }
// //     });
// //   }

// //   _onMarkerDragStart = event => {
// //     this._logDragEvent('onDragStart', event);
// //   };

// //   _onMarkerDrag = event => {
// //     this._logDragEvent('onDrag', event);
// //   };

// //   _onMarkerDragEnd = event => {
// //     this._logDragEvent('onDragEnd', event);
// //     this.setState({
// //       marker: {
// //         longitude: event.lngLat[0],
// //         latitude: event.lngLat[1]
// //       }
// //     });
// //   };

// //   render() {
// //     const {viewport, marker} = this.state;

// //     return (
// //       <MapGL
// //         {...viewport}
// //         width="100%"
// //         height="100%"
// //         mapStyle="mapbox://styles/lakshmi2812/cjwo328dn6hly1cqp70o8jnqw"
// //         onViewportChange={this._updateViewport}
// //         mapboxApiAccessToken="pk.eyJ1IjoibGFrc2htaTI4MTIiLCJhIjoiY2p3bnZsNjUyMGc0ZTQxbnN4cHNmZzMwbiJ9.lxhRlOKWiWXaHFz5UcKnrQ"
// //       >
// //         <Marker
// //           longitude={marker.longitude}
// //           latitude={marker.latitude}
// //           offsetTop={-20}
// //           offsetLeft={-10}
// //           draggable
// //           onDragStart={this._onMarkerDragStart}
// //           onDrag={this._onMarkerDrag}
// //           onDragEnd={this._onMarkerDragEnd}
// //         >
// //           <Pin size={20} />
// //         </Marker>

// //         <div className="nav" style={navStyle}>
// //           <NavigationControl onViewportChange={this._updateViewport} />
// //         </div>

// //         <ControlPanel
// //           containerComponent={this.props.containerComponent}
// //           events={this.state.events}
// //         />
// //       </MapGL>
// //     );
// //   }
// // }

// // export function renderToDom(container) {
// //   render(<UberMap />, container);
// // }





