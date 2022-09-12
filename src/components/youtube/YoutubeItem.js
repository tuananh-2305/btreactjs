function YoutubeItem(props) {
    return ( 
        <div>
            <div>
                <img src={props.image} alt="" width={'42px'}/>
                <h4 className={props.className} >{props.tittle}</h4>
            </div>
        </div>
     );
}

export default YoutubeItem;