// 유저맵 정보 저장하는 vuex store module
// user_map
export default {
    state: {
      map_list: [], // 서버에서 제공 받은 유저의 맵리스트
      map_pk: null, // 서버에 저장돼 있는 해당 map의 pk 값
      markers: [],  // google map api의 new google.maps.Marker() 으로 생성한 marker 객체 리스트
      map : null, // google map api의 new google.maps.Map() 으로 생성한 google.map객체
      lat_lng : null // google map api의  new google.maps.LatLng() 으로 생성한 google.LatLng객체
    },
    getters: {
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
      }
    },
    mutations: {
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
      // 마커를 화면상 지도에만 찍음
      setMarkers(state){
        state.markers.forEach(function(marker){
          marker.setMap(state.map);
        });
      },
      // 마커를 화면상 지도에서만 지움
      removeMarkers(state){
        state.markers.forEach(function(marker){
          marker.setMap(null);
        })
      },
      mapListUpdate(state, axios){
        let user_id = sessionStorage.getItem('user_pk');
        let url = `http://eb-client.ap-northeast-2.elasticbeanstalk.com/api/member/${user_id}`;
        axios.get(url)
        .then(function(res){
          state.map_list = res.data.map_list;
          console.log('map_list', state.map_list);
        })
        .catch(function(err){
          console.error('mapListUpdate get error msg : ', err.response);
        })
      },
      // 통신해서 받은 map list의 pin을 찍어줌
      
    },
    actions: {
      mapPinMark({state, rootState}){
        state.map_list.forEach(function(map){
          map.pin_list.forEach(function(pin){
            let lat_lng = new google.maps.LatLng(pin.place.lat, pin.place.lng);
            let marker = new google.maps.Marker({
              position: lat_lng,
              map : state.map,
              title : map.map_name
            });
            state.markers.push(marker);
            google.maps.event.addListener(marker, 'click', function(e){
              rootState.view_state.is_side_state = true;
            })
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
          console.log('mapRegister res', res);
          commit('pushMapList', res.data);
        })
        .catch(function(err){
          console.error('mapRegister', err.response);
        })
      },
      // 지도에 마커를 찍을 때 해당 마커를 하나씩만 찍게 해주는 함수
      oneMarker({state, commit, rootState}){
        console.log(rootState);
        state.map.addListener('click', function(e){
          console.log(e);
          if(!rootState.view_state.is_pincheck_menu_state){
            let marker = new google.maps.Marker({
              position: e.latLng,
              map: state.map
            });
            commit('setLatLng', e.latLng)
            commit('pushMarker', marker);
            rootState.view_state.is_pincheck_menu_state = true;
          }else{
            commit('removeMarkers');
            commit('popMarker');
            commit('setMarkers');
            rootState.view_state.is_pincheck_menu_state = false;            
          }
        })
      },
      pinRegister({state, commit, rootState}, payload){
        let url = `${rootState.url}/api/pin/`;
        console.log(payload);
        let lat = state.lat_lng.lat();
        let lng = state.lat_lng.lng();
        commit('setMapPK', payload.selected);
        console.log(state.map_pk);
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
            console.log(res);
            commit('setMapPin', {map_pk : state.map_pk, pin : res.data});
            window.alert('위치가 등록 됐습니다.');
            rootState.view_state.is_pincheck_menu_state = false;
            rootState.view_state.is_modal_pin_register_state = false;
          })
          .catch(function(err){
            console.log(err.response);
          });
        }
      }
    }
}

