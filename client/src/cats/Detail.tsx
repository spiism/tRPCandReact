import './Detail.css';
import { trpc } from '../App';

function Detail(props: {
  id: number,
}) {
  // @ts-ignore
    const cat = trpc.useQuery(['get', props.id]);



    return (
    cat.data ?
      <div className="Detail">
        <h2>Detail</h2>
           {/*@ts-ignore*/}
        <div>{cat.data.id}</div>
           {/*@ts-ignore*/}
        <div>{cat.data.name}</div>
        {/*<div>{cat['data']}</div>*/}
      </div> : <div className="Detail"></div>
  );
}

export default Detail;
