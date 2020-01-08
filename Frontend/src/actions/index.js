import axios from "axios";

export const FETCH_USER = "FETCH_USER";
export const FETCH_FARMERS = "FETCH_FARMERS";
export const FETCH_STUDENT = "FETCH_STUDENT";
export const FETCH_FACULTY = "FETCH_FACULTY";
export const FETCH_DASHBOARD = "FETCH_DASHBOARD";
export const FETCH_PROFILE = "FETCH_PROFILE";
export const POST_PROFILE = "POST_PROFILE";
export const FETCH_NODES = "FETCH_NODES";
export const FETCH_EACH_NODE = "FETCH_EACH_NODE";
export const FETCH_EACH_SENSOR = "FETCH_EACH_SENSOR";
export const FETCH_EACH_FARMER = "FETCH_EACH_FARMER";
export const FETCH_FARMER_NODES = "FETCH_FARMER_NODES";
export const FETCH_FARMER_SENSORS = "FETCH_FARMER_SENSORS";
export const FETCH_FARMER_NODE_SENSORS = "FETCH_FARMER_NODE_SENSORS";
export const POST_COURSE = "POST_COURSE";
export const POST_ASSG = "POST_COURSE";
export const REG_COURSE = "REG_COURSE";
export const FETCH_EACH_COURSE = "FETCH_EACH_COURSE";
export const FETCH_ASSG = "FETCH_ASSG";
export const FETCH_EACH_ASSG = "FETCH_EACH_ASSG";
export const UPLOAD_ASSG = "UPLOAD_ASSG";
export const GRADE_ASSG = "GRADE_ASSG";
export const CREATE_SENSOR = "CREATE_SENSOR";

export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';

export const RECEIVE_ISOCHRONES_RESULTS = 'RECEIVE_ISOCHRONES_RESULTS'
export const REQUEST_ISOCHRONES_RESULTS = 'REQUEST_ISOCHRONES_RESULTS'
export const UPDATE_SWITCH = 'UPDATE_SWITCH';
export const UPDATE_PH = 'UPDATE_PH';


export const updateSettings = payload => ({
  type: UPDATE_SETTINGS,
  ...payload
})


const ROOT_URL = "http://localhost:3001";


/************ ISOCHRONE ************************************
 * ISOCHRONE ACTIONS
***********************************************************/

// use these or add your own credentials
const hereAppCode = '0XXQyxbiCjVU7jN2URXuhg'
const hereAppId = 'yATlKFDZwdLtjHzyTeCK'

export const UPDATE_TEXTINPUT = 'UPDATE_TEXTINPUT'
export const RECEIVE_GEOCODE_RESULTS = 'RECEIVE_GEOCODE_RESULTS'
export const REQUEST_GEOCODE_RESULTS = 'REQUEST_GEOCODE_RESULTS'
export const UPDATE_CENTER = 'UPDATE_CENTER'

export const fetchHereGeocode = payload => dispatch => {

  // It dispatches a further action to let our state know that requests are about to be made (loading spinner listens to this!)
  dispatch(requestGeocodeResults())

  // we define our url and parameters to be sent along
  let url = new URL('https://geocoder.api.here.com/6.2/geocode.json'),
    params = {
      app_id: hereAppId,
      app_code: hereAppCode,
      searchtext: payload.inputValue
    }

  url.search = new URLSearchParams(params)

  // we use the fetch API to call HERE Maps with our parameters
  return fetch(url)
    // when a response is returned we extract the json data
    .then(response => response.json())
    // and this data we dispatch for processing in processGeocodeResponse
    .then(data => dispatch(processGeocodeResponse(data)))
    .catch(error => console.error(error))
}

const parseGeocodeResponse = (json, latLng) => {
  // parsing the response, just a simple example, this could be much more complex as the response from HERE is fairly ritch
  if (json.Response && json.Response.View.length > 0) {
    let processedResults = []

    for (const address of json.Response.View[0].Result) {
      if (address.Location && address.Location.LocationType === 'point') {
        processedResults.push({
          title: address.Location.Address.Label,
          description: address.Location.Address.PostalCode,
          displayposition: {
            lat: address.Location.DisplayPosition.Latitude,
            lng: address.Location.DisplayPosition.Longitude
          }
        })
      }
    }
    return processedResults
  }
}

const processGeocodeResponse = (
  json
) => dispatch => {
  // parse the json file and dispatch the results to receiveGeocodeResults which will be reduced
  const results = parseGeocodeResponse(json)
  // let's let the loading spinner now that it doesn't have to spin anymore
  dispatch(receiveGeocodeResults(results))
}

export const receiveGeocodeResults = payload => ({
  type: RECEIVE_GEOCODE_RESULTS,
  results: payload
})

export const requestGeocodeResults = payload => ({
  type: REQUEST_GEOCODE_RESULTS,
  ...payload
})

export const updateTextInput = payload => ({
  type: UPDATE_TEXTINPUT,
  payload
})

export const updateCenter = payload => ({
   type: UPDATE_CENTER,
   ...payload
})

///////////////////

/******* STATUS SWITCH ******/

export function updateSwitch(switchState){
  console.log('INSIDE UPDATE SWITCH ACTION:');
  return function(dispatch) {
      dispatch({
        type: UPDATE_SWITCH,
        payload: JSON.parse(switchState)
      });
  }; 
}

export function updatePH(ph){
  console.log('INSIDE UPDATE SWITCH ACTION:');
  return function(dispatch) {
      dispatch({
        type: UPDATE_PH,
        payload: JSON.parse(ph)
      });
  }; 
}


export const fetchHereIsochrones = payload => dispatch => {

  // we let the app know that we are calling the isochrones API
  dispatch(requestIsochronesResults())

  // we generate our GET parameters from the settigns
  const isolineParameters = processIsolineSettings(payload.settings)

  // as seen before :)
  let url = new URL(
      'https://isoline.route.api.here.com/routing/7.2/calculateisoline.json'
    ),
    params = {
      app_id: hereAppId,
      app_code: hereAppCode,
      ...isolineParameters
    }

  url.search = new URLSearchParams(params)

  return fetch(url)
    .then(response => response.json())
    .then(data =>
      dispatch(processIsochronesResponse(data))
    )
    .catch(error => console.error(error))
}


const parseIsochronesResponse = json => {
  if (json.response && json.response.isoline.length > 0) {
    const isolinesReversed = json.response.isoline.reverse()
    return isolinesReversed
  }
  return []
}

const processIsochronesResponse = (json) => dispatch => {
  // a small trick: we reverse the polygons that the largest comes first :-)
  const results = parseIsochronesResponse(json)

  // we have received our results
  dispatch(receiveIsochronesResults(results))
}


export const receiveIsochronesResults = results => ({
  type: RECEIVE_ISOCHRONES_RESULTS,
  results: results
})

const processIsolineSettings = (settings) => {
  let isolineParameters = {}

  // we prepare the GET parameters according to the HERE Maps Isochrones API docs
  isolineParameters.mode = `fastest;${settings.mode};traffic:${settings.traffic};`
  isolineParameters.rangetype = settings.rangetype

  isolineParameters.start = settings.isochronesCenter.lat + ',' + settings.isochronesCenter.lng

  // seconds
  const ranges = []
  if (settings.rangetype === 'time') {
    let rangeInSeconds = settings.range.value * 60
    const intervalInSeconds = settings.interval.value * 60

    // to generate ranges!
    while (rangeInSeconds > 0) {
      ranges.push(rangeInSeconds)
      rangeInSeconds -= intervalInSeconds
    }

    isolineParameters.range = ranges.join(',')

  // meters
  } else if (settings.rangetype === 'distance') {
    let rangeInMeters = settings.range.value * 1000
    const intervalInMeters = settings.interval.value * 1000

    // to generate ranges!
    while (rangeInMeters > 0) {
      ranges.push(rangeInMeters)
      rangeInMeters -= intervalInMeters
    }

    isolineParameters.range = ranges.join(',')
  }
  return isolineParameters
}

export const requestIsochronesResults = () => ({
  type: REQUEST_ISOCHRONES_RESULTS
})


/********* END OF ISOCHRONE ACTIONS *************/

export function fetchUser(data, callback) {
  console.log("INSIDE Fetch User ACTION!!*");
  return function(dispatch) {
    const response = axios.post(`${ROOT_URL}/users/login`, data);
    // axios.post(`${ROOT_URL}/`,data)
    response.then(res => {
      // if (!res.ok) {
      //   throw new Error(`${re.status} ${res.statusText}`);
      // }
      console.log("Response in fetch user action:", res);
      console.log("userid:", res.data);
      //let token_from_backend = JSON.parse(res.data).jwt_token;
      //console.log('Token from backend:',token_from_backend);
      //localStorage.setItem("token", token_from_backend);
      dispatch({
        type: FETCH_USER,
        payload: JSON.parse(res.data)
      });
      response.then(res => {
        console.log("userid in callback:", JSON.parse(res.data).userid);
        callback(JSON.parse(res.data).userid);
      });
    });
  };
}

export function fetchFarmers(id) {
  console.log("INSIDE ACTION!!*");
  //let token = localStorage.getItem("token");
  return function(dispatch) {
    axios
      .get(`${ROOT_URL}/iot/${id}/farmers`)
      .then(res => {
        if (!res.status === 200) {
          throw new Error(`${res.status} ${res.statusText}`);
        }
        console.log("Response in Fetch Farmers action:", res.data);
        dispatch({
          type: FETCH_FARMERS,
          payload: res.data
        });
      })
      .catch(err => {
        console.log("error in dashboard action:", err);
      });
  };
}

export function fetchDashboard(id) {
  console.log("INSIDE ACTION!!*");
  let token = localStorage.getItem("token");
  return function(dispatch) {
    axios
      .get(`${ROOT_URL}/dashboard/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        if (!res.status === 200) {
          throw new Error(`${res.status} ${res.statusText}`);
        }
        console.log("Response in dashboard action:", res.data);
        dispatch({
          type: FETCH_DASHBOARD,
          payload: res.data
        });
      })
      .catch(err => {
        console.log("error in dashboard action:", err);
      });
  };
}

export function fetchNodes(id) {
  console.log("INSIDE Fetch Course ACTION!!*");
  let token = localStorage.getItem("token");
  return function(dispatch) {
    axios
      .get(`${ROOT_URL}/nodes`)
      .then(res => {
        if (!res.status === 200) {
          throw new Error(`${res.status} ${res.statusText}`);
        }
        console.log("Response in fetch node action:", res);
        dispatch({
          type: FETCH_NODES,
          payload: res.data
        });
      })
      .catch(err => {
        console.log("error in node action:", err);
      });
  };
}

export function fetchEachNode(id) {
  console.log("INSIDE Fetch Course ACTION!!*");
  let token = localStorage.getItem("token");
  return function(dispatch) {
    axios
      .get(`${ROOT_URL}/nodes/${id}`)
      .then(res => {
        if (!res.status === 200) {
          throw new Error(`${res.status} ${res.statusText}`);
        }
        console.log("Response in fetch node action:", res);
        dispatch({
          type: FETCH_EACH_NODE,
          payload: res.data
        });
      })
      .catch(err => {
        console.log("error in node action:", err);
      });
  };
}

export function fetchEachSensor(id) {
  console.log("INSIDE Fetch Each Sensor ACTION!!*");
  // let token = localStorage.getItem("token");
  return function(dispatch) {
    axios
      .get(`${ROOT_URL}/sensors/${id}`)
      .then(res => {
        if (!res.status === 200) {
          throw new Error(`${res.status} ${res.statusText}`);
        }
        console.log("Response in fetch each sensor action:", res);
        dispatch({
          type: FETCH_EACH_SENSOR,
          payload: res.data
        });
      })
      .catch(err => {
        console.log("error in node action:", err);
      });
  };
}

export function fetchEachFarmer(id){
  console.log('INSIDE Fetch Each Sensor ACTION!!*');
  // let token = localStorage.getItem("token");
    return function(dispatch){
      axios.get(`${ROOT_URL}/iot/5cc215d1aee5bb970afcea84/farmers/1`)
      .then(res=>{
        if (!res.status === 200) {
          throw new Error(`${res.status} ${res.statusText}`);
        }
        console.log('Response in fetch each farmer action:',res);
        dispatch({
          type: FETCH_EACH_FARMER,
          payload: res.data
        })
      })
      .catch((err)=>{
          console.log('error in each farmer action:',err)
        })
  }
}

export function fetchFarmerNodes(id) {
  console.log("INSIDE Fetch Course ACTION!!*");
  let token = localStorage.getItem("token");
  return function(dispatch) {
    axios
      .get(`${ROOT_URL}/users/${id}/nodes`)
      .then(res => {
        if (!res.status === 200) {
          throw new Error(`${res.status} ${res.statusText}`);
        }
        console.log("Response in fetch node action:", res);
        dispatch({
          type: FETCH_FARMER_NODES,
          payload: res.data
        });
      })
      .catch(err => {
        console.log("error in node action:", err);
      });
  };
}

export function fetchFarmerSensors(id) {
  return function(dispatch) {
    axios
      .get(`${ROOT_URL}/users/1/nodes/1/sensors`)
      .then(res => {
        if (!res.status === 200) {
          throw new Error(`${res.status} ${res.statusText}`);
        }
        console.log("Response in fetch node action:", res);
        dispatch({
          type: FETCH_FARMER_SENSORS,
          payload: res.data
        });
      })
      .catch(err => {
        console.log("error in node action:", err);
      });
  };
}

export function createSensor(data, callback) {
  return function(dispatch) {
    axios
      .post(`${ROOT_URL}/users/${data.farmerId}/sensors`, data)
      .then(response => {
        console.log("Add Sensor Action!", response);
        dispatch({
          type: CREATE_SENSOR,
          payload: data
        });
      })
      .then(response => {
        callback();
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function fetchEachCourse(id, courseid) {
  console.log("INSIDE Fetch Each Course ACTION!!*");
  let token = localStorage.getItem("token");
  return function(dispatch) {
    console.log("Fetch Each Course!!");
    axios
      .get(`${ROOT_URL}/users/${id}/courses/${courseid}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        if (!res.status === 200) {
          throw new Error(`${res.status} ${res.statusText}`);
        }
        console.log("Response in Fetch Each Course action:", res);
        dispatch({
          type: FETCH_EACH_COURSE,
          payload: res.data
        });
      })
      .catch(err => {
        console.log("error in course action:", err);
      });
  };
}

export function fetchEachAssg(id, courseid, assgid) {
  console.log("INSIDE Fetch Each Assg ACTION!!*");
  let token = localStorage.getItem("token");
  return function(dispatch) {
    console.log("Fetch Each Course!!");
    axios
      .get(`${ROOT_URL}/users/${id}/courses/${courseid}/assgs/${assgid}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        if (!res.status === 200) {
          throw new Error(`${res.status} ${res.statusText}`);
        }
        console.log("Response in Fetch Each Course action:", res);
        dispatch({
          type: FETCH_EACH_ASSG,
          payload: res.data
        });
      })
      .catch(err => {
        console.log("error in fetch each assg action:", err);
      });
  };
}

export function uploadAssg(data, callback) {
  console.log("INSIDE Upload Assg ACTION");
  return function(dispatch) {
    axios({
      method: "post",
      url: `${ROOT_URL}/uploadFile/${data.assgid}`,
      data: data,
      config: { headers: { "Content-Type": "multipart/form-data" } }
    })
      .then(response => {
        if (!response.status === 200) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        console.log("Response for Upload Assg", response);
        dispatch({
          type: UPLOAD_ASSG,
          payload: response.data
        });
        return response;
      })
      .then(res => {
        callback();
      });
  };
}

export function gradeAssg(data, callback) {
  console.log("INSIDE Upload Assg ACTION");
  return function(dispatch) {
    axios({
      method: "post",
      url: `${ROOT_URL}/gradeAssg/${data.assgid}`,
      data: data
    })
      .then(response => {
        if (!response.status === 200) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        console.log("response for Grade Assg", response);
        dispatch({
          type: GRADE_ASSG,
          payload: response.data
        });
        return response;
      })
      .then(res => {
        callback();
      });
  };
}

export function postCourse(data, callback) {
  console.log("INSIDE POST COURSE ACTION");
  console.log("DATA:", data.id);
  return function(dispatch) {
    axios
      .post(`${ROOT_URL}/users/${data.id}/courses`, data)
      .then(response => {
        if (!response.status === 200) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        console.log("response for Post COURSE", response);
        dispatch({
          type: POST_COURSE,
          payload: response.data
        });
        return response;
      })
      .then(res => {
        callback();
      });
  };
}

export function postAssg(data, callback) {
  console.log("INSIDE POST ASSG ACTION");
  console.log("DATA:", data.id);
  return function(dispatch) {
    axios
      .post(`${ROOT_URL}/users/${data.id}/courses/${data.courseid}`, data)
      .then(response => {
        if (!response.status === 200) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        console.log("response for Post COURSE", response);
        dispatch({
          type: POST_ASSG,
          payload: response.data
        });
        return response;
      })
      .then(res => {
        callback();
      });
  };
}

export function regCourse(data, callback) {
  console.log("INSIDE REGISTER COURSE ACTION");
  // console.log('DATA:',data.id);
  return function(dispatch) {
    axios
      .post(`${ROOT_URL}/users/${data.id}/regCourses`, data)
      .then(response => {
        if (!response.status === 200) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        console.log("response for Register COURSE", response);
        dispatch({
          type: REG_COURSE,
          payload: response.data
        });
        return response;
      })
      .then(res => {
        callback();
      });
  };
}

// export function fetchEachCourse(id,courseid){
//   console.log('INSIDE Fetch Each Course ACTION!!*');
//   let token = localStorage.getItem("token");
//     return function(dispatch){
//       axios.get(`${ROOT_URL}/users/${id}/courses/${courseid}`, {
//         headers: {"Authorization" : `Bearer ${token}`}
//       })
//       .then(res=>{
//         if (!res.status === 200) {
//           throw new Error(`${res.status} ${res.statusText}`);
//         }
//         console.log('Response in fetch course action:',res);
//         dispatch({
//           type: FETCH_EACH_COURSE,
//           payload: res.data
//         })
//       })
//       .catch((err)=>{
//           console.log('error in course action:',err)
//       })
//   }
// }

export function fetchProfile(id) {
  let token = localStorage.getItem("token");
  console.log("INSIDE FETCH PROFILE ACTION");
  return function(dispatch) {
    const response = axios.get(`${ROOT_URL}/profiles/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    // axios.post(`${ROOT_URL}/`,data)
    response.then(res => {
      if (!res.status === 200) {
        throw new Error(`${res.status} ${res.statusText}`);
      }
      console.log("response for fetch profile:", res);
      dispatch({
        type: FETCH_PROFILE,
        payload: res.data
      });
      // return res.json()
    });
  };
}

export function postProfile(data, callback) {
  console.log("INSIDE POST PROFILE ACTION");
  console.log("DATA:", data.id);
  return function(dispatch) {
    axios
      .post(`${ROOT_URL}/profiles/${data.id}`, data)
      .then(response => {
        if (!response.status === 200) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        console.log("response for post profile", response);
        dispatch({
          type: POST_PROFILE,
          payload: response.data
        });
        return response;
      })
      .then(res => {
        callback(res.data.user_id);
      });
  };
}

export function studentSignupAction(data, callback) {
  return function(dispatch) {
    axios
      .post(`${ROOT_URL}/signup/student`, data)
      .then(response => {
        console.log("Student Signup Action!", response);
        dispatch({
          type: FETCH_STUDENT,
          payload: data
        });
      })
      .then(response => {
        callback();
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function facultySignupAction(data, callback) {
  return function(dispatch) {
    axios
      .post(`${ROOT_URL}/signup/faculty`, data)
      .then(response => {
        console.log("Faculty Signup Action!", response);
        dispatch({
          type: FETCH_FACULTY,
          payload: data
        });
      })
      .then(response => {
        callback();
      })
      .catch(err => {
        console.log(err);
      });
  };
}
