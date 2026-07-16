const save = (projects) => {

  localStorage.setItem("projects", JSON.stringify(projects));
};

const load = () => {
 
  const data = localStorage.getItem("projects");
  
  if (data === null) {
    return [];
  } 
  
  else {

    return JSON.parse(data);
  }
};

export { save, load };
