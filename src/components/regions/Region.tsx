import React from 'react'
import {IRegionList, IRegion} from '../../types/pokemon/interfaces';
import './output.scss';
import { useNavigate } from 'react-router-dom';


type RegionProps = { 
    region: IRegion;
  }
export const Region = ({region}:RegionProps) => {
    const { name } = region;
    const navigate =  useNavigate();
    const HandleClick = () => {
        navigate(`/region/${name}`);
      };
  return (
    <div className="regionCard">
        <a onClick={HandleClick}>
        <img src={'./img/regions/'+ name+'.webp'} alt={name} width="40%"/>
        <div className="cardName">
            <p>{name}</p>
        </div>
        </a>
    </div>
  )
}
export default Region