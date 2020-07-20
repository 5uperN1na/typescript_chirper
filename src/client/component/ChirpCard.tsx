import * as React from 'react';
import * as moment from 'moment';
import { Link } from 'react-router-dom';
import type { IChirp } from '../utils/interfaces';

const ChirpCard: React.FC<ChirpCardProps> = ({chirp}) => {
    return (
      
      <div className = "col-md-7">
          <div className = "card-header bg-info text-white my-2"> {chirp.name}</div>
          <div className="card-body bg-success">
              <h6 className = "card-title">{chirp.chirp}</h6>
          </div>
          <div className="card-footer bg-success d-flex justify-content-between align-items-center">
              <p><i>{moment(chirp.created_at).format("MMM Do YY")}</i></p>
              <Link to={`/details/${chirp.id}`} className="btn btn-danger btn-sm">Details</Link>
          </div>
      </div>
    );
}

interface ChirpCardProps {
    chirp: IChirp
}

export default ChirpCard;