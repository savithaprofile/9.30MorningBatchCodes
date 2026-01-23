import React,{useEffect, useState} from 'react'

const App = () => {
  const [likeSam,setLikeSam]= useState(0);
  const [likeRub,setLikeRub] = useState(100);

  console.log("A state is changed")


  useEffect(()=>{
     console.log("Rubinni is liked")
  },[]);

  return (
    <div>
      <div> Shamiksha 
        <button onClick={() => setLikeSam(likeSam + 1)}>Like</button> 
        <div>Like Count : {likeSam}</div>  
      </div>

      
      <div> 
        Rubini 
        <button onClick={() => setLikeRub(likeRub + 1)}>Like</button> 
        <div>Like Count : {likeRub}</div>
          </div>
    </div>
  )
}

export default App


// useEffect styntax:
// useEffect(()=>{ code goes here},[]);
// empty dependency[]==== runs only once or Initial render
// one State as dependency [stateName] == runs only if that state is changed
// multi state as dependency [stateName1, stateName2, stateName] == runs if any state changes