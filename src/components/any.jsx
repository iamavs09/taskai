const[scrolltop,setScrolltop] = useState(30);
  const onScroll = () =>{
    // const winScroll = document.documentElement.scrollTop;
    // const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    // const scrolled = (winScroll / height) * 100;
    // console.log(scrolled);

    // setScrolltop(scrolled)

    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  
    // Define the maximum and minimum heights
    const maxHeight = 120; // Set your desired maximum height
    const minHeight = 70; // Set your desired minimum height
  
    // Calculate the new height based on scroll position
    const newHeight = Math.max(minHeight, Math.min(maxHeight, (winScroll / height) * 100));
  
    console.log(newHeight);
  
    setScrolltop(newHeight);
  }

  useEffect(()=>{
    window.addEventListener("scroll",onScroll)
    
    return ()=>window.removeEventListener("scroll",onScroll)
  },[])