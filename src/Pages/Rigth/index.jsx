import { useSelector } from 'react-redux';
import '../Rigth/style.scss';

function Rigth(props){
    const left = useSelector((state) => state.changeReducer.left);
    const right = useSelector((state) => state.changeReducer.right);
    const range = useSelector((state) => state.changeReducer.range);
    const colortitleone = useSelector((state) => state.changeReducer.colorTitle);
    const colordiscreption = useSelector((state) => state.changeReducer.colorDescription);
    const backgroundcolor = useSelector((state) => state.changeReducer.background)

return(
    <section className='g-justify-align-centr rigth-blok'> 
        <div className=' blok-info'  style={{'borderRadius':`${range}%`,'backgroundColor':`${backgroundcolor}`}} >
   
            <p className='text-center blok-text'style={{'color':`${colortitleone}`}}>{right}</p>
            <p className='text-center blok-text'style={{'color':`${colordiscreption}`}}>{left}</p>
        </div>
    </section>
)

}

export default Rigth