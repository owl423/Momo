// 유저맵 정보 저장하는 vuex store module
// user_map
export default {
    state: {
      map_list: [], // 서버에서 제공 받은 유저의 맵리스트
      map_pk: null, // 서버에 저장돼 있는 해당 map의 pk 값
      current_marker: null, // 현재 유저가 선택한 마커.
      current_pin: null,
      markers: [],  // google map api의 new google.maps.Marker() 으로 생성한 marker 객체 리스트
      map : null, // google map api의 new google.maps.Map() 으로 생성한 google.map객체
      lat_lng : null // google map api의  new google.maps.LatLng() 으로 생성한 google.LatLng객체
    },
    getters: { // data 가져오는 함수들 정의 한 곳
      map_list(state){
        return state.map_list;
      },
      markers(state){
        return state.markers;
      },
      map(state){
        return state.map;
      },
      lat_lng(state){
        return state.lat_lng;
      },
      current_marker(state){
        return state.current_marker;
      },
      current_pin(state){
        return state.current_pin;
      }
    },
    mutations: { // 지역(모듈 내) state를 관리하는 함수 정의
      setMap(state, map){
        state.map = map;
      },
      // map_list 중에 사용자가 고른 map의 pk값을 저장함
      setMapPK(state, name){
        for(let i = 0, l = state.map_list.length; i < l; i++){
          if(state.map_list[i].map_name === name){
            state.map_pk = state.map_list[i].pk;
            break;
          }
        }
      },
      setMapPin(state, payload){
        for(let i = 0, l = state.map_list.length; i < l ; i++){
          if(state.map_list[i].pk === payload.map_pk){
            state.map_list[i].pin_list.push(payload.pin);
          }
        }
      },
      setLatLng(state, lat_lng){
        state.lat_lng = lat_lng;
      },
      // 하나의 마커를 화면상 지도에만 찍음
      setCurrentMarker(state, marker){
        state.current_marker = marker;
        marker.setMap(state.map);
      },
      removeCurrentMarker(state, marker){
        marker.setMap(null);
      },
      // 마커list 를 화면상 지도에만 찍음
      setMarkers(state){
        state.markers.forEach(function(marker){
          marker.setMap(state.map);
        });
      },
      // map_list에 새로 생성한 맵을 추가함
      pushMapList(state, user_map){
        state.map_list.push(user_map);
      },
      // 지도에서 선택한 마커를 리스트의 마지막에 push
      pushMarker(state, marker){
        state.markers.push(marker);
      },
      // 지도에서 선택한 마지막 마커를 pop
      popMarker(state, marker){
        state.markers.pop();
      },
      // 마커를 화면상 지도에서만 지움
      removeMarkers(state){
        if(state.markers.length !== 0){
          state.markers.forEach(function(marker){
            marker.setMap(null);
          })
        }
      },
    },
    actions: { // 전역 state 접근 가능한 함수 정의 (비동기 가능)
      selectedPinInfo({state}, {lat, lng}){
        return new Promise(function(resolve, reject){
          console.log('selectedPinInfo')
          state.map_list.forEach(function(map){
            map.pin_list.forEach(function(pin){
              // 문자열 값을 숫자로 변환 하여 비교
              let place_lat = (+pin.place.lat).toFixed(5);
              let place_lng = (+pin.place.lng).toFixed(5);
              if( (place_lat === lat.toFixed(5)) && ( place_lng === lng.toFixed(5) ) ){
                console.log('pin', pin);
                state.current_pin = pin;
                resolve();
              }
            })
          });
        })
      },
      addMarkerClickEvent({state, rootState, commit, dispatch}, marker){
        google.maps.event.addListener(marker, 'click', function(e){
          let lat = e.latLng.lat();
          let lng = e.latLng.lng();
          console.log('lat, lng: ', lat, ', ', lng);
          dispatch('selectedPinInfo', {lat, lng}).then(function(){
            rootState.view_state.is_user_menu_state = false;
            rootState.view_state.is_side_state = true;
          }).catch(function(){
            console.log('xxxxxx');
          })
        });
      },
      mapPinMark({state, rootState, commit, dispatch}){
        commit('removeMarkers');
        state.map_list.forEach(function(map){
          map.pin_list.forEach(function(pin){
            let lat_lng = new google.maps.LatLng(pin.place.lat, pin.place.lng);
            let marker = new google.maps.Marker({
              position: lat_lng,
              map : state.map,
              title : map.map_name,
              icon : rootState.icon_color[pin.pin_label]
            });
            state.markers.push(marker);
            dispatch('addMarkerClickEvent', marker);
          })
        })
      },
      // 맵리스트를 가지고 오고 pin을 찍어주기 위한 action
      mapListUpdateAction({state, commit, rootState, dispatch}, axios){
        let user_pk = sessionStorage.getItem('user_pk');
        let url = `${rootState.url}/api/member/${user_pk}`;
        axios.get(url)
        .then(function(res){
          state.map_list = res.data.map_list;
          dispatch('mapPinMark');
        })
        .catch(function(err){
          console.error('mapListUpdate get error msg : ', err.response);
        })
      },
      // 맵 이름과 맵 설명 등록하는 함수
      mapRegister({state, commit, rootState}, payload){
        let url = `${rootState.url}/api/map/`;
        payload.axios.post(url, {
          map_name : payload.map_name,
          description : payload.map_description,
          is_private: false
        })
        .then(function(res){
          commit('pushMapList', res.data);
        })
        .catch(function(err){
          console.error('mapRegister', err.response);
        })
      },
      // 지도에 마커를 찍을 때 해당 마커를 하나씩만 찍게 해주는 함수
      oneMarker({state, commit, rootState, dispatch}){
        state.map.addListener('click', function(e){
          console.log(e);
          if(!rootState.view_state.is_pincheck_menu_state){
            let marker = new google.maps.Marker({
              position: e.latLng,
            });
            commit('setCurrentMarker', marker);
            commit('setLatLng', e.latLng)
            rootState.view_state.is_pincheck_menu_state = true;
          }else{
            commit('removeCurrentMarker', state.current_marker);
            rootState.view_state.is_pincheck_menu_state = false;            
          }
        })
      },
      // 핀 등록 action
      pinRegister({state, commit, rootState, dispatch}, payload){
        let url = `${rootState.url}/api/pin/`;
        let lat = state.lat_lng.lat();
        let lng = state.lat_lng.lng();
        commit('setMapPK', payload.selected);
        if(!payload.selected || !payload.pin_name.trim() || !state.map_pk){
          window.alert('카테고리, 핀이름, 지도를 선택했는지 확인해 주세요');
        }else{
          payload.axios.post(url, {
            pin : {
              pin_name : payload.pin_name,
              map : state.map_pk,
              pin_label: payload.selected_color
            },
            place : {
              lat,
              lng
            }
          })
          .then(function(res){
            commit('setMapPin', {map_pk : state.map_pk, pin : res.data});
            commit('removeCurrentMarker', state.current_marker);
            let marker = new google.maps.Marker({
              position: state.lat_lng,
              map: state.map,
              title: payload.selected,
              icon: rootState.icon_color[res.data.pin_label]
            });
            dispatch('addMarkerClickEvent', marker);
            window.alert('위치가 등록 됐습니다.');
            rootState.view_state.is_pincheck_menu_state = false;
            rootState.view_state.is_modal_pin_register_state = false;
          })
          .catch(function(err){
            console.log(err.response);
          });
        }
      },
      // 지도 삭제 action
      mapRemove({state, rootState, dispatch}, payload){
        let url = `${rootState.url}/api/map/${state.map_list[payload.map_index].pk}`;
        payload.axios.delete(url)
        .then(function(res){
          console.log(res);
          dispatch('mapListUpdateAction', payload.axios);
        })
      },
      // 검색한 장소 선택 action
      selectedPlace({state, rootState, dispatch, commit}, {place}){
        console.log('place', place);
        // 현재 선택된 마커가 있으면 지우고
        if(state.current_marker){
          commit('removeCurrentMarker', state.current_marker);
        }
        // 검색된 장소의 위도 경도값으로 객체 만듦
        let lat_lng = new google.maps.LatLng(place.lat, place.lng);
        // 마커 위치 지정해주고
        let marker = new google.maps.Marker({position: lat_lng});
        state.current_marker = marker;
        commit('setLatLng', lat_lng);
        commit('setCurrentMarker', marker);
        state.map.panTo(lat_lng);
        rootState.view_state.is_pincheck_menu_state = true;
      },
      moveMapPinPlace({state, rootState, dispatch, commit}, {place}){
        let lat_lng = new google.maps.LatLng(place.lat, place.lng);
        state.map.panTo(lat_lng);
      },
      imageRegister({state, rootState, dispatch, commit}, {axios, file}){
        let url = `${rootState.url}/api/post/`;
        axios.post(url, {
          pin: state.current_pin.pk,
          photo: file,
        })
        .then(function(res){
          console.log(res);
          dispatch('mapListUpdateAction', axios);
        })
        .catch(function(err){
          console.log(err.response);
        })
      }
    }
}

