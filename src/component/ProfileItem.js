import React, { useState, useEffect } from "react";
import './ProfileItem.css';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import HashLoader from "react-spinners/HashLoader";

export default function ProfileItem(props) {
    const [loading, setLoading] = useState(true);

    // Set loading state to false once data is available
    useEffect(() => {
        if (props.username) {
            setLoading(false);  // Simulate loading complete when data is passed down
        }
    }, [props.username]);

    return (
        <div className="profileItem">
            {loading ? <HashLoader size={150} color={"#0024FF"} /> : (
                <>
                    <img src={props.profileImage} alt={props.username} />
                    <p className="name">{props.username}</p>
                    <div className="info">
                        <div className="company">
                            <ApartmentIcon fontSize="small" style={{ marginRight: '8px' }} />
                            <p>{props.company}</p>
                        </div>
                        <div>
                            <LocationOnIcon fontSize="small" style={{ marginRight: '8px' }} />
                            <p>{props.location}</p>
                        </div>
                        <div>
                            <TwitterIcon fontSize="small" style={{ marginRight: '8px' }} />
                            <p>{`@${props.twitterUsername}`}</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
