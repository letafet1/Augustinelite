html{
    font-size: 62.5;
}

body{
    font-family: sans-serif;
    color: beige;
    background-color: black;
}
header{
    position: relative;
    height: 35vh;
    border-bottom: 7px solid seashell;
}

main{
    height: 65vh;
    color: beige;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.left{
    width: 52rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  

}


.right{
    width: 52rem;
    font-size: 2rem;
}
.between{
    font-size: 1.4rem;
    position: absolute;
    top: 2rem;
    right: 5rem;
}



h1{
    font-size: 3rem;
    text-align: center;
    position: absolute;
    width: 100%;
    top: 61%;
    left: 50%;
    transform: translate(-50%,-50%);
}

.number{
    background-color: beige;
    color: black;
    font-size: 3rem;
    width: 9rem;
    padding: 0rem 0rem;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);

}

.btn-again{
    position: absolute;
    top: 1rem;
    left: 2rem;
}
.btn-again:hover{
    background-color: blanchedalmond;
}

.guess{
    background: none;
    color: beige;
    border: 4px solid white;
    font-family: inherit;
    font-size: 5rem;
    padding: 1.5rem;
    width: 7rem;
    text-align: center;
    display: block;
    margin-bottom: 3rem;
    
}

.btn-check{
    border: none;
    background-color: beige;
    color: black;
    font-size: 2rem;
    padding: 1rem 2rem;
    cursor: pointer;
}
.btn-check:hover{
    background-color: blanchedalmond;
}

.message{
    margin-bottom: 5rem;
    height: 3rem;
}

.label-score{
    margin-bottom: 2rem;

}
