
  const parseActors =  (actors)=> {
    if(!actors){
      return
    }
      let actors_str = "";
      if(actors != null){
        actors.forEach((item) => {
        actors_str += item.name + " "
      });
      }
      return actors_str;
    }
    export default parseActors