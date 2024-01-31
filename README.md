
# Vanilla Redux

* Learning Vanilla-Redux
* https://nomadcoders.co/redux-for-beginners/lectures/1715 의 강의를 토대로 학습한 내용 입니다.

* vanilla JavaScript 와 리덕스로 counter, To Do List 기능을 개발하였습니다.
  
<br/>
<br/>

![redux 시연](https://github.com/min-code-han/vanilla-redux/assets/72747026/f2cf721e-78bf-4105-8fb4-f761076018d5)



## 학습내용
* 기본적으로 redux는 data를 관리하는것을 도와주는 역활을 하기 위해 만들어 졌다.

  

### STORE

* store란 데이터(state) 들을 담아두는 곳이다.

* 여기서 데이터, state란 어플리케이션 에서 바뀌는 데이터를 의미 한다.

* createStore 를 활용하여 store를 만들고 나면, 해당 store는 reducer 라는 함수를 필요로 한다.

* store를 console.log 에 찍어보면 4개의 함수를 가지고 있다.

  * dispatch(action)

    * ```
      store.dispatch({type: "ACTIONNAME"})
      ```

  * getState()

    * ```
      const reducer = (state, action) => {
          return "HELLO👩"
      }
      
      const store = createStore(reducer)
      
      console.log(store.getState())   //"HELLO👩"
      ```

  * replaceReducer(nextReducer)

  * subscribe(listner)

    * Store 안에 있는 변화들을 알게 해줌.



### Reducer

* **reducer는 함수이다.**
* 어떤함수? data를 수정 하는 함수
  * action을 인자로 받고, 데이터의 수정은 action 을 통해 진행된다.
  * action 은 store의 dispatch 함수를 통해 객체 형태로 전달할수 있다.
* 초기 reducer 의 state 는 undefined 로 할당된다.
