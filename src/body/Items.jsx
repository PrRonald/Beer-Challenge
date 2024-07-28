export const Items = () => {

    const [data, setData] = useState([]);
    const dispatch = useDispatch()
    const datas = useSelector(state => state.player.data);
    const status = useSelector(state => state.player.status);

    useEffect(() => {
        dispatch(playerFetch());
      }, [dispatch]);

    useEffect(()=>{
        console.log(data)
        if(status === "succeeded"){
            setData(datas)
        }
    }, [status, data])
    
    if(status === 'loading'){
        return(
            <p>LOADING</p>
        )
    }

    return(
        <section>
            {data.map(data => (
            <p className="hola">{data.brand}</p>
        ))}
        </section>
        
    );
}